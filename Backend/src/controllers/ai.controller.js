import generateContent from '../services/ai.service.js'

async function getReview(req, res) {
    const code = req.body.code

    if (!code) {
        return res.status(400).send(`prompt is mandatory for searching the review of code !!`)
    }

    const reviewOfCode = await generateContent(code)

    console.log("response on vs : \n", reviewOfCode);

    res.send(reviewOfCode);         // send back to Postman
}

export default getReview