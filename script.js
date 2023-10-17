function forms_validation{ // variables of forms
    let name = document.getElementById('tnome').value;
    let email = document.getElemantById('temail').value;
    let password = document.getElemantById('tsenha1').value;
    let confirmpassword = document.getElemantById('tsenha2').value;
    let sex = document.querySelector('input[name="rdsexo"]:checked').value;
    let programmer_language = document.querySelectorAll('input[name="chk_language"]:checked').value;

    if (name = "") { // if name empty
        alert("Por favor, preencha o campo 'Nome'");
        return false;
    }
    let defaultemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ // default email for verification

}