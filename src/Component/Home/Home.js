import React from 'react';
import CarouselSlider from '../Carousel/Carousel';

import 'rsuite/dist/rsuite.min.css';
import Sidenav from 'rsuite/Sidenav';
import Nav from 'rsuite/Nav';
import Dropdown from 'rsuite/Dropdown';
import "./Home.css"
import { Button, ButtonToolbar, Drawer, IconButton, Radio, RadioGroup, Toggle } from 'rsuite';
import { Paragraph } from '@rsuite/icons';
import Navbars from '../Navbar/Navbar';
import TrendingProduct from '../Trending Product/TrendingProduct';
const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

const Home = () => {
  const [size, setSize] = React.useState('xs');
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };

  return (
    <div>
      <Navbars></Navbars>
      <div style={{ width: "100%" }} className="mx-auto">
        <CarouselSlider></CarouselSlider>
        <TrendingProduct></TrendingProduct>
      </div>
    </div>
  );
};

export default Home;