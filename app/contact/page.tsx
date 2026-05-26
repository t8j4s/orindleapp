import { FinalCTA } from "@/components/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: 'Contact Orindle - Get Your Free Demo Website',
  description: 'Contact Orindle in Pune for a free, custom-designed mobile-first demo website for your local business. Connect via WhatsApp or email to start.',
  alternates: {
    canonical: 'https://www.orindle.com/contact',
  },
  openGraph: {
    title: 'Contact Orindle - Get Your Free Demo Website',
    description: 'Contact Orindle in Pune for a free, custom-designed mobile-first demo website for your local business. Connect via WhatsApp or email to start.',
    url: 'https://www.orindle.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Orindle - Get Your Free Demo Website',
    description: 'Contact Orindle in Pune for a free, custom-designed mobile-first demo website for your local business. Connect via WhatsApp or email to start.',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ContactPage",
            "name": "Contact Orindle",
            "url": "https://www.orindle.com/contact"
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.orindle.com/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.orindle.com/contact" }
            ]
          }
        ]
      }} />
      <section className="bg-white py-12 md:py-24">
         <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-5 items-start">
               
               <div className="md:col-span-2 flex flex-col pt-4">
                  <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700 w-fit">
                    Free Demo Homepage
                  </div>
                  <h1 className="font-heading text-[26px] font-bold tracking-tight text-gray-900 md:text-4xl mb-4">
                    Ready to grow your local business?
                  </h1>
                  <p className="text-[14px] text-gray-500 mb-10 leading-relaxed text-balance">
                    Fill out the form with your business details. Our team will review it and get back to you with a free demo homepage design before you decide to work with us.
                  </p>
                  
                  <div className="flex flex-col gap-6">
                    <a href="mailto:tejas@orindle.com" className="group flex items-start gap-4 text-gray-700 hover:text-gray-900 transition-colors">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[12px] font-bold text-gray-900">Email Us</span>
                         <span className="text-[13px] font-medium">tejas@orindle.com</span>
                      </div>
                    </a>
                    
                    <a href="https://wa.me/919021923579" target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 text-gray-700 transition-colors hover:text-[#25D366]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366]/20 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[12px] font-bold text-gray-900">WhatsApp Chat</span>
                         <span className="text-[13px] font-medium">+91 90219 23579</span>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 text-gray-700">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[12px] font-bold text-gray-900">Location</span>
                         <span className="text-[13px] font-medium">Serving all of India</span>
                      </div>
                    </div>
                  </div>
               </div>
               
               <div className="md:col-span-3 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                 <h2 className="font-heading text-[18px] font-bold text-gray-900 mb-6">Request Your Demo</h2>
                 <ContactForm />
               </div>
               
            </div>
         </div>
      </section>
    </>
  );
}
