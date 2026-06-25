import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import {
  MessageCircle, ArrowRight, CheckCircle2, TrendingUp, Users,
  Globe, Smartphone, Star, BarChart3, Clock, BellRing,
  Wrench, Zap, HeartPulse, Stethoscope, PaintBucket,
  Truck, BookOpen, Snowflake, Camera, Scissors, HardHat, ShieldCheck, Search
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Orindle - Website + WhatsApp Lead System for Local Businesses",
  description: "Get a mobile-first website connected with WhatsApp, Google Business Profile, reviews, lead forms, and local SEO. Orindle helps Indian local businesses capture more enquiries and stop losing leads.",
  alternates: {
    canonical: "https://orindle.com/",
  },
  openGraph: {
    title: "Orindle - Website + WhatsApp Lead System for Local Businesses",
    description: "Get a mobile-first website connected with WhatsApp, Google Business Profile, reviews, lead forms, and local SEO. Orindle helps Indian local businesses capture more enquiries and stop losing leads.",
    url: "https://orindle.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orindle - Website + WhatsApp Lead System for Local Businesses",
    description: "Get a mobile-first website connected with WhatsApp, Google Business Profile, reviews, lead forms, and local SEO. Orindle helps Indian local businesses capture more enquiries and stop losing leads.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "name": "Orindle",
            "url": "https://orindle.com",
            "email": "tejas@orindle.com",
            "telephone": "+91 90219 23579",
            "sameAs": [],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 90219 23579",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi", "Marathi"]
            }
          },
          {
            "@type": "LocalBusiness",
            "name": "Orindle",
            "url": "https://orindle.com",
            "email": "tejas@orindle.com",
            "telephone": "+91 90219 23579",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pune",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "priceRange": "₹₹",
            "description": "Orindle builds mobile-first websites, WhatsApp lead systems, review request flows, Google Business Profile optimization, and local SEO foundations for Indian local businesses."
          },
          {
            "@type": "WebSite",
            "name": "Orindle",
            "alternateName": "Orindle",
            "url": "https://orindle.com/",
            "description": "Website and WhatsApp lead systems for Indian local businesses."
          },
          {
            "@type": "Service",
            "name": "Website + WhatsApp Lead System for Local Businesses",
            "provider": {
              "@type": "Organization",
              "name": "Orindle"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Website development, WhatsApp lead capture, local SEO, Google Business Profile optimization, review request system",
            "description": "Orindle helps local businesses capture more enquiries with mobile-first websites connected with WhatsApp, Google, reviews, forms, and local SEO."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://orindle.com/"
              }
            ]
          }
        ]
      }} />
      {/* 2. Hero Section */}
      <section className="relative overflow-hidden bg-white pt-10 pb-12 md:pt-20 md:pb-24">
        <div className="absolute inset-x-0 h-[300px] bg-gradient-to-b from-gray-50 to-white top-0" />
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6 relative z-10">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="flex flex-col max-w-xl">
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700 md:text-sm self-start">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 mr-1.5 animate-pulse" />
                For Indian Local Businesses
              </div>
              <h1 className="mb-4 font-heading text-[28px] leading-tight font-bold tracking-tight text-gray-900 md:text-5xl text-balance">
                Turn Your Local Business Website Into a Lead Machine
              </h1>
              <p className="mb-6 text-[14px] leading-relaxed text-gray-500 md:text-lg text-balance">
                We build mobile-first websites connected with WhatsApp, Google, reviews, and follow-up systems so local businesses can capture more enquiries and stop losing leads.
              </p>
              
              <div className="flex flex-col gap-3 sm:flex-row mb-6">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Get Free Demo Website <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto text-white" asChild>
                  <a href="https://wa.me/919021923579" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1.5 h-4 w-4" fill="currentColor" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                {["Mobile-first websites", "WhatsApp lead capture", "Local SEO ready", "Review system included"].map((badge, i) => (
                  <div key={i} className="flex items-center text-[11px] font-medium text-gray-600 md:text-[13px]">
                    <CheckCircle2 className="mr-1.5 h-3.5 w-3.5 text-green-500" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup Visual */}
            <div className="relative mx-auto w-full max-w-sm md:max-w-none md:ml-auto">
              <div className="rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-gray-200/50 flex flex-col gap-3 mt-4 md:mt-0">
                <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Orindle Dashboard</span>
                </div>
                
                <div className="flex flex-col gap-2 relative">
                  <div className="flex items-center justify-between rounded-lg bg-gray-50 p-2.5 animate-in slide-in-from-bottom-2 duration-500">
                     <div className="flex items-center gap-2.5">
                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                          <Users className="h-3.5 w-3.5" />
                       </div>
                       <div>
                         <p className="text-[11px] font-semibold text-gray-900">New Website Enquiry</p>
                         <p className="text-[10px] text-gray-500">Rahul K. looking for services</p>
                       </div>
                     </div>
                     <span className="text-[9px] text-gray-400">2 min ago</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-green-50 p-2.5 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-150">
                     <div className="flex items-center gap-2.5">
                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-green-100 text-green-600">
                          <MessageCircle className="h-3.5 w-3.5" />
                       </div>
                       <div>
                         <p className="text-[11px] font-semibold text-gray-900">WhatsApp Follow-up Sent</p>
                         <p className="text-[10px] text-gray-500">Automated intro message</p>
                       </div>
                     </div>
                     <span className="text-[9px] text-gray-400">Just now</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-2.5 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-300">
                     <div className="flex items-center gap-2.5">
                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-yellow-100 text-yellow-600">
                          <Star className="h-3.5 w-3.5" />
                       </div>
                       <div>
                         <p className="text-[11px] font-semibold text-gray-900">Google Review Request</p>
                         <p className="text-[10px] text-gray-500">Sent to recent customer</p>
                       </div>
                     </div>
                     <span className="text-[9px] text-gray-400">1 hr ago</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-purple-50 p-2.5 animate-in slide-in-from-bottom-2 fade-in duration-500 delay-500">
                     <div className="flex items-center gap-2.5">
                       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-purple-100 text-purple-600">
                          <Smartphone className="h-3.5 w-3.5" />
                       </div>
                       <div>
                         <p className="text-[11px] font-semibold text-gray-900">Call Button Clicked</p>
                         <p className="text-[10px] text-gray-500">From mobile website</p>
                       </div>
                     </div>
                     <span className="text-[9px] text-gray-400">3 hrs ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="bg-gray-50 py-12 md:py-20 border-y border-gray-100">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            <h2 className="mb-3 font-heading text-[22px] font-bold text-gray-900 md:text-3xl text-balance">
              Most Local Businesses Don't Have a Lead Problem. They Have a Follow-Up Problem.
            </h2>
            <p className="text-[13px] text-gray-500 md:text-[15px]">Stop losing potential customers to competitors.</p>
          </div>
          
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: Globe, title: "Visitors don't convert", desc: "Customers visit your Google profile but don't take action." },
              { icon: Clock, title: "No one follows up", desc: "People call or message but responses are delayed." },
              { icon: Smartphone, title: "Outdated website", desc: "Looks unprofessional and doesn't load well on phones." },
              { icon: MessageCircle, title: "Messy WhatsApp", desc: "Enquiries get lost and aren't organized properly." },
              { icon: Star, title: "Missing reviews", desc: "Happy customers forget to leave Google reviews." },
              { icon: ShieldCheck, title: "Low trust online", desc: "Competitors look more professional and trustworthy." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-xl bg-white p-4 border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600 mb-1">
                  <item.icon className="h-4 w-4" />
                </div>
                <h3 className="font-heading text-[14px] font-bold text-gray-900">{item.title}</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solution Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="mb-3 font-heading text-[22px] font-bold text-gray-900 md:text-3xl">
              Orindle Builds Your Complete Local Growth System
            </h2>
            <p className="text-[13px] text-gray-500 md:text-[15px]">Everything connected. Everything working for you automatically.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe, color: "blue", title: "Professional Website", desc: "Fast, single-page, conversion-focused mobile site." },
              { icon: MessageCircle, color: "green", title: "WhatsApp Lead Capture", desc: "Instantly route website visitors to WhatsApp chat." },
              { icon: BellRing, color: "yellow", title: "Missed Call Follow-Up", desc: "Automated SMS/WhatsApp to callers you missed." },
              { icon: Star, color: "purple", title: "Google Review Requests", desc: "System to consistently ask customers for reviews." },
              { icon: Search, color: "indigo", title: "Local SEO Setup", desc: "Optimize your profile for local 'near me' searches." },
              { icon: TrendingUp, color: "rose", title: "Monthly Campaigns", desc: "We help push offers and updates to your list." },
            ].map((feature, i) => {
              const bgColors: Record<string, string> = {
                blue: "bg-blue-50 text-blue-600",
                green: "bg-green-50 text-green-600",
                yellow: "bg-yellow-50 text-yellow-600",
                purple: "bg-purple-50 text-purple-600",
                indigo: "bg-indigo-50 text-indigo-600",
                rose: "bg-rose-50 text-rose-600",
              };
              return (
                <div key={i} className="group flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                   <div className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold ${bgColors[feature.color]}`}>
                      <feature.icon className="h-5 w-5" />
                   </div>
                   <div>
                     <h3 className="mb-1 font-heading text-[15px] font-bold text-gray-900">{feature.title}</h3>
                     <p className="text-[12px] text-gray-500 leading-relaxed">{feature.desc}</p>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Services Detail (Compact preview) */}
      <section className="bg-gray-900 py-16 md:py-24 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="mb-10 md:mb-14">
            <h2 className="mb-3 font-heading text-[22px] font-bold md:text-3xl">
              Everything Your Local Business Needs Online
            </h2>
            <p className="text-[13px] text-gray-400 md:text-[15px] max-w-2xl">One agency to handle your entire local online presence so you can focus on the work.</p>
          </div>

          <div className="grid gap-1 border-t border-b border-gray-800 py-1 sm:grid-cols-2 md:grid-cols-3">
             {[
               { title: "Website Development", desc: "Fast, mobile-first, SEO-ready websites built to convert visitors into enquiries." },
               { title: "WhatsApp Automation", desc: "Capture leads, send confirmations, and follow up with prospects directly through WhatsApp." },
               { title: "Google Profile Optimization", desc: "Improve your local presence with better profile structure, service keywords, and photos." },
               { title: "Review Growth System", desc: "Send honest review requests to happy customers and build trust on Google." },
               { title: "Lead Dashboard", desc: "Track new enquiries, call clicks, form submissions, WhatsApp leads, and follow-ups." },
               { title: "Local SEO", desc: "Add location-based keywords, schema markup, service pages, meta tags, and content." },
             ].map((svc, i) => (
                <div key={i} className="p-4 md:p-6 hover:bg-gray-800/50 transition-colors rounded-xl flex flex-col gap-2">
                   <h3 className="font-heading text-[14px] font-semibold">{svc.title}</h3>
                   <p className="text-[12px] text-gray-400 leading-relaxed">{svc.desc}</p>
                </div>
             ))}
          </div>
          
          <div className="mt-8">
             <Button variant="outline" className="border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white" asChild>
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
             </Button>
          </div>
        </div>
      </section>

      {/* 6. Industries Section */}
      <section className="bg-gray-50 py-12 md:py-20">
         <div className="mx-auto w-full max-w-6xl px-4 md:px-6 text-center">
            <h2 className="mb-8 font-heading text-[22px] font-bold text-gray-900 md:text-3xl">
              Built For Local Businesses That Depend On Enquiries
            </h2>
            
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                { name: "Plumbers", icon: Wrench, focus: "Emergency fixes" },
                { name: "Electricians", icon: Zap, focus: "Quick response" },
                { name: "Dentists", icon: Stethoscope, focus: "Book appointments" },
                { name: "Clinics", icon: HeartPulse, focus: "Patient trust" },
                { name: "Interior", icon: PaintBucket, focus: "Project leads" },
                { name: "Movers", icon: Truck, focus: "Get estimates" },
                { name: "Coaching", icon: BookOpen, focus: "Higher enrollments" },
                { name: "AC Repair", icon: Snowflake, focus: "Service bookings" },
                { name: "CCTV", icon: Camera, focus: "Install quotes" },
                { name: "Salons", icon: Scissors, focus: "Walk-ins & combos" },
                { name: "Contractors", icon: HardHat, focus: "Site visits" },
                { name: "Pest Control", icon: ShieldCheck, focus: "Annual contracts" },
              ].map((ind, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-white p-4 transition-all hover:-translate-y-1 hover:border-gray-200 hover:shadow-sm">
                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600">
                     <ind.icon className="h-5 w-5" />
                   </div>
                   <h3 className="text-[12px] font-bold text-gray-900 text-center">{ind.name}</h3>
                   <span className="text-[10px] text-gray-500 text-center leading-tight">{ind.focus}</span>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 7. How it works */}
      <section className="bg-white py-12 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-heading text-[22px] font-bold text-gray-900 md:text-3xl">From Demo To Launch In 4 Simple Steps</h2>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
             {[
               { num: "01", title: "We study your business", desc: "Brief call to understand your services and local area." },
               { num: "02", title: "Free demo homepage", desc: "We build a preview so you can see exactly what you get." },
               { num: "03", title: "You approve", desc: "If you love it, we finalize the remaining pages and setup." },
               { num: "04", title: "Launch growth system", desc: "Website goes live fully connected to WhatsApp & Google." },
             ].map((step, i) => (
                <div key={i} className="relative flex flex-col gap-3 rounded-2xl bg-gray-50 p-5 pt-8">
                  <div className="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-[12px] font-bold text-white shadow-sm">
                    {step.num}
                  </div>
                  <h3 className="font-heading text-[14px] font-bold text-gray-900 mt-2">{step.title}</h3>
                  <p className="text-[12px] text-gray-500">{step.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. Comparison */}
      <section className="bg-gray-50 py-12 md:py-20 border-y border-gray-100">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
           <h2 className="mb-8 text-center font-heading text-[20px] font-bold text-gray-900 md:text-2xl">
              Normal Website vs Orindle Growth System
           </h2>
           
           <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm opacity-80 grayscale-[30%]">
                 <h3 className="mb-4 text-[15px] font-bold text-gray-700 underline decoration-red-200 underline-offset-4">Normal Website</h3>
                 <ul className="flex flex-col gap-3">
                   {["Looks good but doesn't follow up", "No WhatsApp automation", "No review system included", "No lead tracking dashboard", "No monthly campaign support"].map((item, i) => (
                     <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600">
                       <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
                       <span className="leading-snug">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>

              <div className="relative rounded-2xl border-2 border-indigo-500 bg-white p-6 shadow-md shadow-indigo-100">
                 <div className="absolute top-0 right-4 -translate-y-1/2 rounded-full bg-indigo-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                   The Orindle Way
                 </div>
                 <h3 className="mb-4 text-[15px] font-bold text-indigo-900 underline decoration-indigo-200 underline-offset-4">Orindle Growth System</h3>
                 <ul className="flex flex-col gap-3">
                   {["Built to capture enquiries instantly", "WhatsApp connected & automated", "Review request system built-in", "Lead tracking metrics dashboard", "Monthly growth campaign support"].map((item, i) => (
                     <li key={i} className="flex items-start gap-2 text-[13px] font-medium text-gray-900">
                       <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-500" />
                       <span className="leading-snug">{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* 9. Pricing Preview (Minimal) */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
           <div className="text-center mb-10">
              <h2 className="mb-2 font-heading text-[22px] font-bold text-gray-900 md:text-3xl">Simple Pricing For Local Businesses</h2>
              <p className="text-[13px] text-gray-500">Transparent costs. No hidden fees.</p>
           </div>
           
           <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-3">
             {/* Starter */}
             <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-[16px] font-bold text-gray-900">Starter</h3>
                <div className="mt-2 text-[11px] text-gray-500 h-8">For small businesses starting online.</div>
                <div className="my-4 border-b border-gray-50 pb-4">
                  <div className="text-[20px] font-bold text-gray-900">₹9,999 <span className="text-[12px] font-normal text-gray-500">setup</span></div>
                </div>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                   {["1-page website", "WhatsApp button", "Contact form", "Google Maps", "Basic SEO", "Mobile-first design"].map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-[12px] text-gray-600">
                       <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> {item}
                     </li>
                   ))}
                </ul>
                <Button variant="outline" className="w-full text-[12px]" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
             </div>

             {/* Growth */}
             <div className="relative flex flex-col rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-xl z-10 scale-100 md:scale-105">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                  Recommended
                </div>
                <h3 className="font-heading text-[16px] font-bold text-gray-900">Growth</h3>
                <div className="mt-2 text-[11px] text-gray-500 h-8">Best for serious local businesses.</div>
                <div className="my-4 border-b border-gray-100 pb-4">
                  <div className="text-[20px] font-bold text-gray-900">₹19,999 <span className="text-[12px] font-normal text-gray-500">setup</span></div>
                </div>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                   {["5–8 page website", "WhatsApp lead system", "Review request system", "Google Profile config", "Targeted local SEO", "Monthly updates"].map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-[12px] font-medium text-gray-900">
                       <CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> {item}
                     </li>
                   ))}
                </ul>
                <Button className="w-full text-[12px]" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
             </div>

             {/* Pro */}
             <div className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-[16px] font-bold text-gray-900">Pro</h3>
                <div className="mt-2 text-[11px] text-gray-500 h-8">Complete online dominance.</div>
                <div className="my-4 border-b border-gray-50 pb-4">
                  <div className="text-[20px] font-bold text-gray-900">₹34,999 <span className="text-[12px] font-normal text-gray-500">setup</span></div>
                </div>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                   {["10–15 page website", "WhatsApp automation", "Missed-call follow-up", "Lead dashboard", "Local SEO pages", "Monthly campaigns"].map((item, i) => (
                     <li key={i} className="flex items-center gap-2 text-[12px] text-gray-600">
                       <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> {item}
                     </li>
                   ))}
                </ul>
                <Button variant="outline" className="w-full text-[12px]" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
             </div>
           </div>
        </div>
      </section>

      {/* 10. Demo Results Section */}
      <section className="bg-gray-50 py-12 md:py-24 border-y border-gray-100">
         <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
            <h2 className="mb-10 text-center font-heading text-[22px] font-bold text-gray-900 md:text-3xl">
              What Your Business Could Improve
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {[
                { title: "+ WhatsApp Enquiries", desc: "Designed to capture users instantly." },
                { title: "Better Google Trust", desc: "Helps convert more visitors into callers." },
                { title: "Faster Lead Response", desc: "Built to support instant automated replies." },
                { title: "More Customer Reviews", desc: "Systems to ask for feedback consistently." },
                { title: "Higher Conversion Rate", desc: "Can improve enquiry rates from website visitors." },
              ].map((res, i) => (
                <div key={i} className="flex flex-col p-4 rounded-xl bg-white border border-gray-100 text-center items-center justify-center shadow-sm">
                   <h3 className="mb-1 text-[13px] font-bold text-green-700">{res.title}</h3>
                   <p className="text-[11px] text-gray-500 leading-snug">{res.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 11 & 12. FAQ and Final CTA Component */}
      <section className="bg-white pt-12 md:pt-20 pb-4">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6 mb-8">
           <h2 className="mb-8 text-center font-heading text-[22px] font-bold text-gray-900 md:text-3xl">Frequently Asked Questions</h2>
           <div className="flex flex-col gap-2">
             {[
               { q: "Do I need an existing website?", a: "No, we build everything from scratch for you." },
               { q: "Can you make a free demo first?", a: "Yes, we are happy to build a free demo homepage for your business name before you commit." },
               { q: "Is WhatsApp automation included?", a: "Yes, our Growth and Pro plans include direct WhatsApp integration to capture leads instantly." },
               { q: "Do you guarantee Google ranking?", a: "Nobody can guarantee #1 rankings, but our system is optimized with local SEO best practices to give you the highest chance of being found." },
               { q: "Can I cancel monthly service?", a: "Yes, our monthly service runs month-to-month and you can cancel anytime." },
               { q: "How long does it take to launch?", a: "Usually 7-14 days depending on the plan and how fast you approve the demo." },
               { q: "Do you work with businesses outside Pune?", a: "Absolutely. We work with local businesses all across India." },
               { q: "Will the website work on mobile?", a: "Yes! Our websites are designed mobile-first, ensuring they look perfect and load fast on all smartphones." },
             ].map((faq, i) => (
               <details key={i} className="group rounded-xl border border-gray-100 bg-gray-50/50 p-4 open:bg-white open:shadow-sm">
                 <summary className="flex cursor-pointer items-center justify-between text-[13px] font-semibold text-gray-900 md:text-[14px]">
                   {faq.q}
                   <span className="ml-4 transition-transform group-open:rotate-45 text-gray-400 font-normal text-lg leading-none">+</span>
                 </summary>
                 <div className="mt-3 text-[12px] text-gray-600 leading-relaxed md:text-[13px]">
                   {faq.a}
                 </div>
               </details>
             ))}
           </div>
        </div>
      </section>

      <FinalCTA />
      
      {/* 13. Contact Section handled via /contact page but we'll include a small form anchor here */}
      <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-100" id="contact">
         <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-5 bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-gray-200/50">
               <div className="md:col-span-2 flex flex-col justify-center">
                  <h2 className="font-heading text-[24px] font-bold tracking-tight text-gray-900 mb-2">Ready to grow?</h2>
                  <p className="text-[13px] text-gray-500 mb-8">Fill out the form to request your free demo website. We usually respond within 2 hours.</p>
                  
                  <div className="flex flex-col gap-4">
                    <a href="mailto:tejas@orindle.com" className="flex items-center gap-3 text-[13px] font-medium text-gray-700 hover:text-gray-900">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      tejas@orindle.com
                    </a>
                    <a href="https://wa.me/919021923579" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[13px] font-medium text-gray-700 hover:text-[#25D366]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      +91 90219 23579
                    </a>
                  </div>
               </div>
               
               <div className="md:col-span-3">
                 <ContactForm />
               </div>
            </div>
         </div>
      </section>
    </>
  );
}

// Ensure lucide icon 'X' wasn't missed in import
function X(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
