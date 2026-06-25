import { FinalCTA } from "@/components/FinalCTA";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'Pricing - Local Business Website & Lead System Plans',
  description: 'Simple pricing for Indian local businesses. Choose website, WhatsApp lead system, review request, local SEO, and monthly growth plans built to capture more enquiries.',
  alternates: {
    canonical: 'https://www.orindle.com/pricing',
  },
  openGraph: {
    title: 'Pricing - Local Business Website & Lead System Plans',
    description: 'Simple pricing for Indian local businesses. Choose website, WhatsApp lead system, review request, local SEO, and monthly growth plans built to capture more enquiries.',
    url: 'https://www.orindle.com/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Local Business Website & Lead System Plans',
    description: 'Simple pricing for Indian local businesses. Choose website, WhatsApp lead system, review request, local SEO, and monthly growth plans built to capture more enquiries.',
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Product",
            "name": "Local Business Growth System",
            "offers": {
              "@type": "OfferCatalog",
              "name": "Pricing Plans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Starter",
                  "price": "9999",
                  "priceCurrency": "INR",
                  "description": "₹9,999 setup + ₹2,999/month"
                },
                {
                  "@type": "Offer",
                  "name": "Growth",
                  "price": "19999",
                  "priceCurrency": "INR",
                  "description": "₹19,999 setup + ₹6,999/month"
                },
                {
                  "@type": "Offer",
                  "name": "Pro",
                  "price": "34999",
                  "priceCurrency": "INR",
                  "description": "₹34,999 setup + ₹12,999/month"
                }
              ]
            }
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.orindle.com/" },
              { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.orindle.com/pricing" }
            ]
          }
        ]
      }} />
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-heading text-[26px] font-bold text-gray-900 md:text-5xl">Simple Pricing</h1>
          <p className="text-[14px] text-gray-500 md:text-lg">One-time setup fee. Flat monthly management. No surprises.</p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
           <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
             {/* Starter */}
             <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-[18px] font-bold text-gray-900">Starter</h3>
                <div className="mt-2 text-[12px] text-gray-500 h-10">For small businesses getting their first professional online footprint.</div>
                <div className="my-6 border-b border-gray-100 pb-6">
                  <div className="text-[24px] font-bold text-gray-900">₹9,999 <span className="text-[13px] font-normal text-gray-500">setup</span></div>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                   {["Premium 1-page website", "WhatsApp floating button", "Basic Contact form", "Google Maps integration", "On-page SEO fundamentals", "Mobile-first & responsive", "Domain & Hosting included"].map((item, i) => (
                     <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700">
                       <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-500 shrink-0" /> <span className="leading-tight">{item}</span>
                     </li>
                   ))}
                   {["WhatsApp Lead Dashboard", "Review System Automation"].map((item, i) => (
                     <li key={i} className="flex items-start gap-2 text-[13px] text-gray-400 line-through">
                       <X className="mt-0.5 h-4 w-4 text-gray-300 shrink-0" /> <span className="leading-tight">{item}</span>
                     </li>
                   ))}
                </ul>
                <Button variant="outline" className="w-full text-[13px] h-10" asChild>
                  <Link href="/contact">Choose Starter</Link>
                </Button>
             </div>

             {/* Growth */}
             <div className="flex flex-col rounded-2xl border-2 border-indigo-600 bg-white p-6 shadow-xl relative scale-100 md:scale-105 z-10">
                <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
                <h3 className="font-heading text-[18px] font-bold text-indigo-900">Growth</h3>
                <div className="mt-2 text-[12px] text-gray-500 h-10">The complete system to capture and convert local leads consistently.</div>
                <div className="my-6 border-b border-indigo-100 pb-6">
                  <div className="text-[24px] font-bold text-gray-900">₹19,999 <span className="text-[13px] font-normal text-gray-500">setup</span></div>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                   {["Everything in Starter", "Up to 8 inner pages", "WhatsApp Lead Capture form", "Google Review Request Engine", "Google Profile configuration", "Targeted local SEO optimization", "Monthly performance report"].map((item, i) => (
                     <li key={i} className="flex items-start gap-2 text-[13px] font-medium text-gray-900">
                       <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-500 shrink-0" /> <span className="leading-tight">{item}</span>
                     </li>
                   ))}
                </ul>
                <Button className="w-full text-[13px] h-10 bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                  <Link href="/contact">Choose Growth</Link>
                </Button>
             </div>

             {/* Pro */}
             <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-[18px] font-bold text-gray-900">Pro</h3>
                <div className="mt-2 text-[12px] text-gray-500 h-10">For established businesses looking to dominate their local market.</div>
                <div className="my-6 border-b border-gray-100 pb-6">
                  <div className="text-[24px] font-bold text-gray-900">₹34,999 <span className="text-[13px] font-normal text-gray-500">setup</span></div>
                </div>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                   {["Everything in Growth", "Up to 15 inner/service pages", "Missed-call SMS/WhatsApp follow-up", "Advanced Lead Dashboard", "Local SEO content expansion", "Monthly growth campaigns", "Priority 24/7 support"].map((item, i) => (
                     <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700">
                       <CheckCircle2 className="mt-0.5 h-4 w-4 text-gray-900 shrink-0" /> <span className="leading-tight">{item}</span>
                     </li>
                   ))}
                </ul>
                <Button variant="outline" className="w-full text-[13px] h-10 bg-gray-900 text-white hover:bg-gray-800" asChild>
                  <Link href="/contact">Choose Pro</Link>
                </Button>
             </div>
           </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-20 border-t border-gray-100 text-center">
         <div className="mx-auto max-w-2xl px-4">
             <h2 className="mb-4 font-heading text-[20px] font-bold text-gray-900">No Hidden Costs</h2>
             <p className="text-[13px] text-gray-600 leading-relaxed">
               Your monthly fee covers high-performance hosting, SSL certificates, daily backups, code updates, monthly local SEO tweaks, and direct technical support. You never have to worry about the technical side of your business again.
             </p>
         </div>
      </section>

      <FinalCTA />
    </>
  );
}
