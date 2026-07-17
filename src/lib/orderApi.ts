export interface OrderPayload {
  order_id: string;
  product_id: string;
  product_name: string;
  product_type: string;
  price: string;
  quantity: number;
  blessing_service: boolean;
  service_fee: string;
  total: string;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  shipping_address?: string;
  notes?: string;
  status?: string;
}

export interface OrderResponse extends OrderPayload {
  id: number;
  created_at: string;
  updated_at: string;
  payment_intent_id?: string | null;
  payment_status?: string;
}

export interface PaymentIntentResponse {
  client_secret: string;
  order_id: string;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE) {
  throw new Error("VITE_API_BASE_URL is not set");
}

export async function createOrder(payload: OrderPayload): Promise<OrderResponse> {
  const response = await fetch(`${API_BASE}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "Unknown error");
    throw new Error(`Order submission failed (${response.status}): ${text}`);
  }

  return response.json();
}

export async function createPaymentIntent(payload: OrderPayload): Promise<PaymentIntentResponse> {
  const response = await fetch(`${API_BASE}/create-payment-intent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "Unknown error");
    throw new Error(`Payment intent creation failed (${response.status}): ${text}`);
  }

  return response.json();
}
