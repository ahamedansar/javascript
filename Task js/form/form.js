function validateForm() {
    let isValid = true;

    // --- 1. Helper function to clear all previous errors ---
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(span => {
            span.innerHTML = '';
        });
    }

    // --- 2. Helper function to set an error message ---
    function setError(id, message) {
        document.getElementById(id).innerHTML = message;
        isValid = false; // Set overall form status to invalid
    }

    clearErrors();

   
    //                        NAME VALIDATION
    
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    
    // Check if either part of the name is empty
    if (firstName === "" || lastName === "") {
        setError("nameError", "Both first and last name are required.");
    }

   
    //                        COMPANY VALIDATION
  
    // Assuming Company is OPTIONAL. If it's required, uncomment and adjust:
    /* const company = document.getElementById("company").value.trim();
    if (company === "") {
        setError("companyError", "Company name is required.");
    }
    */

   
    //                        EMAIL VALIDATION
   
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    // Standard basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (email === "") {
        setError("emailError", "Email is required.");
    } else if (!emailPattern.test(email)) {
        setError("emailError", "Please enter a valid email format.");
    }


 
    //                        PHONE VALIDATION
  
    const phoneArea = document.getElementById("phoneArea").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    
    // Regex for basic number validation (allowing only digits)
    const areaCodePattern = /^\d{3,4}$/; // 3 or 4 digits for area code
    const numberPattern = /^\d{5,}$/;   // at least 5 digits for number

    if (phoneArea === "" || phoneNumber === "") {
        setError("phoneError", "Both area code and phone number are required.");
    } else if (!areaCodePattern.test(phoneArea)) {
        setError("phoneError", "Area code must be 3 or 4 digits.");
    } else if (!numberPattern.test(phoneNumber)) {
        setError("phoneError", "Phone number must be at least 5 digits (digits only).");
    }

    
    //                        SUBJECT VALIDATION
    
    const subject = document.getElementById("subject").value;
    
    // The default option has value="", so checking for that ensures an option was selected
    if (subject === "") {
        setError("subjectError", "Please select a subject.");
    }

    
    //                        FINAL RETURN
 
    // If isValid is true, the form submits. If false, it stays on the page.
    return isValid;
}