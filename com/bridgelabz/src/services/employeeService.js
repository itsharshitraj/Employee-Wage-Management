const {calculateConditionalWage} = require("../utils/employeeUtils");

const processConditionalWage = () =>{
    let totalWage = calculateConditionalWage();
    console.log("Total Wage: $" + totalWage);

};
    module.exports = {processConditionalWage };
