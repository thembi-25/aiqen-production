import "server-only";
import { Resend } from "resend";

let client: Resend | null = null;

export function getResendClient() {
  if (!client) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

export function getEmailFrom() {
  return process.env.EMAIL_FROM ?? "AIQEN <noreply@aiqen.com>";
}

export function getAppUrl() {
  return process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
}
