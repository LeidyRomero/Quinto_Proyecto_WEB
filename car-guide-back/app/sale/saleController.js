const express = require("express"),
  router = express.Router(),
  sales = require("./queries");

//Create a new service
router.post("/", async (req, res, next) => {
  console.log("Creando servicio...");
  sales.createService(req.body, res);
});

router.get("/", function(req, res) {;
  sales.getAllSales(res);
});

//Crear varios servicios
router.post("/json", async (req, res) => {
  let array = req.body;
  let ans = [];
  for (let i in array) {
    let a = await sales.createService(array[i]);
    ans.push(a);
  }
  res.status(200).send("Sales saved successfully!");
});

router.delete("/", function(req, res) {
  sales.deleteService(req.body.id, res);
})

module.exports = router;
