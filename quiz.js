$("#prospects_form").submit(function(e) {
  e.preventDefault();
});
let value = 0;
function calcGrade() {
  leastfavoriteride = parseInt(document.querySelector('input[name = "leastfavoriteride"]:checked').value);
  dcfear = parseInt(document.querySelector('input[name = "dcfear"]:checked').value);
  lastdayschool = parseInt(document.querySelector('input[name = "lastdayschool"]:checked').value);
  ushdate = parseInt(document.querySelector('input[name = "ushdate"]:checked').value);
  dcpeople = parseInt(document.querySelector('input[name = "dcpeople"]:checked').value);
  numberofhotels = parseInt(document.querySelector('input[name = "numberofhotels"]:checked').value);
  lastactivity = parseInt(document.querySelector('input[name = "lastactivity"]:checked').value);
  daynoattend = parseInt(document.querySelector('input[name = "daynoattend"]:checked').value);
  websitefor = parseInt(document.querySelector('input[name = "websitefor"]:checked').value);
  buyicecream = parseInt(document.querySelector('input[name = "buyicecream"]:checked').value);
  result = leastfavoriteride + dcfear + lastdayschool + ushdate + dcpeople + numberofhotels + lastactivity + daynoattend + websitefor + buyicecream;
  document.getElementById("grade").innerHTML = result;
  return;
}

