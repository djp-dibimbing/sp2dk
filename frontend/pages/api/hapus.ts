export default async function handler(req, res) {
    const sp2dktoken = req.cookies.sp2dktoken

    const response = await fetch('http://localhost:3001/datapajak/hapus', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + sp2dktoken },
        body: JSON.stringify(req.body)
    })

    if (!response.ok)
        return res.status(409).json()

    return res.status(200).json(JSON.stringify(await response.json()))
}
