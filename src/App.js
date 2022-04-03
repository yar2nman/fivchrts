// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MyResponsiveBar from './barchart';
import MyResponsivePie from './chartsRoot/PiChart';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartWrapper from './components/ChartWrapper';
import { AppBar, Container, FormControl, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@material-ui/core';

const getName = (str = '') => {
  return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    maxWidth: "100%",
    padding: "74px 50px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(6),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const TopBar = () => {
  const classes = useStyles();

  return <>
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
           App Name
          </Typography>
        </Toolbar>
      </AppBar>
  </>
}
function App() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [solution, setsolution] = useState({});
  const [solutionName, setsolutionName] = useState({});
  const [solutionIncome, setsolutionIncome] = useState({});

  const [project_cost, setproject_cost] = useState([]);
  const [table_1_soft_costs, settable_1_soft_costs] = useState({});
  const [table_2_pre_construction, settable_2_pre_construction] = useState({});
  const [table_3_construction, settable_3_construction] = useState({});

  const [consumption_breakdown, setconsumption_breakdown] = useState({});
  

  const myonclick = (solution_name) => {
    let solution = data.find(x => x.solution_name === solution_name)
    setsolution(solution);
    setsolutionName(solution.solution_name)
    setsolutionIncome(solution.reports.economic_report.income)

    setProjectCost();
    settable1soft_costs();
    settable2pre_construction();
    settable3construction();

    setConsumptionBreakdown();

    // settable_1_soft_costs(solution.reports.economic_report.table_1_soft_costs)
    // settable_2_pre_construction(solution.reports.economic_report.table_2_pre_construction)
    // settable_3_construction(solution.reports.economic_report.table_3_construction)
    console.log('state solution', solution);
    console.log('project cost', project_cost);


    function setProjectCost() {
      let pc = [];
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.project_cost)) {
        if (key !== 'total') {
          pc.push({ 'id': getName(key), 'label': key, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        }
        setproject_cost(pc);
      }
    }

    function settable1soft_costs() {
      let t1sc = [];
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.table_1_soft_costs)) {
        t1sc.push({ 'id': getName(key), 'label': key, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        settable_1_soft_costs(t1sc);
      }
    }

    function settable2pre_construction() {
      let t2pc = [];
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.table_2_pre_construction)) {
        t2pc.push({ 'id': getName(key), 'label': key, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        settable_2_pre_construction(t2pc);
      }
    }

    function settable3construction() {
      let t3c = [];
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.table_3_construction)) {
        t3c.push({ 'id': vlaue.name, 'label': vlaue.name, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        settable_3_construction(t3c);
      }
    }

    // Energy Consumption Breakdown
    function setConsumptionBreakdown() {
      let cb = [];
      for (const [key, vlaue] of Object.entries(solution.reports.environmental_report.energy_consumtion.consumption_breakdown)) {
        cb.push({ 'id': getName(key), 'label': key, 'value': vlaue.total_kWh_year, 'normalized': vlaue.normalised_kWh_year_m2 });
        setconsumption_breakdown(cb);
      }
    }
  }

  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson.solutions)
      });
  }


  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    <TopBar/>
    <div className={classes.root}>
        {data && data?.length > 0 &&
              <FormControl className={classes.formControl}>
                <InputLabel id="solutions-select-label">Select Solution</InputLabel>
                <Select
                  labelId="solutions-select-label"
                  id="solutions-select"
                  value={solution?.solution_name}
                  onChange={d => myonclick(d.target.value)}
                >
                  {data.map((item) =>
                    <MenuItem value={item.solution_name}
                     key={item}>{getName(item.solution_name)}</MenuItem>
                  )}
                </Select>
              </FormControl>
        }
      <Grid  container spacing={3}>
        {/* Economic cost */}
        {/* Cost breakdown */}
        {project_cost && project_cost?.length > 0 &&
          <Grid item xs={12} sm={6} lg={4}  className='Mydiv'>
            <ChartWrapper>
            <MyResponsivePie data={project_cost} />
            </ChartWrapper>
          </Grid>
        }

        {project_cost && project_cost?.length > 0 &&
          <Grid item xs={12} sm={6} lg={4} className='Mydiv'>
            <ChartWrapper>
            <MyResponsiveBar data={project_cost} keys={['ratio']} indexby={'id'}  ytitle={'cost %'} xtitle={'cost item'} showLegends={false} isHorizontal={false} />
            </ChartWrapper>
          </Grid>
        }

        {table_1_soft_costs && table_1_soft_costs?.length > 0 &&

          <Grid item xs={12} sm={6} lg={4} className='Mydiv'>
            <ChartWrapper>
            <MyResponsiveBar data={table_1_soft_costs} keys={['value']} indexby={'id'} ytitle={''} xtitle={'Soft Costs'} showLegends={false} isHorizontal={true}
            margin={{top: 50, right: 30, bottom: 50, left: 100 }} />
            </ChartWrapper>
          </Grid>
        }

        {table_2_pre_construction && table_2_pre_construction?.length > 0 &&
          <Grid item xs={12} sm={6} lg={4} className='Mydiv'>
            <ChartWrapper>
            <MyResponsiveBar data={table_2_pre_construction} keys={['value']} indexby={'id'} ytitle={''} xtitle={'Pre-construction cost'} showLegends={false} isHorizontal={false} />
            </ChartWrapper>
          </Grid>
        }
        {table_3_construction && table_3_construction?.length > 0 &&
          <Grid item xs={12} sm={6} lg={4} className='Mydiv'>
            <ChartWrapper>
            <MyResponsiveBar data={table_3_construction} keys={['value']} indexby={'id'} ytitle={''} xtitle={'Construction Cost'} showLegends={false} isHorizontal={false} />
            </ChartWrapper>
          </Grid>
        }
        {/* Income */}
        {/* Net Zero Building */}
        {/* Energy Consumption */}
        {consumption_breakdown && consumption_breakdown?.length > 0 &&
          <Grid item xs={12} sm={6} lg={4} className='Mydiv'>
            <ChartWrapper>
            <MyResponsivePie data={consumption_breakdown} showLegends={false} isHorizontal={false} />
            </ChartWrapper>
            </Grid>
      }
        {consumption_breakdown && consumption_breakdown?.length > 0 &&
          <Grid item xs={12} sm={6} lg={4} className='Mydiv'>
            <ChartWrapper>
            <MyResponsivePie data={consumption_breakdown.map((v) => {
              return {'id': v.id, 'label': v.label, 'value': v.normalized}
             })} showLegends={false} isHorizontal={false} />
            </ChartWrapper>
            </Grid>
      }
        {/* Life Cycle Carbon */}
    </Grid>

    </div>
    </>
  );
}

export default App;
