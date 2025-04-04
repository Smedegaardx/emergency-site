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
  document.querySelector("#breadtext").innerHTML = "Solen er den største fare for menneskeheden. Det vides ikke hvorfor eller hvordan solen pludselig er blevet fjendltig, men staten arbejder <span> stærkt </span> på at finde en løsning";
  document.querySelector("#efficiency").innerHTML = "Indsæt liste over hvorfor solen mugligvis er fjendtlig";
  document.querySelector("#requirement").innerHTML = "Indsæt propaganda for hvad staten gør for at stoppe det";
  document.querySelector("#Pyramid").classList.remove("pyramidhide1");
  document.querySelector("#requirement").classList.remove("hide");
}

function beamText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Konsekvenser";
  document.querySelector("#breadtext").innerHTML = "Solen's strålingsniveau er <span> STÆRKT </span> forøget. Det kan have store konsekvenser for en menneskelig krop. Herunder kan læses nærmere";
  document.querySelector("#efficiency").innerHTML = "Indsæt her ting solen kan gøre ved kroppen";
  document.querySelector("#requirement").classList.add("hide");
  document.querySelector("#Pyramid").classList.remove("pyramidhide2");
}

function pyramidText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Vi tester lige 123";
  document.querySelector("#breadtext").innerHTML = "Vi tester lige 123";
  document.querySelector("#efficiency").innerHTML = "Vi tester lige 123";
  document.querySelector("#requirement").innerHTML = "Vi tester lige 123";
  document.querySelector("#requirement").classList.remove("hide");
  //   document.querySelector("#requirement").classList.remove("hide");
}

function houseText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Beskyttelse";
  document.querySelector("#breadtext").innerHTML = "";
  document.querySelector("#efficiency").innerHTML = "Vi tester lige 123";
  document.querySelector("#requirement").innerHTML = "Vi tester lige 123";
  document.querySelector("#Pyramid").classList.remove("pyramidhide3");
  document.querySelector("#requirement").classList.remove("hide");
  //   document.querySelector("#requirement").classList.add("hide");
}
