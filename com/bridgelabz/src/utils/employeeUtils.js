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

// Function to calculate wages and store daily wages
const calculateConditionalWage = () => {
    let totalWorkHours = 0;
    let totalDays = 0;
    let totalWage = 0;
    let dailyWages = [];  // Array to store daily wages
    let dailyHours = [];  // Store daily working hours

    while (totalWorkHours < MAX_WORKING_HOURS && totalDays < WORKING_DAYS_IN_MONTH) {
        let workHour = getWorkHours();
        let dailyWage = workHour * WAGE_PER_HOUR;
        dailyWages.push(dailyWage); // Store daily wage
        dailyHours.push(workHour);
        totalWorkHours += workHour;
        totalDays++;
        totalWage += dailyWage;
    }

    console.log(`Total Days Worked: ${totalDays}, Total Hours Worked: ${totalWorkHours}`);
    return { totalWage, dailyWages,dailyHours };
};

// (a) Calculate total wage using reduce()
const calculateTotalWage = (dailyWages) => dailyWages.reduce((total, wage) => total + wage, 0);

// (b) Show day and wage using map()
const getDailyWageWithDay = (dailyWages) => 
    dailyWages.map((wage, index) => `Day ${index + 1}: $${wage}`);

// (c) Filter days when full-time wage (160) was earned
const getFullTimeWageDays = (dailyWages) => 
    dailyWages.filter(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);

// (d) Find first occurrence of full-time wage
const getFirstFullTimeWageDay = (dailyWages) => 
    dailyWages.find(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);

// (e) Check if all full-time wages are correct
const checkAllFullTimeWages = (dailyWages) => 
    dailyWages.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);

// (f) Check if there is any part-time wage
const hasPartTimeWage = (dailyWages) => 
    dailyWages.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);

// (g) Count number of days employee worked
const getTotalDaysWorked = (dailyWages) => 
    dailyWages.length;

module.exports = { getWorkHours, calculateConditionalWage, calculateTotalWage,
    getDailyWageWithDay,
    getFullTimeWageDays,
    getFirstFullTimeWageDay,
    checkAllFullTimeWages,
    hasPartTimeWage,
    getTotalDaysWorked};
