const container = document.querySelector(".container");

for (let i = 0; i < 255; i++) {
  const div = document.createElement("div");
  div.classList.add("grid");
  container.appendChild(div);
}
