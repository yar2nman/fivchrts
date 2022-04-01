// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import MyResponsiveBar from './barchart';

function App() {
  const [data,setData]=useState([]);

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
        })} keys={['area']} indexby={'name'} ytitle={'Area'} showLegends={false} isHorizontal={false}/>
        }
     </div>
     
    </div>
  );
}

export default App;
