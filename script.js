function mudaTema() {
  document.body.classList.toggle("dark");
}

function subirtela() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

function decidirbotaoscroll() {
  if (window.scrollY === 0) {
    // ocultar o botão
    document.querySelector(".scrollbutton").style.display = "none";
  } else {
    // mostrar o botão
    document.querySelector(".scrollbutton").style.display = "block";
  }
}

setInterval(decidirbotaoscroll, 1000);