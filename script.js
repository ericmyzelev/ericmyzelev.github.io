const copyrightYear = document.getElementById("copyright-year");

if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}

const sectionLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
const sections = sectionLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const siteHeader = document.querySelector(".site-header");
let navigationUpdatePending = false;

function updateCurrentSection() {
  const activationLine = siteHeader.getBoundingClientRect().bottom + 40;
  const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  const currentSection = isAtBottom
    ? sections[sections.length - 1]
    : sections.filter(section => section.getBoundingClientRect().top <= activationLine).pop();

  sectionLinks.forEach(link => {
    if (currentSection && link.getAttribute("href") === `#${currentSection.id}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  navigationUpdatePending = false;
}

window.addEventListener("scroll", () => {
  if (!navigationUpdatePending) {
    navigationUpdatePending = true;
    window.requestAnimationFrame(updateCurrentSection);
  }
}, { passive: true });

window.addEventListener("resize", updateCurrentSection);
document.querySelectorAll(".abstract").forEach(abstract => {
  abstract.addEventListener("toggle", updateCurrentSection);
});

updateCurrentSection();
