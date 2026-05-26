import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 px-6 py-12 text-center md:px-12 md:py-16 shadow-2xl">
        <div className="absolute top-0 right-0 -m-8 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -m-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-4 font-heading text-[24px] font-bold tracking-tight text-white md:text-4xl text-balance">
            Want To See How Your Business Website Could Look?
          </h2>
          <p className="mb-8 text-[14px] text-gray-300 md:text-base text-balance">
            Send us your business name and we'll create a free demo homepage before you decide. No obligations, no credit card required.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold" asChild>
              <Link href="/contact">Get Free Demo Website <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="whatsapp" className="w-full sm:w-auto" asChild>
              <a href="https://wa.me/919021923579" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
