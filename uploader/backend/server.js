const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.post("/upload", (req, res) => {

    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' })
    }, 3000);
});

app.delete("/upload", (req, res) => {
    console.log("file deleted")
    return res.status(200).json({ result: true, msg: "file deleted" })
});
app.listen(8080, () => {
    console.log("server running on 8080")
});
