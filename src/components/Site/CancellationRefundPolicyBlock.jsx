import React from "react";
import "./site-styles/policiesCommon.css";

const CancellationRefundPolicyBlock = () => {
  const SupportLink = <a href='mailto:support@ufo-weight.com'>support@ufo-weight.com</a>;
  const MailLink = <a href='mailto:info@ufo-weight.com'>info@ufo-weight.com</a>;
  const SiteLink = <a href='https://ufo-weight.com'>https://ufo-weight.com</a>;

  return (
    <div className='policy-container'>
      <h1>Refund & Cancellation Policy</h1>
      <p className='last-updated'>Effective Date: March , 2025</p>
      <p className='last-updated'> Last Updated: June, 2025</p>

      <section className='policy-section'>
        <p>
          This Refund and Cancellation Policy applies to purchases made for the UFO mobile application ("App"), operated
          by Appossum PSA ("we," "our," or "us"), via the Apple App Store or our Website using Stripe (including Apple
          Pay).
        </p>

        <p>By subscribing to or purchasing our services, you agree to the terms outlined below.</p>
      </section>

      <section className='policy-section'>
        <h2>I. SUBSCRIPTION TERMS</h2>

        <h3>1. Access & Plans</h3>
        <p>
          Access to premium features in UFO requires a paid subscription. Pricing and plan options are shown in the App
          and, where applicable, on our Website. Prices may vary by region and currency.
        </p>

        <h3>2. Payment Methods</h3>
        <p>We process payments via:</p>

        <ul>
          <li>
            <strong>Apple App Store</strong>, using your Apple ID;
          </li>
          <li>
            <strong>Stripe</strong>, including <strong>Apple Pay</strong>, for purchases made through the Website.
          </li>
        </ul>

        <p>
          By purchasing a subscription, you authorize the platform to charge your selected payment method on a recurring
          basis.
        </p>

        <h3>3. Auto-Renewal</h3>
        <p>
          All subscriptions automatically renew unless cancelled at least 24 hours before the current billing period
          ends. Renewal notifications and billing are managed by Apple or Stripe, depending on where you purchased.
        </p>

        <h3>4. Cancellation</h3>

        <p>You can cancel your subscription anytime:</p>

        <ul>
          <li>
            <strong>Apple App Store users:</strong> via your Apple ID account settings;
          </li>
          <li>
            <strong>Stripe users (Website):</strong> via the link provided in your confirmation email or by contacting
            our support.
          </li>
        </ul>

        <p>
          Cancellations apply to future billing cycles. You will retain access until the end of the current paid period.
          No partial refunds are issued for unused time.
        </p>
      </section>

      <section className='policy-section'>
        <h2>II. REFUND POLICY</h2>

        <h3>1. General Policy</h3>
        <p>
          All sales are final. Because UFO is a digital service with immediate access, we do not offer refunds except in
          specific, limited cases.
        </p>

        <h3>2. Eligible Refund Scenarios</h3>

        <p>We may grant a refund if:</p>
        <ul>
          <li>You were charged multiple times due to a technical error</li>
          <li>You were unable to access the App due to a verified issue on our end</li>
          <li>The charge was unauthorized and verifiably fraudulent</li>
        </ul>

        <p>
          Refunds are <strong>not issued</strong> for:
        </p>

        <ul>
          <li>Change of mind</li>
          <li>Accidental purchases</li>
          <li>General dissatisfaction not based on a service failure</li>
          <li>Forgetting to cancel before renewal</li>
          <li>Lack of usage</li>
        </ul>

        <h3>3. Refund Process</h3>

        <p> To request a refund (Stripe/Web purchases only), contact us at {MailLink} and provide:</p>

        <ul>
          <li>Your full name and email used for the purchase</li>
          <li>Transaction date and payment method</li>
          <li>Reason for the request</li>
          <li>Proof of payment (e.g., receipt or transaction ID)</li>
        </ul>

        <p>
          We aim to respond within 5 business days. Approved refunds are returned to the original payment method; bank
          processing times may vary.
        </p>

        <h3>4. Apple App Store Purchases</h3>

        <p>
          For purchases made via the App Store, we cannot issue refunds directly. Please request refunds from Apple via:
          <br />
          <a href='https://reportaproblem.apple.com'>https://reportaproblem.apple.com</a>
        </p>

        <h3>5. Disputes & Chargebacks</h3>

        <p>
          If you believe you were charged in error, please contact us first. Unjustified chargebacks may result in
          permanent account suspension.
        </p>
      </section>

      <section className='policy-section'>
        <h2>III. Policy Changes</h2>
        <p>
          We may update this policy at any time. Substantial changes will be communicated via the App, Website, or
          email. Continued use of our services implies acceptance of any revised terms.
        </p>
      </section>

      <section className='policy-section'>
        <h2>IV. CONTACT</h2>
        <p>If you have any questions regarding your purchase or this policy, please reach out to:</p>
        <p>
          <strong>Email: </strong> {MailLink}
          <br />
          <strong>Website: </strong> {SiteLink}
        </p>
      </section>

      <div className='back-to-top'>
        <a href='#'>Back to Top ↑</a>
      </div>
    </div>
  );
};

export default CancellationRefundPolicyBlock;
