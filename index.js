let theme = "light";

const themeButton = document.getElementById("circle-logo");

function main() {
  if (theme === "light") {
    theme = "dark";
    const webTheme = document.getElementById("theme");
    webTheme.setAttribute("href", "dark.css");
  } else {
    theme = "light";
    const webTheme = document.getElementById("theme");
    webTheme.setAttribute("href", "portfolio.css");
  }
}

themeButton.addEventListener("click", main);
