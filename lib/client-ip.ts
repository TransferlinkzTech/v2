import { headers } from "next/headers";

// The visitor's address as the host reports it. Used only to rate limit.
export async function clientIp() {
  const list = await headers();
  const forwarded = list.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || list.get("x-real-ip") || "unknown";
}
