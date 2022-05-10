
function inicio() {
    document.getElementById("screen1").style.display = "block";	
    document.getElementById("inicio").style.display = "none";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("screen3").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    contador=0;
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("screen1"),
    contador=0;


function servicios() {

if (contador==0) {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    document.getElementById("screen2").style.display = "block";
    document.getElementById("back").style.display = "block";
    contador=1;
}
}

function screen3() {
    document.getElementById("screen3").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen1").style.display = "none";
    document.getElementById("back").style.display = "block";
    contador=2;   
    
}

function screen4() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "none";  
    document.getElementById("screen1").style.display = "none";
    document.getElementById("back").style.display = "block";
    contador=3;   
    
}



function back() {

    if (contador==1) {
        document.getElementById("screen1").style.display = "block";
        document.getElementById("inicio").style.display = "none";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("back").style.display = "none";
        contador=0;
    }
    else{
        document.getElementById("screen2").style.display = "block";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
    }
    
    
    }

    document.querySelector("#submit").addEventListener("click", e => {
        e.preventDefault();
      
        //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
        let telefono = "573998968077";
      
        let cliente = document.querySelector("#cliente").value;
        let edad = document.querySelector("#edad").value;
        let fecha = document.querySelector("#fecha").value;
        let hora = document.querySelector("#hora").value;
        let modulos = document.querySelector("#modulos").value;
        let resp = document.querySelector("#respuesta");
      
        resp.classList.remove("fail");
        resp.classList.remove("send");
      
        let url = `https://api.whatsapp.com/send?phone=593987952997&text=
              *VATCE*%0A
              *Datos de Inscripción*%0A
              *Nombre*%0A
              ${cliente}%0A
              *Edad*%0A
              ${edad}%0A
              *Fecha de Incripción*%0A
              ${fecha}%0A
              *Preferencia de Horario*%0A
              ${hora}%0A
              *Modulo Selecionado*%0A
              ${modulos}%0A`;
      
        if (cliente === "" || edad === "" || fecha === "" || hora === "") {
          resp.classList.add("fail");
          resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
          return false;
        }
        resp.classList.remove("fail");
        resp.classList.add("send");
        resp.innerHTML = `Tu Inscripción fue enviada, ${cliente}`;
      
        window.open(url);
      });
      




