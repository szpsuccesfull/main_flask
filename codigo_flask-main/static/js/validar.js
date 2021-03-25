document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
function validarFormulario(evento) {
    evento.preventDefault();
    var Name = document.getElementById('Name').value;
    if(Name.length == 0) {
        alert('[ERROR] El campo Nombre debe tener un valor ...');
        return;
    }
    var Identification = document.getElementById('Identification').value;
    if(Identification.length !== 9){
        alert('Algo del numero de la identificacion no esta correcto, vuelva a revisarlos');
        return;
    }
    var City = document.getElementById('City').value;
    if(City.length == 0) {
        alert('[ERROR] El campo Cuidad debe tener un valor de...');
        return;
    }
    var Country = document.getElementById('Country').value;
    if(Country.length == 0) {
        alert('[ERROR] El campo Pais debe tener un valor de...');
        return;
    }
    var Password = document.getElementById('Password').value;
    if (!/[a-z]/.test(Password) || !/[0-9]{1}/.test(Password) || Password.length < 7) {
        alert("El campo 'Password' no es correcto. Es obligatorio, de minimo 7 caracteres, y debe contener minusculas y un (1) digito");
        return;
    }
    this.submit();
}
