'use strict';
var mongoose = require('mongoose');
const uri = "mongodb+srv://user:user@the-car-guide-4hvcc.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true,
                        useCreateIndex: true, 
                        useUnifiedTopology: true,
                        useFindAndModify: false
                    });

// module.exports = function (env) {
//     switch (env) {
//         //Ejecución local
//         case "dev": {
//             mongoose.connect('mongodb://localhost:27017/the-car-guide', { useNewUrlParser: true ,
//                                                                           useCreateIndex: true, 
//                                                                           useUnifiedTopology: true,});
//         } break;
//         //Producción
//         case "prod": {
//             mongoose.connect(uri, { useNewUrlParser: true,
//                                     useCreateIndex: true, 
//                                     useUnifiedTopology: true,});
//         } break;
//     }
// }

module.exports.mongoose = mongoose; 