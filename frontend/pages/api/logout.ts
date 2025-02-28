import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', 'sp2dktoken=; Path=/; HttpOnly; Max-Age=0').
        status(200).send('Cookie dihapus')
}
