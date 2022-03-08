import React from "react";

//for result
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

//for add
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Result = (props) => {
  let food = props.value;
  let defaultVal = props.defaultValue;
  let foodName = "";
  let nutritionValue = "";
  let showAdd = false;
  return (
    <>
      <Card sx={{ minWidth: 575 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Nutrition facts:
            {console.log(
              food.parsed?.map((value) => {
                console.log(value.food);
                nutritionValue = value.food.nutrients;
                console.log(nutritionValue);
                foodName = value.food.label;
              })
            )}
          </Typography>
          <Typography gutterBottom variant="h4">
            {foodName}
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText
                secondary="Energy"
                id="ENERC_KCAL"
                primary={
                  food === defaultVal
                    ? "0 g"
                    : nutritionValue.ENERC_KCAL === undefined
                    ? "N/A"
                    : nutritionValue.ENERC_KCAL + " kcal"
                }
              />
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemText
                secondary="Carbohydrate, by difference"
                id="CHOCDF"
                primary={
                  food === defaultVal
                    ? "0 g"
                    : nutritionValue.CHOCDF === undefined
                    ? "N/A"
                    : nutritionValue.CHOCDF + " g"
                }
              />
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemText
                secondary="Fiber, total dietary"
                primary={
                  food === defaultVal
                    ? "0 g"
                    : nutritionValue.FIBTG === undefined
                    ? "N/A"
                    : nutritionValue.FIBTG + " g"
                }
                id="FIBTG"
              />
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemText
                secondary="Fat"
                id="FAT"
                primary={
                  food === defaultVal
                    ? "0 g"
                    : nutritionValue.FAT === undefined
                    ? "N/A"
                    : nutritionValue.FAT + " g"
                }
              />
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemText
                secondary="Protein"
                id="PROCNT"
                primary={
                  food === defaultVal
                    ? "0 g"
                    : nutritionValue.PROCNT === undefined
                    ? "N/A"
                    : nutritionValue.PROCNT + " g"
                }
              />
            </ListItem>
          </List>
          <Button
            gutterBottom
            onClick={() => {
              alert("Item Added");
              showAdd = true;
            }}
          >
            ADD
          </Button>
          <Paper>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Items</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Show item here</Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </CardContent>
      </Card>
    </>
  );
};

export default Result;
