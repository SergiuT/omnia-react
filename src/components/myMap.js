import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyASfeMZ65bnwKdIizvef9KwjqepHww5twk&callback=initMap&libraries=&v=weekly",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: props.lat, lng: props.lng }}>
        {props.isMarkerShown && (
            <Marker position={{ lat: props.lat, lng: props.lng }} />
        )}
    </GoogleMap>
));

export default MyMapComponent;