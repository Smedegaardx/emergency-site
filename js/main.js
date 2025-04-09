document.querySelector("#Sun").addEventListener("mouseover", hoverSun);
document.querySelector("#Guy").addEventListener("mouseover", hoverGuy);
document.querySelector("#Pyramid").addEventListener("mouseover", hoverPyramid);
document.querySelector("#House").addEventListener("mouseover", hoverHouse);
document.querySelector("#Sun").addEventListener("mouseout", removeSun);
document.querySelector("#Guy").addEventListener("mouseout", removeGuy);
document.querySelector("#Pyramid").addEventListener("mouseout", removePyramid);
document.querySelector("#House").addEventListener("mouseout", removeHouse);
document.querySelector("#Sun").addEventListener("click", sunText);
document.querySelector("#Guy").addEventListener("click", guyText);
document.querySelector("#Pyramid").addEventListener("click", pyramidText);
document.querySelector("#House").addEventListener("click", houseText);

function hoverSun() {
  console.log(this);
  document.querySelector(".hidesun").classList.remove("svghide");
}
function hoverGuy() {
  console.log(this);
  document.querySelector(".hideguy").classList.remove("svghide");
}
function hoverPyramid() {
  console.log(this);
  document.querySelector(".hidepyramid").classList.remove("svghide");
}
function hoverHouse() {
  console.log(this);
  document.querySelector(".hidehouse").classList.remove("svghide");
}

function removeSun() {
  console.log(this);
  document.querySelector(".hidesun").classList.add("svghide");
}
function removeGuy() {
  console.log(this);
  document.querySelector(".hideguy").classList.add("svghide");
}
function removeHouse() {
  console.log(this);
  document.querySelector(".hidehouse").classList.add("svghide");
}
function removePyramid() {
  console.log(this);
  document.querySelector(".hidepyramid").classList.add("svghide");
}

function sunText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Solen";
  document.querySelector("#breadtext").innerHTML =
    "<span>Solen er den største fare for menneskeheden.</span> <br><br> Det vides ikke hvorfor eller hvordan solen pludselig er blevet fjendltig, men staten arbejder <span> stærkt </span> på at finde en løsning";
  document.querySelector("#efficiency").innerHTML = "Vi forventer at det højst sandsynligvis er en fjendtlig stat, som har infiltreret med bio-kemi";
  document.querySelector("#requirement").innerHTML = "Staten undersøger stærkt på hvad vi kan gøre, samt hvoraf det er kommet";
  document.querySelector("#Pyramid-2").classList.remove("pyramidhide1");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.remove("green");
  document.querySelector("#requirement").classList.remove("red");
  document.querySelector("#efficiency").classList.remove("red");
}

function guyText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Konsekvenser";
  document.querySelector("#breadtext").innerHTML = "Solen's strålingsniveau er <span> STÆRKT </span> forøget. Det kan have store konsekvenser for en menneskelig krop. Herunder kan læses nærmere";
  document.querySelector("#efficiency").innerHTML =
    "Symptomer på for meget stråling af solen kan bla. føre til: <ul><li>Feber</li><li>Kvalme</li><li>Tab af hår</li><li>Hud som skaller af</li><li>Smeltende øjenæbler</li><li>Opkast af indre organer</li></ul>";
  document.querySelector("#requirement").classList.add("hide");
  document.querySelector("#Pyramid-2").classList.remove("pyramidhide2");
  document.querySelector("#efficiency").classList.add("red");
  document.querySelector("#efficiency").classList.remove("hide");
}

function pyramidText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "<span>REDACTED</span>";
  document.querySelector("#breadtext").innerHTML = "<h2>Clearance niveau 5 required</h2>";
  document.querySelector("#requirement").classList.add("hide");
  document.querySelector("#efficiency").classList.add("hide");
}

function houseText() {
  console.log(this);
  document.querySelector("#overskrift").innerHTML = "Beskyttelse";
  document.querySelector("#breadtext").innerHTML = "Det er vigtigt at man sørger for at beskytte sig imod solen. <br><br> Her kan du se lidt forskellige do's and dont's";
  document.querySelector("#efficiency").innerHTML = "Do's: <ul> <li>Bliv så vidt muligt indendørs</li><li>Dæk alt hud til hvis du skal udendøre</li><li>Brug minimum SPF100 solcreme</li></ul>";
  document.querySelector("#requirement").innerHTML = "Dont's: <ul><li>Prøv på at slikke sol</li><li>Kig direkte på solen</li><li>Undersøg nærmere hvordan solen er blvet <span>fjendtlig</span></li></ul>";
  document.querySelector("#Pyramid-2").classList.remove("pyramidhide3");
  document.querySelector("#efficiency").classList.add("green");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.add("red");
  document.querySelector("#efficiency").classList.remove("red");
}
