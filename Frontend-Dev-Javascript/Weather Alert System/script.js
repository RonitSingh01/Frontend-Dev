/********************************************************************
 * Weather Alert System
 * ------------------------------------------------------------------
 * Conditions to check:
 *   1. If (temperature > 35°C AND humidity > 70%) → Heat Alert
 *   2. If (temperature < 10°C OR windSpeed > 40 km/h) → Cold/Windy Alert
 *   3. Else → Event Approved
 *
 * Then give clothing/safety recommendation:
 *   - Below 20°C → Wear Jacket
 *   - 20–30°C → Comfortable
 *   - Above 30°C → Stay Hydrated
 ********************************************************************/


// ===== Sample Input Values =====
let temperature = 36;      // Temperature in °C
let humidity = 75;         // Humidity in %
let windSpeed = 20;        // Wind Speed in km/h



/********************************************************************
 * Step 1: Determine Event Safety
 ********************************************************************/
let eventStatus = "";

if (temperature > 35 && humidity > 70) {
    eventStatus = "Cancel: Heat Alert.";
} else if (temperature < 10 || windSpeed > 40) {
    eventStatus = "Cancel: Cold/Windy Alert.";
} else {
    eventStatus = "Event Approved.";
}



/********************************************************************
 * Step 2: Temperature-based Advisory
 ********************************************************************/
let advice = "";

if (temperature < 20) {
    advice = "Wear Jacket";
} else if (temperature <= 30) {
    advice = "Comfortable";
} else {
    advice = "Stay Hydrated";
}



/********************************************************************
 * Step 3: Print Output
 ********************************************************************/
console.log("=== Weather Alert System ===");
console.log("Temperature:", temperature + "°C");
console.log("Humidity:", humidity + "%");
console.log("Wind Speed:", windSpeed + " km/h");
console.log("--------------------------------");
console.log("Event Decision:", eventStatus);
console.log("Advice:", advice);
