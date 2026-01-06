const h1 = document.querySelector("h1");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");

yes.addEventListener("click", () => {
  h1.innerText = "Love You Too Babe";
  no.style.display = "none";
});

no.addEventListener("mouseover", (e) => {
  let randomValOne = Math.round(Math.random() * 300);
  let randomValTwo = Math.round(Math.random() * 300);
  e.target.style.left = `${randomValOne}px`;
  e.target.style.top = `${randomValTwo}px`;
});
