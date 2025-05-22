import React from "react";
import "./site-styles/policiesCommon.css";

const CancellationRefundPolicyBlock = () => {
  const SupportLink = <a href='mailto:support@ufo-weight.com'>support@ufo-weight.com</a>;
  const MailLink = <a href='mailto:info@ufo-weight.com'>info@ufo-weight.com</a>;
  const SiteLink = <a href='https://ufo-weight.com'>https://ufo-weight.com</a>;

  return (
    <div className='policy-container'>
      <h1>UFO Cancelartion & Refund Policy</h1>
      <p className='last-updated'> Last Updated: March , 2025</p>

      <section className='policy-section'>
        <p>
          <strong> Appossum PSA (“UFO”, “we” or “us”) operates the “UFO” mobile application, the websites</strong>{" "}
          {SiteLink}
          <strong>and all related services, features and content offered by UFO (collectively the “App”).</strong> By
          purchasing or using any of our services, you agree to the following:
        </p>
      </section>

      <section className='policy-section'>
        <h2>I. SUBSCRIPTION TERMS</h2>

        <h3>1. Access & Plans</h3>
        <p>
          {" "}
          The Website provides general information about UFO, a weight loss program available through our iOS mobile
          application. To use the app and access its features, a paid subscription is required. Pricing and available
          plans are presented within the app and on the Website. Prices are listed in U.S. dollars and may vary by
          country.
        </p>

        <h3>2. Payment</h3>
        <p>
          {" "}
          Payments are securely processed through the Paddle system or the Apple App Store, depending on the purchase
          method. You authorize us (or the applicable platform) to charge your selected payment method for recurring
          subscription payments.
        </p>

        <h3>3. Auto-Renewal</h3>
        <p>
          {" "}
          Subscriptions automatically renew 24 hours before the end of the current billing cycle, unless canceled in
          advance. You will be notified of upcoming charges according to the policies of the platform used to make the
          purchase.
        </p>

        <h3>4. Cancellation</h3>
        <p>
          {" "}
          Subscriptions are managed by you. Please access your personal account on Paddle Customer Portal to see your
          subscription purchases and manage your subscription - the link will be shared with you in our email when your
          subscription is activated.
        </p>
        <p>
          {" "}
          Subscriptions can be canceled at any time through your account settings{" "}
          <strong>within the UFO mobile app.</strong>
        </p>
        <p>Alternatively:</p>
        <ul>
          <li>
            <strong>If purchased via the App Store:</strong> You may cancel by disabling auto-renewal in your Apple ID
            settings at least 24 hours before the end of the billing cycle.
          </li>
          <li>
            You may cancel your subscription purchased on our Website by contacting us via email: {SiteLink}, or by
            clicking the cancellation link in the confirmation email you received after completing the payment process.
            To avoid being charged, cancel your subscription before the end of the current subscription period
          </li>
        </ul>

        <p>
          No cancellations are applied retroactively. You will retain access for the remainder of the paid subscription
          period, and no partial refunds will be issued unless otherwise specified in Section II.
        </p>
      </section>

      <section className='policy-section'>
        <h2>II. REFUND POLICY</h2>

        <h3>1. General Terms</h3>
        <p>
          {" "}
          All purchases are considered final. UFO is a digital service delivered immediately upon purchase, and as such,
          refunds are only granted in specific and limited cases.
        </p>

        <h3>2. Eligible Refund Cases</h3>

        <p> We may issue a refund if:</p>
        <ul>
          <li>You were charged multiple times due to a technical error.</li>
          <li>You were unable to access the service due to a verified technical failure on our end.</li>

          <li>You were charged without authorization (requires verification).</li>
        </ul>

        <p>
          Refunds will <strong>not</strong> be issued for:
        </p>

        <ul>
          <li>Change of mind</li>
          <li>Lack of use</li>
          <li>Forgetting to cancel before renewal</li>
          <li>General dissatisfaction unrelated to service accessibility or performance</li>
        </ul>

        <h3>3. How to Request a Refund</h3>

        <p> Please contact {MailLink} or use the “Contact Us” form on the Website with the following information:</p>

        <ul>
          <li>Your name and email used for the subscription</li>
          <li>Date of purchase</li>
          <li>Reason for the refund</li>
          <li>Payment confirmation or transaction ID</li>
        </ul>

        <p>
          We aim to respond within <strong>5 business days</strong>. If a refund is approved, it will be issued to your
          original payment method. Processing times may vary by provider.
        </p>

        <h3>4. App Store Purchases</h3>

        <p>
          If your subscription was purchased through the Apple App Store, refunds must be requested directly from Apple
          at <a href='https://reportaproblem.apple.com'>https://reportaproblem.apple.com</a>. We do not control Apple’s
          billing system and cannot issue refunds on their behalf.
        </p>

        <h3>5. Disputes & Chargebacks</h3>

        <p>
          {" "}
          If you believe a charge was made in error, please contact us before initiating a chargeback. We are happy to
          assist. Fraudulent chargebacks may result in suspension or termination of your account.
        </p>
      </section>

      <section className='policy-section'>
        <h2>III. CHANGES</h2>
        <p>
          We reserve the right to change our subscription terms and refund policy at any time. We will notify you of
          significant updates via the Website, mobile app, or email. Continued use of the service after changes are
          published will constitute your acceptance of the updated terms.
        </p>
      </section>
      <section className='policy-section'>
        <h2>IV. CONTACT</h2>
        <p>For any questions regarding subscriptions or refunds, contact us at:</p>
        <p>
          {MailLink}
          <br />
          {SiteLink}
        </p>
      </section>

      <div className='back-to-top'>
        <a href='#'>Back to Top ↑</a>
      </div>
    </div>
  );
};

export default CancellationRefundPolicyBlock;
