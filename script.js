let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.querySelectorAll(".theme-dot");

for (let themeDot of themeDots) {
  themeDot.addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  } else {
    document.getElementById("theme-style").href = `${mode}.css`;
  }
  localStorage.setItem("theme", mode);
}
