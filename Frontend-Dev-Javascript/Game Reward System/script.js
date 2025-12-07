/********************************************************************
 * Game Reward System
 * ------------------------------------------------------------------
 * Rules:
 *   - coins = (level * 50) + (performanceScore * 10)
 *   - If missionsCompleted === true → double coins
 *   - If coins > 1000 → rank = "Elite" else "Regular"
 *
 * Output should show:
 *   - level
 *   - performance score
 *   - missions completed status
 *   - earned coins
 *   - rank
 ********************************************************************/


// ===== Sample Input Values =====
let level = 15;
let performanceScore = 60;
let missionsCompleted = true;



/********************************************************************
 * Step 1: Calculate Base Coins
 * ------------------------------------------------------------------
 * Using the formula:
 *   coins = (level * 50) + (performanceScore * 10)
 ********************************************************************/
let coins = (level * 50) + (performanceScore * 10);



/********************************************************************
 * Step 2: Double Coins if All Missions Completed
 ********************************************************************/
if (missionsCompleted === true) {
    coins = coins * 2;
}



/********************************************************************
 * Step 3: Determine Rank Based on Coins
 ********************************************************************/
let rank = "";

if (coins > 1000) {
    rank = "Elite";
} else {
    rank = "Regular";
}



/********************************************************************
 * Step 4: Print All Results
 ********************************************************************/
console.log("=== Game Reward System ===");
console.log("Player Level:", level);
console.log("Performance Score:", performanceScore);
console.log("Missions Completed:", missionsCompleted);
console.log("------------------------------------------");
console.log("Total Coins Earned:", coins);
console.log("Assigned Rank:", rank);
