import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'Terms & Conditions | Orindle',
  description: 'Terms and Conditions for Orindle.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "name": "Terms and Conditions",
            "url": "https://orindle.com/terms"
          }
        ]
      }} />
      <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 prose prose-sm md:prose-base prose-gray">
        <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed max-w-none">
          <p>
            Welcome to Orindle! These terms and conditions outline the rules and regulations for the use of Orindle's services and website.
          </p>
          
          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use Orindle if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">2. Services</h2>
          <p>
            Orindle provides technical services including website development, local SEO optimization, WhatsApp lead integrations, and Google Business Profile management. We reserve the right to withdraw or amend the services we provide without notice.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">3. Subscriptions and Payments</h2>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Our services are billed on a setup fee + monthly subscription basis as outlined in our pricing tables.</li>
            <li>Unless otherwise stated, all fees are quoted in Indian Rupees (INR).</li>
            <li>Monthly subscription fees are billed in advance on a recurring basis.</li>
            <li>Failure to pay the monthly subscription fee may result in the suspension or termination of your services, including the taking down of the created website.</li>
          </ul>
          
          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">4. Cancellations</h2>
          <p>
            You may cancel your monthly subscription at any time with a 30-day notice period. Upon cancellation, your custom website, hosting, and connected integrations will be deactivated at the end of your billing cycle. Source code for proprietary systems remains the property of Orindle unless a separate buyout agreement is reached.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Orindle, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of our system, whether such liability is under contract. Orindle shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: tejas@orindle.com
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
