import './App.css';
import React from 'react';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
import Products from './components/Products';
import ProductDate from './components/ProductDate';
import ProductItem from './components/ProductItem';


const App=()=>{
  const products=[
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      date: new Date(2021,2,10),
    },
    {
      id:'p2',
      title:'Surf Excel',
      amount:220,
      date: new Date(2021,2,8),
    },
    {
      id:'p3',
      title:'Tide',
      amount:190,
      date: new Date(2021,2,1),
    },
    {
      id:'p4',
      title:'Nirma',
      amount:124,
      date: new Date(2021,2,22),
    },
  ];


// function App() {

//   const response=[
//     {
//       itemName:"Nirma",
//       itemDate:"20",
//       itemMonth:"June",
//       itemYear:"1788"
//     },
//     {
//       itemName:"Nirma2",
//       itemDate:"24",
//       itemMonth:"May",
//       itemYear:"2018"
//     },
//     {
//       itemName:"Nirma3",
//       itemDate:"12",
//       itemMonth:"July",
//       itemYear:"1928"
//     },
//   ]
  // const itemTwoName = "SurfExcel";


  return (
    <div>
      <Products items={products}/>
    </div>
    // <Card>
    //     <div>

    // <Item name={response[0].itemName}></Item>
    // <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

    // <Item name={response[1].itemName} ></Item>
    // <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

    // <Item name={response[2].itemName} ></Item>
    // <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

    // <div className="App">hello jee </div>
    // </div>
    //   </Card>
  );
}

export default App;
