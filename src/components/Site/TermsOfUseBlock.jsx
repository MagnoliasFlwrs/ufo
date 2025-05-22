import React from "react";
import "./site-styles/policiesCommon.css";

const TermsOfUseBlock = () => {
  const SupportLink = <a href='mailto:support@ufo-weight.com'>support@ufo-weight.com</a>;
  const SiteLink = <a href='https://ufo-weight.com'>https://ufo-weight.com</a>;

  return (
    <div className='policy-container'>
      <h1>Terms and Conditions</h1>
      <p className='last-updated'>Effective Date: March, 2025</p>
      <p className='last-updated'> Last Updated: May, 2025</p>

      <section className='policy-section'>
        <p>
          Welcome to UFO, a mobile application created by Appossum PSA to support individuals in their weight loss
          journey. By using our mobile application (“App”) or visiting our website at {SiteLink}
          (“Website”), you agree to be bound by these Terms and Conditions (“Terms”).
        </p>

        <p>If you do not agree to these Terms, you must not use our services.</p>
      </section>

      <section className='policy-section'>
        <h2>1. Overview of the Service</h2>
        <p>
          <strong>
            UFO is a mobile application developed by Appossum PSA to support individuals in their weight loss journey.
            All content and features are exclusively accessible through the UFO iOS mobile app. Our website at{" "}
            {SiteLink} is provided for marketing and informational purposes only.
          </strong>
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
          UFO does <strong>not provide medical advice, diagnosis, or treatment</strong>. The App and its content are for
          informational purposes only and should not be considered a substitute for professional medical advice. You
          assume full responsibility for your use of the App. We are not liable for any health issues that may result
          from using the Service.
        </p>
      </section>

      <section className='policy-section'>
        <h2>4. Subscriptions and Payment</h2>
        <h3>4.1 Subscription Plans</h3>
        <p>
          Access to the full functionality of UFO requires a paid subscription. Subscription options and pricing are
          available within the App. We may, from time to time, offer special promotions, discounts, or limited-time
          plans. Details of any such offers will be presented clearly at the time of the offer.
        </p>

        <h3>4.2 Payment Methods</h3>
        <p>
          Payments are processed through Apple’s in-app purchase system or via <strong>Paddle</strong>. Payment will be
          charged to your selected payment method at confirmation of purchase.
        </p>
      </section>

      <section className='policy-section'>
        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>

        <ul>
          <li>Use the App for illegal or unauthorized purposes;</li>
          <li>Violate any laws in your jurisdiction;</li>
          <li>Share or transfer your account access to others;</li>
          <li>Use the App for any medical, diagnostic, or treatment purposes;</li>
          <li>Upload or transmit any harmful code or attempt to interfere with the operation of the App.</li>
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
        <p>UFO integrates with third-party technologies including but not limited to:</p>
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
          These services may process encrypted or anonymized user data to support analytics, functionality, or
          personalization. For full information on our use of third-party services, please review our Privacy Policy.
        </p>

        <p>
          We do not control or assume responsibility for content, privacy practices, or operations of any third-party
          service.
        </p>
      </section>

      <section className='policy-section'>
        <h2>8. Platform Availability and Limitations</h2>
        <ul>
          <li>
            <strong>Platform:</strong> UFO is currently available exclusively on <strong>IOS</strong>.
          </li>
          <li>
            <strong>Offline Access:</strong> The App requires an active internet connection; offline use is not
            supported.
          </li>
          <li>
            <strong>Web/Android Versions:</strong> Future support for Android and Web access is possible but not
            guaranteed.
          </li>
        </ul>
      </section>

      <section className='policy-section'>
        <h2>9. Global Use and Local Compliance</h2>
        <p>
          UFO is designed for global use. You are solely responsible for ensuring that your use of the App complies with
          all applicable laws in your region, especially regarding data protection, health information, and digital
          commerce.
        </p>
      </section>

      <section className='policy-section'>
        <h2>10. Disclaimer of Warranties</h2>
        <p>
          The Service is provided “<strong>as is</strong>” and “<strong>as available</strong>,” without any warranties
          of any kind, either express or implied. We do not guarantee that the App will be error-free, uninterrupted, or
          secure.
        </p>
      </section>

      <section className='policy-section'>
        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Appossum PSA shall not be liable for any indirect, incidental, or
          consequential damages, including loss of data, revenue, or reputation, arising from your use of or inability
          to use the Service.
        </p>

        <p>
          In no event shall our total liability exceed the amount you paid to us in the twelve months preceding the
          claim.
        </p>
      </section>

      <section className='policy-section'>
        <h2>12. Modifications</h2>
        <p>
          We may modify these Terms at any time. Changes will be posted via the App or Website, and the “Last Updated”
          date will be revised accordingly. Continued use of the Service constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className='policy-section'>
        <h2>13. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account and access to the Service, with or without notice,
          if you violate these Terms or engage in conduct that we reasonably believe is harmful to other users or the
          Service.erms.
        </p>
      </section>

      <section className='policy-section'>
        <h2>14. Contact Information</h2>
        <p>For questions, concerns, or support, please contact us:</p>
        <p>
          <strong>Email: </strong> {SupportLink}
          <br />
          <strong>Website: </strong> {SiteLink}
        </p>
      </section>

      <section className='policy-section'>
        <h2>15. Entire Agreement</h2>
        <p>
          These Terms, along with our Privacy Policy and Refund Policy, constitute the entire agreement between you and
          Appossum PSA regarding the use of the Service.
        </p>
      </section>

      <div className='back-to-top'>
        <a href='#'>Back to Top ↑</a>
      </div>
    </div>
  );
};

export default TermsOfUseBlock;
