const nav = document.getElementById("nav"); //navbar
const menu = document.getElementById("navMenu"); //navbar menu
const openMenuBtn = document.getElementById("openMenuBtn"); //mobile menu button
const closeMenuBtn = document.getElementById("closeMenuBtn"); //mobile close menu button
const allSections = document.querySelectorAll('.section')

//REVEAL SECTIONS
const revealSection = function(entries, observer) {
  const [entry] = entries

  if(!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function(section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')
})

//CHANGE NAVBAR COLOR ON SCROLL
window.addEventListener("scroll", () => {
  nav.classList.toggle("window-scroll", window.scrollY > 0);
});

//OPEN MOBILE MENU
openMenuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "inline-block";
});

//CLOSE MOBILE MENU
closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "inline-block";
});
