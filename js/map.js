function modalMap() {
  var pbc = { lat:35.4633771, lng: -78.1593011 };
  var map = new google.maps.Map(document.getElementById('modal-map'), {
    zoom: 15,
    center: { lat:35.4633771, lng: -78.1593011 }
  });

  var marker = new google.maps.Marker({
    position: pbc,
    map: map
  });
}

$('#servicesModal').on('shown.bs.modal', function () {
  modalMap();
});

function footerMap() {
  var pbc = { lat:35.4633771, lng: -78.1593011 };
  var map = new google.maps.Map(document.getElementById('footerMap'), {
    zoom: 15,
    center: { lat:35.4633771, lng: -78.1593011 }
  });

  var marker = new google.maps.Marker({
    position: pbc,
    map: map
  });
};

function contactMap() {
  var pbc = { lat:35.4633771, lng: -78.1593011 };
  var map = new google.maps.Map(document.getElementById('contact-map'), {
    zoom: 15,
    center: { lat:35.4633771, lng: -78.1593011 }
  });

  var marker = new google.maps.Marker({
    position: pbc,
    map: map
  });
};

function initMap() {
  modalMap();
  footerMap();
}

function footerAndContactMaps() {
  footerMap();
  contactMap();
}
