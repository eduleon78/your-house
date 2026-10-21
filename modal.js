document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("img-modal-target");
  const closeBtn = document.querySelector(".close-btn");
  const galleryImages = document.querySelectorAll(".galeria img");

  if (!modal || !modalImg || !closeBtn || galleryImages.length === 0) return;

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  const closeModal = () => {
    modal.style.display = "none";
  };

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});