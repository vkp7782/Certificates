// Dynamic certificate data
const certificates = [
  {
    title: "Generative AI",
    file: "GEN-AI(1).pdf",
  },
  {
    title: "Python Programming",
    file: "python_basic_certificate.pdf",
  },
  {
    title: "Hackathon",
    file: "Hackathon(1).pdf",
  },
];

const container = document.getElementById("certificate-container");

// Generate cards
certificates.forEach((cert) => {
  const card = document.createElement("div");
  card.className = "card";
  card.onclick = () => openPDF(cert.file);

  card.innerHTML = `
      <img src="https://img.icons8.com/ios-filled/100/ff0000/pdf.png" alt="PDF Icon">
      <h2>${cert.title}</h2>
      <p>Click to view & download</p>
    `;

  container.appendChild(card);
});

// Open PDF
function openPDF(path) {
  const link = document.createElement("a");
  link.href = path;
  link.target = "_blank";
  link.download = path.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Toggle Dark Mode
document.getElementById("toggle-dark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
