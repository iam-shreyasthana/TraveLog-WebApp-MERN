import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Map
            initialViewState={{
                longitude: 77.2090,
                latitude: 28.6139,
                zoom: 6
            }}
            style={{width: "100vw", height: "100vh"}}
            mapboxAccessToken={process.env.REACT_APP_MAPBOX}
            mapStyle="mapbox://styles/iamshreyasthana/cl7joypi3005g14o7szgxf2mx"
        >
            <Marker
                longitude={77.1855}
                latitude={28.5245}
                offsetLeft={-20}
                offsetTop={-10}
            >
                <LocationOnIcon sx={{ fontSize: 45, color:"#d23a3a" }} />
            </Marker>
            <Popup longitude={77.1855}
                   latitude={28.5245}
                   anchor="left"
                   >
                <div className="card">
                    <label>Place</label>
                    <h4 className="placeName">Qutub Minar</h4>
                    <label>Review</label>
                    <p>It is a beautiful place.</p>
                    <label>Ratings</label>
                    <div className="stars">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                    <label>Information</label>
                    <span className="username">Created by: <b>Shrey Asthana</b></span>
                    <span className="date">1 hour ago</span>
                </div>
            </Popup>
        </Map>
    </div>
  );
}

export default App;
