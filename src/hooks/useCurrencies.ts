import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const currencySchema = z.object({
  symbol: z.string(),
  name: z.string(),
  min_amount: z.string(),
  max_amount: z.string(),
  image: z.string().url(),
  blockchain: z.string(),
});

const currenciesResponseSchema = z.array(currencySchema);

export type Currency = z.infer<typeof currencySchema>;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const X_DEVICE_ID = process.env.NEXT_PUBLIC_X_DEVICE_ID;

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

if (!X_DEVICE_ID) {
  throw new Error("NEXT_PUBLIC_X_DEVICE_ID is not defined");
}

const fetchCurrencies = async () => {
  const response = await fetch(`${API_BASE_URL}/currencies`, {
    headers: {
      "X-Device-Id": X_DEVICE_ID,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch currencies");
  }

  const data = await response.json();

  try {
    return currenciesResponseSchema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`Invalid API response format: ${error.message}`);
    }
    throw error;
  }
};

export const useCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
  });
};
