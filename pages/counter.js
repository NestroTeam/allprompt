document.getElementById("tweetBtn").onclick = function ()
{
 let tweet = prompt("Write the text so we can count how many Characters are in your text (Spaces Do Count)");
 let tweetCount = tweet.length;
 window.alert("You Have written " + tweetCount + " characters");
 p = document.createElement("p"); p.className='tweetCountCss'; p.v=0;
  p.innerHTML = "Your text was "+ tweetCount +" Characters long 🎸.";
  document.body.appendChild(p);
};