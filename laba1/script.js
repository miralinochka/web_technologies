const isFormValid = () => {
  const radioButtons = document.querySelectorAll('input[type=radio]');
  const radioButtonsLength = radioButtons.length;
  const firstRadioButton = radioButtonsLength > 0 ? radioButtons[0] : null;

  const errorMessage = !isChecked(radioButtons, radioButtonsLength) ? 'At least one option must be selected.' : '';
  
  firstRadioButton.setCustomValidity(errorMessage);
  
  return !errorMessage;
}

const isChecked = (radioButtons, radioButtonsLength) => {
  for (let i = 0; i < radioButtonsLength; i++) {
      if (radioButtons[i].checked) return true;
  }

  return false;
}

function calculateAmountOfAlcohol (event) {
  event.preventDefault();
  if (isFormValid()) {
    const bodyWeight = document.querySelector('#bodyWeight').value;
    const femaleSelected = document.querySelector('#female').checked;
    const k = femaleSelected ? 0.6 : 0.7;
    const c = 1.3;

    const alcoholConcentrations = [
      {
        name: 'Vodka',
        concentration: 0.40
      },
      {
        name: 'Vine',
        concentration: 0.12
      },
      {
        name: 'Beer',
        concentration: 0.05
      },
    ];

    const result = alcoholConcentrations.reduce((acc, alcohol) => {
      const amountOfAlcohol = Math.round(c * bodyWeight * k / alcohol.concentration);
    
      return acc + `<p>${alcohol.name}: ${amountOfAlcohol} ml</p>`;
    }, '');

    const div = document.querySelector('#results');
    const resultText = '<h3>To reach Ballmer Peak you need:</h3>'

    div.innerHTML = resultText + result;
  }

}
