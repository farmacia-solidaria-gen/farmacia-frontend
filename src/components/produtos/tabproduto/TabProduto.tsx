import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabProduto.css';
import { Box } from '@mui/material';
import ListaProduto from '../listaproduto/ListaProduto';


function TabProduto() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value} >
        <AppBar position="static" className="header-container">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas os produtos" value="1"/>
            <Tab label="Sobre nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProduto />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProduto;