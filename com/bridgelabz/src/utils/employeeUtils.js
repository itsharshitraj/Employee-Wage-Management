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

// Calculate wage & store in Maps
const calculateWageAndStoreInMap = () => {
    let totalWorkHours = 0, totalDays = 0;
    let totalWage = 0;
    
    let dailyWageMap = new Map();
    let dailyHoursMap = new Map();

    while (totalWorkHours < MAX_WORKING_HOURS && totalDays < WORKING_DAYS_IN_MONTH) {
        totalDays++;
        let workHours = getWorkHours();
        totalWorkHours += workHours;
        
        let dailyWage = workHours * WAGE_PER_HOUR;
        totalWage += dailyWage;

        dailyWageMap.set(totalDays, dailyWage);
        dailyHoursMap.set(totalDays, workHours);
    }

    console.log(`Total Days: ${totalDays}, Total Hours: ${totalWorkHours}, Total Wage: ${totalWage}`);
    return { dailyWageMap, dailyHoursMap, totalWorkHours, totalWage };
};

// Compute total wage & total hours using Arrow Function & reduce()
const computeTotalWageAndHours = (dailyWageMap, dailyHoursMap) => {
    let totalWage = Array.from(dailyWageMap.values()).reduce((acc, wage) => acc + wage, 0);
    let totalHours = Array.from(dailyHoursMap.values()).reduce((acc, hours) => acc + hours, 0);
    return { totalWage, totalHours };
};

// Classify days using filter()
const classifyWorkingDays = (dailyHoursMap) => {
    let fullWorkingDays = Array.from(dailyHoursMap.entries()).filter(([day, hours]) => hours === 8).map(([day]) => day);
    let partWorkingDays = Array.from(dailyHoursMap.entries()).filter(([day, hours]) => hours > 0 && hours < 8).map(([day]) => day);
    let noWorkingDays = Array.from(dailyHoursMap.entries()).filter(([day, hours]) => hours === 0).map(([day]) => day);

    return { fullWorkingDays, partWorkingDays, noWorkingDays };
};

module.exports = { 
    calculateWageAndStoreInMap, computeTotalWageAndHours, classifyWorkingDays
};
