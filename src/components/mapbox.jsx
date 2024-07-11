import  { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox({formValues, setFormValues,setSelectFromMap}) {
  const [marker, setMarker] = useState(null);
  const [address, setAddress] = useState("");
  

  const handleMapClick = (event) => {
    const { lngLat } = event;
    setMarker(lngLat);
    fetchAddress(lngLat);
  };

  const fetchAddress = async ({ lng, lat }) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoibmlraGlsc2FyYWYiLCJhIjoiY2xlc296YjRjMDA5dDNzcXphZjlzamFmeSJ9.7ZDaMZKecY3-70p9pX9-GQ`
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      setAddress(data.features[0].place_name);
    }
  };
  

  return (
    <div className="w-full h-[47vh] px-2">
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_KEY}
        initialViewState={{
          longitude: 76,
          latitude: 28,
          zoom: 5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onClick={handleMapClick}
      >
        
        {marker && (
          <Marker longitude={marker.lng} latitude={marker.lat} color="red" />
        )}
      </Map>
      <button className="absolute bottom-4 left-[50%] bg-orange-500 text-white" onClick={()=>{
       let prev= {...formValues} 
       prev["location"]=address
        setFormValues({...prev})
        setAddress("")
        setSelectFromMap(false)
        
        
        
      }}>
        Add Selected Location
      </button>
      {/* {address && <p>Address: {address}</p>} */}
    </div>
  );
}

export default Mapbox;
