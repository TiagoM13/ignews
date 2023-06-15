import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2022-11-15",
  appInfo: {
    name: "ignews",
    version: "0.1.0",
  },
});
