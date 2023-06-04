import React from "react";
import GoogleMapReact from "google-map-react";

const issUrl = "http://api.open-notify.org/iss-now.json";
const img = (
  <img
    src="./international-space-station.svg"
    alt="international space station"
    height="50px"
  />
);

const SpaceStationElement = ({ img }) => <div>{img}</div>;

class IssMap extends React.Component {
  state = {
    center: {
      lat: 0,
      lng: 0,
    },
  };

  getIssLocation = () => {
    fetch(issUrl)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          center: {
            lat: Number(data.iss_position.latitude),
            lng: Number(data.iss_position.longitude),
          },
        })
      );
  };

  componentDidMount() {
    this.getIssLocation();
    this.interval = setInterval(this.getIssLocation, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="map" style={{ height: "50vh", width: "100%" }}>
          <GoogleMapReact
            className="map"
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            center={this.state.center}
            zoom={1}
          >
            <SpaceStationElement
              lat={this.state.center.lat}
              lng={this.state.center.lng}
              img={img}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default IssMap;
