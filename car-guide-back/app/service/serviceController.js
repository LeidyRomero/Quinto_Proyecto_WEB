const express = require("express"),
  router = express.Router(),
  services = require("./queries");

//Create a new service
router.post("/", async (req, res, next) => {
  console.log("Creando servicio...");
  services.createService(req.body, res);
});

router.get("/", function(req, res) {;
  services.getAllServices(res);
});

//Crear varios servicios
router.post("/json", async (req, res) => {
  let array = req.body;
  let ans = [];
  for (let i in array) {
    let a = await services.createService(array[i]);
    ans.push(a);
  }
  res.status(200).send("Services saved successfully!");
});

router.delete("/", function(req, res) {
  services.deleteService(req.body.id, res);
})

module.exports = router;
