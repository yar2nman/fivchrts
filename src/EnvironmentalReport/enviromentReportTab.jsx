import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MyResponsiveBar from '../utils/barchart';

import Grid from '@material-ui/core/Grid';

import ChartWrapper from '../utils/ChartWrapper';

import MyTable from '../utils/Table';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 130 + '%',
  },
}));

export default function EnviromentTab({netZeroCarpon, solution, netZeroEnergy, normalised_emissions_CO2_m2_year,
   energy_consumption_breakwon, embodied_carbon_breakdown, operationalCarbonBreakdown}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Net Zero Building" {...a11yProps(0)} />
          <Tab label="Energy Consumption" {...a11yProps(1)} />
          <Tab label="Life Cycle Carbon" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>





        <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} lg={6}>
                    {netZeroEnergy && netZeroEnergy?.length > 0 &&
                    <>
                      <ChartWrapper height={200} name={'Energy'}>
                      <MyResponsiveBar data={netZeroEnergy} 
                                        keys={['total_KWH_year']} 
                                        indexby={'title'} 
                                        isHorizontal={true}
                                        colors={{'scheme': 'greens'}}
                                        margin={{ top: 3, right: 3, bottom: 3, left: 120 }} />
                    </ChartWrapper>
                    <div>{`Yout building is ${solution.reports.environmental_report.net_zero_building.energy.net_zero.net_zero_percentage}% Net Zero Energy building. `}</div>
                    <div>{`You will need another ${solution.reports.environmental_report.net_zero_building.energy.net_zero.offset_area.toLocaleString()} m² of PV to offset its remaining energy consumption.
`}</div>
                    </>
                    }
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                  {netZeroCarpon && netZeroCarpon?.length > 0 &&
                  <>
                      <ChartWrapper height={200} name={'Carbon'}>
                      <MyResponsiveBar data={netZeroCarpon} 
                                        keys={['total_tons_co2_year']} 
                                        indexby={'title'} 
                                        isHorizontal={true}
                                        colors={{'scheme': 'greens'}}
                                        margin={{ top: 3, right: 3, bottom: 3, left: 120 }} />
                    </ChartWrapper>
                    <div>{`Your building is ${solution.reports.environmental_report.net_zero_building.carbon.net_zero.net_zero_percentage}% Net Zero Carbon building. 
`}</div>
                    <div>{`You will need another ${solution.reports.environmental_report.net_zero_building.carbon.net_zero.offset_area.toLocaleString()} m² of PV to offset its remaining energy consumption.`}
</div>
                    </>
                    }

                  </Grid>
                </Grid>
              </Grid>



        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>


        <Grid item xs={12}>
              {energy_consumption_breakwon && energy_consumption_breakwon.length > 0 &&
                    <MyTable columns={[' ', 'Heating', 'Cooling', 'Lighting', 'Total']}
                    rows={energy_consumption_breakwon}/>
              
}
              </Grid>

        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>

          <Grid container spacing={2}>
            <Grid item xs={12}>
                <ChartWrapper height={300} name={'Operational Carbon Breakdown (kgCO2e/m²/year'}>
                  <MyResponsiveBar data={operationalCarbonBreakdown} 
                                    keys={['embodied', 'operational']} 
                                    indexby={'id'} 
                                    showLegends={true}
                                    isHorizontal={true}
                                    colors={{'scheme': 'greens'}}
                                    margin={{ top: 10, right: 120, bottom: 100, left: 160 }}
                                    colorBy='id'
                                    />
                </ChartWrapper>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              {
              normalised_emissions_CO2_m2_year && normalised_emissions_CO2_m2_year.length > 0 &&

              <ChartWrapper height={300} name={'Operational Carbon Breakdown (kgCO2e/m²/year)'}>
                <MyResponsiveBar data={normalised_emissions_CO2_m2_year}
                                  keys={['value']} indexby={'id'} ytitle={' '} xtitle={' '}
                                  colors={{'scheme': 'greens'}} 
                                  showLegends={false} 
                                  isHorizontal={false} 
                                  axisBottomTickRotation={-45} 
                                  leftaxisdisabled={true}
                                  xaxixEnabled={true} 
                                  margin={{ top: 10, right: 3, bottom: 100, left: 60 }} 
                                  axisBottomlegendOffset={50} />

              </ChartWrapper>

              }
            </Grid>



            <Grid item xs={12} md={6} lg={6}>
              {embodied_carbon_breakdown && embodied_carbon_breakdown?.length > 0 && 
            <ChartWrapper height={300} name={'Embodied Carbon Breakdown (kgCO2e/m²)'}>

          <MyResponsiveBar data={embodied_carbon_breakdown} keys={['value']} indexby={'id'} ytitle={''} xtitle={' '} 
          colors={{'scheme': 'greens'}} showLegends={false} isHorizontal={false} axisBottomTickRotation={-45} leftaxisdisabled={true}
          xaxixEnabled={true} 
          margin={{ top: 10, right: 3, bottom: 100, left: 60 }} axisBottomlegendOffset={50}/>
          </ChartWrapper>
      }
            </Grid>
          </Grid>






        </TabPanel>
      </SwipeableViews>
    </div>
  );
}