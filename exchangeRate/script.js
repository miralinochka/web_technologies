const currencyImg = new Image();
currencyImg.src = "../images/currency.jpg";

window.onload = () => {
  const datePicker = document.getElementById('datePicker');
  const leftBlock = document.getElementById('left');
  const loader = document.querySelector('.loader');
  
  datePicker.max = new Date().toISOString().split("T")[0];
  loader.className = '';

  leftBlock.append(currencyImg);
}

const getCurrenciesByDate = event => {
  event.preventDefault();

  const xhttp = new XMLHttpRequest();
  const date = document.getElementById('datePicker').value;
  const loader = document.getElementById('loader');
  loader.className = 'loader';
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const resultDiv = document.getElementById("result");
      const response = JSON.parse(this.responseText);

      const result = response.map(day => {
        return `<p>${day.Cur_Scale} ${day.Cur_Name}(${day.Cur_Abbreviation}) = ${day.Cur_OfficialRate}</p>`
      })
      loader.className = '';
      resultDiv.innerHTML = result.join('');
    }
  };
  xhttp.open("GET", `https://www.nbrb.by/api/exrates/rates?ondate=${date}&periodicity=0`, true);
  xhttp.send();
}