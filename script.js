document.addEventListener("DOMContentLoaded", function () {
  const timeSelector = document.getElementById("time-selector");
  const introductionSection = document.getElementById("introduction-section");
  const examplesSection = document.getElementById("examples-section");
  const exercisesSection = document.getElementById("exercises-section");
  const explanationSection = document.getElementById("explanation-section");


  function updateContent() {
    const selectedTime = timeSelector.value;
    switch (selectedTime) {

      case "presentSimple":
        introductionSection.innerHTML =
        '<div class="section-box"><h3>Explicación</h3><p>El presente simple en voz activa se utiliza para expresar acciones habituales, hechos generalmente verdaderos o estados permanentes. En una oración en voz activa, sigue la estructura: sujeto + verbo conjugado en tercera persona del singular + complemento.</p><p>Para convertir una oración de voz activa a pasiva, se invierte el orden de las palabras y se utiliza el verbo auxiliar "to be" seguido por el participio pasado del verbo principal. De esta manera, se destaca el objeto o receptor de la acción en lugar de quien realiza la acción, sin cambiar el tiempo verbal original. La voz pasiva es útil cuando queremos enfocarnos en lo que se recibe o experimenta, en lugar de la persona o cosa que realiza la acción.</p></div>';
        examplesSection.innerHTML =
        '<div class="section-box"><ul>' +
        '<li><strong>Activa:</strong> People speak Spanish in Mexico.</li>' +
        '<li><strong>Pasiva:</strong> Spanish is spoken in Mexico by people.</li>' +
        '<li><strong>Activa:</strong> They eat tacos for dinner.</li>' +
        '<li><strong>Pasiva:</strong> Tacos are eaten for dinner by them.</li>' +
        '<li><strong>Activa:</strong> She teaches English at the school.</li>' +
        '<li><strong>Pasiva:</strong> English is taught at the school by her.</li>' +
        '</ul></div>';
        exercisesSection.innerHTML =
        '<div class="section-box"><p>Transforma la oración a voz pasiva: "The cat chases the mouse."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
          break;

          case "pastSimple":
            introductionSection.innerHTML =
                '<div class="section-box"><h3>Explicación</h3><p>La voz pasiva en pasado simple se utiliza para expresar acciones completadas en el pasado. En una oración en voz activa, la estructura general es: sujeto + verbo en pasado simple + complemento.</p><p>Para convertir una oración de voz activa a pasiva en pasado simple, se utiliza el verbo auxiliar "to be" en la forma correspondiente al pasado, seguido por el participio pasado del verbo principal. De esta manera, se enfoca en lo que se recibe o experimenta, en lugar de la persona o cosa que realiza la acción, sin cambiar el tiempo verbal original.</p></div>';
            examplesSection.innerHTML =
                '<div class="section-box"><ul>' +
                '<li><strong>Activa:</strong> Columbus discovered America.</li>' +
                '<li><strong>Pasiva:</strong> America was discovered by Columbus.</li>' +
                '<li><strong>Activa:</strong> She wrote a letter.</li>' +
                '<li><strong>Pasiva:</strong> A letter was written by her.</li>' +
                '<li><strong>Activa:</strong> They built a house last year.</li>' +
                '<li><strong>Pasiva:</strong> A house was built by them last year.</li>' +
                '</ul></div>';
            exercisesSection.innerHTML =
      '<div class="section-box"><p>Transforma la oración a voz pasiva en pasado simple: "She wrote a letter."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
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
        break;

      // Ejemplo y ejercicio para Verbos Modales
      case "modalVerbs":
        examplesSection.innerHTML =
          '<div class="section-box"><p>Activa: You must submit the application.</p><p>Pasiva: The application must be submitted.</p></div>';
        exercisesSection.innerHTML =
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "You can complete the survey."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
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

      case "presentContinuous":
          examplesSection.innerHTML = 
            '<div class="section-box"><p>Activa: They are watching a movie.</p><br><p>En esta oración, "They" (Ellos) es el sujeto que realiza la acción de ver. La estructura de la oración se centra en quien está realizando la acción.</p><br><p>Pasiva: A movie is being watched by them.</p><br><p>En la versión pasiva, "A movie" (Una película) se convierte en el sujeto de la oración. La acción de ver sigue siendo la misma, pero ahora el enfoque está en la película que está siendo vista, en lugar de en las personas que la ven. La estructura de la oración en voz pasiva en presente continuo generalmente sigue el formato: sujeto pasivo + is/are being + verbo principal en participio pasado + by + sujeto activo (opcional).</p></div>';
          exercisesSection.innerHTML = 
            '<div class="section-box"><p>Transforma la oración a voz pasiva: "The workers are repairing the road."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
          explanationSection.innerHTML = 
            '<div><h1 class="mb-4 text-center" style="color: white;">Explicación</h1><p>En la voz pasiva en presente continuo, se enfoca en una acción que está siendo realizada actualmente. Se utiliza para dar más importancia a la acción que se lleva a cabo o al objeto que recibe la acción, en lugar de quién realiza la acción. Es común en descripciones donde el ejecutante de la acción no es tan relevante como la acción en sí.</p></div>'
      break;

      // Pasado Continuo
      case "pastContinuous":
        examplesSection.innerHTML = 
          '<div class="section-box"><p>Activa: The chef was cooking the meal.</p><br><p>En esta oración, the chef (el chef) es el sujeto que realiza la acción de cocinar. La estructura de la oración se centra en quien está realizando la acción.</p><br><p>Pasiva: The meal was being cooked by the chef.</p><br><p>En la versión pasiva, the meal (la comida) se convierte en el sujeto de la oración. La acción de cocinar sigue siendo la misma, pero ahora el enfoque está en la comida que está siendo cocinada, en lugar de en el chef que la cocina. La estructura de la oración en voz pasiva en pasado continuo generalmente sigue el formato: sujeto pasivo + was/were being + verbo principal en participio pasado + by + sujeto activo (opcional).</p></div>';
        exercisesSection.innerHTML = 
          '<div class="section-box"><p>Transforma la oración a voz pasiva: "The artist was painting a portrait."</p><input type="text" class="form-control" placeholder="Escribe la oración en voz pasiva"><button class="btn btn-primary mt-2">Comprobar</button><p class="feedback"></p></div>';
        explanationSection.innerHTML = 
          '<div> <h1 class="mb-4 text-center" style="color: white;">Explicación</h1> <p>En la voz pasiva en pasado continuo, se describe una acción que estaba siendo realizada por alguien en un momento específico del pasado, pero el enfoque se desplaza del ejecutante de la acción (el sujeto activo) al receptor de la acción (el sujeto pasivo). Este tiempo verbal se utiliza para enfatizar la acción en sí más que quién la realizaba</p></div>'
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
});
