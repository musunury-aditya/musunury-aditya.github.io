// Renders the navbar and highlights the active link.
// Each page includes: <div id="site-nav"></div><script src="/nav.js"></script>
// (adjust the src path to "../nav.js" for pages inside subfolders)

(function () {
  const links = [
    { href: "index.html",          label: "Home" },
    { href: "about.html",          label: "About" },
    { href: "experience.html",     label: "Experience" },
    { href: "education.html",      label: "Education" },
    { href: "certifications.html", label: "Certifications" },
    { href: "contact.html",        label: "Contact" },
  ];

  // Article pages are one level deep, so prefix with ../
  const depth = window.location.pathname.split("/").length - 2;
  const prefix = depth > 1 ? "../" : "";
  const current = window.location.pathname.split("/").pop() || "index.html";

  const navHTML = `
    <nav class="nav-inner">
      <a href="${prefix}index.html" class="nav-brand">Aditya Musunury</a>
      <div class="nav-links">
        ${links.map(l =>
          `<a href="${prefix}${l.href}" class="${current === l.href ? "active" : ""}">${l.label}</a>`
        ).join("")}
      </div>
    </nav>`;

  const el = document.getElementById("site-nav");
  if (el) el.innerHTML = navHTML;
})();
