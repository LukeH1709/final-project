// Get elements for Sword
let clickSword = document.getElementById('clickSword');
let clickCountDisplay = document.getElementById('clickCount');
// Initialize click count
let clickCount = 0;
// Click event listener
clickSword.addEventListener('click', () => {
  clickCount++;
  clickCountDisplay.textContent = clickCount;
});

// Upgrades

//Trainee Upgrade
let trainee = document.getElementById('trainee');
trainee.addEventListener('click', function() {
  if (clickCount >= 10) {
    clickCount++;
    clickCount - 10;
  }
})