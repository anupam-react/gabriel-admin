import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import OutlateInfo from "./OutlateInfo";
import useOutlate from "../../hooks/useOutlate";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "500px",
};

export function GoogleMapPage() {
  const { outlate } = useOutlate();
  const [activeMarker, setActiveMarker] = useState({});

  const [oulateData , setOutelateData]= useState([])

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState('');
  console.log(oulateData);

  const onMarkerClick = (index) => {
    console.log(index , showingInfoWindow);
    // setSelectedPlace(props);
    // setActiveMarker(marker);
    if(showingInfoWindow === index) return;
    setShowingInfoWindow(index);
  };

  const onClose = () => {
    // setActiveMarker(null);
    setShowingInfoWindow(false);
  };
  const locations = [
    { name: "Location 1", position: { lat: 28.5355, lng: 77.391 } },
    { name: "Location 2", position: { lat: 28.7041, lng: 77.1025 } },
  ];
  const center = {
    lat: 28.5355,
    lng: 77.391,
  };
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log(process.env.REACT_APP_API_KEY);
  const [map, setMap] = React.useState(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const getCoordinates = async (address , data) => {
    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${API_KEY}`;
      const response = await axios.get(url);
      if (response.data.status === "OK" && response.data.results.length > 0) {
        const location = response.data.results[0].geometry.location;
    
        oulateData?.push( {  ...data, lat: location.lat,
          lng: location.lng})
        setError("");
      } else {
        setError("No results found.");
        setCoordinates(null);
      }
    } catch (err) {
      setError("Error occurred while fetching coordinates.");
      setCoordinates(null);
    }
   
  };

  useEffect(() => {
    {outlate?.docs?.map((d , i)=>(
      getCoordinates(d?.city , d)
    ))}
  }, [outlate?.docs?.length])
  

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: oulateData[0]?.lat,
        lng: oulateData[0]?.lng,
      }}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {oulateData?.map((location, index) => (
      <Marker
      key={index+1}
        onMouseOver={()=>onMarkerClick(index+1)}
        // onMouseOut={onClose}
        icon={{
          url: "./Component 62.png",
        }}
        position={{
          lat: location?.lat,
          lng: location?.lng,
        }}
      >
        {showingInfoWindow === index+1 && (
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow === index+1}
            onClose={onClose}
          >
            <OutlateInfo data={location}/>
          </InfoWindow>
        )}
      </Marker>
        ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapPage);
//  {
//    locations.map((location, index) => (
//      <Marker
//        key={index}
//        onClick={onMarkerClick}
//        icon={{
//          url: "./Component 62.png",
//        }}
//        name={location.name}
//        position={location.position}
//      >
//        {showingInfoWindow && (
//          <InfoWindow
//            marker={activeMarker}
//            visible={showingInfoWindow}
//            onClose={onClose}
//          >
//            <OutlateInfo />
//          </InfoWindow>
//        )}
//      </Marker>
//    ));
//  }
