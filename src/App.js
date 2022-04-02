// import logo from './logo.svg';
import { object } from 'prop-types';
import React, { useState, useEffect } from 'react';
import './App.css';
import MyResponsiveBar from './barchart';
import MyResponsivePie from './chartsRoot/PiChart';

function App() {
  const [data, setData] = useState([]);
  const [solution, setsolution] = useState({});
  const [solutionName, setsolutionName] = useState({});
  const [solutionIncome, setsolutionIncome] = useState({});
  const [project_cost, setproject_cost] = useState([]);
  const [table_1_soft_costs, settable_1_soft_costs] = useState({});
  const [table_2_pre_construction, settable_2_pre_construction] = useState({});
  const [table_3_construction, settable_3_construction] = useState({});

  const myonclick = (childdata) => {
    let solution = data.find(x => x.solution_name === childdata?.data?.name)
    setsolution(solution);
    setsolutionName(solution.solution_name)
    setsolutionIncome(solution.reports.economic_report.income)

    setProjectCost();
    settable1soft_costs();
    settable2pre_construction();
    settable3construction();

    // settable_1_soft_costs(solution.reports.economic_report.table_1_soft_costs)
    // settable_2_pre_construction(solution.reports.economic_report.table_2_pre_construction)
    // settable_3_construction(solution.reports.economic_report.table_3_construction)
    console.log('state solution', solution);
    console.log('project cost', project_cost);


    function setProjectCost() {
      let pc = [];
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.project_cost)) {
        if (key !== 'total') {
          pc.push({ 'id': key, 'label': key, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        }
        setproject_cost(pc);
      }
    }

    function settable1soft_costs() {
      let t1sc = [];
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.table_1_soft_costs)) {
        t1sc.push({ 'id': key, 'label': key, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        settable_1_soft_costs(t1sc);
      }
    }

    function settable2pre_construction() {
      let t2pc = [];
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.table_2_pre_construction)) {
        t2pc.push({ 'id': key, 'label': key, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        settable_2_pre_construction(t2pc);
      }
    }

    function settable3construction() {
      let t3c = [];
      for (const [key, vlaue] of Object.entries(solution.reports.economic_report.table_3_construction)) {
        t3c.push({ 'id': key, 'label': key, 'value': vlaue.cost, 'ratio': vlaue.ratio });
        settable_3_construction(t3c);
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
    <div className="App">
      {data && data?.length > 0 &&
        <div className='Mydiv'>

          <MyResponsiveBar data={data.map((item) => {
            let v = {
              'name': item.solution_name,
              'area': item.reports.units_report.table_1.total_built_area,
              'nla': item.reports.units_report.table_1.nla,
              'efficiency': item.reports.units_report.table_1.efficiency
            }
            return v
          })} keys={['area']} indexby={'name'} ytitle={'Area'} showLegends={false} isHorizontal={false} myonclick={myonclick} />

        </div>
      }

      {project_cost && project_cost?.length > 0 &&
        <div className='Mydiv'>
          <MyResponsivePie data={project_cost} />

        </div>
      }
      {project_cost && project_cost?.length > 0 &&
        <div className='Mydiv'>

          <MyResponsiveBar data={project_cost} keys={['ratio']} indexby={'id'} ytitle={''} showLegends={false} isHorizontal={false} />

        </div>
      }


      {table_1_soft_costs && table_1_soft_costs?.length > 0 &&
        <div className='Mydiv'>

          <MyResponsiveBar data={table_1_soft_costs} keys={['value']} indexby={'id'} ytitle={''} showLegends={false} isHorizontal={true} />

        </div>
      }


      {table_2_pre_construction && table_2_pre_construction?.length > 0 &&
        <div className='Mydiv'>

          <MyResponsiveBar data={table_2_pre_construction} keys={['value']} indexby={'id'} ytitle={''} showLegends={false} isHorizontal={true} />

        </div>
      }

      
      {table_3_construction && table_3_construction?.length > 0 &&
        <div className='Mydiv'>

          <MyResponsiveBar data={table_3_construction} keys={['value']} indexby={'id'} ytitle={''} showLegends={false} isHorizontal={true} />

        </div>
      }

    </div>
  );
}

export default App;
