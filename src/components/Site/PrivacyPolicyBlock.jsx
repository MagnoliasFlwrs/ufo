import React from "react";
import "./site-styles/policiesCommon.css";

const PrivacyPolicyBlock = () => {
  const MailLink = <a href='mailto:info@ufo-weight.com'>info@ufo-weight.com</a>;

  return (
    <div className='policy-container'>
      <h1>Privacy Policy</h1>
      <p className='last-updated'>Effective date for new users: February 1, 2025</p>
      <p className='last-updated'>Effective date for existing users: February 1, 2025</p>

      <div className='toc'>
        <ul>
          <li>
            <a href='#changes'>1. Changes to the Terms</a>
          </li>
          <li>
            <a href='#disclaimers'>2. Important Disclaimers</a>
          </li>
          <li>
            <a href='#privacy'>3. Your Privacy</a>
          </li>
          <li>
            <a href='#registration'>4. Registration and Eligibility</a>
          </li>
          <li>
            <a href='#use'>5. Your Use of the Services</a>
          </li>
          <li>
            <a href='#export'>6. Export Control</a>
          </li>
          <li>
            <a href='#license'>7. Limited License</a>
          </li>
          <li>
            <a href='#risk'>8. Use at Your Own Risk</a>
          </li>
          <li>
            <a href='#subscriptions'>9. Subscriptions</a>
          </li>
          <li>
            <a href='#account-security'>10. Account Security</a>
          </li>
          <li>
            <a href='#warranty-disclaimer'>11. Warranty Disclaimer</a>
          </li>
          <li>
            <a href='#limitation'>12. Limitation of liability</a>
          </li>
          <li>
            <a href='#use-mobile'>13. Use of mobile devices</a>
          </li>
          <li>
            <a href='#third-party'>14. Third-Party Services</a>
          </li>
          <li>
            <a href='#feedback'>15. Your feedback</a>
          </li>
          <li>
            <a href='#enforcement'>16. Enforcement rights</a>
          </li>
          <li>
            <a href='#indemnity'>17. Indemnity</a>
          </li>
          <li>
            <a href='#dispute'>18. Dispute Resolution, Binding Arbitration</a>
          </li>
          <li>
            <a href='#misc'>19. Miscellaneous</a>
          </li>
          <li>
            <a href='#notice'>20. Notice and takedown procedures</a>
          </li>
        </ul>
      </div>

      <section className='policy-section'>
        <p>
          These Terms of Use (the “<strong>Terms</strong>”) apply to your access and use of our UFO mobile application
          (the “<strong>App</strong>”), our website (ufo-weight.com) provided by Appossum PSA. (may be referred to as “
          <strong>UFO</strong>” or “<strong>we</strong>”). The Terms are not entered into with Apple, Inc., any of its
          subsidiaries, Google, Inc., any of its subsidiaries, or any other entity as may appl
        </p>

        <p>If you have any questions about the Terms or our Services, please contact us at {MailLink} </p>
        <p>
          Please read the Terms carefully. By accessing or using our Services, you acknowledge that you accept and agree
          to be bound by the Terms.
          <strong>
            If you do not agree to these Terms, including the mandatory arbitration provision and class action waiver in
            Section 18 (Dispute Resolution, Binding Arbitration), do not use UFO. Your continued use of UFO will confirm
            your acceptance of these Terms.
          </strong>
        </p>
        <p>
          {" "}
          <strong>IF YOU DO NOT AGREE TO THE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICES.</strong>{" "}
        </p>
      </section>

      <section id='changes' className='policy-section'>
        <h2>1. Changes to the Terms</h2>
        <p>
          We may modify the Terms from time to time. We will notify you by email, through the Services, or by presenting
          you with a new version of the Terms for you to accept if we make modifications that materially change your
          rights. Your continued use of the Services after the effective date of an updated version of the Terms will
          indicate your acceptance of the Terms as modified. We reserve our right to introduce minor changes to the
          Terms that do not materially influence your rights (e.g., technical corrections or description of a new
          feature) without notice.
        </p>
      </section>

      <section id='disclaimers' className='policy-section'>
        <h2>2. Important Disclaimers</h2>
        <p>
          <strong>Long story short:</strong> UFO can never substitute your doctor or other healthcare providers. It is
          neither a medical device nor does it provide any medical advice. Rather, UFO provides you with tools to track
          and log what and when you eat or drink. UFO also provides articles about healthy food, but the articles are
          provided purely for educational purposes so that you can make more thoughtful and informed decisions about
          your health and well-being. Whenever you have any concerns about your health or if you are unsure whether
          courses are appropriate for you, please consult your doctor.
        </p>
        <ul>
          <li>
            You understand that the Services are not medical or healthcare services and that no physician-patient
            relationship exists.
          </li>
          <li>
            The Services may not be appropriate for all persons and is not a substitute for professional healthcare
            services. The Services are intended only as a tool, which may be useful in achieving your overall health,
            fitness, and wellness goals. You acknowledge that your diet and exercise activities involve risks, which may
            involve the risk of bodily injury or death, and that you assume those risks. Before accessing or using the
            Services, you agree to release and discharge UFO from any and all action, known or unknown, arising out of
            your use of the Services.
          </li>
          <li>
            Please consult with a licensed physician or other qualified healthcare providers before making any decisions
            or taking any actions that may affect your health and safety or that of your family or fetus.
          </li>
          <li>
            Never disregard professional medical advice or delay in seeking it because of something you have read using
            our Services.
          </li>
          <li>
            Always consult with your healthcare professional if you have any questions or concerns about your health or
            condition or experience any changes in your condition or health status. If you think you have a medical
            emergency, call emergency services or go to the nearest open emergency room immediately.
          </li>
          <li>
            Developments in medical research may impact the health advice that appears on the Services. No assurance can
            be given that the advice contained in the Services will always include the most recent findings or
            developments with respect to the particular material.
          </li>
          <li>
            We make no guarantees concerning the level of success you may experience, and you accept the risk that
            results will differ for each individual. The testimonials and examples that may be provided on the Services
            are exceptional results, which do not apply to an average person and are not intended to represent or
            guarantee that anyone will achieve the same or similar results. There is no assurance that examples of past
            fitness results can be duplicated in the future. We cannot guarantee your future results and/or success. Nor
            can we guarantee that you maintain the results you experience if you do not continue following the meal
            programs.
          </li>
          <li>
            You should consult with your doctor regarding using the service under these conditions:
            <ul>
              <li>Diabets</li>
              <li>High cholesterol</li>
              <li>Food allergy or intolerance</li>
              <li>Heart disease or stroke</li>
              <li>High blood pressure</li>
              <li>Mental health disorder</li>
            </ul>
          </li>

          <li>
            If you suffer from a medical condition or use medications, please consult your doctor before starting using
            the service.
          </li>
          <li>
            In addition to all other limitations and disclaimers in the Terms, UFO disclaims any liability or loss in
            connection with the content provided through the Services. You are encouraged to consult with your doctor
            and other relevant professionals regarding the information contained on or accessed through the Services.
          </li>
        </ul>
      </section>

      <section id='privacy' className='policy-section'>
        <h2>3. Your Privacy</h2>
        <p>
          We care about your privacy. Please read our privacy policy available at ufo-weight.com website on page
          <strong>Privacy Policy</strong>. The Privacy Policy is an integral part of the Terms. To the extent there is
          an inconsistency between the Terms and the Privacy Policy, the Terms shall govern. The Services are not
          intended or designed to attract children under the age of 18. We do not collect personally identifiable
          information from any person we know is a child under the age of 18. If you are aware of anyone that does not
          comply with these limitations, please contact us at {MailLink}, and we will take steps to delete their
          account.
        </p>
      </section>

      <section id='registration' className='policy-section'>
        <h2>4. Registration and Eligibility</h2>
        <p>
          4.1. To use the Services, you may be required to create an account and to provide certain personal
          information, which may include your name, gender, birth date, and e-mail address. You agree that you will
          supply accurate and complete information to UFO, and that you will update that information promptly after it
          changes. Otherwise, the Services may not operate correctly, and we may not be able to contact you with
          important notices.
        </p>
        <p>
          4.2. You may not create the account with a name that you don’t have the right to use, or another person’s name
          with the intent to impersonate that person.
        </p>
        <p>
          4.3. To create an account and access the Services, you must be at least 18 years old and not barred from using
          the App under applicable law. You hereby represent and warrant to UFO that you meet such qualifications.
        </p>
        <p>
          4.4. You will not share your account or password with anyone, and you must protect the security of your
          account and your password. You’re responsible for any activity associated with your account.
        </p>
        <p>
          4.5. UFO has a right to suspend or terminate your account, with or without notice to you, if you breach the
          Terms.
        </p>
      </section>

      <section id='use' className='policy-section'>
        <h2>5. Your use of the Services.</h2>
        <p>You will only use the Services:</p>

        <ul className='policy-list'>
          <li>for your own personal, non-commercial use, and</li>
          <li>not on behalf, or for the benefit, of any third party, and</li>
          <li>only in a manner compliant with all applicable laws.</li>
        </ul>

        <p>
          We can’t and won’t be responsible for your use of the Services in a way that breaks the law. As a condition to
          using our Services, you agree that you <strong>WILL NOT:</strong>
        </p>

        <ul className='policy-list'>
          <li>sell, rent, lease, loan, sublicense, or otherwise transfer the rights or obligations from the Terms;</li>
          <li>modify, reverse engineer, decompile, or disassemble the Services;</li>
          <li>
            copy, adapt, alter, modify, translate, or create derivative works of the Services without the written
            authorization of UFO;
          </li>
          <li>
            permit other individuals to use the Services, including but not limited to shared use via a network
            connection (unless allowed by the Terms);
          </li>
          <li>bypass or disable any technology that protects the intellectual property rights of UFO;</li>
          <li>
            use the Services in an attempt to, or in conjunction with any device, program, or service designed to,
            circumvent technological measures employed to control access to, or the rights in, a content file or other
            work protected by the copyright laws of any jurisdiction;
          </li>
          <li>
            use or access the Services to compile data in a manner that is used or usable by a competitive product or
            service;
          </li>
          <li>
            use your account to advertise, solicit, or send any business advertisements, including chain letters, spam
            e-mails, or repetitive messages to anyone;
          </li>
          <li>use your account for illegal purposes;</li>
          <li>upload to transmit any communications that infringe or violate the rights of any party;</li>
          <li>
            upload media of any kind that contain expressions of hate, abuse, offensive images or conduct, obscenity,
            pornography, sexually explicit content, or any material that could give rise to any civil or criminal
            liability under applicable law or regulations or that otherwise may be in conflict with the Terms; or
          </li>
          <li>
            upload any material that contains software viruses, or any other computer code, files or programs designed
            to interrupt, destroy, or limit the functionality of any computer software or any of our Services.
          </li>
        </ul>

        <p>
          If you feel threatened or believe someone else is in danger,
          <strong>contact your local law enforcement agency immediately</strong>. If you think you may have a medical
          emergency, call your doctor or emergency services immediately.
        </p>

        <p>
          <strong>Note about Copilot chatbot.</strong>
        </p>
        <p>
          Copilot is an AI chatbot currently available to UFO users. In a chat conversation, Copilot will provide
          nutrition and wellness support.
        </p>

        <ul>
          <li>
            <span style={{ textDecoration: "underline" }}>General note.</span> As we strive to enhance and fortify the
            reliability of Copilot, the responses provided by the chatbot still may contain biased, incorrect, harmful
            or misleading content. As Copilot continues to evolve, we recommend that you independently verify the
            accuracy and suitability of any recommendations and ideas provided by the chatbot before relying on them.
            Additionally, we advise against sharing confidential information with Copilot. While we are committed to
            improving the chatbot’s performance, it is ultimately up to the user to exercise caution and critical
            thinking when engaging with Copilot. Copilot is powered by Open AI Service with additional safety
            enhancements and controls unique to UFO. Please note that Open AI has the right of moderation of the chat
            contents.
          </li>

          <li>
            <span style={{ textDecoration: "underline" }}>Sending feedback.</span> Users can easily send feedback to our
            team at {MailLink} on what they’d like to see more or less of while we continue to configure Copilot.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Prohibited use-cases.</span> Do not use Copilot to generate
            content that is political, sexual, harassing or deceptive in nature, as well as spam or malware.
            Additionally, do not create content that promotes violence, self-harm, human trafficking or in any other way
            violates this Agreement. Sharing confidential information with Copilot is also strongly discouraged. Our
            chatbot is intended to provide support and guidance for your weight loss journey, and we ask that you use
            the feature responsibly and in accordance with this Agreement.
          </li>
          <li>
            <span style={{ textDecoration: "underline" }}>Disclaimers.</span> Copilot chatbot is designed to provide
            support and general recommendations for users following weight loss. However, please be aware that the
            information provided by the chatbot is for general informational purposes only and should not be construed
            as medical advice or used as a substitute for professional medical advice, diagnosis, or treatment.
          </li>
        </ul>

        <p>
          The chatbot is not a licensed medical professional and does not have the ability to diagnose, treat or cure
          any medical condition. Any information provided by the chatbot is not intended to replace the advice provided
          by your healthcare provider or other medical professionals. Please consult with your healthcare provider
          before starting any new diet or meal plan. Any decision to begin losing weight or any other health-related
          program is solely at your own risk. UFO is not responsible for any injury, illness or harm that may result
          from your use of our Services and/or the information provided by the chatbot specifically.
        </p>
      </section>

      <section id='export' className='policy-section'>
        <h2>6. Export and economic sanctions control</h2>
        <p>
          The software that supports the Services may be subject to U.S. export and re-export control laws and
          regulations, including the Export Administration Regulations (“<strong>EAR</strong>.”) maintained by the U.S.
          Department of Commerce, trade and economic sanctions maintained by the Treasury Department’s Office of Foreign
          Assets Control (“<strong>OFAC</strong>”), and the International Traffic in Arms Regulations (“
          <strong>ITAR</strong>”) maintained by the Department of State.
        </p>

        <p>You represent and warrant that you are:</p>

        <ul>
          <li>not located in any country or region that is subject to a U.S. government embargo, and</li>
          <li>not a denied party as specified in the regulations listed above.</li>
        </ul>

        <p>
          You agree to comply with all U.S. and foreign export laws and regulations to ensure that neither the Services
          nor any technical data related to them, nor any direct product of the Services is exported or re-exported
          directly or indirectly in violation of or used for any purposes prohibited by such laws and regulations.
        </p>
      </section>

      <section id='license' className='policy-section'>
        <h2>7. Limited License to the Services</h2>
        <p>
          7.1. We grant you a personal, worldwide, revocable, non-transferable, and non-exclusive license (without the
          right to sublicense) to access and use the Services for personal and non-commercial purposes in accordance
          with the Terms.
        </p>
        <p>
          7.2. You may not copy, store, modify, distribute, transmit, perform, reproduce, publish, license, create
          derivative works from, transfer, or sell any text, graphics, logos, and other source-identifying symbols,
          designs, icons, images, or other information, software or code obtained from the Services without prior
          express written permission from UFO, and such consent may be withheld for any or no reason.
        </p>
        <p>
          7.3. You further agree not to download, display or use any content on the Services that are provided by UFO or
          its licensors for use in any publications, in public performances, on websites other than the Services for any
          other commercial purpose, in connection with products or services that are not those of UFO, in any other
          manner that is likely to cause confusion among consumers, that disparages or discredits UFO and/or its
          licensors, that dilutes the strength of UFO or its licensor’s property, or that otherwise infringes UFO’s or
          its licensors’ intellectual property rights.
        </p>
        <p>
          7.4. You further agree to in no other way misuse any content published by UFO or third-party content that
          appears using the Services.
        </p>
        <p>
          7.5. All rights, title, and interest in and to the Services not expressly granted through the Terms are
          reserved by UFO. If you wish to use our software, title, trade name, trademark, service mark, logo, domain
          name, and/or any other identification with notable brand features or other content owned by UFO, you must
          first obtain our written permission. Permission requests may be sent to {MailLink}.
        </p>
        <p>
          7.6. <span></span>
          <strong>
            To avoid any doubt, UFO owns all the text, images, photos, audio, video, location data, software, code, and
            all other forms of data or communication that UFO creates and makes available through the Services,
            including but not limited to visual interfaces, interactive features, graphics, design, and the compilation
            of aggregate user review ratings and all other elements and components of the any of the Services
            (collectively referred to herein as the “Company’s Content”). Except as expressly and unambiguously provided
            herein, we do not grant you any express or implied rights, and all rights in and to the Services and the
            Company’s Content are retained by us.
          </strong>
        </p>
      </section>

      <section id='disclaimer' className='policy-section'>
        <h2>8. Use at your own risk</h2>
        <p>
          Our goal is to help make certain health-related information more readily available and useful to you, however,
          the Services cannot and do not guarantee health-related improvements or outcomes. Your use of the Services and
          any information, predictions, or suggestions provided through the Services are at your sole risk. We make no
          representation or warranty of any kind as to the accuracy of data, information, estimates, and predictions
          that we may provide to you through the Services, and you agree and understand that the Services are not
          intended to match or serve the same purpose as a medical or scientific device.
        </p>
      </section>

      <section id='license' className='policy-section'>
        <h2>9. Subscriptions</h2>
        <p>
          9.1. <strong>UFO subscription.</strong> We offer subscriptions that grant you access to special features and
          content, including, but not limited to, personalized insights based on your behavior and eating patterns,
          tools for tracking your meals, water intakes, body measurements, and physical activity. You agree that your
          purchases are not contingent on the delivery of any future functionality or features, or dependent on any oral
          or written public comments made by UFO regarding future functionality or features. 9.1. UFO subscription. We
          offer subscriptions that grant you access to special features and content, including, but not limited to,
          personalized insights based on your behavior and eating patterns, tools for tracking your meals, water
          intakes, body measurements, and physical activity. You agree that your purchases are not contingent on the
          delivery of any future functionality or features, or dependent on any oral or written public comments made by
          UFO regarding future functionality or features.
        </p>
        <p>
          9.2. <strong>Billing.</strong> You may purchase UFO subscription through the mobile application. If you choose
          to purchase the subscription via the application, payment will be charged to your credit/debit card through
          your iTunes Account account after you choose one of our subscriptions and confirm your purchase.
        </p>
        <p>
          9.3. <strong>Trial.</strong> We may offer our new users a trial period as a part of the chosen subscription to
          experience the premium features at a reduced price. The trial is considered a part of the subscription. At the
          end of the trial period, you may either cancel your subscription no later than 24 hours before the trial ends,
          or you may continue using premium subscription at its normal price, and we will begin to charge you
          accordingly. Please note that trial offers are available for new users only: if you have previously benefited
          from a trial period (or a part of a trial period) for any of our subscriptions, you will not be entitled to
          another trial offer, even if you subsequently cancel your subscription and apply for a new subscription at
          some later date.
        </p>
        <p>
          9.4. <strong>Renewal and Cancellation.</strong> Your paid subscription will automatically renew at the end of
          the applicable subscription period. To avoid unexpected charges, you can turn off auto-renew or cancel your
          subscription no later than 24 hours before the end of the subscription period. Your subscription can be
          canceled at any time in the Manage Subscriptions section of your account settings. If you purchased a
          subscription on the Website. Please access your personal account on Paddle Customer Portal to see your
          subscription purchases and manage your subscription - the link will be shared with you in our email when your
          subscription is activated. If you want to cancel your subscription, the cancellation will apply only after
          expiration of the active subscription period. No cancellation is allowed for the remaining part of the active
          subscription period. If you purchased a subscription through the Apple App Store: you may cancel automatic
          renewals by selecting “Manage App Subscriptions” in your Apple Account settings and selecting the subscription
          you want to modify, or otherwise in accordance with the current functionality of that platform. Should you
          have any questions or concerns about it, please contact our support team at {MailLink} for instructions on how
          to cancel your subscription.
        </p>
        <p>
          9.5. <strong>Refunds.</strong> The subscriptions purchased via an Apple App Store are subject to Apple App
          Store refund policies. This means that we cannot grant refunds for such subscriptions. To claim a refund for a
          subscription purchased via App Store please contact App Store support.
          <strong>
            {" "}
            Please be aware that your purchased subscription does not cancel automatically if you delete the mobile
            application. You should cancel the subscription before the deletion of the mobile application.
          </strong>
        </p>
        <p>
          9.6. <strong>Changes.</strong> We may from time to time make changes to our subscription options, including
          recurring subscription fees, and will communicate any price changes to you in advance. Price changes will take
          effect at the start of the next subscription period following the date of the price change and, by continuing
          to use our subscription after the price change takes effect, you will have accepted the new price. If you
          don’t agree to a price change, you can reject the change by unsubscribing from the applicable subscription no
          later than 24 hours before the end of the subscription term.
        </p>
        <p>
          9.7. <strong>Taxes.</strong> Tax rates or other fees are based on the rates applicable at the time of your
          charge. These amounts can change over time with local tax requirements in your country, state, territory,
          county, or city. Any change in tax rate will be automatically applied based on the account information you
          provide.
        </p>
      </section>

      <section id='account-security' className='policy-section'>
        <h2>10. Account Security</h2>
        <p>
          You are responsible for taking all reasonable steps to ensure that no unauthorized person shall have access to
          your account.
        </p>

        <p>It is your sole responsibility to:</p>

        <ul>
          <li>control the dissemination and use of sign-in name and passwords;</li>
          <li>authorize, monitor, and control access to and use of your account;</li>
          <li>
            promptly inform UFO if you believe your account has been compromised or if there is any other reason you
            need to deactivate your account. Send us an email at {MailLink}
          </li>
        </ul>

        <p>
          You grant UFO and all other persons or entities involved in the operation of the Services the right to
          transmit, monitor, retrieve, store, and use your information in connection with the operation of the Services.
          UFO cannot and does not assume any responsibility or liability for any information you submit, or your or
          third parties' use or misuse of information transmitted or received using the Services, and shall not be
          responsible for any losses arising out of the unauthorized use of your account or information resulting from
          you not following these rules.
        </p>
      </section>

      <section id='warranty-disclaimer' className='policy-section'>
        <h2>11. Warranty Disclaimer</h2>
        <p>
          11.1. UFO controls and operates the Services from various locations and makes no representation that the
          Services are appropriate or available for use in all locations. The Services or their certain features may not
          be available in your location or may vary across locations.
        </p>

        <p>
          11.2.{" "}
          <strong>
            THE SERVICES ARE PROVIDED “AS IS”, “AS AVAILABLE” AND ARE PROVIDED WITHOUT ANY REPRESENTATIONS OR WARRANTIES
            OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE,
            NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY
            COURSE OF PERFORMANCE OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED, SAVE TO THE EXTENT REQUIRED
            BY LAW.
          </strong>
        </p>

        <p>
          11.3. UFO, and its directors, employees, agents, representatives, suppliers, partners, and content providers
          do not warrant that:
        </p>

        <ul>
          <li>The Services will be secure or available at any particular time or location;</li>
          <li>Any defects or errors will be corrected;</li>
          <li>
            Any content or software available at or through the Services is free of viruses or other harmful components;
            or
          </li>

          <li>The Services will meet your requirements.</li>
        </ul>

        <p>
          11.4. <strong>You use the Services at your own risk.</strong> You will be solely responsible for any damage to
          your computer system or mobile device or loss of data that results from the use of any such material.
        </p>

        <p>
          11.5. <strong>No guarantees of specific results.</strong> We do not guarantee and do not promise any specific
          results from your use of our Services. You agree to take the risks of interruption of the Services for any
          technical reasons.
        </p>
        <p>
          11.6. <strong>Absence of Any Advice on the Services.</strong> The Company makes no representations or
          warranties and, to the fullest extent permitted by law, expressly disclaims any and all liability relating to
          your reliance on the statements or other information offered or provided within or through the Service. If you
          have specific concerns or a situation arises in which you require professional or medical advice, you should
          consult with an appropriately trained and qualified specialist.
        </p>
        <p>
          11.7. Since some states/countries do not allow limitations on implied warranties, the above limitations may
          not apply to you.
        </p>
      </section>

      <section id='limitation' className='policy-section'>
        <h2>12. Limitation of liability</h2>
        <p>
          12.1. In no event shall UFO, its officers, directors, agents, affiliates, employees, advertisers, or data
          providers be liable for any indirect, special, incidental, consequential, or punitive damages (including but
          not limited to loss of use, loss of profits, or loss of data) whether in an action in contract, tort
          (including but not limited to negligence), equity or otherwise, arising out of or in any way connected with
          the use of the Services.
        </p>

        <p>
          12.2. In no event will UFO’s total liability arising out of or in connection with the Terms or from the use of
          or inability to use the Services exceed the amounts you have paid to UFO for use of the Services or $100 if
          you have not had any payment obligations to UFO, as applicable.
        </p>

        <p>
          12.3. Some jurisdictions do not allow the exclusion or limitation of liability, so the above limitations may
          not apply to you. Nothing in the Terms excludes or limits our liability to you where it would be unlawful to
          do so. Where any provision is expressed to exclude or limit liability to a greater extent than permitted by
          applicable law, that provision shall be deemed to only exclude or limit our liability to the maximum extent
          permitted by applicable law.
        </p>

        <p>
          12.4. Neither UFO, nor any third party mentioned on any of the Services, is liable for any personal injury,
          including death, caused by your use or misuse of the Services.
        </p>
      </section>

      <section id='use-mobile' className='policy-section'>
        <h2>13. Use of mobile devices</h2>
        <p>
          Your carrier’s normal rates and fees, such as text messaging and data charges, will still apply if you are
          using the Services on a mobile device.
        </p>
      </section>

      <section id='third-party' className='policy-section'>
        <h2>14. Third-Party Services</h2>
        <p>
          The Services may give you access to links to third-party websites, apps, or other products or services (“
          <strong>Third Party Services</strong>”). UFO does not control Third Party Services in any manner and,
          accordingly, does not assume any liability associated with such Third Party Services. You need to take
          appropriate steps to determine whether accessing a Third Party Service is appropriate, and to protect your
          personal information and privacy in using any such Third Party Services. Your linking to or use of any Third
          Party Services other than our Services is at your own risk. UFO’s inclusion of links to Third Party Services
          does not imply any endorsement of any kind by UFO of the material located on or linked to by such Third Party
          Services and should not be deemed as such by any user of our Services. UFO disclaims any responsibility for
          the products or services offered or the information contained on any Third Party Services. You need to take
          appropriate steps to determine whether accessing a Third Party Service is appropriate, including protecting
          your personal information and privacy in using any such Third Party Services and complying with relevant
          agreements.
        </p>

        <p>
          You shall not link to our websites, app, content, or services in a way that is: (i) illegal, (ii) suggests any
          form of association, approval, or endorsement with or by us where none exists, (iii) damages our reputation or
          takes advantage of it, or (iv) is unfair.
        </p>
      </section>

      <section id='feedback' className='policy-section'>
        <h2>15. Your feedback</h2>

        <p>
          We welcome your feedback about the Services. Unless otherwise expressly declared, any communications you send
          to us are deemed to be submitted on a non-confidential basis. You agree that we may decide to publicize such
          content at our own discretion. You agree to authorize us to make use of such contents for free, and revise,
          modify, adjust, and change contextually, or make any other changes as we deem appropriate.
        </p>
      </section>

      <section id='enforcement' className='policy-section'>
        <h2>16. Enforcement rights</h2>

        <p>
          We are not obligated to monitor your access or use of the Services, however, we reserve the right to do so for
          purposes of operating and maintaining the Services, ensuring your compliance with the Terms, and complying
          with applicable legal requirements. We reserve the right (but are not required) to remove or disable any
          content posted to the Services or access to Services at any time and without notice, and at our sole
          discretion if we determine that your content or use of the Services is objectionable or in violation of the
          Terms. We may refuse service, close accounts, and change eligibility requirements at any time. UFO has no
          liability or responsibility to users of our Services or any other person or entity for the performance or
          nonperformance of the above activities.
        </p>
      </section>

      <section id='indemnity' className='policy-section'>
        <h2>17. Indemnity</h2>

        <p>
          You agree to defend, indemnify, and hold UFO, its officers, directors, employees, agents, licensors, and
          suppliers, harmless from and against any claims, actions or demands, liabilities, and settlements including
          without limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, your use
          of the Services or your violation of the Terms. UFO reserves the right, at your expense, to assume the
          exclusive defense and control of any matter for which you are required to indemnify us and you agree to
          cooperate with our defense of these claims. You agree not to settle any matter without the prior written
          consent of the Company. The Company will use reasonable efforts to notify you of any such claim, action, or
          proceeding upon becoming aware of it.
        </p>
      </section>

      <section id='dispute' className='policy-section'>
        <h2>18. Dispute Resolution, Binding Arbitration</h2>

        <p>
          These Terms and the use of the Services are governed by the laws of Republic of Poland, except for its
          conflicts of laws principles. All claims arising out of or relating to these Terms or the Service shall be
          resolved by the Polish public courts, whereby the District Court of Warsaw shall be the court of the first
          instance.
        </p>

        <p>
          {" "}
          <strong>Governing Law.</strong> If you are a resident of any European country or the United Kingdom,
          Switzerland, Norway or Iceland, the governing law and forum shall be the laws of your usual place of
          residence.
        </p>

        <p>
          If you reside in the United States, the arbitration agreement in this Section applies to you. Please read it
          carefully.
        </p>
        <p>
          If you do not reside in the United States, and you nevertheless attempt to bring any legal claim against UFO
          in the United States, this arbitration agreement will apply for determination of the threshold issue of
          whether this Section 18 applies to you, and all other threshold determinations, including residency,
          arbitrability, venue, and applicable law.
        </p>

        <p>
          <strong>Arbitration</strong>. You agree that any dispute, claim, or controversy arising out of or relating to
          the Terms or the breach, termination, enforcement, interpretation, or validity thereof or the use of the
          Services (collectively, “<strong>Disputes</strong>”) will be settled by binding arbitration between you and
          UFO, except that each party retains the right to bring an individual action in small claims court and the
          right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual
          or threatened infringement, misappropriation or violation of a party’s copyrights, trademarks, trade secrets,
          patents or other intellectual property rights. You acknowledge and agree that you and UFO are each waiving the
          right to a trial by jury or to participate as a plaintiff or class in any purported class action or
          representative proceeding. Further, unless both you and UFO otherwise agree in writing, the arbitrator may not
          consolidate more than one person’s claims, and may not otherwise preside over any form of any class or
          representative proceeding. If this specific paragraph is held unenforceable, then the entirety of this
          “Dispute Resolution” section will be deemed void. Except as provided in the preceding sentence, this “Dispute
          Resolution” section will survive any termination of the Terms.
        </p>

        <p>
          <strong>Arbitration rules and governing law.</strong> The arbitration will be administered by the American
          Arbitration Association (“<strong>AAA</strong>”) in accordance with the Commercial Arbitration Rules and the
          Supplementary Procedures for Consumer Related Disputes (the “<strong>AAA Rules</strong>”) then in effect,
          except as modified by this “Dispute Resolution” section. (The AAA Rules are available at www.adr.org/arb_med
          or by calling the AAA at 1-800-778-7879.) The Federal Arbitration Act will govern the interpretation and
          enforcement of this Section.
        </p>

        <p>
          <strong>Arbitration process.</strong> A party who desires to initiate arbitration must provide the other party
          with a written Demand for Arbitration as specified in the AAA Rules. (The AAA provides a form Demand for
          Arbitration at www.adr.org/aaa/ShowPDF? doc=ADRSTG_004175 and a separate form for California residents at
          www.adr.org/aaa/ShowPDF? doc=ADRSTG_015822.) The arbitrator will be either a retired judge or an attorney
          licensed to practice law in the state of California and will be selected by the parties from the AAA’s roster
          of consumer dispute arbitrators. If the parties are unable to agree upon an arbitrator within 7 days of
          delivery of the Demand for Arbitration, then the AAA will appoint the arbitrator in accordance with the AAA
          Rules.
        </p>

        <p>
          <strong>Arbitration location and procedure.</strong> Unless you and UFO agree otherwise, the arbitration will
          be conducted in the State of Delaware (unless the arbitrator selects another one if the selected place is
          unreasonably burdensome to either party). If your claim does not exceed $1,000, then the arbitration will be
          conducted solely on the basis of documents you and UFO submit to the arbitrator, unless you request a hearing
          or the arbitrator determines that a hearing is necessary. If your claim exceeds $1,000, your right to a
          hearing will be determined by the AAA Rules. Subject to the AAA Rules, the arbitrator will have the discretion
          to direct a reasonable exchange of information by the parties, consistent with the expedited nature of the
          arbitration.
        </p>

        <p>
          <strong>Arbitrator’s decision.</strong> The arbitrator will render an award within the time frame specified in
          the AAA Rules. The arbitrator’s decision will include the essential findings and conclusions upon which the
          arbitrator based the award. Judgment on the arbitration award may be entered in any court having jurisdiction
          thereof. The arbitrator’s award damages must be consistent with the terms of the “Limitation of liability”
          section above as to the types and the amounts of damages for which a party may be held liable. The arbitrator
          may award declaratory or injunctive relief only in favor of the claimant and only to the extent necessary to
          provide relief warranted by the claimant’s individual claim. If you prevail in arbitration you will be
          entitled to an award of attorneys’ fees and expenses, to the extent provided under applicable law. UFO will
          not seek, and hereby waives all rights UFO may have under applicable law to recover, attorneys’ fees and
          expenses if UFO prevail in arbitration.
        </p>

        <p>
          <strong>Fees.</strong> Your responsibility to pay any AAA filing, administrative and arbitrator fees will be
          solely as set forth in the AAA Rules.
        </p>

        <p>
          <strong>Changes.</strong> Notwithstanding the provisions of the modification-related provisions above, if UFO
          changes this “Dispute Resolution” section after the date you first accepted the Terms (or accepted any
          subsequent changes to the Terms), you may reject any such change by providing UFO written notice of such
          rejection by email to: {MailLink}, within 30 days of the date such change became effective, as indicated in
          the “Last update” date above. In order to be effective, the notice must include your full name and clearly
          indicate your intent to reject changes to this “Dispute Resolution” section. By rejecting changes, you are
          agreeing that you will arbitrate any Dispute between you and UFO in accordance with the provisions of this
          “Dispute Resolution” section as of the date you first accepted the Terms (or accepted any subsequent changes
          to the Terms).
        </p>
      </section>

      <section id='misc' className='policy-section'>
        <h2>19. Miscellaneous</h2>

        <p>
          19.1. <strong>Cause of action.</strong> Any cause of action you may have with respect to your use of the
          Services must be commenced within one year after the claim or cause of action arises.
        </p>

        <p>
          19.2. <strong>Enforceability.</strong> If for any reason a court of competent jurisdiction finds any provision
          of the Terms, or a portion thereof, to be unenforceable, that provision shall be enforced to the maximum
          extent permissible so as to affect the intent of the Terms and the remainder of the Terms shall continue in
          full force and effect. A printed version of the Terms shall be admissible in judicial or administrative
          proceedings.
        </p>

        <p>
          19.3. <strong>No waiver.</strong> No waiver by UFO of any term or condition set forth in the Terms shall be
          deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition,
          and any failure of UFO to assert a right or provision under the Terms shall not constitute a waiver of such
          right or provision.
        </p>

        <p>
          19.4. <strong>Severability.</strong> If any provision of the Terms is held by a court or other tribunal of
          competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be
          eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in
          full force and effect.
        </p>

        <p>
          19.5. <strong>Termination.</strong> Upon termination, all provisions of the Terms, which, by their nature,
          should survive termination, shall survive termination, including, without limitation, ownership provisions,
          warranty disclaimers, and limitations of liability.
        </p>
      </section>

      <section id='notice' className='policy-section'>
        <h2>20. Notice and takedown procedures</h2>

        <p>
          If you believe any materials accessible on or from the Services infringe your copyright, you may request the
          removal of those materials (or access thereto) from the Services by contacting UFO and providing the following
          information:
        </p>

        <ul>
          <li>
            Identification of the copyrighted work that you believe to be infringed. Please describe the work, and where
            possible include a copy or the location (e.g., application page) of an authorized version of the work.
          </li>
          <li>
            Identification of the material that you believe to be infringing and its location. Please describe the
            material and provide us with its URL or any other pertinent information that will allow us to locate the
            material.
          </li>
          <li>Your name, address, telephone number, and (if available) e-mail address</li>
          <li>
            A statement that you have a good faith belief that the use of the materials in the manner complained of is
            not authorized by the copyright owner, its agent, or the law.
          </li>
          <li>
            A statement that the information that you have supplied is accurate, and indicating that “under penalty of
            perjury, ” you are the copyright owner or are authorized to act on the copyright owner’s behalf.
          </li>
          <li>A signature or the electronic equivalent from the copyright holder or authorized representative.</li>
        </ul>
      </section>

      <div className='back-to-top'>
        <a href='#'>Back to Top ↑</a>
      </div>
    </div>
  );
};

export default PrivacyPolicyBlock;
