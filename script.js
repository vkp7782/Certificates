const certificates = [
  {
    title: "Generative AI",
    file: "GEN-AI.pdf",
  },
  {
    title: "Python Programming",
    file: "python_basic_certificate.pdf",
  },
  {
    title: "Hackathon",
    file: "Hackathon.pdf",
  },
];

const container = document.getElementById("certificate-container");

certificates.forEach((cert) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
      <img src="https://img.icons8.com/ios-filled/100/ff0000/pdf.png" alt="PDF Icon">
      <h2>${cert.title}</h2>
      <div class="btn-group">
        <button class="btn preview-btn">👁️ Preview</button>
        <button class="btn download-btn">⬇️ Download</button>
      </div>
    `;

  // Preview PDF in new tab
  card.querySelector(".preview-btn").addEventListener("click", () => {
    window.open(cert.file, "_blank");
  });

  // Download PDF
  card.querySelector(".download-btn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = cert.file;
    link.download = cert.file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  container.appendChild(card);
});

// Toggle Dark Mode
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
