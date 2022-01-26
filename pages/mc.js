 //insert  server here
ip = window.prompt("Enter the server Ip Address")
var url = "https://api.minetools.eu/ping/" + ip;
var fav = "https://eu.mc-api.net/v3/server/favicon/" + ip;

$.getJSON(url, function(r) {
  //data is the JSON string
  if (r.error) {
      window.location.href="404.html";
    return false;
  }
  var pl = '';
  if (r.players.sample.length > 0) {
    pl = '<br>OP: ' + r.players.sample[0].name;
  }
  document.querySelector('#main').innerHTML = "Ip: " + ip;
  document.querySelector('#ping').innerHTML = "<b>Latency: </b>" + r.latency + "ms";
  document.querySelector('#ver').innerHTML = "<b>Version: <b>" + r.version.name;
  $('#rest').html("<b>MOTD:</b> " + r.description.replace( /§(.+?)/gi, '') + '<br><b>Players Online:</b> ' + r.players.online + pl);
  $('#rest2').html('<b>Max Players:</b> ' + r.players.max + pl);
  $('#favicon').attr('src', fav);

});