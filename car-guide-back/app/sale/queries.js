"use strict";
var Sale = require("./model").Sale;
var ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
  createSale: async (saleInfo, res) => {
    const sale = new Sale({
      car: saleInfo.car,
      price: parseInt(saleInfo.price),
      userMail: saleInfo.userMail,
      description: saleInfo.description,
      image: saleInfo.image
    });
    sale.save(async (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      if (!res) {
        return result;
      } else {
        res.status(200).send(result);
        const savedSale = await module.exports.getSaleById(result.id);
      }
    });
  },
  getSaleById: function(saleId) {
    return Sale.findOne({ _id: new ObjectId(saleId) }).exec();
  },
  getAllSales: function(res) {
    Sale.find({}).then(function(sales) {
      res.status(200).send(sales);
    });
  },
  deleteSale: function(saleId, res) {
    console.log("this is the id");
    console.log(saleId);
    Sale.deleteOne({ _id: new ObjectId(saleId) }, function(err) {
      if (err) {
        console.error(err);
        res.send("Oops, the sale couldn't be deleted");
      }
      res.send("Sale deleted successfully!");
    });
  }
};
