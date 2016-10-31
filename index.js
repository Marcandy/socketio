const express = require("express")
    , app     = express()
    , port    = 8888;

app.use(express.static(`${__dirname}/public`));

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`));


// TODO
// SOCKET STUFF WILL GO HERE
