import React,{Fragment} from "react";


interface WeatherProps {
  match: any
}

export default function Weather(props:WeatherProps) {
  var capital = props.match?.params?.capital || "";

  console.log("Capital is  ",capital);
    return (
      <Fragment>
          <div>
              Weather
          </div>
      </Fragment>
    );
  }