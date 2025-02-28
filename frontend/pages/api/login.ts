import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
    })

    if (!response.ok) {
        res.status(401).send('{}')
        return
    }

    const resjson = await response.json()
    res.setHeader('Set-Cookie', 'sp2dktoken=' + resjson.access_token + '; Path=/; HttpOnly').
        status(200).send(JSON.stringify(req.body))
}
