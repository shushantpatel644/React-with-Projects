import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {

  const response=[
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemYear:"1788"
    },
    {
      itemName:"Nirma2",
      itemDate:"24",
      itemMonth:"May",
      itemYear:"2018"
    },
    {
      itemName:"Nirma3",
      itemDate:"12",
      itemMonth:"July",
      itemYear:"1928"
    },
  ]
  const itemTwoName = "SurfExcel";
  return (
    <Card>
        <div>

    <Item name={response[0].itemName}></Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

    <Item name={response[1].itemName} ></Item>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName} ></Item>
    <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

    <div className="App">hello jee </div>
    </div>
      </Card>
  );
}

export default App;
