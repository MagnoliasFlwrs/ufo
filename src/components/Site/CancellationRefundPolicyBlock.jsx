import React from "react";
import "./site-styles/policiesCommon.css";

const CancellationRefundPolicyBlock = () => {
  return (
    <div className='policy-container'>
      <h1>Cancellation & Refund Policy</h1>
      <p className='last-updated'>Last Updated: {new Date().toLocaleDateString()}</p>

      <section className='policy-section'>
        <h2>Cancellation Policy</h2>
        <p>
          You may cancel your subscription or service at any time before the renewal date. Cancellations must be made at
          least 48 hours before the next billing cycle to avoid being charged for the following period.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Refund Eligibility</h2>
        <ul>
          <li>Full refunds are available within 14 days of purchase for unused services</li>
          <li>Partial refunds may be issued for unused portions of monthly subscriptions</li>
          <li>No refunds for services already rendered or personalized plans</li>
        </ul>
      </section>

      <section className='policy-section'>
        <h2>How to Request a Refund</h2>
        <p>
          To request a refund, please contact our support team at <strong>support@yourfitguide.com</strong>
          with your order details. Refund requests are typically processed within 5-7 business days.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Digital Products</h2>
        <p>
          Due to the nature of digital products (e-books, meal plans, etc.), refunds are only available if the product
          is defective or not as described.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Membership Cancellation</h2>
        <p>
          When cancelling a membership, you will continue to have access until the end of your current billing period.
          No prorated refunds will be issued for early cancellation.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Exceptions</h2>
        <p>
          We may make exceptions to this policy at our discretion for special circumstances. Please contact us to
          discuss your specific situation.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Changes to This Policy</h2>
        <p>
          We reserve the right to modify this cancellation and refund policy at any time. Changes will be effective
          immediately upon posting to our website.
        </p>
      </section>
    </div>
  );
};

export default CancellationRefundPolicyBlock;
