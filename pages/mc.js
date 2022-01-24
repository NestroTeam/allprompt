 //insert  server here
ip = window.prompt("Enter the server Ip Address")
var url = "https://api.minetools.eu/ping/" + ip;

$.getJSON(url, function(r) {
  //data is the JSON string
  if (r.error) {
      window.location.href="error.html";
    return false;
  }
  var pl = '';
  if (r.players.sample.length > 0) {
    pl = '<br>OP: ' + r.players.sample[0].name;
  }
  document.querySelector('#main').innerHTML = ip;
  $('#rest').html(r.description.replace( /§(.+?)/gi, '') + '<br><b>Players Online:</b> ' + r.players.online + pl);
  $('#favicon').attr('src', r.favicon);

});