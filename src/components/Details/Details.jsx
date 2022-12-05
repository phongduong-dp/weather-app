import "./Details.css";

function Details(props) {
  return (
    <div className="details">
      <div className="parameter-row">
        <span className="parameter-label">Feels Like</span>
        <span className="parameter-value">{`${Math.round(
          props.data.main.feels_like
        )}°C`}</span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Wind</span>
        <span className="parameter-value">{`${Math.round(
          props.data.wind.speed
        )}m/s`}</span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Humidity</span>
        <span className="parameter-value">{`${Math.round(
          props.data.main.humidity
        )}%`}</span>
      </div>
      <div className="parameter-row">
        <span className="parameter-label">Pressure</span>
        <span className="parameter-value">{`${Math.round(
          props.data.main.pressure
        )} hPa`}</span>
      </div>
    </div>
  );
}

export default Details;
