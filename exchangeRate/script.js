const currencyImg = new Image();
currencyImg.src = "../images/currency.jpg";

$(function() {  
  $('#datePicker').attr('max', new Date().toISOString().split("T")[0]);
  $('.loader').removeClass('loader');

  $('#left').append(currencyImg);
})

const getCurrenciesByDate = event => {
  event.preventDefault();

  const date = $('#datePicker').val();
  const resultDiv = $('#result');
  const loader = $('#loader');
  loader.addClass('loader');
  resultDiv.html('');

  $.get(`https://www.nbrb.by/api/exrates/rates?ondate=${date}&periodicity=0`, function(response, status){
    const result = response.map(day => {
      return `<p>${day.Cur_Scale} ${day.Cur_Name}(${day.Cur_Abbreviation}) = ${day.Cur_OfficialRate}</p>`
    })
    loader.removeClass('loader');
    resultDiv.html(result.join(''));
  });

}