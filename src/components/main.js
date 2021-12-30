import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { display } from "@mui/system";

const useStyles = makeStyles({
  leftChat: {
    backgroundColor: "#26abff !important",
  },
  search: {
    backgroundColor: "#8cd3ff",
    borderRadius: "3px",
    width: "70%",
    textAlign: "center !important",
    color: "white !important",
    marginTop: "8% !important",
  },
  header: {
    backgroundColor: "#bfe6ff",
    color: "#36454F",
    paddingLeft: "5%",
    paddingTop: "2%",
    fontSize: "20px",
    height: "8%",
    width: "100%",
    display: "inline-flex",
  },
  friends: {
    backgroundColor: "#009dff",
    marginTop: "6%",
    fontSize: "20px",
  },
  list: {
    textTransform: "capitalize",
    marginLeft: "5%",
    padding: "3% 0 0% 0",
    width: "100%",
    display: "inline-flex",
    fontWeight: "400",
  },
  listMessage: {
    fontSize: "12px",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: "none",
  height: "600px",
  borderRadius: "0px",
  padding: "0",
  margin: "0",
}));

function Main() {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={4} md={2.5}>
            <Item className={classes.leftChat}>
              <div style={{ textAlign: "center" }}>
                <TextField
                  className={classes.search}
                  placeholder="Search"
                  type="text"
                  InputProps={{
                    style: {
                      height: 30,
                      outline: "none",
                      color: "white",
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "white" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className={classes.friends}>
                <div className={classes.list}>
                  <div style={{ padding: "0px 5%" }}>
                    <Avatar
                      sx={{ display: "inline-flex", width: 30, height: 30 }}
                      alt="N Sharp"
                      src="https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                    />
                  </div>
                  <div>
                    nazim mW
                    <br />
                    <span className={classes.listMessage}>hello</span>
                  </div>
                </div>
                <div className={classes.list}>
                  <div style={{ padding: "0px 5%" }}>
                    <Avatar
                      sx={{ display: "inline-flex", width: 30, height: 30 }}
                      alt="N Sharp"
                      src="https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"
                    />
                  </div>
                  <div>
                    ali Za
                    <br />
                    <span className={classes.listMessage}>bye</span>
                  </div>
                </div>
                <div className={classes.list}>
                  <div style={{ padding: "0px 5%" }}>
                    <Avatar
                      sx={{ display: "inline-flex", width: 30, height: 30 }}
                      alt="N Sharp"
                      src="https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"
                    />
                  </div>
                  <div>
                    ABCD
                    <br />
                    <span className={classes.listMessage}>great..</span>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={8} md={9.5}>
            <Item style={{ backgroundColor: "#EBF5FB", padding: "0" }}>
              <div className={classes.header}>
                <div>
                  <Avatar
                    sx={{ width: 30, height: 30 }}
                    alt="N Sharp"
                    src="https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                  />
                </div>
                <div>
                  &nbsp;<b> NAZIM FIRDOUS ALI</b>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Main;
