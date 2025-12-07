/********************************************************************
 * Marks Analyzer
 * ------------------------------------------------------------------
 * Requirements:
 *   - Accept 5 subject marks (array)
 *   - Calculate average and percentage
 *   - Assign grade based on criteria
 *   - If student fails in ≥ 2 subjects → "Repeat Year"
 * 
 * Output printed only in console.
 ********************************************************************/


// ===== Input: Marks for 5 subjects (out of 100) =====
let marks = [78, 92, 56, 88, 39];  
// You can change these values for testing



/********************************************************************
 * Step 1: Calculate Total, Average, and Percentage
 ********************************************************************/
let total = 0;

// Loop through array to sum marks
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;        // Average marks
let percentage = (total / 500) * 100;      // Since 5 subjects → max total = 500



/********************************************************************
 * Step 2: Count Fail Subjects
 * ------------------------------------------------------------------
 * A subject is considered failed if marks < 40
 ********************************************************************/
let failCount = 0;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 40) {
        failCount++;
    }
}



/********************************************************************
 * Step 3: Determine Grade
 * ------------------------------------------------------------------
 * Follow grade boundaries:
 *   90–100 → A+
 *   75–89  → A
 *   60–74  → B
 *   40–59  → C
 *   Below 40 → Fail
 ********************************************************************/
let grade = "";

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 75) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 40) {
    grade = "C";
} else {
    grade = "Fail";
}



/********************************************************************
 * Step 4: Check Repeat Year Condition
 * ------------------------------------------------------------------
 * If 2 or more subjects have marks < 40 → Repeat Year,
 * regardless of overall average or percentage.
 ********************************************************************/
let status = "Pass";

if (failCount >= 2) {
    status = "Repeat Year";
}



/********************************************************************
 * Step 5: Print Final Results
 ********************************************************************/
console.log("=== Marks Analyzer ===");
console.log("Marks:", marks);
console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Grade:", grade);
console.log("Failed Subjects:", failCount);
console.log("Final Status:", status);
