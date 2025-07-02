const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51RZwwMP7v3zBLEUjlYvOGr7ukPauqFzGNlAH9usyBjJutKJU29osb4PsvtkcJTU0RzdeMzVX3CJmDzbScIFuYtZe00IVWjX9qG",
);

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:5173";

// 🔹 Создание Checkout-сессии
app.post("/create-checkout-session", async (req, res) => {
  const { priceId, mode = "subscription", email } = req.body;

  if (!priceId || !mode) {
    return res.status(400).send({ error: "Missing priceId or mode" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [{ price: priceId, quantity: 1 }],
      mode,
      redirect_on_completion: "never",
      customer_email: email || undefined,
      automatic_tax: { enabled: true },
    });

    res.send({
      clientSecret: session.client_secret,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("❌ Stripe session creation error:", error);
    res.status(500).send({ error: error.message });
  }
});

// 🔹 Получение статуса сессии
app.get("/session-status", async (req, res) => {
  const sessionId = req.query.session_id;

  if (!sessionId) {
    return res.status(400).send({ error: "Missing session_id" });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent", "customer"],
    });

    const intent = session.payment_intent;
    const customer = session.customer;

    res.json({
      status: session.status,
      customer_email: session.customer_details?.email,
      amount: intent?.amount,
      currency: intent?.currency,
      payment_intent: intent?.id,
      customer_id: customer?.id,
    });
  } catch (err) {
    console.error("Error retrieving session:", err);
    res.status(500).send({ error: err.message });
  }
});

// 🔹 Получение информации после успешной оплаты
app.post("/payment-success", async (req, res) => {
  const { clientSecret } = req.body;

  if (!clientSecret) {
    return res.status(400).json({ error: "Missing clientSecret" });
  }

  try {
    const sessionId = await getSessionIdFromClientSecret(clientSecret);

    if (!sessionId) {
      return res.status(400).json({ error: "Session not found for this clientSecret" });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent", "customer"],
    });

    const intent = session.payment_intent;
    const customer = session.customer;

    res.json({
      sessionId: session.id,
      paymentIntentId: intent?.id,
      amount: intent?.amount,
      currency: intent?.currency,
      status: intent?.status,
      customerEmail: session.customer_details?.email,
      customerId: customer?.id,
      created: intent?.created,
    });
  } catch (error) {
    console.error("❌ Error in /payment-success:", error);
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Получить session_id по client_secret
const getSessionIdFromClientSecret = async (clientSecret) => {
  try {
    const sessions = await stripe.checkout.sessions.list({ limit: 100 });

    const session = sessions.data.find((s) => s.client_secret === clientSecret);

    return session?.id || null;
  } catch (error) {
    console.error("❌ Error finding session by client_secret:", error);
    return null;
  }
};

app.listen(4242, () => console.log("✅ Server running on port 4242"));
