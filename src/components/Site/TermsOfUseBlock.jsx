import React from "react";
import "./site-styles/policiesCommon.css";

const TermsOfUseBlock = () => {
  return (
    <div className='policy-container'>
      <h1>Terms of Use</h1>
      <p className='last-updated'>Last Updated: {new Date().toLocaleDateString()}</p>

      <section className='policy-section'>
        <h2>General Information</h2>
        <p>
          Welcome to <strong>UFO</strong> (the "Site"). This Site provides information about weight loss, nutrition, and
          physical activity. The content is for informational purposes only and is not a substitute for professional
          medical advice. Always consult a healthcare provider before making health-related decisions.
        </p>
      </section>

      <section className='policy-section'>
        <h2>User Responsibilities</h2>
        <ul>
          <li>You agree to use the Site for lawful purposes only.</li>
          <li>Do not share false, misleading, or harmful information.</li>
          <li>You are responsible for any content you submit (e.g., comments, reviews).</li>
        </ul>
      </section>

      <section className='policy-section'>
        <h2>Intellectual Property</h2>
        <p>
          All content (text, images, logos) is owned by <strong>UFO</strong> or its licensors and is protected by
          copyright laws. Unauthorized use is prohibited.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Disclaimer of Warranties</h2>
        <p>
          The Site is provided "as is." We do not guarantee accuracy or completeness of the content. Your use of the
          Site is at your own risk.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Limitation of Liability</h2>
        <p>
          <strong>UFO</strong> is not liable for any damages resulting from your use of the Site, including errors in
          content or interruptions in service.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites. We are not responsible for their content or practices.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Changes to Terms</h2>
        <p>
          We may update these Terms at any time. Your continued use of the Site constitutes acceptance of the changes.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUseBlock;
