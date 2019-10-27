
function calculateAmountOfAlcohol (event) {
  event.preventDefault();

  const bodyWeight = document.querySelector('#bodyWeight').value;
  const femaleSelected = document.querySelector('#female').checked;
  const k = femaleSelected ? 0.6 : 0.7;
  const c = 1.135;

  const alcoholConcentrations = [
    {
      name: 'Vodka (40%)',
      concentration: 0.40
    },
    {
      name: 'Vine (12%)',
      concentration: 0.12
    },
    {
      name: 'Beer (5%)',
      concentration: 0.05
    },
  ];

  const amountOfSpirt = c * bodyWeight * k;

  const result = alcoholConcentrations.reduce((acc, alcohol) => {
    const amountOfAlcohol = Math.round(amountOfSpirt / alcohol.concentration);
  
    return acc + `<p>${alcohol.name}: ${amountOfAlcohol} ml</p>`;
  }, `<p>Raw spirt: ${amountOfSpirt} ml</p>`);

  const div = document.querySelector('#results');
  const resultText = '<h3>To reach Ballmer Peak you need:</h3>'

  div.innerHTML = resultText + result;

}
