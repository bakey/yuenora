import { loadStripe, type Stripe } from "@stripe/stripe-js";

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe() {
  if (!publishableKey) {
    throw new Error("VITE_STRIPE_PUBLISHABLE_KEY is not set");
  }
  if (!stripePromise) {
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
}
