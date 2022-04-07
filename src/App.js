// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import MyResponsiveBar from './chartsRoot/barchart';
import MyResponsivePie from './chartsRoot/PiChart';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartWrapper from './chartsRoot/ChartWrapper';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import ChartsSection from './chartsRoot/ChartsSection';
import MyTable from './chartsRoot/Table';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EconomicReportTab from './chartsRoot/economicReportTab';
// import Paper from '@material-ui/core/Paper';


const getName = (str = '') => {
  return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');
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
  // const [solutionName, setsolutionName] = useState({});
  // const [solutionIncome, setsolutionIncome] = useState({});

  const [project_cost, setproject_cost] = useState([]);
  const [table_1_soft_costs, settable_1_soft_costs] = useState({});
  const [table_2_pre_construction, settable_2_pre_construction] = useState({});
  const [table_3_construction, settable_3_construction] = useState({});

  const [consumption_breakdown, setconsumption_breakdown] = useState({});
  const [embodied_carbon_breakdown, setembodied_carbon_breakdown] = useState([]);
  const [graph_built_area, setgraph_built_area] = useState([]);
  const [table_2, settable_2] = useState([]);
  const [table_1_flats_overall_income_dict, setttable_1_flats_overall_income_dict] = useState([]);

  const [netZeroEnergy, settnetZeroEnergy] = useState([]);
  const [netZeroCarpon, setnetZeroCarpon] = useState([]);

  const [energy_consumption_breakwon, setenergy_consumption_breakwon] = useState([]);

  

  
  

  const setSolutionData = (solution_name) => {
    let solution = data.find(x => x.solution_name === solution_name)
    setsolution(solution);
    // setsolutionName(solution.solution_name)
    // setsolutionIncome(solution.reports.economic_report.income)

    setProjectCost();
    settable1soft_costs();
    settable2pre_construction();
    settable3construction();

    setConsumptionBreakdown();
    setEmbodiedCarbonBreakdown();
    setGraphBuiltArea();
    settable2();
    settable_1_flatsoverallincomedict()

    let nzenergy = [{title: 'Energy Consumption' , 
    total_KWH_year: solution.reports.environmental_report.net_zero_building.energy.energy_consumption.total_kWh_year,
    normalised_kWh_year_m2: solution.reports.environmental_report.net_zero_building.energy.energy_consumption.normalised_kWh_year_m2  },
     {title: 'Energy Production',
     total_KWH_year: solution.reports.environmental_report.net_zero_building.energy.energy_production.total_kWh_year,
     normalised_kWh_year_m2: solution.reports.environmental_report.net_zero_building.energy.energy_production.normalised_kWh_year_m2
    }]
    console.log(nzenergy, 'nzenergy =======================>')
    settnetZeroEnergy(nzenergy)


    let nzcarpon = [{title: 'Savings' , 
    total_tons_co2_year: solution.reports.environmental_report.net_zero_building.carbon.carbon_savings.total_tons_co2_year,
    normalised_kgco2_m2_year: solution.reports.environmental_report.net_zero_building.carbon.carbon_savings.normalised_kgco2_m2_year  },
     {title: 'Emissions',
     total_tons_co2_year: solution.reports.environmental_report.net_zero_building.carbon.overall_emissions.total_tons_co2_year,
     normalised_kgco2_m2_year: solution.reports.environmental_report.net_zero_building.carbon.overall_emissions.normalised_kgco2_m2_year
    }]
    console.log(nzcarpon, 'nzcarpon =======================>')
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
      ['kWh/year/m2', 
      solution.reports.environmental_report.energy_consumtion.consumption_breakdown.heating_consumption.normalised_kWh_year_m2.toLocaleString(),
      solution.reports.environmental_report.energy_consumtion.consumption_breakdown.cooling_consumption.normalised_kWh_year_m2.toLocaleString(),
      solution.reports.environmental_report.energy_consumtion.consumption_breakdown.lighting_consumption.normalised_kWh_year_m2.toLocaleString(),
      (
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.heating_consumption.normalised_kWh_year_m2 +
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.cooling_consumption.normalised_kWh_year_m2 +
        solution.reports.environmental_report.energy_consumtion.consumption_breakdown.lighting_consumption.normalised_kWh_year_m2
  
      ).toLocaleString()
   ])

   console.log(ecb, 'setenergy_consumption_breakwon ==================>')

  setenergy_consumption_breakwon(ecb)


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
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.table_3_construction)) {
        t3c.push({ 'id': vlaue.name, 'label': vlaue.name, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        settable_3_construction(t3c);
      }
    }

    // Energy Consumption Breakdown
    function setConsumptionBreakdown() {
      let cb = [];
      for (const [key, vlaue] of Object.entries(solution.reports.environmental_report.energy_consumtion.consumption_breakdown)) {
        cb.push({ 'id': getName(key), 'label': getName(key), 'value': vlaue.total_kWh_year, 'normalized': vlaue.normalised_kWh_year_m2 });
        setconsumption_breakdown(cb);
      }
    }

    // Embodied Carbon Breakdown
    function setEmbodiedCarbonBreakdown() {
      let ecb = [];
      for (const [key, vlaue] of Object.entries(solution.reports.environmental_report.lca_dictionary.embodied_carbon_breakdown)) {
        ecb.push({ 'id': getName(key), 'label': getName(key), 'value': vlaue });
        setembodied_carbon_breakdown(ecb);
      }
      console.log('embodied carbon breakdown', ecb);
    }

    // Graph Built Area
    function setGraphBuiltArea() {
      let gba = [];
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.units_report.graph_built_area)) {
        gba.push({ 'id': getName(vlaue.name), 'label': getName(vlaue.name), 'value': vlaue.area_by_unit });
        setgraph_built_area(gba);
      }
      console.log('graph built area', gba);
    }

    // Table 2
    function settable2() {
      let t2 = [];
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.units_report.table_2)) {
        t2.push([vlaue.name, vlaue.number_of_units, vlaue.ratio_by_num_of_units, vlaue.ratio_by_nla, vlaue.ratio_by_total_built_area]);
        
       
      }
      settable_2(t2);
      console.log('table 2', t2);
    }

    // table_1_flats_overall_income_dict
    function settable_1_flatsoverallincomedict(){
      let t1 = []
      // eslint-disable-next-line
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.income.table_1_flats_overall_income_dict)) {
        t1.push([vlaue.name, vlaue.income]);     
      }
      setttable_1_flats_overall_income_dict(t1)
      console.log('table_1_flats_overall_income_dict', t1)
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
        return response.json();
      })
      .then(function (myJson) {
        localStorage.setItem('data',JSON.stringify(myJson))
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
            <Typography className={classes.heading}>Units Report</Typography>
          </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={6}>
                  <ChartWrapper name={'Built Area (m2)'} >
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
                        <Grid item xs={12}>NLA {solution.reports.units_report.table_1.nla.toLocaleString()} m2</Grid>
                        <Grid item xs={12}>Total Built Area {solution.reports.units_report.table_1.total_built_area.toLocaleString()} m2</Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} >
                      <MyTable rows={table_2} columns={['temp', 'Number of units', '% of total units', '% of NLA', '% of built area']} includeTotals={true} />
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
              <Typography className={classes.heading}>Economic Report</Typography>
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

        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>Environmental Report</Typography>
          </AccordionSummary>
          <AccordionDetails>

          {/* Environmental Report */}
            <Grid container spacing={1}>

            {/* Net Zero Building */}
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
                    <div>{`You will need another ${solution.reports.environmental_report.net_zero_building.energy.net_zero.offset_area.toLocaleString()} m2 of PV to offset its remaining energy consumption.
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
                    <div>{`You will need another ${solution.reports.environmental_report.net_zero_building.carbon.net_zero.offset_area.toLocaleString()} m2 of PV to offset its remaining energy consumption.`}
</div>
                    </>
                    }

                  </Grid>
                </Grid>
              </Grid>

              {/* Energy Consumption */}
              <Grid item xs={12}>
              {energy_consumption_breakwon && energy_consumption_breakwon.length > 0 &&
                    <MyTable columns={[' ', 'Heating', 'Cooling', 'Lighting', 'Total']}
                    rows={energy_consumption_breakwon}/>
              
}
              </Grid>

              {/* Life Cycle Carbon */}
              <Grid item xs={12}></Grid>

            </Grid>
          </AccordionDetails>
        </Accordion>


        {/* -------------------------------------------------Accordion Area------------------------------------------------- */}


      <Grid  container spacing={1}>


        {consumption_breakdown && consumption_breakdown?.length > 0 && <ChartsSection title="Environmental Report">
        <Grid item xs={12} sm={6} lg={6} className='Mydiv'>
            <ChartWrapper name={'Energy Consumption Breakdown KWH / Year'}>
            <MyResponsivePie data={consumption_breakdown} showLegends={false} isHorizontal={false} colors={{scheme: 'greens'}} />
            </ChartWrapper>
            </Grid>

            {consumption_breakdown && consumption_breakdown?.length > 0 &&
          <Grid item xs={12} sm={6} lg={6} className='Mydiv'>
            <ChartWrapper name={'Energy Consumption Normalized KWH / Year / M2'}>
            <MyResponsivePie data={consumption_breakdown.map((v) => {
              return {'id': v.id, 'label': v.label, 'value': v.normalized}
             })} showLegends={false} isHorizontal={false} colors={{scheme: 'greens'}} />
            </ChartWrapper>
            </Grid>
      }

{embodied_carbon_breakdown && embodied_carbon_breakdown?.length > 0 && 
        <Grid item xs={12} sm={6} className='Mydiv'>
            <ChartWrapper name={'Embodied Carbon Breakdown'}>

          <MyResponsiveBar data={embodied_carbon_breakdown} keys={['value']} indexby={'id'} ytitle={''} xtitle={' '} 
          colors={{scheme: 'greens'}} showLegends={false} isHorizontal={false} axisBottomTickRotation={-45} 
          margin={{ top: 10, right: 3, bottom: 100, left: 60 }} axisBottomlegendOffset={50}/>
          </ChartWrapper>
        </Grid>
      }

      {embodied_carbon_breakdown && embodied_carbon_breakdown?.length > 0 &&
        <Grid item xs={12} sm={6} className={classes.tableContainer}>
          <MyTable columns={['Item', 'Value']} rows={embodied_carbon_breakdown.map(r => [r.id, r.value])} caption={'Embodied Carbon Breakdown Table'} />
        </Grid>
      }


        </ChartsSection>
}
         
        {/* Life Cycle Carbon */}
    </Grid>

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



