import React from 'react';

const Disclaimer = () => {
  return (
    <>
      <div className="container mx-auto p-6 text-white min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">Disclaimer</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. General Information</h2>
          <p className="mb-4">
            All the information on this website click-fox.com is published in good faith and for general information
            purpose only. Click-Fox does not make any warranties about the completeness, reliability and accuracy of
            this information. Any action you take upon the information you find on this website (Click-Fox), is strictly 
            at your own risk. Click-Fox will not be liable for any losses and/or damages in connection with the use of our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. External Links Disclaimer</h2>
          <p className="mb-4">
            From our website, you can visit other websites by following hyperlinks to such external sites. While we 
            strive to provide only quality links to useful and ethical websites, we have no control over the content 
            and nature of these sites. These links to other websites do not imply a recommendation for all the content found
            on these sites. Site owners and content may change without notice and may occur before we have the opportunity 
            to remove a link which may have gone 'bad'.
          </p>
          <p className="mb-4">
            Please be also aware that when you leave our website, other sites may have different privacy policies and terms 
            which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their 
            "Terms of Service" before engaging in any business or uploading any information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. Consent</h2>
          <p className="mb-4">
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Update</h2>
          <p className="mb-4">
            Should we update, amend or make any changes to this document, those changes will be prominently posted here.
          </p>
        </section>

        <p className="text-sm text-gray-400 text-center">Last Updated: January 4, 2026</p>
      </div>
    </>
  );
};

export default Disclaimer;

