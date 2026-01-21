import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container mx-auto p-6 text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Click-Fox! This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website click-fox.com, including any other media form, media channel, mobile website, or mobile 
            application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. 
            If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
          <p className="mb-4">
            We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you 
            about any changes by updating the “Last Updated” date of this Privacy Policy. You are encouraged to periodically 
            review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be
            subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use 
            of the Site after the date such revised Privacy Policy is posted.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. Collection of Your Information</h2>
          <h3 className="text-xl font-medium mb-3 text-blue-200">Personal Data</h3>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us when you register on the Site, express an
            interest in obtaining information about us or our products and services, when you participate in activities on 
            the Site, or otherwise when you contact us. The personal information that we collect depends on the context
            of your interactions with us and the Site, the choices you make, and the products and features you use.
          </p>
          <p className="mb-4">
            The personal information we collect may include the following:
          </p>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>Email address</li>
            <li>Username</li>
            <li>Any other information you choose to provide (e.g., profile picture)</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 text-blue-200">Derivative Data</h3>
          <p className="mb-4">
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type,
            your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. Use of Your Information</h2>
          <p className="mb-4">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.
            Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>Create and manage your account.</li>
            <li>Email you regarding your account</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Notify you of updates to the Site.</li>
            <li>Perform other business activities as needed.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Disclosure of Your Information</h2>
          <p className="mb-4">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <h3 className="text-xl font-medium mb-3 text-blue-200">By Law or to Protect Rights</h3>
          <p className="mb-4">
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy
            potential violations of our policies, or to protect the rights, property, and safety of others, we may share your
            information as permitted or required by any applicable law, rule, or regulation.
          </p>
          <h3 className="text-xl font-medium mb-3 text-blue-200">Third-Party Service Providers</h3>
          <p className="mb-4">
            We may share your information with third parties that perform services for us or on our behalf, including data analysis,
            email delivery, hosting services, customer service, and marketing assistance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">5. Security of Your Information</h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we
            have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our 
            efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed 
            against any interception or other type of misuse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">6. Policy for Children</h2>
          <p className="mb-4">
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware
             of any data we have collected from children under age 13, please contact us using the contact information provided below.
          </p>
        </section>

        <p className="text-sm text-gray-400 text-center">Last Updated: January 4, 2026</p>
      </div>
    </>
  );
};

export default PrivacyPolicy;

