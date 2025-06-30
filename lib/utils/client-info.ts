// Utility to get client information
export function getClientInfo() {
  if (typeof window === "undefined") {
    return {}
  }

  return {
    referrer_url: document.referrer || undefined,
    user_agent: navigator.userAgent,
  }
}

// Utility to get IP address server-side
export function getServerClientInfo(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  const realIp = request.headers.get("x-real-ip")

  let ip_address: string | undefined

  if (forwarded) {
    ip_address = forwarded.split(",")[0].trim()
  } else if (realIp) {
    ip_address = realIp
  }

  return {
    ip_address,
    user_agent: request.headers.get("user-agent") || undefined,
  }
}
