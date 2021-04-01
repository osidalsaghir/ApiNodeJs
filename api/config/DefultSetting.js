const generator = require('generate-password');
let customernumber=132956430;
const virabelStatic=require('../models/virabelStatic');
const DB = require('../middleware/DB');

exports.defultVariables={
    customerNumber:(fun)=>{

    },
    generatorPass:()=>{
        return generator.generate({
            length: 10,
            numbers: true
        });
    }
}