document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadButton").addEventListener("click", function () {
      var a = document.createElement("a");
      a.href = "./CV.pdf";
      a.download = "CV.pdf";
      a.click();
    });
  });

function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.style.display === "block"
    ? (mobileMenu.style.display = "none")
    : (mobileMenu.style.display = "block");
}
