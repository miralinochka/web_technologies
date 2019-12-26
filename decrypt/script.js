// const baseApiUrl = 'http://localhost:8000';
const baseApiUrl = 'https://quiet-bayou-95682.herokuapp.com';

const download = () => {
  $.ajax({
    type: "get",
    url: baseApiUrl + '/cipher/decrypt',
    success: data => {
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + data);
      element.setAttribute('download', 'decrypted.txt');
  
      element.style.display = 'none';
      document.body.appendChild(element);
  
      element.click();
  
      document.body.removeChild(element);
    },
    error: res => {
      const response = JSON.parse(res.responseText);
      $('#result').html(response.error);
    }
   });
}