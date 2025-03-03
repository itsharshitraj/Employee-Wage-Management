const { 
    calculateConditionalWage,
    computeTotalWageFromMap,
    getDailyWageWithDayFromMap
} = require("../utils/employeeUtils");

const processConditionalWage = () => {
    let { totalWage, dailyWageMap } = calculateConditionalWage();

    console.log("\n--- UC-8 Operations ---");
    console.log("Day-wise Wage using Map: ", getDailyWageWithDayFromMap(dailyWageMap));
    console.log("Total Wage Computed from Map: $" + computeTotalWageFromMap(dailyWageMap));
};

module.exports = { processConditionalWage };
