"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[52px] max-w-6xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Orindle Logo" width={32} height={32} className="h-8 w-8 rounded-md object-contain" />
            <span className="font-heading text-lg font-bold tracking-tight text-gray-900">Orindle</span>
          </Link>
          <nav className="hidden items-center gap-5 md:flex">
            <Link href="/services" className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
            <Link href="/pricing" className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
            <Link href="/industries" className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">Industries</Link>
            <Link href="/how-it-works" className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">How It Works</Link>
            <Link href="/faq" className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link>
          </nav>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Button className="h-8 text-[13px] rounded-full px-4" asChild>
            <Link href="/contact">Get Free Demo <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></Link>
          </Button>
        </div>
        <button
          className="md:hidden p-2 -mr-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-4 py-4 shadow-sm animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            <Link href="/services" onClick={() => setIsOpen(false)} className="px-2 py-1.5 text-[14px] font-medium text-gray-700 hover:bg-gray-50 rounded-md">Services</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)} className="px-2 py-1.5 text-[14px] font-medium text-gray-700 hover:bg-gray-50 rounded-md">Pricing</Link>
            <Link href="/industries" onClick={() => setIsOpen(false)} className="px-2 py-1.5 text-[14px] font-medium text-gray-700 hover:bg-gray-50 rounded-md">Industries</Link>
            <Link href="/how-it-works" onClick={() => setIsOpen(false)} className="px-2 py-1.5 text-[14px] font-medium text-gray-700 hover:bg-gray-50 rounded-md">How It Works</Link>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="px-2 py-1.5 text-[14px] font-medium text-gray-700 hover:bg-gray-50 rounded-md">FAQ</Link>
            <div className="pt-3 pb-1 flex flex-col gap-2">
              <Button className="w-full justify-center h-9 text-[13px] rounded-lg" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Get Free Demo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
