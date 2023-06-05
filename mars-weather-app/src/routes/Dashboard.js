import { useState, useEffect } from "react";
import IssMap from "../IssMap.js";

const weatherUrl = "https://api.maas2.apollorion.com/";
const peopleUrl = "http://api.open-notify.org/astros.json";

function Dashboard() {
  const [weather, setWeather] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    Promise.all([fetch(weatherUrl), fetch(peopleUrl)])
      .then(([resWeather, resPeople]) =>
        Promise.all([resWeather.json(), resPeople.json()])
      )
      .then(([dataWeather, dataPeople]) => {
        setWeather(dataWeather);
        setPeople(dataPeople);
      });
  }, []);

  console.log(weather);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mars Weather</h5>
              <hr />
              <p className="card-text">
                <b>Sol:</b> {weather.sol}
              </p>
              <p className="card-text">
                <b>Terrestrial Date:</b> {weather.terrestrial_date}
              </p>
              <p className="card-text">
                <b>Max Temp:</b> {weather.max_temp}&deg;C
              </p>
              <p className="card-text">
                <b>Min Temp:</b> {weather.min_temp}&deg;C
              </p>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">People In Space</h5>
              <hr />
              <div className="card-text">
                {people.people && (
                  <div className="peopleInSpace">
                    {people.people.map((person) => {
                      return (
                        <div className="row" key={person.name}>
                          <div className="col">
                            <b>Name:</b> {person.name}
                          </div>
                          <div className="col">
                            <b>Craft:</b> {person.craft}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
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
              <IssMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
