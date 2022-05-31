import "./App.css";

import { Map, MapMarker } from "react-kakao-maps-sdk";

function App() {
    return (
        <div>
            <Map
                center={{ lat: 36.0345423, lng: 128.6142847 }}
                style={{ width: "100%", height: "360px" }}
            >
                <MapMarker position={{ lat: 36.0345423, lng: 128.6142847 }}>
                    <div style={{ color: "#000" }}>Hello World!</div>
                </MapMarker>
            </Map>
        </div>
    );
}

export default App;
