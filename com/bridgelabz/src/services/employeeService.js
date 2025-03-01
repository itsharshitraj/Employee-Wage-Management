
    const { checkEmployeePresence } = require("../utils/employeeUtils");

    const checkAttendance = () => {
        
        console.log("Employee is:", checkEmployeePresence());
    };

    module.exports = { checkAttendance };
