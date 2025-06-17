import React from "react";
import "./site-styles/policiesCommon.css";

const PrivacyPolicyBlock = () => {
  const MailLink = <a href='mailto:info@ufo-weight.com'>info@ufo-weight.com</a>;
  const SiteLink = <a href='https://ufo-weight.com'>https://ufo-weight.com</a>;

  return (
    <div className='policy-container'>
      <h1>Privacy Policy</h1>
      <p className='last-updated'>Effective Date: February 1, 2025</p>
      <p className='last-updated'> Last Updated: June 15, 2025</p>

      <section className='policy-section'>
        <p>
          This Privacy Policy describes how Appossum PSA ("we," "our," or "us") collects, uses, and shares personal
          information through the UFO mobile application (the “App”) and our website at {SiteLink} (the “Website”).
        </p>

        <p>We are committed to protecting your privacy and complying with all applicable data protection laws.</p>
      </section>

      <section className='policy-section'>
        <h2>1. Who We Are</h2>
        <p>Appossum PSA is the developer and data controller for the UFO App.</p>
        <p>
          <strong>Email: </strong> {MailLink}
          <br />
          <strong>Website: </strong> {SiteLink}
        </p>
      </section>

      <section className='policy-section'>
        <h2>2. What the UFO App Does</h2>
        <p>
          UFO is a general wellness and lifestyle tracking tool that helps users build healthier routines by logging
          meals, water intake, physical activity, and other habits.
        </p>

        <p>
          <strong>Important</strong>: UFO does not provide medical, diagnostic, nutritional, or therapeutic advice. It
          is not a medical device and should not be used as a substitute for professional healthcare.
        </p>
      </section>

      <section className='policy-section'>
        <h2>3. What Information We Collect</h2>

        <p>
          <strong>a. Information You Provide</strong>
          <ul>
            <li>Email address, name, optional profile data</li>
            <li>Logged content (e.g., meals, activity)</li>
          </ul>
        </p>

        <p>
          <strong>b. Automatically Collected Data</strong>
          <ul>
            <li>Device type, operating system, app version</li>
            <li>Usage statistics and interaction data</li>
          </ul>
        </p>

        <p>
          <strong>c. Data from Third-Party Services</strong>
          <ul>
            <li>Data from integrated services (e.g., Apple Health — future integration)</li>
            <li>Data from payment processors (Apple, Stripe)</li>
          </ul>
        </p>
      </section>

      <section className='policy-section'>
        <h2>4. Use of Information</h2>
        <p>
          We use your data to:
          <ul>
            <li>Operate and improve the App</li>
            <li>Enhance the user experience</li>
            <li>Communicate service-related updates</li>
            <li>Ensure technical and legal compliance</li>
          </ul>
        </p>

        <p>We do not use your data for health profiling or decision-making.</p>
      </section>

      <section className='policy-section'>
        <h2>5. Payments and Processors</h2>
        <p>Payments for subscriptions can be made through:</p>

        <ul>
          <li>
            <strong>Apple</strong> for in-app purchases
          </li>
          <li>
            <strong>Stripe</strong> for purchases via our website (including Apple Pay where available)
          </li>
        </ul>

        <p>
          Stripe may collect and process your payment details (e.g., name, billing info) in accordance with its{" "}
          <a href='https://stripe.com/us/privacy'>Privacy Policy</a>. We do not store full payment details ourselves.
        </p>
      </section>

      <section className='policy-section'>
        <h2>6. Sharing Your Information</h2>
        <p>We share encrypted or anonymized data with trusted partners, including:</p>

        <ul>
          <li>
            <strong>Firebase</strong> – analytics, crash reporting
          </li>
          <li>
            <strong>Adjust </strong> – attribution and marketing analysis
          </li>
          <li>
            <strong>OpenAI </strong> – chatbot functionality
          </li>
        </ul>

        <p>We never sell your personal data.</p>
      </section>

      <section className='policy-section'>
        <h2>7. Data Retention</h2>
        <p>
          We retain your data while your account is active or as needed to provide services. You may request account and
          data deletion at any time.
        </p>
      </section>

      <section className='policy-section'>
        <h2>8. Your Rights</h2>

        <p>
          Depending on your jurisdiction, you may have the right to:
          <ul>
            <li>Access, correct, or delete your personal data</li>
            <li>Object to or restrict processing</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </p>

        <p>Contact: {MailLink}.</p>
      </section>

      <section className='policy-section'>
        <h2>9. Children’s Privacy</h2>
        <p>
          The App is not intended for users under 18. We do not knowingly collect information from minors. If
          discovered, such data will be promptly deleted
        </p>
      </section>

      <section className='policy-section'>
        <h2>10. Data Security</h2>

        <p>
          We apply strict technical and organizational measures to protect your data. However, no digital system is
          fully secure. We recommend strong passwords and responsible account use.
        </p>
      </section>

      <section className='policy-section'>
        <h2>11. International Transfers</h2>
        <p>
          Your data may be processed on servers located outside your country, including the EU and other regions with
          adequate data protection laws.
        </p>
      </section>

      <section className='policy-section'>
        <h2>12. Changes to This Policy</h2>
        <p>
          We may revise this Privacy Policy. When we do, we’ll update the “Last Updated” date and notify you if legally
          required.
        </p>
      </section>

      <section className='policy-section'>
        <h2>13. Contact Us</h2>

        <p>
          <strong>Email: </strong> {MailLink}
          <br />
          <strong>Mailing address: </strong> available upon request
        </p>
      </section>

      <section className='policy-section'>
        <h2></h2>

        <p>
          <strong>
            This Privacy Policy is part of our Terms and Conditions. By using the App or Website, you agree to the
            practices described herein.
          </strong>
        </p>
      </section>

      <div className='back-to-top'>
        <a href='#'>Back to Top ↑</a>
      </div>
    </div>
  );
};

export default PrivacyPolicyBlock;
