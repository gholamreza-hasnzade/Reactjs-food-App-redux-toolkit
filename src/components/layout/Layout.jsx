import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../routes/Routers";
import { Cart } from "../UI";

const Layout = () => {
  return (
    <div>
      <Header />
      <Cart />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
