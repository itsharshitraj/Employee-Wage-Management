const { 
    calculateWageAndStoreInMap, computeTotalWageAndHours, classifyWorkingDays
} = require("../utils/employeeUtils");

const processWageAndHours = () => {
    let { dailyWageMap, dailyHoursMap } = calculateWageAndStoreInMap();

    // Compute total wage & total hours
    let { totalWage, totalHours } = computeTotalWageAndHours(dailyWageMap, dailyHoursMap);
    console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalHours}`);

    // Categorize days
    let { fullWorkingDays, partWorkingDays, noWorkingDays } = classifyWorkingDays(dailyHoursMap);
    
    console.log(`Full Working Days: ${fullWorkingDays}`);
    console.log(`Part Working Days: ${partWorkingDays}`);
    console.log(`No Working Days: ${noWorkingDays}`);
};

module.exports = { processWageAndHours };
