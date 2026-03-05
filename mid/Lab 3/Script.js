function collection_data() {
    const Email = document.getElementById("Email").value;
    const password = document.getElementById("password").value;

    if (!Email) {
        document.getElementById("emailErr").innerHTML = "Email is required";
    } 
    else {
        if (!Email.includes("@")) {
            document.getElementById("emailErr").innerHTML = "@ is required";
        } 
        else {
            document.getElementById("emailErr").innerHTML = "";
        }
    }

    if (!password) {
        document.getElementById("passwordErr").innerHTML = "Password is required";
    } 
    else {
        if (password.length < 6) {
            document.getElementById("passwordErr").innerHTML = "Password must be 6 characters";
        } 
        else if (!password.includes("#")) {
            document.getElementById("passwordErr").innerHTML = "# is required";
        } 
        else {
            document.getElementById("passwordErr").innerHTML = "";
        }
    }

    return false;
}