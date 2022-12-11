const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const contenst = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contenst.forEach(function (conten) {
      conten.classList.remove("active");
    });
    const elemet = document.getElementById(id);
    elemet.classList.add("active");
  }
});
