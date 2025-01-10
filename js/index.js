const navbartoggle = document.querySelector(".navbar_toggle");
const navbarContent = document.querySelector(".navebar_content");
const service = document.querySelector(".Services");
const portfolio = document.querySelector(".Portfolios");
// const active = document.querySelector.apply(".active");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
function Contact() {
  contact.classList.toggle("active");
}
contact.addEventListener("click", Contact);
about.addEventListener("click", function () {
  about.classList.toggle("active");
});
function Services() {
  service.classList.toggle("active");
}
service.addEventListener("click", Services);

function Portfolios() {
  portfolio.classList.toggle("active");
}
portfolio.addEventListener("click", Portfolios);

navbartoggle.addEventListener("click", function () {
  navbartoggle.classList.toggle("active");
  navbarContent.classList.toggle("active");
});
