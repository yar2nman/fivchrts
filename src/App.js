// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import MyResponsiveBar from './barchart';
import MyResponsivePie from './chartsRoot/PiChart';

function App() {
  const [data,setData]=useState([]);
  const [solution,setsolution]=useState({});
  const myonclick = (childdata) => {
    console.log('child data', childdata);
    console.log('data', data);
    let solution = data.find(x => x.solution_name ===  childdata?.data?.name)
    setsolution(solution);
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
