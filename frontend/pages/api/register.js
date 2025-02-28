export default async function handler(req, res) {
    const response = await fetch('http://localhost:3001/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
    })

    if (!response.ok)
        return res.status(409).json()

    return res.status(200).json(JSON.stringify(await response.json()))
}
