import { useState } from "react";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useI18n } from "../i18n";

interface StripePaymentFormProps {
  clientSecret: string;
  onSuccess: () => void;
  onError: (message: string) => void;
}

const elementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#1f2937",
      "::placeholder": {
        color: "#9ca3af",
      },
    },
    invalid: {
      color: "#dc2626",
    },
  },
};

export function StripePaymentForm({ clientSecret, onSuccess, onError }: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { t } = useI18n();
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      onError(t("payment.stripeNotReady", "Payment system is not ready. Please wait."));
      return;
    }

    setProcessing(true);
    onError("");

    try {
      const cardNumberElement = elements.getElement(CardNumberElement);

      if (!cardNumberElement) {
        throw new Error(t("payment.cardElementMissing", "Card input not found."));
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
        },
      });

      if (error) {
        throw new Error(error.message || t("payment.paymentFailed", "Payment failed."));
      }

      if (paymentIntent?.status === "succeeded") {
        onSuccess();
      } else {
        throw new Error(t("payment.paymentIncomplete", "Payment was not completed."));
      }
    } catch (err) {
      onError(err instanceof Error ? err.message : t("payment.unknownError", "An unknown error occurred."));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form className="stripe-payment-form" onSubmit={handleSubmit}>
      <div className="stripe-card-field">
        <label className="stripe-card-label">{t("payment.cardNumber", "Card number")}</label>
        <div className="stripe-card-input">
          <CardNumberElement options={elementOptions} />
        </div>
      </div>
      <div className="stripe-card-row">
        <div className="stripe-card-field">
          <label className="stripe-card-label">{t("payment.expiry", "Expiry")}</label>
          <div className="stripe-card-input">
            <CardExpiryElement options={elementOptions} />
          </div>
        </div>
        <div className="stripe-card-field">
          <label className="stripe-card-label">{t("payment.cvc", "CVC")}</label>
          <div className="stripe-card-input">
            <CardCvcElement options={elementOptions} />
          </div>
        </div>
      </div>
      <button type="submit" disabled={!stripe || processing} className="product-order-button">
        {processing ? t("payment.processing", "Processing...") : t("payment.payNow", "Pay Now")} <span>→</span>
      </button>
      <p className="stripe-secured-note">{t("payment.securedBy", "Secured by Stripe")}</p>
    </form>
  );
}
