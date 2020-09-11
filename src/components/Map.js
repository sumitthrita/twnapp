import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const LocationPin =({text})=>{
  return (
    <div className="pin">
    <LocationOnIcon />
    <p className="pin-text">{text} </p>
    </div>
  )

}


class Map extends Component {
    static defaultProps = {
      center: {
        lat: 29.37,
        lng: 78.13
      },
      zoom: 11
    };
   
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '80vh', width: '80%', paddingLeft:"10%",paddingRight:"10%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyB8AvW1nQpDIKq7XtKPRxaMjKunD6tTbgk'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <LocationPin
              lat={29.3732}
              lng={78.1351}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
   
  export default Map;