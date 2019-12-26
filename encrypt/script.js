localStorage.removeItem('user');
// const baseApiUrl = 'http://localhost:8000';
const baseApiUrl = 'https://quiet-bayou-95682.herokuapp.com';

const encrypt = event => {
  event.preventDefault();

  const textToEncode = $("#textToEncode").val();

  $.ajax({
    type: "POST",
    url: baseApiUrl + '/cipher/encrypt',
    data: JSON.stringify({ string: textToEncode}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: data => {
      $('#result').html(data.message);
    },
   });
}