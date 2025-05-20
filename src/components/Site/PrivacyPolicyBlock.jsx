import React from "react";
import "./site-styles/policiesCommon.css";

const PrivacyPolicyBlock = () => {
  return (
    <div className='policy-container'>
      <h1>Privacy Policy</h1>
      <p className='last-updated'>Last Updated: {new Date().toLocaleDateString()}</p>

      <section className='policy-section'>
        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and health-related data when you use our
          services. We also automatically collect certain technical data about your device and usage patterns.
        </p>
      </section>

      <section className='policy-section'>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our services</li>
          <li>To personalize your experience</li>
          <li>To communicate with you about your account</li>
          <li>For analytics and service optimization</li>
        </ul>
      </section>

      <section className='policy-section'>
        <h2>Data Sharing</h2>
        <p>
          We do not sell your personal data. We may share information with trusted service providers who assist us in
          operating our website, conducting our business, or servicing you, so long as those parties agree to keep this
          information confidential.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. However, no method of
          transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. You may also opt-out of certain data
          collection and processing activities.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience and analyze site usage. You can
          control cookies through your browser settings.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new
          policy on our website with a new effective date.
        </p>
      </section>

      <section className='policy-section'>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <strong>privacy@ufo.app</strong>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyBlock;
