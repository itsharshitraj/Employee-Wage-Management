console.log("employeeUtil.js is running...");

const IS_ABSENT = 0;

const checkEmployeePresence = () => {
    console.log("checkEmployeePresence function is running...");
    let empCheck = Math.floor(Math.random() * 10) % 2;
    console.log("Generated random value:", empCheck);
    return empCheck === IS_ABSENT ? "Absent" : "Present";
};


module.exports = { checkEmployeePresence };
