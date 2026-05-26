import { FinalCTA } from "@/components/FinalCTA";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'FAQ - Questions About Orindle Websites & Lead Systems',
  description: 'Frequently asked questions about Orindle’s mobile-first websites, WhatsApp lead automation, pricing, Google Business optimization, and local SEO services for Indian businesses.',
  alternates: {
    canonical: 'https://www.orindle.com/faq',
  },
  openGraph: {
    title: 'FAQ - Questions About Orindle Websites & Lead Systems',
    description: 'Frequently asked questions about Orindle’s mobile-first websites, WhatsApp lead automation, pricing, Google Business optimization, and local SEO services for Indian businesses.',
    url: 'https://www.orindle.com/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Questions About Orindle Websites & Lead Systems',
    description: 'Frequently asked questions about Orindle’s mobile-first websites, WhatsApp lead automation, pricing, Google Business optimization, and local SEO services for Indian businesses.',
  },
};

export default function FAQPage() {
  const faqs = [
     { q: "Do I need an existing website?", a: "No, we build everything from scratch for you. If you do have one, we will redesign it to be faster and mobile-first." },
     { q: "Can you make a free demo first?", a: "Yes, we are happy to build a free demo homepage for your business name before you commit. We want you to love the design before paying a rupee." },
     { q: "Is WhatsApp automation included?", a: "Yes, our Growth and Pro plans include direct WhatsApp integration to capture leads instantly, replacing traditional slow email forms." },
     { q: "Do you guarantee Google ranking?", a: "Nobody can guarantee exact #1 rankings. However, our system is optimized from day one with local SEO best practices (schema, keyword mapping, fast loading) to give you the highest statistical chance of ranking." },
     { q: "Can I cancel the monthly service?", a: "Yes, our monthly service runs month-to-month and you can cancel anytime with 30 days notice. Note that the website hosting and CRM features are tied to the active subscription." },
     { q: "How long does it take to launch?", a: "Usually 7-14 days depending on the plan you choose and how quickly you approve the initial demo." },
     { q: "Do you work with businesses outside Pune?", a: "Absolutely. We work with local businesses all across India. Our systems work perfectly regardless of your city." },
     { q: "Will the website work on mobile?", a: "Yes! Our websites are designed mobile-first. In India, over 80% of local searches happen on mobile, so our experience is optimized specifically for smartphone screens." },
     { q: "What happens if I need to update business hours or photos?", a: "With our Growth and Pro plans, simple text and image updates are included in your monthly management. Just WhatsApp us your changes." },
  ];

  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.orindle.com/" },
              { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://www.orindle.com/faq" }
            ]
          }
        ]
      }} />
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-heading text-[26px] font-bold text-gray-900 md:text-5xl">Frequently Asked Questions</h1>
          <p className="text-[14px] text-gray-500 md:text-lg">Got questions? We've got answers.</p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 flex flex-col gap-3">
           {faqs.map((faq, i) => (
             <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5 open:bg-gray-50 transition-colors">
               <summary className="flex cursor-pointer items-center justify-between font-heading text-[15px] font-semibold text-gray-900 list-none">
                 {faq.q}
                 <span className="ml-4 transition-transform group-open:rotate-45 text-gray-400 font-normal text-xl leading-none">+</span>
               </summary>
               <div className="mt-4 text-[13px] text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                 {faq.a}
               </div>
             </details>
           ))}
           
           <div className="mt-10 rounded-2xl bg-blue-50 border border-blue-100 p-8 text-center flex flex-col items-center">
             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
               <MessageCircle className="h-6 w-6" />
             </div>
             <h3 className="font-heading text-[18px] font-bold text-gray-900 mb-2">Still have questions?</h3>
             <p className="text-[13px] text-gray-600 mb-6">Chat with us directly on WhatsApp and we'll clarify everything.</p>
             <Button variant="whatsapp" asChild>
               <a href="https://wa.me/919021923579" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
             </Button>
           </div>
        </div>
      </section>
    </>
  );
}
