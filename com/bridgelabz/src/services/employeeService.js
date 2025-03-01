const {calculateMonthlyWage} = require("../utils/employeeUtils");

const processEmployeeMonthlyWage = () =>{
    let monthlyWage = calculateMonthlyWage();
    console.log("Monthly Wage: $" + monthlyWage);

};
    module.exports = { processEmployeeMonthlyWage };
