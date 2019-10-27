
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      const result = `
        <p>ip: ${response.ip}</p>
        <p>city: ${response.city}</p>
        <p>country: ${response.country}</p>
        <p>location: ${response.loc}</p>
      `
       document.getElementById("result").innerHTML = result;
    }
  };
  xhttp.open("GET", "https://ipinfo.io/json", true);
  xhttp.send();


function getIP(json) {
  document.write("My public IP address is: ", json.ip);
}