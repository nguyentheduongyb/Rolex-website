// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
const clientID = "786339530232-fur4d0p5h4fiht1jo5fqnk7h5p6oh2md.apps.googleusercontent.com"
const clientSecret = "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"
const API_KEY = "AIzaSyAp1rHbQg-rgu4G3ksx9Jjk5C6kjtjaUzs"