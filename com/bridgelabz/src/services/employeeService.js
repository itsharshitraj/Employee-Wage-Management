
const { calculateConditionalWage,calculateTotalWage,
    getDailyWageWithDay,
    getFullTimeWageDays,
    getFirstFullTimeWageDay,
    checkAllFullTimeWages,
    hasPartTimeWage,
    getTotalDaysWorked } = require("../utils/employeeUtils");

const processConditionalWage = () => {
    let { totalWage, dailyWages } = calculateConditionalWage();
    console.log("Daily Wages: ", dailyWages);
    console.log("Total Wage: $" + totalWage);


    console.log("\n--- UC-7 Operations ---");
    console.log("Total Wage using Reduce: $" + calculateTotalWage(dailyWages));
    console.log("Day-wise Wages: ", getDailyWageWithDay(dailyWages));
    console.log("Full-Time Wage Days: ", getFullTimeWageDays(dailyWages));
    console.log("First Full-Time Wage Occurrence: $" + getFirstFullTimeWageDay(dailyWages));
    console.log("All Full-Time Wages Correct?: ", checkAllFullTimeWages(dailyWages));
    console.log("Any Part-Time Wage Exists?: ", hasPartTimeWage(dailyWages));
    console.log("Total Days Employee Worked: ", getTotalDaysWorked(dailyWages));
};

module.exports = { processConditionalWage };

