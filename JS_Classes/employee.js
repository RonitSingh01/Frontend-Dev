// Q6: Employee Management System (Classes + Object Methods) 

class Employee {
    constructor(id, name, department, salary) {
        this.id = id; // [cite: 39]
        this.name = name; // [cite: 39]
        this.department = department; // [cite: 39]
        this.salary = salary; // Assuming this is monthly salary
    }

    // Method to get annual salary [cite: 39]
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Method to apply a bonus [cite: 39]
    applyBonus(percent) {
        if (percent > 0) {
            const bonusAmount = this.salary * (percent / 100);
            this.salary += bonusAmount;
            console.log(`Applied ${percent}% bonus to ${this.name}. New monthly salary: $${this.salary}`);
        }
    }
}

// Create 5 employee objects [cite: 40]
const employees = [
    new Employee(101, "Alice Smith", "Engineering", 7000),
    new Employee(102, "Bob Johnson", "Marketing", 5000),
    new Employee(103, "Charlie Lee", "Engineering", 7500),
    new Employee(104, "David Brown", "Sales", 4500),
    new Employee(105, "Eve Davis", "HR", 5500)
];

// Apply a bonus to one employee
employees[0].applyBonus(10); // [cite: 39]

// Calculate and log annual salary for each [cite: 40]
console.log("--- Annual Salaries ---");
employees.forEach(emp => {
    console.log(`${emp.name} (Dept: ${emp.department}): $${emp.getAnnualSalary()}`);
});

// Use reduce() to calculate total annual payout of the company [cite: 41]
const totalAnnualPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("------------------------");
console.log(`Total Annual Company Payout: $${totalAnnualPayout}`);

// Display the total payout on the page
document.getElementById("total-payout").textContent = `$${totalAnnualPayout.toLocaleString()}`;