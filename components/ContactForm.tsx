"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "54a674f4-a045-47e9-a8e1-b41f0f8c5610");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-100 bg-green-50 p-6 text-center animate-in fade-in">
        <h3 className="mb-2 font-heading text-lg font-semibold text-green-800">Thank you!</h3>
        <p className="text-[13px] text-green-700">We received your request. Our team will contact you soon.</p>
        <Button 
          variant="outline" 
          className="mt-4 bg-white"
          onClick={() => setStatus("idle")}
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-[12px] font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-[13px] outline-none transition-all placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            placeholder="Tejas Sutar"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="businessName" className="text-[12px] font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-[13px] outline-none transition-all placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            placeholder="Orindle Solutions"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
         <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-[12px] font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-[13px] outline-none transition-all placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            placeholder="+91 90000 00000"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="city" className="text-[12px] font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-[13px] outline-none transition-all placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
            placeholder="Pune"
          />
        </div>
      </div>

       <div className="flex flex-col gap-1.5">
          <label htmlFor="businessType" className="text-[12px] font-medium text-gray-700">Business Type</label>
          <select
            id="businessType"
            name="businessType"
            required
            defaultValue=""
            className="h-10 rounded-lg border border-gray-200 bg-white px-3 text-[13px] text-gray-700 outline-none transition-all focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
          >
            <option value="" disabled>Select from list</option>
            <option value="Home Services">Home Services (Plumber, Electrician, etc.)</option>
            <option value="Healthcare">Healthcare (Clinic, Dentist, etc.)</option>
            <option value="Professional Services">Professional Services (Contractor, CA, etc.)</option>
            <option value="Education">Education (Coaching, Tutor, etc.)</option>
            <option value="Other">Other</option>
          </select>
        </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[12px] font-medium text-gray-700">Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="rounded-lg border border-gray-200 bg-white p-3 text-[13px] outline-none transition-all placeholder:text-gray-400 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 resize-none min-h-[80px]"
          placeholder="Tell us a little bit about what you need..."
        />
      </div>
      
      {status === "error" && (
        <p className="text-[12px] text-red-600">Something went wrong. Please try again or message us on WhatsApp.</p>
      )}

      <Button type="submit" size="lg" className="mt-2 w-full font-semibold" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Request Free Demo"}
      </Button>
    </form>
  );
}
