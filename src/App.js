import React, { useState, useEffect } from 'react';
import './App.css';
import MyResponsiveBar from './chartsRoot/barchart';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartWrapper from './chartsRoot/ChartWrapper';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import MyTable from './chartsRoot/Table';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EconomicReportTab from './chartsRoot/economicReportTab';
import EnviromentTab from './chartsRoot/enviromentReportTab';


const getName = (str = '', take1 = false) => {
  if (take1) {
    let word = str.split('_')[0];

    return word.charAt(0).toUpperCase() + word.slice(1);
  } else {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    maxWidth: "100%",
    padding: "74px 35px",
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
  tableContainer: {
    height: 400,
    width: "100%",
  }
}));
function App() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [solution, setsolution] = useState({});
  const [project_cost, setproject_cost] = useState([]);
  const [table_1_soft_costs, settable_1_soft_costs] = useState({});
  const [table_2_pre_construction, settable_2_pre_construction] = useState({});
  const [table_3_construction, settable_3_construction] = useState({});
  const [embodied_carbon_breakdown, setembodied_carbon_breakdown] = useState([]);
  const [graph_built_area, setgraph_built_area] = useState([]);
  const [table_2, settable_2] = useState([]);
  const [table_1_flats_overall_income_dict, setttable_1_flats_overall_income_dict] = useState([]);
  const [netZeroEnergy, settnetZeroEnergy] = useState([]);
  const [netZeroCarpon, setnetZeroCarpon] = useState([]);
  const [energy_consumption_breakwon, setenergy_consumption_breakwon] = useState([]);
  const [normalised_emissions_CO2_m2_year, setnormalised_emissions_CO2_m2_year] = useState([]);
  const [operationalCarbonBreakdown, setoperationalCarbonBreakdown] = useState([]);

  const setSolutionData = (solution_name) => {
    let solution = data.find(x => x.solution_name === solution_name)
    setsolution(solution);
    setProjectCost();
    settable1soft_costs();
    settable2pre_construction();
    settable3construction();
    setEmbodiedCarbonBreakdown();
    setGraphBuiltArea();
    settable2();
    settable_1_flatsoverallincomedict()
    setnormalisedemissionsCO2_m2_year()

    let nzenergy = [{
      title: 'Energy Consumption',
      total_KWH_year: solution.reports.environmental_report.net_zero_building.energy.energy_consumption.total_kWh_year,
      normalised_kWh_year_m2: solution.reports.environmental_report.net_zero_building.energy.energy_consumption.normalised_kWh_year_m2
    },
    {
      title: 'Energy Production',
      total_KWH_year: solution.reports.environmental_report.net_zero_building.energy.energy_production.total_kWh_year,
      normalised_kWh_year_m2: solution.reports.environmental_report.net_zero_building.energy.energy_production.normalised_kWh_year_m2
    }]
    settnetZeroEnergy(nzenergy)


    let nzcarpon = [{
      title: 'Savings',
      total_tons_co2_year: solution.reports.environmental_report.net_zero_building.carbon.carbon_savings.total_tons_co2_year,
      normalised_kgco2_m2_year: solution.reports.environmental_report.net_zero_building.carbon.carbon_savings.normalised_kgco2_m2_year
    },
    {
      title: 'Emissions',
      total_tons_co2_year: solution.reports.environmental_report.net_zero_building.carbon.overall_emissions.total_tons_co2_year,
      normalised_kgco2_m2_year: solution.reports.environmental_report.net_zero_building.carbon.overall_emissions.normalised_kgco2_m2_year
    }]
    setnetZeroCarpon(nzcarpon)

    let ecb = []
    ecb.push([
      'kWh/year',
      solution.reports.environmental_report.energy_consumtion.consumption_breakdown.heating_consumption.total_kWh_year.toLocaleString(),
      solution.reports.environmental_report.energy_consumtion.consumption_breakdown.cooling_consumption.total_kWh_year.toLocaleString(),
      solution.reports.environmental_report.energy_consumtion.consumption_breakdown.lighting_consumption.total_kWh_year.toLocaleString(),
      (
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.heating_consumption.total_kWh_year +
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.cooling_consumption.total_kWh_year +
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.lighting_consumption.total_kWh_year


      ).toLocaleString()
    ])
    ecb.push(
      ['kWh/year/m²',
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.heating_consumption.normalised_kWh_year_m2.toLocaleString(),
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.cooling_consumption.normalised_kWh_year_m2.toLocaleString(),
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.lighting_consumption.normalised_kWh_year_m2.toLocaleString(),
        (
          solution.reports.environmental_report.energy_consumtion.consumption_breakdown.heating_consumption.normalised_kWh_year_m2 +
          solution.reports.environmental_report.energy_consumtion.consumption_breakdown.cooling_consumption.normalised_kWh_year_m2 +
          solution.reports.environmental_report.energy_consumtion.consumption_breakdown.lighting_consumption.normalised_kWh_year_m2

        ).toLocaleString()
      ])


    setenergy_consumption_breakwon(ecb)




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
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.table_3_construction)) {
        t3c.push({ 'id': vlaue.name, 'label': vlaue.name, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        settable_3_construction(t3c);
      }
    }


    // Embodied Carbon Breakdown
    function setEmbodiedCarbonBreakdown() {
      let ecb = [];
      for (const [key, vlaue] of Object.entries(solution.reports.environmental_report.lca_dictionary.embodied_carbon_breakdown)) {
        ecb.push({ 'id': getName(key), 'label': getName(key), 'value': vlaue });
        setembodied_carbon_breakdown(ecb);
      }
    }

    // Graph Built Area
    function setGraphBuiltArea() {
      let gba = [];
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.units_report.graph_built_area)) {
        gba.push({ 'id': getName(vlaue.name), 'label': getName(vlaue.name), 'value': vlaue.area_by_unit });
        setgraph_built_area(gba.reverse());
      }
    }

    // Table 2
    function settable2() {
      let t2 = [];
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.units_report.table_2)) {
        t2.push([vlaue.name, vlaue.number_of_units, vlaue.ratio_by_num_of_units, vlaue.ratio_by_nla, vlaue.ratio_by_total_built_area]);


      }
      settable_2(t2);
    }

    // table_1_flats_overall_income_dict
    function settable_1_flatsoverallincomedict() {
      let t1 = []
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.income.table_1_flats_overall_income_dict)) {
        t1.push([vlaue.name, vlaue.income]);
      }
      setttable_1_flats_overall_income_dict(t1)
    }

    // solution.reports.environmental_report.lca_dictionary.operational_emissions_breakdown.normalised_emissions_CO2_m2_year
    function setnormalisedemissionsCO2_m2_year() {
      let ne = []
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.environmental_report.lca_dictionary.operational_emissions_breakdown.normalised_emissions_CO2_m2_year)) {
        ne.push({ 'id': getName(key, true), 'value': vlaue });
      }
      setnormalised_emissions_CO2_m2_year(ne)
    }

    setoperationalCarbonBreakdown([{'id': 'Carbon Breakdown',
      'embodied': solution.reports.environmental_report.lca_dictionary.breakdown.embodied_carbon_kgco2_life,
     'operational': solution.reports.environmental_report.lca_dictionary.breakdown.operational_carbon_kgco2_life}])

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
        return response.json();
      })
      .then(function (myJson) {
        localStorage.setItem('data', JSON.stringify(myJson))
        setData(myJson.solutions);
      });
  }


  useEffect(() => {
    getData()

  }, [])


  return (
    <>
      <div className={classes.root}>

        {/* <SelectSolution /> */}
        {data && data?.length > 0 &&
          SelectSolution(data, classes, solution, setSolutionData)
        }


        {/* -------------------------------------------------Accordion Area------------------------------------------------- */}
        {graph_built_area && graph_built_area?.length > 0 &&

          //  --------------------------------unit report--------------------------------
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}><b>Units Report</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={6}>
                  <ChartWrapper name={'Built Area (m²)'} >
                    <MyResponsiveBar data={graph_built_area} keys={['value']} indexby={'id'}
                      xtitle={' '} xaxixEnabled={false} isHorizontal={true} colors={{ scheme: 'reds' }}
                      margin={{ top: 0, right: 10, bottom: 0, left: 80 }} />
                  </ChartWrapper>
                </Grid>

                <Grid item xs={12} sm={6} lg={6} >
                  <Grid container spacing={0}>
                    <Grid item xs={12} >
                      <Grid container spacing={1} >
                        <Grid item xs={12}>Efficiency {solution.reports.units_report.table_1.efficiency.toLocaleString()} %</Grid>
                        <Grid item xs={12}>NLA {solution.reports.units_report.table_1.nla.toLocaleString()} m²</Grid>
                        <Grid item xs={12}>Total Built Area {solution.reports.units_report.table_1.total_built_area.toLocaleString()} m²</Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} >
                      <MyTable rows={table_2} columns={[' ', 'Number of units', '% of total units', '% of NLA', '% of built area']} includeTotals={true} />
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        }


        {/* --------------------------------Economic Report-------------------------------- */}
        {table_1_soft_costs && table_1_soft_costs?.length > 0 &&
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}><b>Economic Report</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1} >
                <Grid item xs={12}>
                  {project_cost && project_cost.length > 0 &&
                    <EconomicReportTab project_cost={project_cost}
                      table_1_soft_costs={table_1_soft_costs}
                      table_2_pre_construction={table_2_pre_construction}
                      table_3_construction={table_3_construction}
                      solution={solution}
                      table_1_flats_overall_income_dict={table_1_flats_overall_income_dict}
                    />

                  }  </Grid>
              </Grid>

            </AccordionDetails>
          </Accordion>
        }

        {/* --------------------------Environmental Report-------------------------- */}
        {netZeroEnergy && netZeroEnergy?.length > 0 &&
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}><b>Environmental Report</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EnviromentTab
                netZeroCarpon={netZeroCarpon}
                netZeroEnergy={netZeroEnergy}
                solution={solution}
                energy_consumption_breakwon={energy_consumption_breakwon}
                embodied_carbon_breakdown={embodied_carbon_breakdown}
                normalised_emissions_CO2_m2_year={normalised_emissions_CO2_m2_year}
                operationalCarbonBreakdown={operationalCarbonBreakdown}


              />
            </AccordionDetails>
          </Accordion>

        }
        {/* -------------------------------------------------Accordion Area------------------------------------------------- */}
      </div>
    </>
  );
}


function SelectSolution(data, classes, solution, setSolutionData) {
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="solutions-select-label">Select Solution</InputLabel>
        <Select defaultValue={''}
          labelId="solutions-select-label"
          id="solutions-select"
          value={solution?.solution_name || ''}
          onChange={d => setSolutionData(d.target.value)}

        >
          {data.map((item) =>
            <MenuItem value={item.solution_name}
              key={item?.solution_name}>{getName(item.solution_name)}</MenuItem>
          )}
        </Select>
      </FormControl>
    </>
  )
}

export default App;



