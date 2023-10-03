const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("<img src='https://comp4964-a2.s3.us-west-2.amazonaws.com/ian-dooley-TLD6iCOlyb0-unsplash.jpg' width='300px'> <img src='https://comp4964-a2.s3.us-west-2.amazonaws.com/jr-r-90HdOlGbjck-unsplash.jpg' width='300px'> <img src='https://comp4964-a2.s3.us-west-2.amazonaws.com/monika-grabkowska-EbRBhZ-I_p8-unsplash.jpg' width='300px'>");
    res.end();
});

app.listen( port, () => {
    console.log("Server is listening on port: " + port);
});
