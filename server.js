const express = require("express");
const app = express();
var cors = require('cors')

//teste

app.use(cors())

const users = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
    { id: 4, name: "user4" },
    { id: 5, name: "user5" },
    { id: 6, name: "user6" },
    { id: 7, name: "user7" },
    { id: 8, name: "user8" },
    { id: 9, name: "user9" },
    { id: 10, name: "user10" },

    { id: 11, name: "user11" },
    { id: 12, name: "user12" },
    { id: 13, name: "user13" },
    { id: 14, name: "user14" },
    { id: 15, name: "user15" },
    { id: 16, name: "user16" },
    { id: 17, name: "user17" },
    { id: 18, name: "user18" },
    { id: 19, name: "user19" },
    { id: 20, name: "user20" },

    { id: 21, name: "user21" },
    { id: 22, name: "user22" },
    { id: 23, name: "user23" },
    { id: 24, name: "user24" },
    { id: 25, name: "user25" },
    { id: 26, name: "user26" },
    { id: 27, name: "user27" },
    { id: 28, name: "user28" },
    { id: 29, name: "user29" },
    { id: 30, name: "user30" },

    { id: 31, name: "user31" },
    { id: 32, name: "user32" },
    { id: 33, name: "user33" },
    { id: 34, name: "user34" },
    { id: 35, name: "user35" },
    { id: 36, name: "user36" },
    { id: 37, name: "user37" },
    { id: 38, name: "user38" },
    { id: 39, name: "user39" },
    { id: 40, name: "user40" },

    { id: 41, name: "user41" },
    { id: 42, name: "user42" },
    { id: 43, name: "user43" },
    { id: 44, name: "user44" },
    { id: 45, name: "user45" },
    { id: 46, name: "user46" },
    { id: 47, name: "user47" },
    { id: 48, name: "user48" },
    { id: 49, name: "user49" },
    { id: 50, name: "user50" }
]

app.get("/users", (req, res) => {
    var dados = users;
    // const page = req.query.page;
    // const limit = req.query.limit;
    // const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;
    // const result = users.slice(startIndex, endIndex);
    res.json(dados);
});

app.listen(3000, () => {
    console.log("server started on port 3000");
});