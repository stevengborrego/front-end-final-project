function Weather() {
  const url = "https://api.nasa.gov/insight_weather/?api_key=" + process.env.REACT_APP_NASA_API_KEY + "&feedtype=json&ver=1.0"
  console.log(url);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Weather 1</h5>
              <hr />
              <p className="card-text">weather stuff</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Weather 2</h5>
              <hr />
              <p className="card-text">more weather stuff</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Weather 3</h5>
              <hr />
              <p className="card-text">weather stuff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
