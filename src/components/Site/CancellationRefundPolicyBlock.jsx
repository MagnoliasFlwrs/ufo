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
      <p className='last-updated'> Last Updated: May, 2025</p>

      <section className='policy-section'>
        <p>
          This Refund and Cancellation Policy applies to purchases made for the UFO mobile application ("App"), operated
          by Appossum PSA ("we," "our," or "us"), via the Apple App Store or Paddle.com.
        </p>

        <p>By subscribing to or purchasing our services, you agree to the terms outlined below.</p>
      </section>

      <section className='policy-section'>
        <h2>I. SUBSCRIPTION TERMS</h2>

        <h3>1. Access & Plans</h3>
        <p>
          The UFO app requires a paid subscription to access its full features. Subscription plans and pricing are
          displayed within the app and, where applicable, on our website. Pricing may vary by region.
        </p>

        <h3>2. Payment Methods</h3>
        <p>Payments are processed either through:</p>

        <ul>
          <li>
            <strong>Apple App Store</strong>, using your Apple ID, or
          </li>
          <li>
            <strong>Paddle.com</strong>, our Merchant of Record for web purchases.
          </li>
        </ul>

        <p>
          You authorize the relevant platform to charge your selected payment method for recurring subscription
          payments.
        </p>

        <h3>3. Auto-Renewal</h3>
        <p>
          All subscriptions automatically renew 24 hours before the end of the current billing cycle unless cancelled
          beforehand. Notification of renewal charges is managed by the respective platform (Apple or Paddle).
        </p>

        <h3>4. Cancellation</h3>

        <ul>
          <li>
            If you purchased via the <strong>App Store</strong>, manage your subscription via your Apple ID account
            settings.
          </li>
          <li>
            If you purchased via <strong>Paddle</strong>, follow the instructions in your confirmation email or visit
            your Paddle Customer Portal to manage your subscription.
          </li>
        </ul>

        <p>
          Cancellations apply only to future billing cycles. You will retain access to premium features for the
          remainder of the current period. No partial refunds are issued for unused time.
        </p>
      </section>

      <section className='policy-section'>
        <h2>II. REFUND POLICY</h2>

        <h3>1. General Policy</h3>
        <p>
          All sales are considered final. UFO is a digital product with immediate access upon payment, and refunds are
          only granted in specific cases.
        </p>

        <h3>2. Eligible Refund Cases</h3>

        <p> We may grant a refund in the following situations:</p>
        <ul>
          <li>Duplicate charges due to technical error</li>
          <li>Inability to access the service due to a verified technical issue on our side</li>
          <li>Unauthorized charge (subject to verification)</li>
        </ul>

        <p>
          Refunds <strong>will not</strong> be granted for:
        </p>

        <ul>
          <li>Change of mind</li>
          <li>Failure to cancel in time</li>
          <li>General dissatisfaction not tied to service failure</li>
          <li>Lack of usage</li>
        </ul>

        <h3>3. Refund Process</h3>

        <p> To request a refund, contact us at {MailLink} with:</p>

        <ul>
          <li>Your full name and email used for purchase</li>
          <li>Date of transaction</li>
          <li>Reason for refund</li>
          <li>Proof of payment or transaction ID</li>
        </ul>

        <p>
          We aim to respond within 5 business days. If approved, refunds are issued to the original payment method.
          Processing time may vary.
        </p>

        <h3>4. App Store Purchases</h3>

        <p>
          For purchases made via the Apple App Store, refunds must be requested directly from Apple at{" "}
          <a href='https://reportaproblem.apple.com'>https://reportaproblem.apple.com</a>. We cannot issue or influence
          App Store refunds.
        </p>

        <h3>5. Disputes & Chargebacks</h3>

        <p>
          We encourage you to contact us before disputing a charge. Fraudulent chargebacks may result in account
          suspension or termination.
        </p>
      </section>

      <section className='policy-section'>
        <h2>III. Policy Changes</h2>
        <p>
          We may update this Refund Policy at any time. Substantial changes will be communicated via the App, Website,
          or email. Continued use of the service implies acceptance of the updated policy.
        </p>
      </section>

      <section className='policy-section'>
        <h2>IV. CONTACT</h2>
        <p>If you have any questions regarding this policy or your transactions, please contact us:</p>
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
