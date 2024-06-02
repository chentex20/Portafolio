let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}



function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//animacion 
ScrollReveal().reveal('.contenido-home', { delay: 300 });
ScrollReveal().reveal('.diseño-web', { delay: 400, reset: false });
ScrollReveal().reveal('.plataforma-streaming', { delay: 400, reset: false });
ScrollReveal().reveal('.tienda-online', { delay: 400, reset: false });
ScrollReveal().reveal('.landing-page', { delay: 400, reset: false });


// boton flotante de wsp
document.addEventListener("DOMContentLoaded", function() {
    var whatsappButton = document.getElementById('whatsapp-button');

  
    // Mostrar los botones con animación
    setTimeout(function() {
      whatsappButton.classList.add('show');
    }, 500);
  
    // Agregar mensaje personalizado al enlace de WhatsApp
    var phoneNumber = '+51971114393';  // Reemplaza con tu número de teléfono
    var message = 'Hola, me gustaría obtener más información.';  // Mensaje personalizado
    whatsappButton.href = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
});
  



// Porcentaje 
  document.addEventListener('DOMContentLoaded', () => {
    const progressElement = document.getElementById('progress');
  
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY; // Desplazamiento vertical actual
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // Altura total de la página - altura de la ventana visible
      const progress = Math.floor((scrollTop / scrollHeight) * 100); // Calcular el progreso en porcentaje
      progressElement.textContent = `${progress}%`; // Mostrar el progreso como un número entero
      // Posicionar el elemento en la parte inferior izquierda de la página
      progressElement.style.position = 'fixed';
      progressElement.style.bottom = '10px'; // 10px desde la parte inferior
      progressElement.style.left = '10px'; // 10px desde la parte izquierda
    });
  });

//skill-porcentaje
function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("Html5");
      habilidades[1].classList.add("Css");
      habilidades[2].classList.add("Javascript");
      habilidades[3].classList.add("React");
      habilidades[4].classList.add("comunicacion");
      habilidades[5].classList.add("trabajo");
      habilidades[6].classList.add("creatividad");
      habilidades[7].classList.add("dedicacion");
      
  }
}