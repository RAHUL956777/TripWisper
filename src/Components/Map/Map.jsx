import GoogleMapReact from "google-map-react";

const googleKey = import.meta.env.GOOGLE_API_KEY;

const Map = () => {


  const obj = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        defaultCenter={obj.center}
        defaultZoom={obj.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
