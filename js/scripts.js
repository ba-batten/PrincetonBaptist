function initMap() {
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
  initMap();
});
