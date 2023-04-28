function checkForLastName() {

    var targetField = document.getElementById("lastNameField")
    if (targetField.value.length === 0) {
        alert("Please Enter your Last Name")
        targetField.focus()
        targetField.style.background = "red"
        return false
    }
    // targetField.style.background = "white"

}

function checkForSelection() {

    var select = document.getElementById("selects")
    if (select.value === "") {
        alert("Please Enter Select a State")
        return false
    }

}

function checkRadio() {
    var radio = document.getElementsByName("r1")
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return true
        }
    }
    alert("Please Check One")
    return false
}

function checkEmail() {
    var email = document.getElementById("mail").value

    if (email.indexOf("@") < 1) {
        alert("Please Enter Correct Email")
        return false
    }
}

function checkPassword() {

    try {
        let password = document.getElementById("password").value

        if (password.length < 8) {
            alert("Please Enter atleast 8 characters.")
            throw "Please Enter atleast 8 characters."
        }

        if (password.indexOf(" ") !== -1) {
            alert("No Spaces in the Password, Please")
            throw "No Spaces in the Password, Please"
        }
    }

    catch (err){
        // alert(err)
        return false;
    }
}