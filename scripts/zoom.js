
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
 

  const closeDiv = document.getElementById("imagepopup");
const btnClose = document.getElementById("close");
btnClose.onclick = function () {
  if (closeDiv.style.display !== "none"){
    closeDiv.style.display = "none";
  } else {
    closeDiv.style.display = "block";
  }
};

const rotated = document.getElementById('show-img');
let rotation = 0;
const angle = 90;

function rotateImage() {
  rotation = (rotation + angle) % 360;

  rotated.style.transform = `rotate(${rotation}deg)`;
}