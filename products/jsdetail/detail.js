const images = [
  { src: "images/produk1.jpg", alt: "Foto utama" },
  { src: "images/produk1.jpg", alt: "Foto closeup" },
  { src: "images/produk2.jpg", alt: "Detail produk" },
  { src: "images/produk3.jpg", alt: "Kain dekat" },
  { src: "images/produk4.jpg", alt: "Tampilan belakang" }
];

const mainImage = document.getElementById("mainImage");
const previewImages = document.querySelectorAll(".preview-img");

previewImages.forEach((img, idx) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    mainImage.src = images[idx].src;
    mainImage.alt = images[idx].alt;
    previewImages.forEach(i => i.classList.remove("ring-4", "ring-teal-500"));
    img.classList.add("ring-4", "ring-teal-500");
  });
});

if (previewImages.length > 0) {
  previewImages[0].classList.add("ring-4", "ring-teal-500");
}
