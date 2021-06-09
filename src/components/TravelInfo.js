import { useContext, useEffect, useState } from "react";
import Input from "./Input";
import Slider from "./Slider";
import GlobalContext from "../globalState/Context";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Modal from "./Modal";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "calc(80vh - 20px)",
  },
  width: {
    width: "25ch",
    fontSize: 20,
    padding: 10,
    paddingTop: 20,
  },
}));

const Info = () => {
  const styles = useStyles();
  const Context = useContext(GlobalContext);
  const [startLatitude, setStartLatitude] = useState();
  const [startLongitude, setStartLongitude] = useState();
  const [finishLatitude, setFinishLatitude] = useState();
  const [finishLongitude, setFinishLongitude] = useState();
  const [triggerSetDistance, setTriggerSetDistance] = useState();

  // Get current gps
  // useEffect(() => {
  //   if (typeof Context.start !== "undefined") return;

  //   let coordinates;

  //   if ("geolocation" in navigator) {
  //     const options = {
  //       enableHighAccuracy: true,
  //       timeout: 1000,
  //       maximumAge: 0,
  //     };

  //     function success(position) {
  //       coordinates = position.coords;

  //       setStartLatitude(coordinates.latitude);
  //       setStartLongitude(coordinates.longitude);

  //       // Get current city
  //       if (!coordinates) return;
  //       const currentAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&localityLanguage=en`;
  //       axios
  //         .get(currentAPI)
  //         .then(function (response) {
  //           Context.setStart(response.data.city);
  //         })
  //         .catch(function (error) {
  //           console.warn(error);
  //         });
  //     }

  //     function error(err) {
  //       console.warn(`ERROR(${err.code}): ${err.message}`);
  //     }

  //     navigator.geolocation.getCurrentPosition(success, error, options);
  //   } else {
  //     console.warn("Geolocation Not Available");
  //   }
  // }, [Context]);

  // Handle distance
  useEffect(() => {
    const handleDistance = function (p1, p2) {
      if (!p2.latitude) return;

      const radius = function (x) {
        return (x * Math.PI) / 180;
      };
      const meanRadius = 6378137;
      const differenceLatitude = radius(p2.latitude - p1.latitude);

      const differenceLongitude = radius(p2.longitude - p1.longitude);

      const a =
        Math.sin(differenceLatitude / 2) * Math.sin(differenceLatitude / 2) +
        Math.cos(radius(p1.latitude)) *
          Math.cos(radius(p2.latitude)) *
          Math.sin(differenceLongitude / 2) *
          Math.sin(differenceLongitude / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = meanRadius * c;

      if (!isNaN(distance)) Context.setDistance(Math.trunc(distance / 1000));
    };

    handleDistance(
      { latitude: startLatitude, longitude: startLongitude },
      { latitude: finishLatitude, longitude: finishLongitude }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerSetDistance]);

  return (
    <div className={styles.root}>
      <Input
        placeholder={"Departure"}
        location={Context.start}
        setLocation={Context.setStart}
        setStartLatitude={setStartLatitude}
        setStartLongitude={setStartLongitude}
        setTriggerSetDistance={setTriggerSetDistance}
      />
      <Input
        placeholder={"Arrival"}
        location={Context.finish}
        setLocation={Context.setFinish}
        setFinishLatitude={setFinishLatitude}
        setFinishLongitude={setFinishLongitude}
        setTriggerSetDistance={setTriggerSetDistance}
      />
      <Typography
        id="discrete-slider-always"
        gutterBottom
        className={styles.width}
      >
        Distance:
        {Context.distance} km
      </Typography>
      <Slider handleChange={Context.setDistance} value={Context.distance} />
      <Typography
        id="discrete-slider-always"
        gutterBottom
        className={styles.width}
      >
        Length of stay: {Context.lengthStay} days
      </Typography>
      <Slider handleChange={Context.setLengthStay} value={Context.lengthStay} />
      <Modal />
    </div>
  );
};

export default Info;
