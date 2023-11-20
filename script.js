document.addEventListener("DOMContentLoaded", function () {
  const timeSelector = document.getElementById("time-selector");
  const examplesSection = document.getElementById("examples-section");
  const exercisesSection = document.getElementById("exercises-section");
  const explanationSection = document.getElementById("explanation-section");

  function updateContent() {
    const selectedTime = timeSelector.value;
    switch (selectedTime) {

      case "presentSimple":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: People speak Spanish in Mexico.</p><p>Pasiva: Spanish is spoken in Mexico.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The cat chases the mouse."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        break;

      case "pastSimple":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: Columbus discovered America.</p><p>Pasiva: America was discovered by Columbus.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "She wrote a letter."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        break;

      // Ejemplo y ejercicio para Presente Perfecto
      case "presentPerfect":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: She has finished the report.</p><p>Pasiva: The report has been finished by her.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The engineers have designed a new bridge."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        break;

      // Ejemplo y ejercicio para Pasado Perfecto
      case "pastPerfect":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: The chef had prepared the meal.</p><p>Pasiva: The meal had been prepared by the chef.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The author had written a novel."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        break;

      // Ejemplo y ejercicio para Futuro Simple
      case "futureSimple":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: They will build a new stadium.</p><p>Pasiva: A new stadium will be built by them.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The company will launch a new product."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        explanationSection.innerHTML = 
          '<div class="section-box explanation"> <h1 class="titulo">Futuro Simple</h1> <div class="explanation__cuerpo"> <p> El futuro simple es un tiempo verbal que se utiliza para expresar acciones que ocurrirán en el futuro. En inglés, se forma generalmente utilizando el modal "will" seguido del verbo en su forma base (infinitivo). </p> <p> La voz pasiva en futuro simple se forma utilizando el auxiliar "will" junto con el participio pasado del verbo principal. </p> <p> El futuro simple se usa para hablar sobre eventos o acciones que ocurrirán después del momento presente.  </p> </div>  <div class="structure"> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es quien recibe la acción." id="structure_1"> Objeto </p><p> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Depués del objeto se agrega Will be para crear la estructura correcta" id="structure_3"> Will be </p> <p class="cursor_normal"> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es la acción que se realiza, conjugada en pasado participio" id="structure_4"> Pasado participio </p> <p class="cursor_normal"> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es quien recibe la acción" id="structure_5"> Doer </p>  </div> </div>'
          cargarElementos();
          agregarLogicaAnimacion(Structure_1);
          agregarLogicaAnimacion(Structure_2);
          agregarLogicaAnimacion(Structure_3);
          agregarLogicaAnimacion(Structure_4);
          agregarLogicaAnimacion(Structure_5);
          break;

      // Ejemplo y ejercicio para Verbos Modales
      case "modalVerbs":
        examplesSection.innerHTML =
          '<div class="section-box"> <h2 class="titulo"> Ejemplos </h2 class="color: white; text-align: center;"> <h5> Activa </h5> <p>You must submit the application.</p> <h5> Pasiva </h5> <p>The application must be submitted.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "You can complete the survey."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        explanationSection.innerHTML =
          '<div class="section-box explanation" > <h1 class="titulo">Verbos Modales</h1> <div class="explanation__cuerpo"> <p> Los verbos modales son un tipo especial de verbos que se utilizan junto con otros verbos principales para expresar posibilidad, capacidad, obligación, permiso, sugerencia, etc. </p> <p> Para definir los modal verbs o verbos modales, es importante entender que estos no se conjugan con las personas gramaticales (I, we, you, they, she, he, it), es decir que: </p> <ol> <li>Nunca tendrán infinitivo </li> <li> Nunca se usarán en gerundio </li> <li> Nunca tendrán participio </li>  </ol><p>Los modal verbs pueden significar o manifestar desde sugerencias, necesidades, solicitudes, probabilidades, obligaciones, consejos, hasta conceptos  más complejos como “modalidad”; por lo tanto, su significado transforma tanto el contexto como los verbos que se relacionan dentro de una oración. </p> </br> <h3 class="titulo"> Los verbos modales más usados </h3> <ul> <li> Can </li> <li> May </li> <li> Will </li> <li> Must </li> <li> Should </li> <li> Could </li> <li> Might </li> <li> Would </li> <li> Shall </li> <li> Ought to  </li>  </ul> <div><h2 class="titulo">Estructura</h2><div class="structure"> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es quien recibe la acción." id="structure_1"> Objeto </p> <p> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es el verbo que seleccionamos" id="structure_2"> Modal </p> <p> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Depués del verbo modal se agrega el be para crear la estructura correcta" id="structure_3"> Be </p> <p class="cursor_normal"> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es la acción que se realiza, conjugada en pasado participio" id="structure_4"> Pasado participio </p> <p class="cursor_normal"> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es quien recibe la acción" id="structure_5"> Doer </p>  </div></div> </div> </div>'
        cargarElementos();
        agregarLogicaAnimacion(Structure_1);
        agregarLogicaAnimacion(Structure_2);
        agregarLogicaAnimacion(Structure_3);
        agregarLogicaAnimacion(Structure_4);
        agregarLogicaAnimacion(Structure_5);
        break;

      // Ejemplo y ejercicio para Futuro Perfecto
      case "futurePerfect":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: The students will have completed the course by then.</p><p>Pasiva: The course will have been completed by the students by then.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The scientists will have discovered a new element."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        break;

      // Ejemplo y ejercicio para Verbo Modal Perfecto
      case "modalPerfect":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: They should have informed us about the change.</p><p>Pasiva: We should have been informed about the change by them.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "She must have completed the assignment."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        break;

      // Presente Continuo
      case "presentContinuous":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: They are watching a movie.</p><p>Pasiva: A movie is being watched by them.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The workers are repairing the road."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        break;

      // Pasado Continuo
      case "pastContinuous":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: The chef was cooking the meal.</p><p>Pasiva: The meal was being cooked by the chef.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The artist was painting a portrait."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        break;
    }

    document.querySelectorAll(".section-box button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const exerciseDiv = event.target.closest(".section-box");
        const input = exerciseDiv.querySelector("input");
        const feedback = exerciseDiv.querySelector(".feedback");
        const answer = input.value.trim().toLowerCase();

        // Lógica para comprobar la respuesta
        if (selectedTime === "presentSimple" && answer === "the mouse is chased by the cat") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "pastSimple" && answer === "a letter was written by her") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "presentPerfect" && answer === "a new bridge has been designed by the engineers") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "pastPerfect" && answer === "the novel had been written by the author") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "futureSimple" && answer === "a new product will be launched by the company") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "modalVerbs" && answer === "the survey can be completed") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "futurePerfect" && answer === "a new element will have been discovered by the scientists") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "modalPerfect" && answer === "the assignment must have been completed by her") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "presentContinuous" && answer.toLowerCase() === "the road is being repaired by the workers") {
          feedback.textContent = "Correcto!";
        } else if (selectedTime === "pastContinuous" && answer.toLowerCase() === "a portrait was being painted by the artist") {
          feedback.textContent = "Correcto!";
        } else {
          feedback.textContent = "Incorrecto, intenta de nuevo.";
          feedback.className = "feedback text-danger";
        }
      });
    });
  }

  timeSelector.addEventListener("change", updateContent);
  updateContent();


  // variables Modal
  var Structure_1
  var Structure_2
  var Structure_3
  var Structure_4
  var Structure_5

  function cargarElementos() {

    // Obtener los elementos y agregar la lógica de animación a cada uno
    Structure_1 = document.getElementById('structure_1');
    Structure_2 = document.getElementById('structure_2');
    Structure_3 = document.getElementById('structure_3');
    Structure_4 = document.getElementById('structure_4');
    Structure_5 = document.getElementById('structure_5');

  }

  function agregarLogicaAnimacion(elemento) {
    elemento.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.2)';
      this.style.margin = '0 0.8em'; // Ajusta el valor según tus necesidades
    });

    elemento.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
      this.style.margin = '0 0.3em'; // Ajusta el valor según tus necesidades
    });

    console.log("NOPE")
  }



});
