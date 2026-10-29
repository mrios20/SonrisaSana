// Menú adaptable para pantallas pequeñas
const botonMenu = document.querySelector(".boton-menu");
const menuPrincipal = document.querySelector(".menu-principal");

if (botonMenu && menuPrincipal) {
  botonMenu.addEventListener("click", () => {
    const estaAbierto = menuPrincipal.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", String(estaAbierto));
  });
}
