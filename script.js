function renderSkeleton(section) {
  section.innerHTML = `
    <div class="skeleton skel-title"></div>
    <div class="skeleton skel-text"></div>
    <div class="skeleton skel-text"></div>
  `;
}

function renderContent(section, data) {
  const safeContent = data.content
    .map(item => `<p>${escapeHTML(item)}</p>`)
    .join("");

    section.innerHTML = `
    <h2>${escapeHTML(data.title)}</h2>
    ${safeContent}
  `;
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}


async function load() {
  const sections = document.querySelectorAll(".section");

  sections.forEach(renderSkeleton);

  try {
    const res = await fetch("./content.json");
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }

    const data = await res.json();

    sections.forEach(section => {
      const id = section.id;
      const sectionData = data[id];

      section.style.opacity = 0; // fade out skeleton before showing content

      setTimeout(() => {
        if (!sectionData || !sectionData.title || !Array.isArray(sectionData.content)) {
          section.innerHTML = "<p>Content unavailable</p>";
        } else {
          renderContent(section, sectionData);
        }
        section.style.opacity = 1;
      }, 150); // tweak delay (ms) to allow fade-out animation to complete
    });

  } catch (err) {
    console.error("Load failed:", err);

    sections.forEach(section => {
      section.innerHTML = "<p>Failed to load content</p>";
    });
  }
}

document.addEventListener("DOMContentLoaded", load); // defer added in HTML <script>