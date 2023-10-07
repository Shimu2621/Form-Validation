//Declare function for validate form
function validate() {
    const nameEle = document.getElementById("name").value;
    const emailEle = document.getElementById("email").value;
    const phoneEle = document.getElementById("phone").value;
    const subjectEle = document.getElementById("subject").value;
    const passwordEle = document.getElementById("password").value;
    const confirmPasswordEle = document.getElementById("confirmPassword").value;
    const termsEle = document.getElementById("terms");
    
    //If statement for all element
    if (nameEle === "") {
        showError("Name cannot be empty")
        return false;
    }

    //For email element
    if (emailEle === "") {
        showError("Email cannot be empty")
        return false;
    } else if (!validateEmail(emailEle)) {
        showError("Please enter a valid email")
        return false;
    }

    //phone Element
    if (phoneEle === "" || phoneEle.length !== 10) {
        showError("Phone cannot be empty or less than and higher than 10 digits")
        return false;
    }
    //For subject element
    if (subjectEle === "0") {
        showError("Subject must be selected!")
        return false;
    }

    
    //For password element
    if(passwordEle === "") {
        showError("Please enter Password")
        return false;
    }
 
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(passwordEle < 8 || passwordEle > 15 || !passwordPattern.test(passwordEle)) {
        showError("Password should be more than 8 characters and less than 15 characters and Password must be includes an Uppercase and Lowercase characters.")
        return false;
    }
    
    
    if(confirmPasswordEle === "" && passwordEle != confirmPasswordEle) {
    showError("Please enter confirm Password and Please make sure passwords should be match.")
    return false;
    }
    
    //For terms and condition
    if (!termsEle.checked) {
    showError("Please agree to the terms and conditions");
    return false;
    }

    alert("Form submitted successfully!");
    return true;

}

function showError(message) {
    const errorElement = document.getElementById("demo")
    errorElement.textContent = message;
}

//email validator function
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

