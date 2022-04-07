import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import MyTable from './Table';
import Grid from '@material-ui/core/Grid';
import ChartWrapper from './ChartWrapper';
import MyResponsivePie from './PiChart';
import MyResponsiveBar from './barchart';






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
    width: 100 + '%',
  },
}));

export default function EconomicReportTab({project_cost, table_1_soft_costs, 
            table_2_pre_construction, table_3_construction,
            table_1_flats_overall_income_dict, solution}) {
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
          <Tab label="Project Cost" {...a11yProps(0)} />
          <Tab label="Cost Breakdown" {...a11yProps(1)} />
          <Tab label="Income" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>



        <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} lg={6}>
                  <MyTable rows={project_cost.map(r => [r.id, r.value])} 
                      columns={['Item', 'Cost']} 
                      includeTotals={true} 
                      />

                  </Grid>
                  {project_cost && project_cost.length > 0 &&
                    <Grid item xs={12} sm={6} lg={6} >
                      <ChartWrapper name={'Project Cost %'} height={300}>
                        <MyResponsivePie data={project_cost.map(r => {
                         return {id: r.id, value: r.ratio}
                          })}  />
                      </ChartWrapper>
                    </Grid>
                  }
                </Grid>











        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>




        <Grid container spacing={1}>
                  {
                  table_1_soft_costs &&
                    <Grid item xs={12} sm={4} lg={4}>
                    <MyTable columns={['Item', 'Cost']}
                      rows={table_1_soft_costs.map((r) => [r.id, r.value])}
                      includeTotals={true}
                      caption={'Soft Costs'}
                    />
                  </Grid>
                  }



                  <Grid item xs={12} sm={4} lg={4}>
                    <MyTable columns={['Item', 'Cost']}
                      rows={table_2_pre_construction.map(r => [r.id, r.value])}
                      includeTotals={true}
                      caption={'Pre-Construction'}
                    />
                  </Grid>


                  <Grid item xs={12} sm={4} lg={4}>
                    <MyTable columns={['Unit', 'Cost']}
                      rows={table_3_construction.map(r => [r.id, r.value])}
                      includeTotals={true}
                      caption={'Construction'}
                    />
                  </Grid>

                </Grid>


                <Grid container spacing={1} >
                  <Grid item xs={12} sm={4} lg={4}>
                    {table_1_soft_costs && table_1_soft_costs?.length > 0 &&
                      <ChartWrapper name={'Soft Costs (%)'} height={300}>
                        <MyResponsiveBar data={table_1_soft_costs} keys={['ratio']} indexby={'id'}
                          ytitle={''} xtitle={'Soft Costs'}
                          showLegends={false} isHorizontal={true}
                          margin={{ top: 3, right: 3, bottom: 3, left: 120 }}
                        />
                      </ChartWrapper>
                    }
                  </Grid>
                  <Grid item xs={12} sm={4} lg={4}>
                    {table_2_pre_construction && table_2_pre_construction?.length > 0 &&
                      <ChartWrapper name={'Pre Construction Cost'} height={300}>
                        <MyResponsiveBar data={table_2_pre_construction} keys={['ratio']} indexby={'id'}
                          ytitle={''} xtitle={'Pre-Construction (%)'}
                          showLegends={false} isHorizontal={true}
                          margin={{ top: 3, right: 3, bottom: 3, left: 120 }}
                        />
                      </ChartWrapper>
                    }
                  </Grid>
                  <Grid item xs={12} sm={4} lg={4}>
                    {table_3_construction && table_3_construction?.length > 0 &&
                      <ChartWrapper name={'Construction Cost Chart'}>
                        <MyResponsiveBar data={table_3_construction} keys={['ratio']} indexby={'id'}
                          ytitle={''} xtitle={'Construction (%)'} height={300}
                          showLegends={false} isHorizontal={true}
                          margin={{ top: 3, right: 3, bottom: 3, left: 120 }}
                        />
                      </ChartWrapper>
                    }
                  </Grid>
                </Grid>





        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>




        <Grid container spacing={2} >
                <Grid item xs={12} sm={6} lg={6}>
                    <MyTable columns={['Unit', 'Income']}
                      rows={table_1_flats_overall_income_dict}
                      caption={'Income Analysis'}
                      includeTotals={true}
                    />
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                  <p><b>Project total income</b>      {solution.reports.economic_report.income.project_total_income.toLocaleString()}</p>
                  <p><b>Profit</b>      {solution.reports.economic_report.income.profit.toLocaleString()}</p>
                  <p><b>Simple ROI</b>      {solution.reports.economic_report.income.simple_roi.toLocaleString()}</p>
                </Grid>
              </Grid>




        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
