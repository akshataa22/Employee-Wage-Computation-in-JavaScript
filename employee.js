//-----------UC1-------------
console.log("Welcome to Employee Wage Computation.")

function employeeCheck() {
    const empCheck = Math.floor(Math.random() * 2)

    if(empCheck == 1){
        console.log("Employee is Present.")
    } else {
        console.log("Employee is Absent.")
    }    
}
employeeCheck();

//-----------UC2-------------
const partTime = 4
const fullTime = 8
const perHourWage = 20

function wage() {
    const empCheck = Math.floor(Math.random() * 3)

    let dailyWage = 0
    switch (empCheck) {
        case 0:
            console.log("Employee is Absent.")
            dailyWage = 0
            break;
        case 1:
            console.log("Employee is working half day.") 
            dailyWage = perHourWage * partTime
            break;
        case 2:
            console.log("Employee is working full day.") 
            dailyWage = perHourWage * fullTime
            break;      
    }
    console.log("Daily Wage of an employee: " + dailyWage)
}
wage();

//-----------UC3-------------
function wageForMonth() {
    const workingDays = 20
    let totalWage = 0

    for(let day = 0; day < workingDays; day++){
        const empCheck = Math.floor(Math.random() * 3)
        let dailyWage = 0
    switch (empCheck) {
        case 0:
            dailyWage = 0
            break;
        case 1:
            dailyWage = perHourWage * partTime
            break;
        case 2:
            dailyWage = perHourWage * fullTime
            break;      
    }
    totalWage += dailyWage;
    }
    return totalWage;
}
console.log("Wages for a month: " + wageForMonth());

//-----------UC4-------------
function Wages() {
    let workingHours = 0
    let workingDays = 0
    const maxWorkingHours = 160
    const maxWorkingDays = 20
    let totalWage = 0

    while(workingHours < maxWorkingHours && workingDays < maxWorkingDays){
        let dailyWage = 0
        let dailyHoursWorked = 0
        const empCheck = Math.floor(Math.random() * 3)

        switch (empCheck) {
            case 0:
                dailyWage = 0
                dailyHoursWorked = 0
                break;
            case 1:
                dailyWage = perHourWage * partTime
                dailyHoursWorked = partTime
                break;
            case 2:
                dailyWage = perHourWage * fullTime
                dailyHoursWorked = fullTime
                break;      
        }
        workingDays++
        workingHours += dailyHoursWorked
        totalWage += dailyWage
    }
    console.log(`Total wage: $${totalWage}, Total hours worked: ${workingHours}, Total working days: ${workingDays}`);
}
Wages();