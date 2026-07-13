"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">Message received</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. A member of the AIQEN team will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" type="text" autoComplete="organization" />
      </div>

      <div>
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your goals, challenges, or the workflows you'd like to automate."
        />
      </div>

      <button type="submit" className={cn(buttonVariants({ size: "lg" }), "h-12 w-full")}>
        Send Message
      </button>
    </form>
  );
}
