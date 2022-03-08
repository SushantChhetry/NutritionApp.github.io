import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//components
import Result from "./Components/Result";

//for search
import TextField from "@mui/material/TextField";

function App() {
  const defaultSearch = ["Coffee", "Apple", "Pancake", "Corndog"];

  let defaultVal = defaultSearch[1];

  const backgroundImage = new URL(
    "./Components/images/background.jpg",
    import.meta.url
  );

  const [food, setFood] = useState(defaultVal);
  const [item, setItem] = useState([]);

  useEffect(() => {}, [food]);

  return (
    <div>
      <Box>
        <Box>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "repeat",
                height: "100vh",
              }}
            ></Grid>
            <Grid item xs={6} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Typography variant="h2" sx={{ textAlign: "center" }}>
                    CALORIE TRACKER
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
                  <TextField
                    variant="filled"
                    id="search-food"
                    helperText="Please enter a food here"
                    defaultValue={food}
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        console.log("User entered: " + event.target.value);
                        axios
                          .get(
                            `https://api.edamam.com/api/food-database/v2/parser?app_id=a3394414&app_key=82a50ce733c8c2462b1e1acdfa2a277b&ingr=${event.target.value}`
                          )
                          .then((response) => {
                            console.log(response.data);
                            setFood(response.data);
                          });
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box
                    m={1}
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <Result value={food} defaultValue={defaultVal} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={3}
              md={3}
              sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "repeat",
                height: "100vh",
              }}
            ></Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default App;
