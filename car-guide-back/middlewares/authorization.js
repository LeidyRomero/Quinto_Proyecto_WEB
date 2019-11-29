const Permission = require('../app/authorization/permissionModel');

let authorize = ( req, res, next) => {
    console.log(req.body);
    Permission.findOne({ rol : req.body.rol, resource : req.body.resource}, (err, perms) => {
        var allow = false;
        console.log(perms);
        if (req.method == "POST" && perms.create) allow = true;
        else if (req.method == "GET" && perms.read) allow = true;
        else if (req.method == "PUT" && perms.write) allow = true;
        else if (req.method == "DELETE" && perm.delete) allow = true;

        if(allow) next();
        else res.status(403).send({error: 'access denied'});
    });
} 

module.exports = { authorize : authorize}