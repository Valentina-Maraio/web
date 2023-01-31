import React from "react";
import "./style/Scroll.css";
import { Grid, Divider } from "@mui/material";

const Scroll = () => {
  return (
    <>
      <div className="scroll">
        <h5>SCROLL</h5>
        <Grid container>
          <Grid item xs>
            <h3 className="invisible_text">Valentina</h3>
          </Grid>
          <Divider variant="middle" orientation="vertical" flexItem>
          </Divider>
          <Grid item xs>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Scroll;
