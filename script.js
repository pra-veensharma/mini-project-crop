// Slideshow script
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000); // Change every 1 second

// Multiple Crop Recommendations
document.getElementById("cropForm").addEventListener("submit", function(e){
  e.preventDefault();

  const season = document.getElementById("season").value;
  const soil = document.getElementById("soil").value;
  const irrigation = document.getElementById("irrigation").value;

  let recommendations = [];

  // Simple rule-based system
  if (season === "kharif") {
    if (soil === "alluvial" && irrigation === "Yes") {
      recommendations.push("Paddy ", "Maize ");
    } else if (soil === "red" || soil === "laterite") {
      recommendations.push("Millets ", "Pulses (Moong, Urd) ");
    } else {
      recommendations.push("Maize ", "Pigeon Pea (Arhar) ");
    }
  } 
  else if (season === "rabi") {
    if (soil === "black" && irrigation === "Yes") {
      recommendations.push("Wheat ", "Gram (Chana) ");
    } else if (soil === "alluvial") {
      recommendations.push("Mustard ", "Peas ");
    } else {
      recommendations.push("Lentils ", "Barley ");
    }
  }

  if (irrigation === "No") {
    recommendations.push("Bajra ", "Jowar ");
  }

  // Show results
  const resultBox = document.getElementById("resultBox");
  resultBox.innerHTML = `
    <h3>Recommended Crops:</h3>
    <ul>
      ${recommendations.map(crop => `<li>${crop}</li>`).join("")}
    </ul>
  `;
});
