import React from "react";
import "./site-styles/policiesCommon.css";

const PrivacyPolicyBlock = () => {
  const MailLink = <a href='mailto:info@ufo-weight.com'>info@ufo-weight.com</a>;
  const SiteLink = <a href='https://ufo-weight.com'>https://ufo-weight.com</a>;

  return (
    <div className='policy-container'>
      <h1>Privacy Policy</h1>
      <p className='last-updated'>Effective Date: February 1, 2025</p>
      <p className='last-updated'> Last Updated: May, 2025</p>

      <section className='policy-section'>
        <p>
          This Privacy Policy describes how Appossum PSA ("we," "our," or "us") collects, uses, and shares personal
          information through the UFO mobile application (the "App") and our website at {SiteLink} (the "Website").
        </p>

        <p>We are committed to protecting your privacy and complying with all applicable data protection laws. </p>
      </section>

      <section className='policy-section'>
        <h2>1. Who We Are</h2>
        <p>Appossum PSA is the developer and data controller for the UFO app. You can contact us at:</p>
        <p>
          <strong>Email: </strong> {MailLink}
          <br />
          <strong>Website: </strong> {SiteLink}
        </p>
      </section>

      <section className='policy-section'>
        <h2>2. What the UFO App Does</h2>
        <p>
          The UFO app is a general wellness and lifestyle tracking tool. It allows users to log meals, water intake,
          physical activity, and other personal habits to help build healthier routines.
        </p>

        <p>
          <strong>Important</strong>: UFO does <strong>not</strong> provide medical, nutritional, diagnostic, or
          therapeutic advice. It is <strong>not a medical device</strong> and should not be used as a substitute for
          professional care.
        </p>
      </section>

      <section className='policy-section'>
        <h2>3. What Information We Collect</h2>
        <p>We collect the following types of information:</p>

        <p>
          <strong>a. Information You Provide</strong>
          <ul>
            <li>Email address, name, and optional profile data</li>
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
        </p>

        <p>
          If you use services like Apple Health (future integration), or engage with in-app features powered by external
          platforms, data may be shared as described below.
        </p>
      </section>

      <section className='policy-section'>
        <h2>4. Use of Information</h2>
        <p>
          We use your information to:
          <ul>
            <li>Provide and maintain the App</li>
            <li>Improve user experience and develop new features</li>
            <li>Communicate service-related updates</li>
            <li>Ensure technical functionality and security</li>
          </ul>
        </p>

        <p>We do not use your data for profiling related to health or for making any health-related decisions.</p>
      </section>

      <section className='policy-section'>
        <h2>5. Sharing Your Information</h2>
        <p>We share limited data with trusted partners who help us operate and improve our services. These include:</p>

        <ul>
          <li>
            <strong>Firebase (Google)</strong> – analytics, crash reporting
          </li>
          <li>
            <strong>Adjust </strong> – attribution and marketing analysis
          </li>
          <li>
            <strong>OpenAI </strong> – powering optional chatbot functionality (Copilot)
          </li>
        </ul>

        <p>
          Data shared with these providers is <strong>anonymized or encrypted where applicable</strong> and limited to
          the minimum necessary.
        </p>

        <p>
          We do <strong>not</strong> sell your personal data to third parties.
        </p>
      </section>

      <section className='policy-section'>
        <h2>6. Data Retention</h2>
        <p>
          We retain your personal data for as long as your account is active, or as needed to provide our services and
          meet legal obligations. You may request deletion at any time.
        </p>
      </section>

      <section className='policy-section'>
        <h2>7. Your Rights</h2>

        <p>
          Depending on your jurisdiction, you may have the right to:
          <ul>
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
          </ul>
        </p>

        <p>To exercise your rights, please contact us at {MailLink}.</p>
      </section>

      <section className='policy-section'>
        <h2>8. Children’s Privacy</h2>
        <p>
          The UFO App is not intended for users under 18. We do not knowingly collect data from children. If we become
          aware of such collection, we will delete the data immediately.
        </p>
      </section>

      <section className='policy-section'>
        <h2>9. Data Security</h2>

        <p>
          We implement appropriate technical and organizational measures to protect your data. However, no system is
          100% secure. Please use strong passwords and protect your account access.
        </p>
      </section>

      <section className='policy-section'>
        <h2>10. International Transfers</h2>
        <p>
          If you access our App from outside the European Union, your data may be transferred to servers located in the
          EU or other jurisdictions with adequate data protection laws.
        </p>
      </section>

      <section className='policy-section'>
        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. When we do, we will revise the “Last Updated” date and notify
          you if required by law.
        </p>
      </section>

      <section className='policy-section'>
        <h2>12. Contact</h2>
        <p>If you have questions about this Privacy Policy or your personal data, contact us at:</p>

        <p>
          <strong>Email: </strong> {MailLink}
          <br />
          <strong>Website: </strong> {SiteLink}
        </p>
      </section>

      <section className='policy-section'>
        <h2></h2>

        <p>
          This Privacy Policy is part of our Terms and Conditions. By using the App, you agree to the practices
          described in this Policy.
        </p>
      </section>

      <div className='back-to-top'>
        <a href='#'>Back to Top ↑</a>
      </div>
    </div>
  );
};

export default PrivacyPolicyBlock;
