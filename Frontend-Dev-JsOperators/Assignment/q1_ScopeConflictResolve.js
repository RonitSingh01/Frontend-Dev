var bonus = 5000;
function calculateSalary(isPermanent) {
  var salary = 40000;
  var totalSalary = salary;
  if (isPermanent) {
    totalSalary += bonus;
  }
  console.log('Total Salary:', totalSalary);
}
calculateSalary(true);
calculateSalary(false);
