const formulario = document.getElementById('Login');
const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const valorUsuario = usuario.value.trim();
    const valorContrasena = contrasena.value.trim();

    if(valorUsuario === "" && valorContrasena === ""){
        mensaje.textContent = "Debe ingresar todos los datos requeridos.";
        mensaje.style.color = "red";
    return;
    }
    if(valorUsuario === "Profe" && valorContrasena === "Elbkn2026"){
        mensaje.textContent = "Acceso autorizado.";
        mensaje.style.color = "green";
    
        setTimeout(function(){
            windows.location.href = panel.html;
        }, 1000);
        }else{
            mensaje.textContent = "Usuario o Contraseña Incorrectos.";
            mensaje.style.color = "red";
        }
});