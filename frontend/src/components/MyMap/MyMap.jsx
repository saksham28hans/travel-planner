import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./mymap.css";

const MyMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBfXVq1NRunLtQD-RqDDmF_6daThoDBFQ8",
      });
      const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
    
      return (
        <div className="App">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            />
          )}
        </div>
      );
    };

export default MyMap