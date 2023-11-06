import { CssBaseline, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import getPlacesData from './api';


function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat:0,lng:0});
  const [bounds, setBounds] = useState(null);

  useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
          setCoordinates({lat:latitude,lng:longitude});
        })
  },[])

  useEffect(() => {
    console.log(coordinates,bounds)
    getPlacesData().then((data)=>{
      console.log(data);
      getPlacesData(data);
    })
  },[bounds,coordinates]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }} >
            <Grid item xs={12} md={4}>
              <List />
            </Grid>
            <Grid item xs={12} md={8}>
              <Map />
            </Grid>
        </Grid>
    </>
  );
}

export default App;
