const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})





$(document).ready(function(){
    $("#formularioRegistro").submit(function(event){
        console.log("Se está ejecutando el código de manejo del evento submit.");
    
    
        event.preventDefault();
    
        // Almacenar los datos del formulario en variables
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var correo = $("#correo").val();
        var numero = $("#numero").val();
        var tipoAyuda = $("#tipoAyuda").val();
        // -----------------------------------------------------------------------------
    
        // Verificacion para NOMBRES Y APELLIDOS
    
        // Verifica si el nombre tiene numeros
        if(/\d/.test(nombre)){
            alert("El nombre no puede contener numeros, intentelo de nuevo :(")
            return;
        }
            
        // Verifica si el apellido tiene numeros
        if(/\d/.test(apellido)){
            alert("El apellido no puede contener numeros, intentelo de nuevo :(")
            return;
        }
                
        // Verifica el largo del apellido y del nombre
        if(nombre.length < 3 || nombre.length > 20 || apellido.length < 3 || apellido.length > 20){
            alert("El apellido debe tener entre 3 a 20 caracteres, intentelo de nuevo :(");
            return;
         }
        // ------------------------------------------------------------------------------
        // Verificacion para CORREO ELECTRONICOS
         if(correo.indexOf('@') === -1){
            alert('El correo del electronico debe tener un @, intentelo de nuevo');
            return
         }
        // -------------------------------------------------------------------------------
        // Verificacion para NUMEROS DE TELEFONOS
        
        // Verificar si el numero de telefono empieza con '+' y ademas utiliza el startsWith
        if(!numero.startsWith('+')){
            alert("El numero debe comenzar con '+', intentelo de nuevo :(");
            return;
        }
        // Verificar si el numero esta entre 12 o 13 caracteres
        if(numero.length !== 12 && numero.length !== 13){
            alert("El numero debe tener 12 caracteres, incluyendo el signo +")
            return;
        }
    
        // --------------------------------------------------------------------------------
        // Verificacion para SECCION
        if(tipoAyuda === "seleccioneValue"){
            alert("Porfavor, seleccione una opcion");
            return;
        }
     
    })
    });