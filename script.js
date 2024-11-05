   function calculateTimeFromAge() {
        const ageInput = document.getElementById("age").value;
    
        // Validate if input is a positive number
        if (!ageInput || ageInput <= 0) {
            alert("Please enter a valid age.");
            return;
        }
    
        const age = Number(ageInput);
        const daysInYear = 365;
        const weeksInYear = 52;
        const monthsInYear = 12;
    
        // Calculate days, weeks, and months
        const X = age * daysInYear;
        const Y = age * weeksInYear;
        const Z = age * monthsInYear;
    
        // Display result in the textarea
        document.getElementById("result").value = 
            `At the age of ${age}, you have lived approximately ${X} days, ${Y} weeks, and ${Z} months.`;
    }
