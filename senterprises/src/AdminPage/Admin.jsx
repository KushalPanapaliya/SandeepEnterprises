import DashBoard from "./DashBoard/DashBoard";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Products from "./ProductsPage/Products";
import ResponsiveAppBar from "../NavBar/ResponsiveAppBar";
import PinnedSubheaderList from "./Orders";

//side bar elements: Dashboard, Products, Orders, Customers, Coupons, Settings

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Admin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <ResponsiveAppBar />
    
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Dashboard" {...a11yProps(0)} />
        <Tab label="Products" {...a11yProps(1)} />
        <Tab label="Orders" {...a11yProps(2)} />
        <Tab label="Customers" {...a11yProps(3)} />
        <Tab label="Coupons" {...a11yProps(4)} />
        <Tab label="Settings" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DashBoard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Products />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PinnedSubheaderList />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Customers
      </TabPanel>
      <TabPanel value={value} index={4}>
        Coupons
      </TabPanel>
      <TabPanel value={value} index={5}>
        Settings
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
    </>
  );
}