// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Sucess = {
  revalidated: boolean
}

type Error = {
  msg: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Sucess | Error>) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ msg: 'Not Allowed' })
  }

  try {
    await res.revalidate('/')

    return res.json({ revalidated: true })
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error' })
  }
}
