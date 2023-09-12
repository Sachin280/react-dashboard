import React from "react";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import "../Dash.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccordianDash from "../components/AccordianDash";
import BarChart from "../charts/BarChart";
import CountUp from "react-countup";

export default function Home() {
  return (
    <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Stack spacing={2} direction="row">
                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradient">
                  <CardContent>
                    <div className="iconstyle">
                      <CreditCardIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ffffff" }}>
                      $<CountUp delay={0.2} end={500} duration={2} />
                      .00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ccd1d1" }}>
                      Total Earnings
                    </Typography>
                  </CardContent>
                </Card>

                <Card
                  sx={{ minWidth: 49 + "%", height: 150 }}
                  className="gradientlight">
                  <CardContent>
                    <div className="iconstyle">
                      <ShoppingBagIcon />
                    </div>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ffffff" }}>
                      $<CountUp delay={0.2} end={500} duration={2} />
                      .00
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ color: "#ccd1d1" }}>
                      Total Order
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className="gradientlight">
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingAll">
                      <span className="pricetitle">
                        $<CountUp delay={0.2} end={230} duration={2} />K
                      </span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }} className="">
                  <Stack spacing={2} direction="row">
                    <div className="iconstyle">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingAll">
                      <span className="pricetitle">
                        $<CountUp delay={0.2} end={230} duration={2} />K
                      </span>
                      <br />
                      <span className="pricesubtitle">Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <Box height={20} />

          <Grid container spacing={2}>
            <Grid xs={8}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <BarChart />
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={4}>
              <Card sx={{ height: 60 + "vh" }}>
                <CardContent>
                  <div className="paddingAll">
                    <span className="pricetitle">Popular Products</span>
                  </div>
                  <AccordianDash />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
