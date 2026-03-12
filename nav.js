// Renders the navbar and highlights the active link.
// Each page includes: <div id="site-nav"></div><script src="/nav.js"></script>
// (adjust the src path to "../nav.js" for pages inside subfolders)

(function () {
  const links = [
    { href: "/index.html",          label: "Home" },
    { href: "/about.html",          label: "About" },
    { href: "/experience.html",     label: "Experience" },
    { href: "/education.html",      label: "Education" },
    { href: "/certifications.html", label: "Certifications" },
    { href: "/articles.html",       label: "Articles" },
    { href: "/contact.html",        label: "Contact" },
  ];

  const current = window.location.pathname.split("/").pop() || "index.html";

  const navHTML = `
    <nav class="nav-inner">
      <a href="/index.html" class="nav-brand">Aditya Musunury</a>
      <div class="nav-links">
        ${links
          .map(
            (l) =>
              `<a href="${l.href}" class="${
                current === l.href.replace("/", "") ? "active" : ""
              }">${l.label}</a>`
          )
          .join("")}
      </div>
    </nav>`;

  const el = document.getElementById("site-nav");
  if (el) el.innerHTML = navHTML;
})();
