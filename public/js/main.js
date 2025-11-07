
  // VALIDACION DE FORMULARIO
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
  alert('¡Formulario valido! Todos los campos están correctos.');
        
  // Limpia el formulario despues del hacer el envio
    formulario.reset();
    formulario.classList.remove('was-validated');
    return;
  }
  // Agrega clases para mostrar la validacion visual
    formulario.classList.add('was-validated');
      
    }, false);
  });
  // RANGE INPUT - Mostrar valor
  // aqui se busca el input de tipo range o de volumen
  var rangeInput = document.getElementById('rangeVolumen');
  var valorRango = document.getElementById('valorRango');
  
  if (rangeInput && valorRango) {
  // Cuando el usuario mueve el deslizador
    rangeInput.addEventListener('input', function() {
  // se actualiza el texto con el valor mas actual
    valorRango.textContent = this.value;
    });
  }

  // MENSAJE DE CONSOLA
    console.log(' La pagina fue cargada correctamente');
    console.log(' Todos los componentes Bootstrap 5 inicializados');

});