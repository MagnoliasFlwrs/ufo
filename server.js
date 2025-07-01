const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:5173";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price: "price_1RZxNRP7v3zBLEUjKvSNH67Y", // убедись, что этот ID корректный
        quantity: 1,
      },
    ],
    mode: "subscription",
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    automatic_tax: { enabled: true },
  });

  res.send({ clientSecret: session.client_secret });
});

app.get("/session-status", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
  });
});

app.listen(4242, () => console.log("Running on port 4242"));
