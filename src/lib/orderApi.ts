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
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

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
