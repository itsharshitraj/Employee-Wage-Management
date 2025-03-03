const PART_TIME = 1;
const FULL_TIME = 2;

const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_IN_MONTH = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours based on employee type
const getWorkHours = () => {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case PART_TIME:
            return PART_TIME_HOURS;
        case FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
};

// Function to calculate wages and store daily wages in a Map
const calculateConditionalWage = () => {
    let totalWorkHours = 0;
    let totalDays = 0;
    let totalWage = 0;
    let dailyWageMap = new Map();  // Map to store day-wise wage

    while (totalWorkHours < MAX_WORKING_HOURS && totalDays < WORKING_DAYS_IN_MONTH) {
        let workHour = getWorkHours();
        let dailyWage = workHour * WAGE_PER_HOUR;
        totalDays++;
        totalWorkHours += workHour;
        totalWage += dailyWage;
        
        // Store in Map (Day -> Wage)
        dailyWageMap.set(totalDays, dailyWage);
    }

    console.log(`Total Days Worked: ${totalDays}, Total Hours Worked: ${totalWorkHours}`);
    return { totalWage, dailyWageMap };
};

// (a) Compute Total Wage using Map
const computeTotalWageFromMap = (dailyWageMap) => {
    let totalWage = 0;
    dailyWageMap.forEach(wage => totalWage += wage);
    return totalWage;
};

// (b) Show Day-wise Wage using Map
const getDailyWageWithDayFromMap = (dailyWageMap) => {
    let dayWiseWages = [];
    dailyWageMap.forEach((wage, day) => {
        dayWiseWages.push(`Day ${day}: $${wage}`);
    });
    return dayWiseWages;
};

module.exports = { 
    getWorkHours, 
    calculateConditionalWage,
    computeTotalWageFromMap,
    getDailyWageWithDayFromMap
};
