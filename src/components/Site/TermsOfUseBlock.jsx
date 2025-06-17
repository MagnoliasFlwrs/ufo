import React from "react";
import "./site-styles/policiesCommon.css";

const TermsOfUseBlock = () => {
  const SupportLink = <a href='mailto:support@ufo-weight.com'>support@ufo-weight.com</a>;
  const SiteLink = <a href='https://ufo-weight.com'>https://ufo-weight.com</a>;

  return (
    <div className='policy-container'>
      <h1>Terms and Conditions</h1>
      <p className='last-updated'>Effective Date: May, 2025</p>
      <p className='last-updated'> Last Updated: June, 2025</p>

      <section className='policy-section'>
        <p>
          Welcome to UFO, a mobile application created by Appossum PSA to support individuals in building healthier
          habits through lifestyle tracking. By using our mobile application ("App") or visiting our website at{" "}
          {SiteLink} ("Website"), you agree to be bound by these Terms and Conditions ("Terms").
        </p>

        <p>If you do not agree to these Terms, you must not use our services.</p>
      </section>

      <section className='policy-section'>
        <h2>1. Overview of the Service</h2>
        <p>
          UFO is an iOS mobile application developed by Appossum PSA that helps users log and track eating, hydration,
          and lifestyle habits. The app does not provide personalized or medical advice. All features and content are
          available <strong>exclusively within the mobile app</strong>. The website is for marketing and informational
          purposes only.
        </p>
      </section>

      <section className='policy-section'>
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use the App. By using our services, you confirm that you meet this
          requirement.
        </p>
      </section>

      <section className='policy-section'>
        <h2>3. No Medical Advice</h2>
        <p>
          UFO is not a healthcare, diagnostic, or therapeutic service. It does not provide medical, nutritional, or
          fitness advice. All content, including chatbot interactions, is for general informational purposes only and is
          not a substitute for professional medical consultation. Always consult a qualified healthcare provider before
          making health-related decisions.
        </p>
      </section>

      <section className='policy-section'>
        <h2>4. Subscriptions and Payment</h2>
        <h3>4.1 Subscription Plans</h3>
        <p>
          Access to premium features in the UFO app requires a paid subscription. Subscription options and pricing are
          displayed within the app interface.
        </p>

        <h3>4.2 Payment Methods</h3>
        <p>Payments are processed via:</p>

        <ul>
          <li>
            <strong>Apple’s in-app purchase system</strong> for subscriptions purchased within the iOS app;
          </li>
          <li>
            <strong>Stripe</strong>, including <strong>Apple Pay</strong>, for purchases made via our Website.
          </li>
        </ul>

        <p>
          Stripe securely manages web-based transactions. We do not store full payment information. For refunds, see our
          separate Refund Policy.
        </p>
      </section>

      <section className='policy-section'>
        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>

        <ul>
          <li>Use the App for illegal or unauthorized purposes;</li>
          <li>Violate any laws or regulations;</li>
          <li>Share, transfer, rent, or resell your account;</li>
          <li>Use the App in a medical, diagnostic, or therapeutic context;</li>
          <li>Disrupt or interfere with the operation or security of the App.</li>
        </ul>

        <p>Violation may result in account suspension or termination.</p>
      </section>

      <section className='policy-section'>
        <h2>6. Intellectual Property</h2>
        <p>
          All content, trademarks, and technologies within the App and Website are owned or licensed by Appossum PSA.
          Unauthorized reproduction or distribution is strictly prohibited.
        </p>
      </section>

      <section className='policy-section'>
        <h2>7. Third-Party Services and SDKs</h2>
        <p>UFO integrates with third-party services such as:</p>
        <ul>
          <li>
            <strong>Firebase</strong> (Google) – analytics and crash reporting
          </li>
          <li>
            <strong>OpenAI</strong> – chatbot features
          </li>
          <li>
            <strong>Adjust</strong> – attribution tracking
          </li>
        </ul>

        <p>
          These providers may receive anonymized or encrypted data to support app performance and analytics. Details are
          available in our Privacy Policy.
        </p>
      </section>

      <section className='policy-section'>
        <h2>8. Platform Availability and Limitations</h2>
        <ul>
          <li>
            <strong>Platform:</strong> Currently available only on iOS
          </li>
          <li>
            <strong>Internet Access:</strong> Required to use the App
          </li>
          <li>
            <strong>Offline Access:</strong> Not supported
          </li>
          <li>
            <strong>Future Platforms:</strong> Web and Android versions may be developed later
          </li>
        </ul>
      </section>

      <section className='policy-section'>
        <h2>9. Legal Compliance</h2>
        <p>
          You are responsible for ensuring the use of the App complies with your local laws and regulations, especially
          concerning data protection and consumer rights.
        </p>
      </section>

      <section className='policy-section'>
        <h2>10. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Appossum PSA is not liable for indirect or consequential damages
          arising from your use of the App.
        </p>

        <p>
          In any event, our total liability is limited to the amount you paid for the Service in the last 12 months.
        </p>
      </section>

      <section className='policy-section'>
        <h2>11. Modifications</h2>
        <p>
          We may update these Terms at any time. The latest version will be published in the App and on the Website.
          Continued use of the Service constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className='policy-section'>
        <h2>12. Termination</h2>
        <p>We may suspend or terminate your access if you violate these Terms or engage in unauthorized behavior.</p>
      </section>

      <section className='policy-section'>
        <h2>13. Contact</h2>
        <p>For questions or support, please contact us at:</p>
        <p>
          <strong>Email: </strong> {SupportLink}
          <br />
          <strong>Website: </strong> {SiteLink}
        </p>
      </section>

      <section className='policy-section'>
        <h2>14. Entire Agreement</h2>
        <p>
          These Terms, together with our <strong>Privacy Policy</strong> and <strong>Refund Policy</strong>, form the
          complete agreement between you and Appossum PSA regarding the use of the UFO app and related services.
        </p>
      </section>

      <div className='back-to-top'>
        <a href='#'>Back to Top ↑</a>
      </div>
    </div>
  );
};

export default TermsOfUseBlock;
