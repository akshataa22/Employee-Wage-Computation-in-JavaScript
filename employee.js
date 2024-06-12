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
