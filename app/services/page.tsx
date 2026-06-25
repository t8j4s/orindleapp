import { FinalCTA } from "@/components/FinalCTA";
import { Globe, MessageCircle, Star, Search, BarChart3, Smartphone, LayoutDashboard } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'Services - Website, WhatsApp Leads, Local SEO & Automation',
  description: 'Explore Orindle’s services including mobile-first website development, WhatsApp lead capture, Google Business Profile optimization, review request systems, local SEO, and AI automation for local businesses.',
  alternates: {
    canonical: 'https://orindle.com/services',
  },
  openGraph: {
    title: 'Services - Website, WhatsApp Leads, Local SEO & Automation',
    description: 'Explore Orindle’s services including mobile-first website development, WhatsApp lead capture, Google Business Profile optimization, review request systems, local SEO, and AI automation for local businesses.',
    url: 'https://orindle.com/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Website, WhatsApp Leads, Local SEO & Automation',
    description: 'Explore Orindle’s services including mobile-first website development, WhatsApp lead capture, Google Business Profile optimization, review request systems, local SEO, and AI automation for local businesses.',
  },
};

export default function ServicesPage() {
  const services = [
    { 
      id: "website",
      icon: Globe, color: "blue",
      title: "Mobile-First Website Development", 
      desc: "Fast, single-page, conversion-focused mobile sites that turn visitors into actual calls and WhatsApp messages.",
      features: ["Premium custom design", "Lightning fast loading", "Built for thumb-navigation", "Clear call-to-actions", "SEO structure built-in"]
    },
    { 
      id: "whatsapp",
      icon: MessageCircle, color: "green",
      title: "WhatsApp Lead System", 
      desc: "Instantly route website visitors to your WhatsApp chat with context on what they are looking for.",
      features: ["One-click chat initiation", "Pre-filled customer messages", "Automated welcome replies", "Never lose a lead to email", "Direct conversational sales"]
    },
    { 
      id: "reviews",
      icon: Star, color: "yellow",
      title: "Google Review Automation", 
      desc: "System to consistently ask customers for reviews, boosting your local ranking and customer trust.",
      features: ["Automated review links", "Smart filtering (internal feedback on low ratings)", "Review badges for website", "Higher Google Maps position", "Outrank local competitors"]
    },
    { 
      id: "seo",
      icon: Search, color: "indigo",
      title: "Local Search Optimization", 
      desc: "Optimize your Google Business Profile and website for local 'near me' searches so customers find you first.",
      features: ["Keyword optimization", "Service area mapping", "Local schema markup", "Google Profile configuration", "Monthly positioning reports"]
    },
    { 
      id: "dashboard",
      icon: LayoutDashboard, color: "purple",
      title: "Growth Dashboard", 
      desc: "Track new enquiries, call clicks, form submissions, WhatsApp leads, and follow-ups in one place.",
      features: ["Real-time lead alerts", "Follow-up reminders", "Conversion statistics", "Visitor insights", "Centralized CRM list"]
    },
  ];

  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    yellow: "bg-yellow-50 text-yellow-600",
    indigo: "bg-indigo-50 text-indigo-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "Website Development",
            "provider": { "@type": "Organization", "name": "Orindle" }
          },
          {
            "@type": "ItemList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Mobile-First Website Development" },
              { "@type": "ListItem", "position": 2, "name": "WhatsApp Lead System" },
              { "@type": "ListItem", "position": 3, "name": "Google Review Automation" },
              { "@type": "ListItem", "position": 4, "name": "Local Search Optimization" },
              { "@type": "ListItem", "position": 5, "name": "Growth Dashboard" }
            ]
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://orindle.com/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://orindle.com/services" }
            ]
          }
        ]
      }} />
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-heading text-[26px] font-bold text-gray-900 md:text-5xl">Our Services</h1>
          <p className="text-[14px] text-gray-500 md:text-lg">Everything you need to attract, capture, and convert local customers.</p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 flex flex-col gap-12">
          {services.map((svc, i) => (
            <div key={svc.id} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="md:col-span-1 flex flex-col items-start gap-4">
                 <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors[svc.color]}`}>
                    <svc.icon className="h-6 w-6" />
                 </div>
                 <h2 className="font-heading text-[18px] font-bold text-gray-900">{svc.title}</h2>
              </div>
              <div className="md:col-span-2 flex flex-col gap-4">
                 <p className="text-[14px] text-gray-600 leading-relaxed">{svc.desc}</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                   {svc.features.map((feature, j) => (
                     <div key={j} className="flex items-center gap-2 text-[12px] font-medium text-gray-700">
                       <span className="h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                       {feature}
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
