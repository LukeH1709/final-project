let sword = document.querySelector(".slash-cost");
let parsedSword = parseFloat(sword.innerHTML);

let clickerCost = document.querySelector(".clicker-cost");
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let traineeLevel = document.querySelector(".trainee-level");
let traineeIncrease = document.querySelector(".trainee-increase");
let parsedClickerIncrease = parseFloat(traineeIncrease.innerHTML);

let autoSwordCost = document.querySelector(".autoSword-cost");
let parsedautoSwordCost = parseFloat(autoSwordCost.innerHTML);
let autoSwordLevel = document.querySelector(".autoSword-level");
let autoSwordIncrease = document.querySelector(".autoSword-increase");
let parsedautoSwordIncrease = parseFloat(autoSwordIncrease.innerHTML);

let spc = 1;
let sps = 0;

function incrementSword() {
  sword.innerHTML = Math.round(parsedSword += spc);
}

function buyClicker() {
  if (parsedSword >= parsedClickerCost) {
    sword.innerHTML = Math.round(parsedSword -= parsedClickerCost);

    traineeLevel.innerHTML ++;
    parsedClickerIncrease = parseFloat((parsedClickerIncrease + 1).toFixed(2));
    traineeIncrease.innerHTML = parsedClickerIncrease;
    spc = parsedClickerIncrease;

    parsedClickerCost *= 1.25;
    clickerCost.innerHTML = Math.round(parsedClickerCost);
  }
}

function buyautoSword() {
  if (parsedSword >= parsedautoSwordCost) {
    sword.innerHTML = Math.round(parsedSword -= parsedautoSwordCost);

    autoSwordLevel.innerHTML ++;
    parsedautoSwordIncrease = parseFloat((parsedautoSwordIncrease + 2).toFixed(2));
    autoSwordIncrease.innerHTML = parsedautoSwordIncrease;
    sps = parsedautoSwordIncrease;

    parsedautoSwordCost *= 1.25;
    autoSwordCost.innerHTML = Math.round(parsedautoSwordCost);
  }
}

setInterval(() => {
  parsedSword += sps;
  sword.innerHTML = Math.round(parsedSword);
}, 1000)