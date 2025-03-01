const {calculateDailyWage} = require("../utils/employeeUtils");

const processEmployeeWage=()=>{
    console.log("Daily Wage: $" + calculateDailyWage());

};
    module.exports = { processEmployeeWage };
