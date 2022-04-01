// import logo from './logo.svg';
import { object } from 'prop-types';
import React,{useState,useEffect} from 'react';
import './App.css';
import MyResponsiveBar from './barchart';
import MyResponsivePie from './chartsRoot/PiChart';

function App() {
  const [data,setData]=useState([]);
  const [solution,setsolution]=useState({});
  const [solutionName ,setsolutionName]=useState({});
  const [solutionIncome ,setsolutionIncome]=useState({});
  const [project_cost ,setproject_cost]=useState([]);
  const [table_1_soft_costs ,settable_1_soft_costs]=useState({});
  const [table_2_pre_construction ,settable_2_pre_construction]=useState({});
  const [table_3_construction ,settable_3_construction]=useState({});
  const myonclick = (childdata) => {
    let solution = data.find(x => x.solution_name ===  childdata?.data?.name)
    setsolution(solution);
    setsolutionName(solution.solution_name)
    setsolutionIncome(solution.reports.economic_report.income)
    for(const [key, vlaue] of Object.entries(solution.reports.economic_report.income)) {
      setproject_cost([...project_cost, {'category':key,'cost':vlaue.cost, 'ratio':vlaue.ratio}])
    }

    settable_1_soft_costs(solution.reports.economic_report.table_1_soft_costs)
    settable_2_pre_construction(solution.reports.economic_report.table_2_pre_construction)
    settable_3_construction(solution.reports.economic_report.table_3_construction)
    console.log('state solution', solution);

}
  const mydata= [
    {
      "id": "c",
      "label": "c",
      "value": 447,
      "color": "hsl(15, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 180,
      "color": "hsl(64, 70%, 50%)"
    },
    {
      "id": "php",
      "label": "php",
      "value": 204,
      "color": "hsl(229, 70%, 50%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 295,
      "color": "hsl(268, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 298,
      "color": "hsl(210, 70%, 50%)"
    }
  ]

  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson.solutions)
      });
  }


  useEffect(()=>{  
    getData()
  },[])
  return (
    <div className="App">
     {
       data && data?.length>0 && data.map((item)=><p key={item?.solution_name}>{item?.solution_name}</p>)
     }

     <div className='Mydiv'>
        { data && data?.length>0 &&
        <MyResponsiveBar data={data.map((item) =>  {
          let v = {'name': item.solution_name ,
          'area': item.reports.units_report.table_1.total_built_area, 
          'nla': item.reports.units_report.table_1.nla, 
          'efficiency': item.reports.units_report.table_1.efficiency
        }
        return v
        })} keys={['area']} indexby={'name'} ytitle={'Area'} showLegends={false} isHorizontal={false} myonclick={myonclick}/>
        }
     </div>

     <div className='Mydiv'>
        { data && data?.length>0 &&
        <MyResponsivePie data={mydata} />
        }
     </div>

     <div>{solution.solution_name}</div>
     
    </div>
  );
}

export default App;
