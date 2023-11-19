document.addEventListener("DOMContentLoaded", function () {
  const timeSelector = document.getElementById("time-selector");
  const examplesSection = document.getElementById("examples-section");
  const exercisesSection = document.getElementById("exercises-section");

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
        '<div class="section-box">hola</p></div>';
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
});
