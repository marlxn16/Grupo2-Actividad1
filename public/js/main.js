
  // VALIDACIÓN DE FORMULARIO
  // Buscar todos los formularios que necesiten de validacion
  var formularios = document.querySelectorAll('.needs-validation');
  
  // Para cada formulario encontrado
  Array.prototype.slice.call(formularios).forEach(function(formulario) {
    
    // Escuchar el evento de envio
    formulario.addEventListener('submit', function(evento) {
      
      // Verificar si el formulario es valido
      if (!formulario.checkValidity()) {
        // Si no es valido evitar que se envie en mensaje
        evento.preventDefault();
        evento.stopPropagation();
      } else {
        // Si es valido prevenir para el envio y mostrar el mensaje
        evento.preventDefault();
        alert('¡Formulario válido! Todos los campos están correctos.');
        
        // Limpia el formulario despues del hacer el envio
        formulario.reset();
        formulario.classList.remove('was-validated');
        return;
      }
      
      // Agrega clases para mostrar la validacion visual
      formulario.classList.add('was-validated');
      
    }, false);
  });