window.addEventListener("load", function () {
  function sendData(locate) {
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(form);
    
    FD.append("latitude", locate.latitude);
    FD.append("longitude", locate.longitude);
    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
      //alert(event.target.responseText);
      window.location.href = "http://lunch-dev.saigos.space/users"
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("POST", "https://lunch-dev.saigos.space/location/create");

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }
 
  // Access the form element...
  var form = document.getElementById("myForm");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getPosition);
    function getPosition(position) {
      var locate = { latitude:position.coords.latitude, longitude:position.coords.longitude };
      sendData(locate);
    }
  });
});
