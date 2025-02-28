import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const sp2dktoken = req.cookies.sp2dktoken

    const response = await fetch('http://127.0.0.1:3001/datapajak/alldata', {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sp2dktoken },
    })

    let data = []

    if (response.ok)
        data = await response.json()
    
    res.status(200).json(data)
}
