const {request} = require("./request")


request("SELECT * FROM servicios")
.then(data => console.log(data))
.catch(err => console.log(err))