function validarFormulario(){
    let name = document.getElementById('tnome').value;
    let email = document.getElementById('temail').value;
    let password = document.getElementById('tsenha1').value;
    let confirmpassword = document.getElementById('tsenha2').value;
    let sex = document.querySelector('input[name="rdsexo"]:checked').value; //Get the element CHECKED Pega o valor do elemento SELECIONADO
    let language = document.querySelectorAll('input[name="chk_language"]:checked').value; //querySelectorAll because I can select one or more elements porque eu posso selecionar mais de uma opção (radio)

   
    if(name === ""){  // Name validation Validação do nome
        alert("Please fill the Name");
        return false;
    }
                      //Any char @ domain . letters (2 to 4 characters} Qualquer char @    dominio    . letras  {de 2 a 4 caracteres}
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/   // Defining the valid format Definindo o formato válido
    if(!email.match(emailPattern)){ //Email validation Validação de email
        alert("Please type a valid email");
        return false;
    }


    // Password Validation Validação de Senha
    if(password.length < 8){
        alert("The password must contain 8 characters")
        return false;
    }
    if(password !== confirmpassword){
        alert("the passwords don´t match")
        return false;
    }
    let passwordPattern = /^[a-zA-Z0-9._-]$/
    if (!password.match(passwordPattern)){
        alert("The password must contain capital letter, small letters, numbers, '.', '_', '-', and '@'")
        return false;
    }
}