let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("screen1").style.display = "block";
        document.getElementById("inicio").style.display = "none";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("back").style.display = "none";
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("screen2").style.display = "block";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    } 


    function back() {

        if (contador==1) {
            document.getElementById("screen1").style.display = "block";
            document.getElementById("inicio").style.display = "none";
            document.getElementById("screen2").style.display = "none";
            document.getElementById("screen3").style.display = "none";
            contador=0;
            backarriba();
            history.back();
    
        }
        else if(contador==2){
            document.getElementById("screen2").style.display = "block";
            document.getElementById("screen3").style.display = "none";
            document.getElementById("screen4").style.display = "none";
            contador=1;
            backarriba();
            ids1();
    
        }
        }

function inicio() {
    document.getElementById("screen1").style.display = "block";	
    document.getElementById("inicio").style.display = "none";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    contador=0;
    backweb();
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("screen1"),
    contador=0;


function servicios() {

if (contador==0) {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("inicio").style.display = "block";
    document.getElementById("screen2").style.display = "block";
    contador=1;
    ids1();
}
}

function screen3() {
    document.getElementById("screen3").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen1").style.display = "none";
    contador=2;  
    ids1(); 
    
}

function screen4() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "none";  
    document.getElementById("screen1").style.display = "none";
    contador=2;
    ids1();   
    
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
      


      function save(){
        let url = `https://drive.google.com/u/0/uc?id=1LHfeDI68_oEc-ifl6le1PPuZ9AtzOzFq&export=download`;
        window.open(url); 
       };

      function saveuser() {
        Swal.fire({
            text: 'Centro de Entrenamiento Virtual Aéreo',
            imageUrl: 'img/vatceok1.png',
            imageWidth: 200,
            confirmButtonText: 'Añadir a Contactos',
            showCloseButton: 'true',
            showCancelButton: true,
      
        
          }).then((result) => {
            if (result.isConfirmed) {
              save();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Descarga Correcta',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
    
     
    }; 

//suscripcion>
  function Caducada(){
    let url = `https://cliconline.github.io/CliconlineStudios/`;
    window.open(url); 
   }


          document.addEventListener('DOMContentLoaded', sus);

    function sus (){
        Swal.fire({
            position: 'bottom',
            icon: 'warning',
            title: 'Suscripción Caducada',
            text: 'Activa tu Tarjeta Digital',
            allowOutsideClick: false,
          footer: 'CliconlineStudios'
        }).then((result) => {
            if (result.isConfirmed) {
              Caducada();
            }
          })
    };
