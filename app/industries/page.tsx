import { FinalCTA } from "@/components/FinalCTA";
import { Wrench, Zap, HeartPulse, Stethoscope, PaintBucket, Truck, BookOpen, Snowflake, Camera, Scissors, HardHat, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'Industries - Websites for Plumbers, Clinics, Salons & More',
  description: 'Orindle builds lead generation websites and WhatsApp systems for local service businesses in India, including plumbers, electricians, clinics, interior designers, and more.',
  alternates: {
    canonical: 'https://orindle.com/industries',
  },
  openGraph: {
    title: 'Industries - Websites for Plumbers, Clinics, Salons & More',
    description: 'Orindle builds lead generation websites and WhatsApp systems for local service businesses in India, including plumbers, electricians, clinics, interior designers, and more.',
    url: 'https://orindle.com/industries',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries - Websites for Plumbers, Clinics, Salons & More',
    description: 'Orindle builds lead generation websites and WhatsApp systems for local service businesses in India, including plumbers, electricians, clinics, interior designers, and more.',
  },
};

export default function IndustriesPage() {
  const industries = [
    { name: "Plumbers", icon: Wrench, desc: "Capture emergency leak and repair search traffic instantly.", features: ["24/7 call tracking", "Service area targeted setup"] },
    { name: "Electricians", icon: Zap, desc: "Build trust with residential and commercial clients fast.", features: ["Before/after galleries", "License & certification badges"] },
    { name: "Dentists & Clinics", icon: Stethoscope, desc: "Increase patient bookings directly from Google Maps.", features: ["One-click appointment forms", "Patient review campaigns"] },
    { name: "Interior Designers", icon: PaintBucket, desc: "Showcase your portfolio and capture high-value leads.", features: ["Visual project galleries", "Consultation booking forms"] },
    { name: "Packers & Movers", icon: Truck, desc: "Get more quote requests from people relocating locally.", features: ["Multi-step quote calculators", "Trust & safety badges"] },
    { name: "Coaching Classes", icon: BookOpen, desc: "Boost enrollments for local tutoring and academy programs.", features: ["Batch schedule displays", "Lead capture for trial classes"] },
    { name: "AC Repair Services", icon: Snowflake, desc: "Dominate seasonal local searches for quick repairs.", features: ["Instant WhatsApp booking", "Maintenance plan upselling"] },
    { name: "CCTV Installers", icon: Camera, desc: "Generate site-visit requests from businesses and homes.", features: ["Package comparison tables", "Security consultation forms"] },
    { name: "Salons & Spas", icon: Scissors, desc: "Increase walk-ins and appointment bookings.", features: ["Service menu integration", "Stylist portfolios"] },
    { name: "Contractors", icon: HardHat, desc: "Secure more site visits and long-term project bids.", features: ["Past project case studies", "Material brand trust badges"] },
    { name: "Pest Control", icon: ShieldCheck, desc: "Capture urgent requests and sell annual contracts.", features: ["Emergency response banners", "Recurring service pitches"] },
    { name: "Healthcare Clinics", icon: HeartPulse, desc: "Improve local patient discovery and trust signals.", features: ["Doctor profiles", "Specialty service pages"] },
  ];

  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "name": "Industries We Serve",
            "url": "https://orindle.com/industries"
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://orindle.com/" },
              { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://orindle.com/industries" }
            ]
          }
        ]
      }} />
      <section className="bg-gray-50 pt-16 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 font-heading text-[26px] font-bold text-gray-900 md:text-5xl">Our Industries</h1>
          <p className="text-[14px] text-gray-500 md:text-lg text-balance">We specialize in growth systems for service-based local businesses that rely heavily on inbound enquiries and local search visibility.</p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {industries.map((ind, i) => (
                <div key={i} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                       <ind.icon className="h-5 w-5" />
                     </div>
                     <h3 className="font-heading text-[16px] font-bold text-gray-900">{ind.name}</h3>
                   </div>
                   <p className="text-[13px] text-gray-600 mb-4 h-10 leading-relaxed">{ind.desc}</p>
                   
                   <div className="mt-auto border-t border-gray-50 pt-4 flex flex-col gap-2">
                     {ind.features.map((feat, j) => (
                       <span key={j} className="text-[11px] font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded inline-block w-fit">
                         {feat}
                       </span>
                     ))}
                   </div>
                </div>
             ))}
           </div>
           
           <div className="mt-12 md:mt-20 rounded-2xl bg-gray-900 p-8 text-center text-white flex flex-col items-center">
             <h2 className="mb-3 font-heading text-[20px] font-bold">Don't see your specific industry?</h2>
             <p className="mb-6 text-[13px] text-gray-400 max-w-lg text-balance">If your business relies on local customers calling you or visiting your location, our system will work for you.</p>
             <Button variant="outline" className="border-gray-700 bg-gray-800 text-white hover:bg-white hover:text-gray-900" asChild>
                <Link href="/contact">Ask us about your business <ArrowRight className="ml-2 h-4 w-4" /></Link>
             </Button>
           </div>
        </div>
      </section>
      
      <FinalCTA />
    </>
  );
}
