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