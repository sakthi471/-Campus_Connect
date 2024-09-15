// pages/api/ip.js

import { headers } from 'next/headers'

import { unstable_noStore as noStore } from 'next/cache';



function IP() {
  noStore()
  const FALLBACK_IP_ADDRESS = '0.0.0.0'
  const forwardedFor = headers().get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
  }

  return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
}

export const GET = async (req, res) => {
  try {
    const ip = IP();
    return Response.json({ ip });
  } catch (error) {
    console.log(error.message);

  }
}
