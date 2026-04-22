import { fetchJson } from "@/lib/http/client";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

function buildUrl(endpoint: string) {
  if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured.");
  }

  return `${BASE_URL}${endpoint}`;
}

export async function getData<T>(endpoint: string): Promise<T> {
  return fetchJson<T>(buildUrl(endpoint), {
    method: "GET",
    cache: "no-store",
  });
}

export async function postData<TResponse, TBody>(
  endpoint: string,
  body: TBody
): Promise<TResponse> {
  return fetchJson<TResponse>(buildUrl(endpoint), {
    method: "POST",
    body: JSON.stringify(body),
    cache: "no-store",
  });
}