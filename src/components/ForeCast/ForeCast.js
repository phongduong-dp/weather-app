import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./ForeCast.css";

function getDaysArray(num) {
  const daysAWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let daysArray;
  return (daysArray = daysAWeek
    .slice(num, daysAWeek.length)
    .concat(daysAWeek.slice(0, num)));
}

function ForeCast(props) {
  const daysArray = getDaysArray(new Date().getDay());

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {props.data.list.slice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="fore-cast-icon"
                      className="icon-small"
                    />
                    <label className="day">{daysArray[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">{`${Math.round(
                      item.main.temp_max
                    )}°C/${Math.round(item.main.temp_min)}°C`}</label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-items">
                    <label>Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Humidity</label>
                    <label>{item.main.humidity} %</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Clouds</label>
                    <label>{item.clouds.all} %</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Wind Speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Sea Level:</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className="daily-details-grid-items">
                    <label>Feel like:</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

export default ForeCast;
