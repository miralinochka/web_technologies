localStorage.removeItem('user');
// const baseApiUrl = 'http://localhost:8000';
const baseApiUrl = 'https://quiet-bayou-95682.herokuapp.com';

const login = event => {
  event.preventDefault();

  $('#result').html('');
  const username = $("#username").val();
  const password = $("#password").val();
  const data = {username, password};

  $.ajax({
    type: "POST",
    url: baseApiUrl + '/login',
    data: JSON.stringify(data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: data => {
      localStorage.setItem('user', data.username);
      window.location.href = "./secretPage.html";
    },
    error: res => {
      const response = JSON.parse(res.responseText);
      $('#result').html(response.error);
    }
   });
}