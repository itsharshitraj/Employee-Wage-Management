
    const PART_TIME = 1;
    const FULL_TIME=2;

    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOURS=20;
    const WORKING_DAYS_IN_MONTH = 20;
    const MAX_WORKING_HOURS = 160;

    // work hours based on employee type
    const getWorkHours = () => {
        let empCheck = Math.floor(Math.random()*10)%3;
     
        switch(empCheck){
            case PART_TIME:
            return PART_TIME_HOURS;
              
            case FULL_TIME:
                return FULL_TIME_HOURS;
               
            
            default:
            return 0;    
        }
      
    };

    // Calculates monthly wage until work hours or days limit is reached.

    const calculateConditionalWage = () => {
       let totalWorkHours = 0;
       let totalDays=0;
       let totalWage = 0;

       while(totalWorkHours < MAX_WORKING_HOURS && totalDays < WORKING_DAYS_IN_MONTH){
        let workHour = getWorkHours();
        totalWorkHours += workHour;
        totalDays++;
        totalWage += workHour * WAGE_PER_HOURS;
       }
       console.log(`Total Days Worked: ${totalDays}, Total Hours Worked: ${totalWorkHours}`);
       return totalWage;
    };
    

    module.exports = { getWorkHours,calculateConditionalWage};
