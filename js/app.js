//validamos el formulario

function validacion(){
    var nombre, email, mensaje
    nombre= document.getElementById("nombre").value;
    email= document.getElementById("email").value;
    mensaje=document.getElementById("mensaje").value;
    epxRegular=/\w+@\w+\.+[a-z]/ //valida el formato del campo email
    
    if (nombre === "" || email ==="" || "" || mensaje === ""){
        alert("Por favor completar todos los campos");
        return false; 
    }else if(nombre.length >45 || nombre.length<10){
        alert("el nombre debe contener entre 10 y 40 caracteres");
        return false;
    }
    else if(mensaje.length > 60 || mensaje.length < 20){
        alert("el mensaje debe contener entre 20 y 60 caracteres")
        return false;
    }
    

    if (!epxRegular.test(email)){ 
        alert("email incorrecto")
    }


}

