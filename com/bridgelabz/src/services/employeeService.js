const { 
    calculateEmployeeWages
} = require("../utils/employeeUtils");

const processEmployeeWages = () => {
    let employeeRecords = calculateEmployeeWages();
    console.log("Employee Daily Records:", employeeRecords);
};

module.exports = { processEmployeeWages };
