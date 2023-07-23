import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Link Downloader')
})

app.listen(8000, () => {
    console.log("Server is running on Port 8000!");
})