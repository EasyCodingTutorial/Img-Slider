// Food Slider
var swiper = new Swiper(".FoodSlider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

// Food Preview
let PreviewContainer = document.querySelector(".foodPreviewContainer");
let Preview_box = PreviewContainer.querySelectorAll(".foodPreview");

document.querySelectorAll(".food .slide").forEach((food) => {
  food.onclick = () => {
    PreviewContainer.style.display = "flex";
    let name = food.getAttribute("data-name");
    Preview_box.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

PreviewContainer.querySelector("#ClosePreview").onclick = () => {
  PreviewContainer.style.display = "none";
  Preview_box.forEach((close) => {
    close.classList.remove("active");
  });
};
