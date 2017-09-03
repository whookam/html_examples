function myMap() {
  var myCenter = new google.maps.LatLng(41.878114, -87.629798);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {
    center: myCenter,
    zoom: 12,
    scrollwhee: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}

function openMenu(evt, menuName) {
  var index = 0;
  var menuItem = document.getElementsByClassName("tabbed-content");
  var tabLinks = document.getElementsByClassName("tabbed-option");

  for (index; index < menuItem.length; index += 1) {
    menuItem[index].style.display = "none";
    tabLinks[index].className = tabLinks[index].className.replace(" active-link", "");
  }

  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active-link";
}

document.getElementById("EatLink").click();
