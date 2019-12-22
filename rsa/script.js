
const apiConstants = {
  encrypt: '/rsa/encrypt',
  decrypt: '/rsa/decrypt',
};

// const baseApiUrl = 'http://localhost:8000';
const baseApiUrl = 'https://quiet-bayou-95682.herokuapp.com';

  const encode = event => {
    event.preventDefault();
    const text  = document.getElementById('textToEncode').value;
    const xhttp = new XMLHttpRequest();    
    const url = baseApiUrl + apiConstants.encrypt;
    const resultDiv = document.getElementById("encode-result");
    resultDiv.className = 'loader';
    resultDiv.innerHTML = '';

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({ "string": text }));


    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = this.responseText;
       
        resultDiv.className = '';
        resultDiv.innerHTML = response;
      }
    };
  }
  
  const decode = event => {
    event.preventDefault();

    const text  = document.getElementById('textToDecode').value;
    const xhttp = new XMLHttpRequest();    
    const url = baseApiUrl + apiConstants.decrypt;
    const resultDiv = document.getElementById("decode-result");
    resultDiv.className = 'loader';
    resultDiv.innerHTML = '';

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({ "string": text }));


    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const response = this.responseText;
       
        resultDiv.className = '';
        resultDiv.innerHTML = response;
      }
    };
  }