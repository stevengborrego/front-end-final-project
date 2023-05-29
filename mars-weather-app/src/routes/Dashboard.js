import { useState, useEffect } from "react";
import axios from "axios";



//const url = "https://api.nasa.gov/insight_weather/?api_key=" + process.env.REACT_APP_NASA_API_KEY + "&feedtype=json&ver=1.0";
//const url = "";
const weatherUrl = 'https://api.maas2.apollorion.com/';
const issUrl = "http://api.open-notify.org/iss-now.json";
const peopleUrl = "http://api.open-notify.org/astros.json";

function Weather(weather) {
  return
}

function PeopleInSpace(people) {
  return
}

function ISS(iss) {
  return
}


function Dashboard() {
  const [weather, setWeather] = useState([]);
  const [iss, setIss] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(weatherUrl),
      fetch(issUrl),
      fetch(peopleUrl),
    ])
    .then(([resWeather, resISS, resPeople]) =>
      Promise.all([resWeather.json(), resISS.json(), resPeople.json()])
    )
    .then(([dataWeather, dataISS, dataPeople]) => {
      setWeather(dataWeather);
      setIss(dataISS);
      setPeople(dataPeople);
    });
  }, []);

  // console.log(weather);
  // console.log(people);
  // console.log(iss);
  // var longitude = iss.iss_position.longitude;
  // var latitude = iss.iss_position.latitude;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mars Weather</h5>
              <hr />
              <p className="card-text">Terrestrial Date: { weather.terrestrial_date }</p>
              <p className="card-text">Max Temp: { weather.max_temp }</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">People In Space</h5>
              <hr />
              <p className="card-text">Number: { people.number }</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ISS Tracker</h5>
              <hr />
              { iss.iss_position && <p className="card-text">Latitude: { iss.iss_position.latitude }</p> }
              { iss.iss_position && <p className="card-text">Longitude: { iss.iss_position.longitude }</p> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
