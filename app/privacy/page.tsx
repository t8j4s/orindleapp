import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'Privacy Policy | Orindle',
  description: 'Privacy Policy for Orindle.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://orindle.com/privacy"
          }
        ]
      }} />
      <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6 prose prose-sm md:prose-base prose-gray">
        <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        
        <div className="space-y-6 text-sm text-gray-700 leading-relaxed max-w-none">
          <p>
            At Orindle, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Orindle and how we use it.
          </p>
          
          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Provide, operate, and maintain our website and services.</li>
            <li>Improve, personalize, and expand our website offerings.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            <li>Send you emails or WhatsApp messages related to your account.</li>
          </ul>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">Log Files</h2>
          <p>
            Orindle follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, You can contact us:
            <br />
            By email: tejas@orindle.com
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
