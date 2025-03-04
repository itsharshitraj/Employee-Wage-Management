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
// Function to calculate wages and store data in an array of objects
const calculateEmployeeWages = () => {
    let totalWorkHours = 0;
    let totalDays = 0;
    let employeeDailyRecords = [];

    while (totalWorkHours < MAX_WORKING_HOURS && totalDays < WORKING_DAYS_IN_MONTH) {
        let workHours = getWorkHours();
        totalWorkHours += workHours;
        totalDays++;

        let dailyWage = workHours * WAGE_PER_HOUR;
        
        // Storing in an object
        let dailyRecord = {
            day: totalDays,
            hoursWorked: workHours,
            dailyWage: dailyWage
        };

        employeeDailyRecords.push(dailyRecord);
    }

    return employeeDailyRecords;
};

module.exports = { 
    getWorkHours, calculateEmployeeWages
};
