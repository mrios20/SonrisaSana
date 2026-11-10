const botonMenu = document.querySelector(".boton-menu");
const menuPrincipal = document.querySelector(".menu-principal");
if (botonMenu && menuPrincipal) {
  botonMenu.addEventListener("click", () => {
    const abierto = menuPrincipal.classList.toggle("abierto");
    botonMenu.classList.toggle("activo", abierto);
    botonMenu.setAttribute("aria-expanded", String(abierto));
    botonMenu.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú" : "Abrir menú",
    );
  });
  menuPrincipal.querySelectorAll("a").forEach((enlace) =>
    enlace.addEventListener("click", () => {
      menuPrincipal.classList.remove("abierto");
      botonMenu.classList.remove("activo");
      botonMenu.setAttribute("aria-expanded", "false");
      botonMenu.setAttribute("aria-label", "Abrir menú");
    }),
  );
}
document.querySelectorAll(".accordion-titulo").forEach((boton) =>
  boton.addEventListener("click", () => {
    const actual = boton.closest(".accordion-item");
    const estabaAbierto = actual.classList.contains("activo");
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("activo");
      const titulo = item.querySelector(".accordion-titulo");
      if (titulo) {
        titulo.setAttribute("aria-expanded", "false");
        const signo = titulo.querySelector("span");
        if (signo) signo.textContent = "+";
      }
    });
    if (!estabaAbierto) {
      actual.classList.add("activo");
      boton.setAttribute("aria-expanded", "true");
      const signo = boton.querySelector("span");
      if (signo) signo.textContent = "−";
    }
  }),
);
