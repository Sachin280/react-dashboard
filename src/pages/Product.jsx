import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
// import ProductList from "./products/ProductList";

export default function Products() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* <ProductList /> */}
        </Box>
      </div>
    </>
  );
}
