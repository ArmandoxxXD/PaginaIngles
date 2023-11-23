document.addEventListener("DOMContentLoaded", function () {
  const timeSelector = document.getElementById("time-selector");
  const examplesSection = document.getElementById("examples-section");
  const exercisesSection = document.getElementById("exercises-section");
  const explanationSection = document.getElementById("explanation-section");

  function updateContent() {
    const selectedTime = timeSelector.value;
    switch (selectedTime) {
      case "presentSimple":
        explanationSection.innerHTML =
          '<div class="section-box explanation">' +
          '<h1 class="titulo">Presente Simple</h1>' +
          '<div class="explanation__cuerpo">' +
          '<p>El presente simple en voz activa se utiliza para acciones habituales o estados permanentes. La estructura es: sujeto + verbo en tercera persona del singular para afirmaciones o sujeto + do/does + not + verbo base para negaciones. En voz pasiva, se utiliza "is/are" seguido del participio pasado del verbo principal, poniendo énfasis en el objeto de la acción.</p>' +
          '</div>' +
          '<div class="structure">' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Es quien recibe la acción." id="structure_1">Objeto</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Se utiliza is/are para formar la voz pasiva." id="structure_2">Is/Are</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Participio pasado del verbo principal." id="structure_3">Participio Pasado</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Agente de la acción (opcional)." id="structure_4">Doer</p>' +
          '</div></div>';
        examplesSection.innerHTML =
          '<div class="section-box">' +
          '<h2 class="titulo">Ejemplos</h2>' +
          '<ul>' +
          '<li>Activa: People speak Spanish in Mexico.</li>' +
          '<li>Pasiva: Spanish is spoken in Mexico.</li>' +
          '</ul></div>';
        exercisesSection.innerHTML =
          '<div class="section-box">' +
          '<p>Transforma a voz pasiva: "The cat chases the mouse."</p>' +
          '<input type="text" class="form-control" placeholder="Escribe en voz pasiva">' +
          '<button class="btn btn-primary mt-2">Comprobar</button>' +
          '<p class="feedback"></p></div>';
      
        cargarElementos();
        agregarLogicaAnimacion(structure_1);
        agregarLogicaAnimacion(structure_2);
        agregarLogicaAnimacion(structure_3);
        agregarLogicaAnimacion(structure_4);
        break;
      
      
        case "pastSimple":
          explanationSection.innerHTML =
            '<div class="section-box explanation">' +
            '<h1 class="titulo">Pasado Simple</h1>' +
            '<div class="explanation__cuerpo">' +
            '<p>El pasado simple en voz activa se usa para acciones completadas en el pasado. La estructura es: sujeto + verbo en pasado simple + complemento. En voz pasiva, se utiliza "was/were" seguido del participio pasado del verbo principal, enfocándose en el objeto de la acción más que en el sujeto que la realiza.</p>' +
            '<div><h2 class="titulo">Estructura</h2>' +
            '<div class="structure">' +
            '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Sujeto que recibe la acción." id="structure_1">Sujeto</p>' +
            '<p> + </p>' +
            '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Auxiliar para la voz pasiva en pasado (was/were)." id="structure_2">Was/Were</p>' +
            '<p> + </p>' +
            '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Participio pasado del verbo principal." id="structure_3">Participio Pasado</p>' +
            '<p> + </p>' +
            '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Agente de la acción (opcional)." id="structure_4">Doer</p>' +
            '</div></div></div></div>';
          examplesSection.innerHTML =
            '<div class="section-box">' +
            '<ul>' +
            '<li>Activa: Columbus discovered America.</li>' +
            '<li>Pasiva: America was discovered by Columbus.</li>' +
            '</ul></div>';
          exercisesSection.innerHTML =
            '<div class="section-box">' +
            '<p>Transforma la oración a voz pasiva en pasado simple: "She wrote a letter."</p>' +
            '<input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva">' +
            '<button class="btn btn-primary mt-2">Comprobar</button>' +
            '<p class="feedback"></p></div>';
        
          cargarElementos();
          agregarLogicaAnimacion(structure_1);
          agregarLogicaAnimacion(structure_2);
          agregarLogicaAnimacion(structure_3);
          agregarLogicaAnimacion(structure_4);
          break;
        
      // Ejemplo y ejercicio para Presente Perfecto
      case "presentPerfect":
        explanationSection.innerHTML =
          '<div class="section-box explanation">' +
          '<h1 class="titulo">Presente Perfecto</h1>' +
          '<div class="explanation__cuerpo">' +
          '<p>La voz pasiva en presente perfecto se forma utilizando "have" o "has" seguido del participio pasado del verbo principal. Se usa para hablar de acciones que se han completado en algún punto antes del presente o que tienen un efecto en el presente.</p>' +
          '<div><h2 class="titulo">Estructura</h2>' +
          '<div class="structure">' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Sujeto que recibe la acción." id="structure_1">Sujeto</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Auxiliar para la voz pasiva (have/has)." id="structure_2">Have/Has</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Parte del auxiliar been para voz pasiva." id="structure_3">Been</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Participio pasado del verbo principal." id="structure_4">Participio Pasado</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Agente de la acción (opcional)." id="structure_5">Doer</p>' +
          '</div></div></div></div>';
        examplesSection.innerHTML =
          '<div class="section-box">' +
          '<ul>' +
          '<li><strong>Activa:</strong> They have built a new bridge.</li>' +
          '<li><strong>Pasiva:</strong> A new bridge has been built by them.</li>' +
          '</ul></div>';
        exercisesSection.innerHTML =
          '<div class="section-box">' +
          '<p>Transforma la oración a voz pasiva: "The engineers have designed a new bridge."</p>' +
          '<input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva">' +
          '<button class="btn btn-primary mt-2">Comprobar</button>' +
          '<p class="feedback"></p></div>';
      
        cargarElementos();
        agregarLogicaAnimacion(structure_1);
        agregarLogicaAnimacion(structure_2);
        agregarLogicaAnimacion(structure_3);
        agregarLogicaAnimacion(structure_4);
        agregarLogicaAnimacion(structure_5);
        break;
      

      // Ejemplo y ejercicio para Pasado Perfecto
      case "pastPerfect":
        explanationSection.innerHTML =
          '<div class="section-box explanation">' +
          '<h1 class="titulo">Pasado Perfecto</h1>' +
          '<div class="explanation__cuerpo">' +
          '<p>El pasado perfecto en voz pasiva se forma con "had been" seguido del participio pasado del verbo principal. Este tiempo verbal se utiliza para hablar de acciones que habían sido completadas antes de otro punto en el pasado.</p>' +
          '<div><h2 class="titulo">Estructura</h2>' +
          '<div class="structure">' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Sujeto que recibe la acción." id="structure_1">Sujeto</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Auxiliar para la voz pasiva en pasado perfecto (had been)." id="structure_2">Had been</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Participio pasado del verbo principal." id="structure_3">Participio Pasado</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Agente de la acción (opcional)." id="structure_4">Doer</p>' +
          '</div></div></div></div>';
        examplesSection.innerHTML =
          '<div class="section-box">' +
          '<ul>' +
          '<li><strong>Activa:</strong> The chef had cooked a delicious meal.</li>' +
          '<li><strong>Pasiva:</strong> A delicious meal had been cooked by the chef.</li>' +
          '</ul></div>';
        exercisesSection.innerHTML =
          '<div class="section-box">' +
          '<p>Transforma la oración a voz pasiva: "The author had written a novel."</p>' +
          '<input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva">' +
          '<button class="btn btn-primary mt-2">Comprobar</button>' +
          '<p class="feedback"></p></div>';
      
        cargarElementos();
        agregarLogicaAnimacion(structure_1);
        agregarLogicaAnimacion(structure_2);
        agregarLogicaAnimacion(structure_3);
        agregarLogicaAnimacion(structure_4);
        break;
      

      // Ejemplo y ejercicio para Futuro Simple
      case "futureSimple":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: They will build a new stadium.</p><p>Pasiva: A new stadium will be built by them.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The company will launch a new product."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        explanationSection.innerHTML = 
          '<div class="section-box explanation"> <h1 class="titulo">Futuro Simple</h1> <div class="explanation__cuerpo"> <p> El futuro simple es un tiempo verbal que se utiliza para expresar acciones que ocurrirán en el futuro. En inglés, se forma generalmente utilizando el modal "will" seguido del verbo en su forma base (infinitivo). </p> <p> La voz pasiva en futuro simple se forma utilizando el auxiliar "will" junto con el participio pasado del verbo principal. </p> <p> El futuro simple se usa para hablar sobre eventos o acciones que ocurrirán después del momento presente.  </p> </div>  <div class="structure"> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es quien recibe la acción." id="structure_1"> Objeto </p><p> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Depués del objeto se agrega Will be para crear la estructura correcta" id="structure_2"> Will be </p> <p class="cursor_normal"> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es la acción que se realiza, conjugada en pasado participio" id="structure_3"> Pasado participio </p> <p class="cursor_normal"> + </p> <p data-bs-toggle="tooltip" data-bs-placement="top" title="Es quien recibe la acción" id="structure_4"> Doer </p>  </div> </div>'
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
        explanationSection.innerHTML =
          '<div class="section-box explanation">' +
          '<h1 class="titulo">Futuro Perfecto</h1>' +
          '<div class="explanation__cuerpo">' +
          '<p>El futuro perfecto se utiliza para acciones que se completarán antes de un punto específico en el futuro. En voz activa, la estructura es: Sujeto + "will have" + participio pasado. En voz pasiva, se agrega "been" después de "will have", centrándose en el sujeto que recibe la acción.</p>' +
          '<div><h2 class="titulo">Estructura</h2>' +
          '<div class="structure">' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Sujeto que recibe la acción." id="structure_1">Sujeto</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Auxiliar para la voz pasiva en futuro perfecto (will have)." id="structure_2">Will have</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Parte del auxiliar been para voz pasiva." id="structure_3">Been</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Participio pasado del verbo principal." id="structure_4">Participio Pasado</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Agente de la acción (opcional)." id="structure_5">Doer</p>' +
          '</div></div></div></div>';
        examplesSection.innerHTML =
          '<div class="section-box">' +
          '<ul>' +
          '<li><strong>Activa:</strong> She will have written a book.</li>' +
          '<li><strong>Pasiva:</strong> A book will have been written by her.</li>' +
          '<li><strong>Activa:</strong> They will have finished the project.</li>' +
          '<li><strong>Pasiva:</strong> The project will have been finished by them.</li>' +
          '<li><strong>Activa:</strong> I will have eaten lunch.</li>' +
          '<li><strong>Pasiva:</strong> Lunch will have been eaten by me.</li>' +
          '</ul></div>';
        exercisesSection.innerHTML =
          '<div class="section-box">' +
          '<p>Transforma la oración a voz pasiva: "The scientists will have discovered a new element."</p>' +
          '<input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva">' +
          '<button class="btn btn-primary mt-2">Comprobar</button>' +
          '<p class="feedback"></p></div>';
      
        cargarElementos();
        agregarLogicaAnimacion(structure_1);
        agregarLogicaAnimacion(structure_2);
        agregarLogicaAnimacion(structure_3);
        agregarLogicaAnimacion(structure_4);
        agregarLogicaAnimacion(structure_5);
        break;
      

      // Ejemplo y ejercicio para Verbo Modal Perfecto
      case "modalPerfect":
        examplesSection.innerHTML =
        '<div class="section-box"><ul>' +
        '<li><strong>Activa:</strong> They should have informed us about the change.</li>' +
        '<li><strong>Pasiva:</strong> We should have been informed about the change by them.</li>' +
        '</ul></div>';
      exercisesSection.innerHTML =
        '<div class="section-box"><p>Transforma la oración a voz pasiva: "She must have completed the assignment."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
      explanationSection.innerHTML =
        '<div class="section-box explanation">' + 
        '<h1 class="titulo">Verbo Modal Perfecto</h1>' + 
        '<div class="explanation__cuerpo">' +
        '<p>El Verbo Modal Perfecto combina un verbo modal con "have" y el participio pasado del verbo principal. Se usa para hablar de acciones que se esperaba o debía haber ocurrido en el pasado. Es útil cuando se quiere enfatizar la acción en sí o su resultado, más que el sujeto que realizó la acción.</p>' +
        '<p>En la voz activa, la estructura es: Sujeto + Verbo Modal + "have" + Participio Pasado. En la voz pasiva, se agrega "been" después de "have", siguiendo la estructura: Sujeto + Verbo Modal + "have been" + Participio Pasado + (opcionalmente) "by" + Agente.</p>' +
        '<div><h2 class="titulo">Estructura</h2>' + 
        '<div class="structure">' +
        '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Sujeto que recibe la acción." id="structure_1">Sujeto</p>' + 
        '<p> + </p>' + 
        '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Verbo modal utilizado." id="structure_2">Modal</p>' + 
        '<p> + </p>' + 
        '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Parte del auxiliar have." id="structure_3">have</p>' +
        '<p> + </p>' + 
        '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Parte del auxiliar been para voz pasiva." id="structure_4">been</p>' +
        '<p> + </p>' + 
        '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Participio pasado del verbo principal." id="structure_5">Participio Pasado</p>' +
        '<p> + </p>' + 
        '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Agente de la acción (opcional)." id="structure_6">Doer</p>' +
        '</div></div></div></div>';
      cargarElementos();
      agregarLogicaAnimacion(structure_1);
      agregarLogicaAnimacion(structure_2);
      agregarLogicaAnimacion(structure_3);
      agregarLogicaAnimacion(structure_4);
      agregarLogicaAnimacion(structure_5);
      agregarLogicaAnimacion(structure_6);
      break;

      case "presentContinuous":
        explanationSection.innerHTML =
          '<div class="section-box explanation">' +
          '<h1 class="titulo">Presente Continuo</h1>' +
          '<div class="explanation__cuerpo">' +
          '<p>El presente continuo en voz pasiva se utiliza para acciones que están ocurriendo en el momento actual. En voz activa, la estructura es: sujeto + "is/are" + gerundio (verbo+ing). En voz pasiva, se agrega "being" seguido del participio pasado del verbo, centrándose en el objeto de la acción.</p>' +
          '<div><h2 class="titulo">Estructura</h2>' +
          '<div class="structure">' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Sujeto que recibe la acción." id="structure_1">Sujeto</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Auxiliar para la voz pasiva en presente continuo (is/are being)." id="structure_2">Is/Are being</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Participio pasado del verbo principal." id="structure_3">Participio Pasado</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Agente de la acción (opcional)." id="structure_4">Doer</p>' +
          '</div></div></div></div>';
        examplesSection.innerHTML =
          '<div class="section-box">' +
          '<p>Activa: They are watching a movie.</p><br>' +
          '<p>Pasiva: A movie is being watched by them.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box">' +
          '<p>Transforma la oración a voz pasiva: "The workers are repairing the road."</p>' +
          '<input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva">' +
          '<button class="btn btn-primary mt-2">Comprobar</button>' +
          '<p class="feedback"></p></div>';
      
        cargarElementos();
        agregarLogicaAnimacion(structure_1);
        agregarLogicaAnimacion(structure_2);
        agregarLogicaAnimacion(structure_3);
        agregarLogicaAnimacion(structure_4);
        break;
      

      // Pasado Continuo
      case "pastContinuous":
        explanationSection.innerHTML =
          '<div class="section-box explanation">' +
          '<h1 class="titulo">Pasado Continuo</h1>' +
          '<div class="explanation__cuerpo">' +
          '<p>El pasado continuo en voz pasiva se utiliza para describir acciones que estaban ocurriendo en un momento específico en el pasado. En voz activa, la estructura es: sujeto + "was/were" + gerundio (verbo+ing). En voz pasiva, se agrega "being" seguido del participio pasado del verbo, centrándose en el objeto de la acción.</p>' +
          '<div><h2 class="titulo">Estructura</h2>' +
          '<div class="structure">' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Sujeto que recibe la acción." id="structure_1">Sujeto</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Auxiliar para la voz pasiva en pasado continuo (was/were being)." id="structure_2">Was/Were being</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Participio pasado del verbo principal." id="structure_3">Participio Pasado</p>' +
          '<p> + </p>' +
          '<p data-bs-toggle="tooltip" data-bs-placement="top" title="Agente de la acción (opcional)." id="structure_4">Doer</p>' +
          '</div></div></div></div>';
        examplesSection.innerHTML =
          '<div class="section-box">' +
          '<p>Activa: The chef was cooking the meal.</p><br>' +
          '<p>Pasiva: The meal was being cooked by the chef.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box">' +
          '<p>Transforma la oración a voz pasiva: "The artist was painting a portrait."</p>' +
          '<input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva">' +
          '<button class="btn btn-primary mt-2">Comprobar</button>' +
          '<p class="feedback"></p></div>';
      
        cargarElementos();
        agregarLogicaAnimacion(structure_1);
        agregarLogicaAnimacion(structure_2);
        agregarLogicaAnimacion(structure_3);
        agregarLogicaAnimacion(structure_4);
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
