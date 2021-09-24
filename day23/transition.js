const box = document.querySelector(".box");

box.addEventListener("click", () => {
  box.classList.toggle("active")
});


// let containerPG = document.getElementById("containerPG")

containerPG .addEventListener("mouseenter", function() {
  let p_width = this.querySelector(".progress").dataset.percent;
  this.querySelector(".progress").style.width = `${p_width}%`
})