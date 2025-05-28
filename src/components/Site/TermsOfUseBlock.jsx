import React from "react";
import "./site-styles/policiesCommon.css";

const TermsOfUseBlock = () => {
  const SupportLink = <a href='mailto:support@ufo-weight.com'>support@ufo-weight.com</a>;
  const SiteLink = <a href='https://ufo-weight.com'>https://ufo-weight.com</a>;

  return (
    <div className='policy-container'>
      <h1>Terms and Conditions</h1>
      <p className='last-updated'>Effective Date: May, 2025</p>
      <p className='last-updated'> Last Updated: May, 2025</p>

      <section className='policy-section'>
        <p>
          Welcome to UFO, a mobile application created by Appossum PSA to support individuals in building healthier
          habits through lifestyle tracking. By using our mobile application (“App”) or visiting our website at{" "}
          {SiteLink}
          (“Website”), you agree to be bound by these Terms and Conditions (“Terms”).
        </p>

        <p>If you do not agree to these Terms, you must not use our services.</p>
      </section>

      <section className='policy-section'>
        <h2>1. Overview of the Service</h2>
        <p>
          UFO is an iOS mobile application developed by Appossum PSA that helps users log and track eating, hydration,
          and lifestyle habits. The app does not provide any personalized advice or medical recommendations. All
          features are accessible exclusively through the UFO app. Our website is provided for marketing and
          informational purposes only.
        </p>
      </section>

      <section className='policy-section'>
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use the App. By accessing the Service, you represent and warrant that you
          meet this requirement.
        </p>
      </section>

      <section className='policy-section'>
        <h2>3. No Medical Advice</h2>
        <p>
          UFO is not a healthcare, diagnostic, or therapeutic service. The app does not offer medical, nutritional, or
          fitness advice. It is strictly a lifestyle tool intended for general wellness tracking.
        </p>

        <p>
          Any content in the App, including text or chatbot interactions, is for informational purposes only and is not
          a substitute for professional medical or mental health advice, diagnosis, or treatment. Always consult your
          physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>
      </section>

      <section className='policy-section'>
        <h2>4. Subscriptions and Payment</h2>
        <h3>4.1 Subscription Plans</h3>
        <p>
          Access to the full functionality of UFO requires a paid subscription. Subscription options and pricing are
          available within the App.
        </p>

        <h3>4.2 Payment Methods</h3>
        <p>
          Payments are processed either through Apple’s in-app purchase system or via Paddle.com, our Merchant of
          Record. Paddle handles customer service inquiries and manages returns for purchases made on our website.
        </p>
      </section>

      <section className='policy-section'>
        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>

        <ul>
          <li>Use the App for illegal or unauthorized purposes;</li>
          <li>Violate any applicable laws or regulations;</li>
          <li>Share, rent, or resell your account;</li>
          <li>Use the App for any medical, diagnostic, or therapeutic use cases;</li>
          <li>Interfere with or disrupt the operation of the App.</li>
        </ul>

        <p>We reserve the right to suspend or terminate your access if you violate these Terms.</p>
      </section>

      <section className='policy-section'>
        <h2>6. Intellectual Property</h2>
        <p>
          All content and features within the App and Website, including but not limited to software, graphics, design,
          and text, are owned or licensed by Appossum PSA. You may not reproduce, modify, or distribute any part of the
          App without our express permission.
        </p>
      </section>

      <section className='policy-section'>
        <h2>7. Third-Party Services and SDKs</h2>
        <p>UFO integrates with third-party technologies, including:</p>
        <ul>
          <li>
            <strong>Firebase</strong>
          </li>
          <li>
            <strong>OpenAI</strong>
          </li>
          <li>
            <strong>Adjust</strong>
          </li>
        </ul>

        <p>
          These services may process anonymized or encrypted data to support analytics, personalization, and
          functionality. See our Privacy Policy for details.
        </p>
      </section>

      <section className='policy-section'>
        <h2>8. Platform Availability and Limitations</h2>
        <ul>
          <li>
            <strong>Platform:</strong> UFO is currently available on <strong>IOS</strong> only.
          </li>
          <li>
            <strong>Offline Access:</strong> The App requires an active internet connection.
          </li>
          <li>
            <strong>Future Support:</strong> We may add support for other platforms in the future.
          </li>
        </ul>
      </section>

      <section className='policy-section'>
        <h2>9. Legal Compliance</h2>
        <p>
          UFO is intended for use globally. You are solely responsible for ensuring compliance with local laws in your
          region, especially related to data protection and digital services.
        </p>
      </section>

      <section className='policy-section'>
        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Appossum PSA shall not be liable for any indirect,
          incidental, or consequential damages arising from the use or inability to use the App.
        </p>

        <p>In no event shall our liability exceed the amount you paid to us in the past 12 months.</p>
      </section>

      <section className='policy-section'>
        <h2>11. Modifications</h2>
        <p>
          We may modify these Terms at any time. Updated Terms will be posted within the App or Website. Continued use
          of the App constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section className='policy-section'>
        <h2>12. Termination</h2>
        <p>
          We may suspend or terminate your account and access to the Service at our discretion, especially in the case
          of Terms violations.
        </p>
      </section>

      <section className='policy-section'>
        <h2>13. Contact</h2>
        <p>For any questions, support requests, or legal notices, please contact us at:</p>
        <p>
          <strong>Email: </strong> {SupportLink}
          <br />
          <strong>Website: </strong> {SiteLink}
        </p>
      </section>

      <section className='policy-section'>
        <h2>14. Entire Agreement</h2>
        <p>
          These Terms, along with our Privacy Policy and Refund Policy, constitute the entire agreement between you and
          Appossum PSA regarding the use of the UFO app and associated services.
        </p>
      </section>

      <div className='back-to-top'>
        <a href='#'>Back to Top ↑</a>
      </div>
    </div>
  );
};

export default TermsOfUseBlock;
