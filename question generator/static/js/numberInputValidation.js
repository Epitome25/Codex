function validateInput() {
    const number = document.getElementById('qty').value;
    try {
        if (number <= 0) {
            alert("Please enter a positive integer greater than 0.");
            return false;
        }
        // Submission allowed if valid number (logic not shown here)
        return true;
    } catch (error) {
        alert("Invalid input: Please enter a positive integer.");
        return false;
    }
}