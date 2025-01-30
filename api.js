const exress = require('express');
const cors = require("cors");


const app = exress()
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "ebiritg@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/TG199/Hng-stage0-api"
        
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})