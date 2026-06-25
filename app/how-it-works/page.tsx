import { FinalCTA } from "@/components/FinalCTA";
import { Search, PenTool, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'How It Works - From Demo to Launch | Orindle',
  description: 'See how Orindle builds your local business website and WhatsApp lead system. From a free custom demo to launch and monthly growth optimization.',
  alternates: {
    canonical: 'https://orindle.com/how-it-works',
  },
  openGraph: {
    title: 'How It Works - From Demo to Launch | Orindle',
    description: 'See how Orindle builds your local business website and WhatsApp lead system. From a free custom demo to launch and monthly growth optimization.',
    url: 'https://orindle.com/how-it-works',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How It Works - From Demo to Launch | Orindle',
    description: 'See how Orindle builds your local business website and WhatsApp lead system. From a free custom demo to launch and monthly growth optimization.',
  },
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "We Study Your Business",
      desc: "We start with a brief 15-minute call or WhatsApp chat to understand your services, your target local area, and your ideal customer.",
      points: ["Understand primary high-margin services", "Identify local competitor landscape", "Gather existing logos, photos, or pricing"]
    },
    {
      num: "02",
      icon: PenTool,
      title: "Free Demo Creation",
      desc: "Before you pay anything, our team designs a custom, mobile-first demo homepage tailored to your business.",
      points: ["Risk-free visual preview", "Mobile-first layout structure", "Initial copywriting based on local intent"]
    },
    {
      num: "03",
      icon: CheckCircle2,
      title: "Review & System Build",
      desc: "Once you approve the design and select a plan, we build out the full system: the remaining pages, WhatsApp links, and Google Profile setup.",
      points: ["Full website development", "WhatsApp automation integration", "Google Business Profile optimization"]
    },
    {
      num: "04",
      icon: Rocket,
      title: "Launch & Monthly Growth",
      desc: "Your system goes live. Moving forward, we handle the hosting, security, and monthly local SEO tasks so you just focus on new leads.",
      points: ["Fast cloud hosting setup", "Live tracking dashboard activation", "Ongoing local search optimization"]
    }
  ];

  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "HowTo",
            "name": "How to get a Website and WhatsApp Lead System with Orindle",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "We Study Your Business",
                "text": "We start with a brief 15-minute call or WhatsApp chat to understand your services."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Free Demo Creation",
                "text": "We design a custom, mobile-first demo homepage tailored to your business."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Review & System Build",
                "text": "We build out the full system: pages, WhatsApp links, and Google Profile setup."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Launch & Monthly Growth",
                "text": "Your system goes live. We handle hosting and monthly local SEO tasks."
              }
            ]
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://orindle.com/" },
              { "@type": "ListItem", "position": 2, "name": "How It Works", "item": "https://orindle.com/how-it-works" }
            ]
          }
        ]
      }} />
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-heading text-[26px] font-bold text-gray-900 md:text-5xl">How It Works</h1>
          <p className="text-[14px] text-gray-500 md:text-lg">We handle the technical heavy lifting so you don't have to.</p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white relative">
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative">
            {/* Vertical connecting line for desktop */}
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gray-100" />
            
            <div className="flex flex-col gap-12 md:gap-20">
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                   <div className="flex flex-col items-start z-10 shrink-0">
                     <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm text-gray-900 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                       <step.icon className="h-7 w-7" />
                     </div>
                   </div>
                   
                   <div className="flex flex-col bg-white md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none border border-gray-100 md:border-transparent shadow-sm md:shadow-none flex-1">
                      <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">Step {step.num}</div>
                      <h2 className="font-heading text-[20px] font-bold text-gray-900 mb-3">{step.title}</h2>
                      <p className="text-[14px] text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                      
                      <div className="flex flex-col gap-3 p-5 bg-gray-50 rounded-xl">
                        <h4 className="text-[12px] font-bold text-gray-900 uppercase tracking-wider mb-1">What happens here</h4>
                        {step.points.map((pt, j) => (
                          <div key={j} className="flex items-center gap-2.5 text-[13px] text-gray-700">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                            {pt}
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <FinalCTA />
    </>
  );
}
