"use strict";
var Service = require("./model").Service;
var ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
  createService: async (serviceInfo, res) => {
    const service = new Service({
      name: serviceInfo.name,
      description: serviceInfo.description,
      price: parseInt(serviceInfo.price),
      image: serviceInfo.image,
      link: serviceInfo.link
    });
    service.save(async (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      if (!res) {
        return result;
      } else {
        res.status(200).send(result);
        const savedService = await module.exports.getServiceById(result.id);
      }
    });
  },
  getServiceById: function(serviceId) {
    return Service.findOne({ _id: new ObjectId(serviceId) }).exec();
  },
  getAllServices: function(res) {
    Service.find({}).then(function(services) {
      res.status(200).send(services);
    });
  },
  deleteService: function(serviceId, res) {
    console.log("this is the id");
    console.log(serviceId);
    Service.deleteOne({ _id: new ObjectId(serviceId) }, function(err) {
      if (err) {
        console.error(err);
        res.send("Oops, the service couldn't be deleted");
      }
      res.send("Service deleted successfully!");
    });
  }
};
