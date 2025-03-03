
const { calculateConditionalWage } = require("../utils/employeeUtils");

const processConditionalWage = () => {
    let { totalWage, dailyWages } = calculateConditionalWage();
    console.log("Daily Wages: ", dailyWages);
    console.log("Total Wage: $" + totalWage);
};

module.exports = { processConditionalWage };

