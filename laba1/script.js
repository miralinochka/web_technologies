const coderImg = new Image();
coderImg.src = "../images/coder.gif";

coderImg.onload = function() {
  console.log("coderImg ready to append");
  const leftBlock = document.getElementById('left');
  const loader = document.getElementById('loader');
  loader.className = '';

  leftBlock.append(coderImg);
};

function calculateAmountOfAlcohol (event) {
  event.preventDefault();

  const bodyWeight = document.querySelector('#bodyWeight').value;
  const femaleSelected = document.querySelector('#female').checked;
  const k = femaleSelected ? 0.6 : 0.7;
  const c = 1.135;

  const alcoholConcentrations = [
    {
      name: 'vodka (40%)',
      concentration: 0.40
    },
    {
      name: 'vine (12%)',
      concentration: 0.12
    },
    {
      name: 'beer (5%)',
      concentration: 0.05
    },
  ];

  const amountOfSpirt = c * bodyWeight * k;

  const result = alcoholConcentrations.reduce((acc, alcohol) => {
    const amountOfAlcohol = Math.round(amountOfSpirt / alcohol.concentration);
  
    return acc + `<p>${alcohol.name}: ${amountOfAlcohol} ml</p>`;
  }, `<p>raw spirt: ${amountOfSpirt} ml</p>`);

  const div = document.querySelector('#results');
  const resultText = '<h3>to reach ballmer peak you need:</h3>'

  div.innerHTML = resultText + result;

}
