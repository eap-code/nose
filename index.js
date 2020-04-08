let formulario = document.getElementById("formulario");


formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    validarFormulario()
    
})


function validarFormulario() {

    let nombres = document.getElementById("nombres");

    let apellidos = document.getElementById("apellidos");

    let edad = document.getElementById("edad");

    let identificacion = document.getElementById("identificacion");

    let genero = document.getElementById("genero");
    
    let alertas = document.getElementById("alertas")
    
    // Verificando el campo Nombres
    
    if(nombres.value.length == 0) {
        
        nombres.setAttribute("class", "danger")
        
        alertas.innerHTML += `
            <span id="alerta-nombre">
                El campo nombres no puede estar vacio
            </span>`
        
        agregarEstilos()
    }
    
    nombres.addEventListener("change", () => {
         
        document.getElementById("alerta-nombre").innerHTML = "";
              
        nombres.setAttribute("class", "form-campo")
        
    })
    
    
    
    // Verificando el campo Apellidos
    
    if(apellidos.value.length == 0) {
        
        apellidos.setAttribute("class", "danger")
        
        alertas.innerHTML += `
            <span id="alerta-apellidos">
                El campo apellidos no puede estar vacio
            </span>`
        
        agregarEstilos()
    }
    
    apellidos.addEventListener("change", () => {
        
       document.getElementById("alerta-apellidos").innerHTML = "";        
        
       apellidos.setAttribute("class", "form-campo")
        
    })
    
     
    // Verificando el campo Edad
    
    if(edad.value.length == 0) {
        
        edad.setAttribute("class", "danger")
        
        alertas.innerHTML += `
            <span id="alerta-edad">
                El campo edad no puede estar vacio
            </span>`
        
        agregarEstilos()
        
    }
    
    edad.addEventListener("change", () => {
    
        document.getElementById("alerta-edad").innerHTML = "";        
        
        edad.setAttribute("class", "form-campo")
        
    })
    
    
    // Verificando el campo identificacion
    
    if(identificacion.value.length == 0) {
    
        identificacion.setAttribute("class", "danger")
        
        alertas.innerHTML += `
        <span id="alerta-identificacion">
            El campo identificacion no puede estar vacio
        </span>`
        
        agregarEstilos()
        
    }
    
    
    identificacion.addEventListener("change", () => {
    
         document.getElementById("alerta-identificacion").innerHTML = "";        
                identificacion.setAttribute("class", "form-campo")
        
    })
    
    
    // Verificando el campo genero
    
    if(genero.value.length == 0) {
        
        genero.setAttribute("class", "danger")
        
        alertas.innerHTML += `
            <span id="alerta-genero">
                El campo genero no puede estar vacio
            </span>`
        
        agregarEstilos()
        
    }
    
    
    genero.addEventListener("change", () => {
    
        document.getElementById("alerta-genero").innerHTML = "";        
        
        genero.setAttribute("class", "form-campo")
        
    })
    
      
    function agregarEstilos() {
               
        alertas.setAttribute("class", "alertas")
        
    }
    
    //formulario.submit()
}



