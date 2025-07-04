
import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";



const icon = (name) => `/assets/navbar/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    icon: icon("ic_analytics"),
  },
  {
    title: "Firms",
    url: "/stock/firms",
    icon: icon("firms"),
  },
  {
    title: "Brands",
    url: "/stock/brands",
    icon: icon("brand"),
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: icon("purchase"),
  },
  {
    title: "Sales",
    url: "/stock/sales",
    icon: icon("sales"),
  },
  {
    title: "Products",
    url: "/stock/products",
    icon: icon("ic_cart"),
  },
];

const MenuListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  return (
    <div>
      <Toolbar />
      {/* <Divider /> */}
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.url)}
         
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  mr: 2,
                  mask: `url(${item.icon}) no-repeat center / contain `,
                  bgcolor: "currentcolor",
                }}
              />
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuListItems;
