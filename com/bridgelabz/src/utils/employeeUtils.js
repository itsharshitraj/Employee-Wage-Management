
    const PART_TIME = 1;
    const FULL_TIME=2;

    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOURS=20;
    const WORKING_DAYS_IN_MONTH = 20;

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

    // Calculates daily wage using work hours.
    const calculateDailyWage = () => {
        let workHours=getWorkHours();
        return workHours * WAGE_PER_HOURS;
    };

    // Calculates monthly wage for 20 working days.

    const calculateMonthlyWage = () => {
        let totalWage=0;
        for(let day=1; day<=WORKING_DAYS_IN_MONTH;day++){
            let dailyWage = calculateDailyWage();
            totalWage += dailyWage;
        }
        return totalWage;
    };

    module.exports = { getWorkHours,calculateDailyWage,calculateMonthlyWage};
