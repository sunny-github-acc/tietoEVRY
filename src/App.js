import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TravelInfo from "./components/TravelInfo";
import Context from "./globalState/Context";

function App() {
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [distance, setDistance] = useState(20);

  const globalState = {
    start,
    setStart,
    finish,
    setFinish,
    distance,
    setDistance,
  };

  return (
    <Context.Provider value={globalState}>
      <div className="App">
        <Header />
        <TravelInfo />
      </div>
    </Context.Provider>
  );
}

export default App;

// useEffect(() => {
//   let currentLatitude,
//     currentLongitude,
//     destinationLatitude,
//     destinationLongitude;

//   // Get current gps
//   if ("geolocation" in navigator) {
//     const options = {
//       enableHighAccuracy: true,
//       timeout: 0, // 5000
//       maximumAge: 0,
//     };

//     function success(position) {
//       var coordinates = position.coords;
//       currentLatitude = coordinates.latitude;
//       currentLongitude = coordinates.longitude;
//       // setCurrentLatitude(coordinates.latitude);
//       // setCurrentLongitude(coordinates.longitude);
//     }

//     function error(err) {
//       console.warn(`ERROR(${err.code}): ${err.message}`);
//     }

//     navigator.geolocation.getCurrentPosition(success, error, options);
//   } else {
//     setErrorCurrentCity(true);
//     console.warn("Geolocation Not Available");
//   }

//   // Get current city
//   const currentAPI = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${currentLatitude}&longitude=${currentLongitude}&localityLanguage=en`;
//   axios
//     .get(currentAPI)
//     .then(function (response) {
//       setCurrent(response.data.city);
//     })
//     .catch(function (error) {
//       setErrorCurrentCity(true);
//       console.warn(error);
//     })
//     .then(function () {
//       // always executed
//     });

//   // Destination to gps
//   const params = {
//     auth: "113516871718232291270x24806",
//     locate: "telsiai",
//     json: "1",
//   };

//   axios
//     .get("https://geocode.xyz", { params })
//     .then((response) => {
//       setDestination(response.data.standard.city);
//       console.log("Dest ", response.data.standard.city);
//       destinationLatitude = Number(response.data.latt);
//       destinationLongitude = Number(response.data.longt);
//       // setDestinationLatitude(response.data.latt);
//       // setDestinationLongitude(response.data.longt);
//     })
//     .catch((error) => {
//       setErrorDestinationCity(true);
//       console.warn(error);
//     })
//     .then(() => {
//       if (errorDestinationCity) return;

//       const getDistance = function (p1, p2) {
//         const radius = function (x) {
//           return (x * Math.PI) / 180;
//         };
//         const meanRadius = 6378137;
//         const differenceLatitude = radius(p2.latitude - p1.latitude);
//         const differenceLongitude = radius(p2.longitude - p1.longitude);
//         const a =
//           Math.sin(differenceLatitude / 2) *
//             Math.sin(differenceLatitude / 2) +
//           Math.cos(radius(p1.latitude)) *
//             Math.cos(radius(p2.latitude)) *
//             Math.sin(differenceLongitude / 2) *
//             Math.sin(differenceLongitude / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = meanRadius * c;
//         setDistance(Math.trunc(distance / 1000));
//       };

//       getDistance(
//         { latitude: currentLatitude, longitude: currentLongitude },
//         { latitude: destinationLatitude, longitude: destinationLongitude }
//       );
//     });
// }, [
//   errorCurrentCity,
//   errorDestinationCity,
//   distance,
// ]);
