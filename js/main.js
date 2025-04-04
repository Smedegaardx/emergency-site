document.querySelector("#Sun").addEventListener("mouseover", addBorder);
document.querySelector("#Beam").addEventListener("mouseover", addBorder);
document.querySelector("#Pyramid").addEventListener("mouseover", addBorder);
document.querySelector("#House").addEventListener("mouseover", addBorder);
document.querySelector("#Sun").addEventListener("mouseout", removeBorder);
document.querySelector("#Beam").addEventListener("mouseout", removeBorder);
document.querySelector("#Pyramid").addEventListener("mouseout", removeBorder);
document.querySelector("#House").addEventListener("mouseout", removeBorder);
document.querySelector("#Sun").addEventListener("click", sunText);
document.querySelector("#Beam").addEventListener("click", beamText);
document.querySelector("#Pyramid").addEventListener("click", pyramidText);
document.querySelector("#House").addEventListener("click", houseText);

function addBorder() {
  console.log(this);
  //   this.style.fill = "red";
}

function removeBorder() {
  console.log(this);
  //   this.style.fill = "none";
}

function sunText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Solen";
  document.querySelector("#breadtext").innerHTML = "Vi tester lige 123";
  document.querySelector("#efficiency").innerHTML = "Vi tester lige 123";
  document.querySelector("#requirement").innerHTML = "Vi tester lige 123";
  document.querySelector("#Pyramid").classList.remove("pyramidhide1");
}

function beamText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Konsekvenser";
  document.querySelector("#breadtext").innerHTML = "Vi tester lige 123";
  document.querySelector("#efficiency").innerHTML = "Vi tester lige 123";
  document.querySelector("#requirement").innerHTML = "Vi tester lige 123";
  document.querySelector("#Pyramid").classList.remove("pyramidhide2");
}

function pyramidText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Vi tester lige 123";
  document.querySelector("#breadtext").innerHTML = "Vi tester lige 123";
  document.querySelector("#efficiency").innerHTML = "Vi tester lige 123";
  document.querySelector("#requirement").innerHTML = "Vi tester lige 123";
  //   document.querySelector("#requirement").classList.remove("hide");
}

function houseText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Beskyttelse";
  document.querySelector("#breadtext").innerHTML = "Vi tester lige 123";
  document.querySelector("#efficiency").innerHTML = "Vi tester lige 123";
  document.querySelector("#requirement").innerHTML = "Vi tester lige 123";
  document.querySelector("#Pyramid").classList.remove("pyramidhide3");
  //   document.querySelector("#requirement").classList.add("hide");
}
