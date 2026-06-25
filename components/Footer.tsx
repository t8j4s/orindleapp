import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-gray-50/50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
             <Link href="/" className="mb-4 flex items-center space-x-2">
                <Image src="/logo.png" alt="Orindle Logo" width={32} height={32} className="h-8 w-8 rounded-md object-contain" />
                <span className="font-heading text-lg font-bold tracking-tight text-gray-900">Orindle</span>
              </Link>
            <p className="text-[13px] text-gray-500 max-w-[200px] mb-6">
              The complete local business growth system. Websites, WhatsApp, and Google reviews all in one.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:tejas@orindle.com" className="inline-flex items-center text-[12px] font-medium text-gray-600 hover:text-gray-900">
                <Mail className="mr-2 h-4 w-4 text-gray-400" /> tejas@orindle.com
              </a>
              <a href="https://wa.me/919021923579" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[12px] font-medium text-gray-600 hover:text-[#25D366]">
                <MessageCircle className="mr-2 h-4 w-4 text-[#25D366]" /> +91 90219 23579
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[14px] font-semibold text-gray-900 mb-1">Product</h3>
            <Link href="/services" className="text-[13px] text-gray-500 hover:text-gray-900">Services</Link>
            <Link href="/pricing" className="text-[13px] text-gray-500 hover:text-gray-900">Pricing</Link>
            <Link href="/industries" className="text-[13px] text-gray-500 hover:text-gray-900">Industries</Link>
            <Link href="/results" className="text-[13px] text-gray-500 hover:text-gray-900">Demo Results</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[14px] font-semibold text-gray-900 mb-1">Company</h3>
            <Link href="/how-it-works" className="text-[13px] text-gray-500 hover:text-gray-900">How It Works</Link>
            <Link href="/faq" className="text-[13px] text-gray-500 hover:text-gray-900">FAQ</Link>
            <Link href="/contact" className="text-[13px] text-gray-500 hover:text-gray-900">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-[14px] font-semibold text-gray-900 mb-1">Legal</h3>
            <Link href="/privacy" className="text-[13px] text-gray-500 hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="text-[13px] text-gray-500 hover:text-gray-900">Terms & Conditions</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-100 pt-6 md:flex-row gap-4">
          <p className="text-center text-[12px] text-gray-400">
            © {new Date().getFullYear()} Orindle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
