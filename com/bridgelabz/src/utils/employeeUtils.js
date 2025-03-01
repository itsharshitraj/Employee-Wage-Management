
    const PART_TIME = 1;
    const FULL_TIME=2;

    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    const WAGE_PER_HOURS=20;

    // Calculates daily wage based on work type
    const calculateDailyWage= () => {
        let empCheck = Math.floor(Math.random()*10)%3;
        let workHours=0;

        switch(empCheck){
            case PART_TIME:
            workHours= PART_TIME_HOURS;
            break;
                
            case FULL_TIME:
                workHours= FULL_TIME_HOURS;
                break;
            
            default:
            workHours=0;    
        }
        return workHours*WAGE_PER_HOURS;
    };


    module.exports = { calculateDailyWage};
