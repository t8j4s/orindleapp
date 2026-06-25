import { FinalCTA } from "@/components/FinalCTA";
import { TrendingUp, MessageCircle, Star, MousePointerClick, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'Results - WhatsApp Lead System Case Studies | Orindle',
  description: 'See how Indian local businesses increase WhatsApp enquiries, get more Google reviews, and rank higher on local search with Orindle’s mobile-first website systems.',
  alternates: {
    canonical: 'https://orindle.com/results',
  },
  openGraph: {
    title: 'Results - WhatsApp Lead System Case Studies | Orindle',
    description: 'See how Indian local businesses increase WhatsApp enquiries, get more Google reviews, and rank higher on local search with Orindle’s mobile-first website systems.',
    url: 'https://orindle.com/results',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Results - WhatsApp Lead System Case Studies | Orindle',
    description: 'See how Indian local businesses increase WhatsApp enquiries, get more Google reviews, and rank higher on local search with Orindle’s mobile-first website systems.',
  },
};

export default function ResultsPage() {
  const metrics = [
    { title: "WhatsApp Enquiries", value: "+ 314%", icon: MessageCircle, desc: "Average increase in chat initiations compared to traditional email forms." },
    { title: "Google Reviews", value: "+ 85%", icon: Star, desc: "Increase in 5-star reviews generated within the first 60 days of system launch." },
    { title: "Lead Response Time", value: "< 2 mins", icon: TrendingUp, desc: "Automated instant replies ensure leads are never kept waiting." },
    { title: "Mobile Conversion", value: "x2.5", icon: MousePointerClick, desc: "Growth in mobile-visitor conversion rate vs standard desktop-first templates." },
  ];

  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "name": "Results & Case Studies",
            "url": "https://orindle.com/results"
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://orindle.com/" },
              { "@type": "ListItem", "position": 2, "name": "Results", "item": "https://orindle.com/results" }
            ]
          }
        ]
      }} />
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-heading text-[26px] font-bold text-gray-900 md:text-5xl">System Results</h1>
          <p className="text-[14px] text-gray-500 md:text-lg text-balance">The Orindle system is mathematically designed to improve your primary digital growth metrics.</p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
           
           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16 md:mb-24">
             {metrics.map((metric, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                   <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">
                     <metric.icon className="h-6 w-6" />
                   </div>
                   <div className="text-[28px] font-bold text-gray-900 mb-1 flex items-center justify-center gap-1">
                     {metric.value}
                   </div>
                   <h3 className="font-heading text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-2">{metric.title}</h3>
                   <p className="text-[12px] text-gray-500">{metric.desc}</p>
                </div>
             ))}
           </div>

           <div className="rounded-3xl bg-gray-900 text-white overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                 <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white w-fit border border-white/20">
                      Typical Client Transition
                    </div>
                    <h2 className="font-heading text-[22px] md:text-3xl font-bold mb-4">Before vs After Orindle</h2>
                    <p className="text-[13px] md:text-[14px] text-gray-400 leading-relaxed mb-8 text-balance">
                      Most local businesses come to us with a website that exists just to "look professional". But they complain that nobody actually calls them from it. We flip that metric.
                    </p>
                    
                    <ul className="flex flex-col gap-4">
                      {[
                        { title: "Before:", desc: "User views site, searches for a number, decides to do it later, forgets." },
                        { title: "After:", desc: "User views mobile site, clicks floating WhatsApp button, instantly sends pre-filled enquiry, gets automated welcome message." }
                      ].map((phase, i) => (
                         <li key={i} className="flex flex-col bg-white/5 p-4 rounded-xl border border-white/10">
                            <span className="font-bold text-[13px] mb-1 text-blue-400">{phase.title}</span>
                            <span className="text-[13px] text-gray-300">{phase.desc}</span>
                         </li>
                      ))}
                    </ul>
                 </div>
                 <div className="bg-gray-800 p-8 md:p-12 border-l border-gray-700 flex flex-col justify-center">
                    <h3 className="font-heading text-[18px] font-bold mb-6 flex items-center gap-2">
                       <ArrowUpRight className="text-green-400 h-5 w-5" /> Conversion Impact
                    </h3>
                    
                    <div className="flex flex-col gap-6 relative">
                       <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-700" />
                       
                       <div className="relative pl-8">
                         <div className="absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full bg-gray-500" />
                         <div className="text-[12px] text-gray-400 mb-1">Old Website Form</div>
                         <div className="text-[14px] font-bold">1.2% Conversion Rate</div>
                       </div>
                       
                       <div className="relative pl-8">
                         <div className="absolute left-2 top-1.5 h-2.5 w-2.5 rounded-full bg-blue-500" />
                         <div className="text-[12px] text-blue-400 mb-1">Orindle WhatsApp System</div>
                         <div className="text-[20px] font-bold text-white">4.8% Conversion Rate</div>
                       </div>

                       <div className="mt-4 text-[12px] text-gray-400 italic">
                         *Based on aggregate average data from transitioning clients in the home services sector over a 90-day tracking period.
                       </div>
                    </div>
                    
                 </div>
              </div>
           </div>
        </div>
      </section>
      
      <FinalCTA />
    </>
  );
}
