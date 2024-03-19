mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXNhc3VtIiwiYSI6ImNsdHlhcmI0YzBlbjAycnJ1NXJmZG5nMGkifQ.W9QServBDAnH2v0k45dMYg';
    
    navigator.geolocation.getCurrentPosition(succesLocation , errorLocation , {enableHighAccuracy: true}) 
  
    function succesLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude , position.coords.latitude])
    
    }

    function errorLocation() {
    setupMap([13,52])
    }

    function setupMap(center) {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center,
            zoom: 13
          });
        const nav = new mapboxgl. NavigationControl();
        map.addControl(nav);
    }
    
        