// function to calculate net salary

let grossSalary = basicSalary + benefits;
let netSalary = grossSalary - {deductions}
let deductions = add(_nhif,_paye,nssf)
 console.log(deductions)

 function deductions(_paye){
  if (grossSalary <= 24000) {
    return (10/100*grossSalary)
  }
  else if (grossSalary > 24000 && grossSalary <= 32333 ){
    return (25/100*grossSalary)
  }
  else if (grossSalary > 32333){
    return (30/100*grossSalary)
  }
 }

