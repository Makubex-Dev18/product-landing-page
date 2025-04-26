const boton = document.getElementById("modo-toggle");

boton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Guardar preferencia en localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("tema", "oscuro");
    boton.textContent = "☀️";
  } else {
    localStorage.setItem("tema", "claro");
    boton.textContent = "🌙";
  }
});

// Cargar tema guardado
window.addEventListener("DOMContentLoaded", () => {
  const temaGuardado = localStorage.getItem("tema");
  if (temaGuardado === "oscuro") {
    document.body.classList.add("dark-mode");
    boton.textContent = "☀️";
  }
});
