
const lovePercentages = {};

document.getElementById("loveCalculator").addEventListener("submit", function (e) {
  e.preventDefault();

  const yourName = document.getElementById("yourName").value.trim();
  const partnerName = document.getElementById("partnerName").value.trim();

  if (yourName === "" || partnerName === "") {
    alert("Please fill out both fields.");
    return;
  }

  let lovePercentage;
  if (lovePercentages.hasOwnProperty(yourName + partnerName)) {
    lovePercentage = lovePercentages[yourName + partnerName];
  } else {
    
    lovePercentage = Math.floor(Math.random() * 101);
    lovePercentages[yourName + partnerName] = lovePercentage;
  }

  displayResult(lovePercentage);
});

function displayResult(lovePercentage) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Love Percentage: " + lovePercentage + "%";
}
