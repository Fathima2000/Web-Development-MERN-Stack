import logo from './logo.svg';
import './App.css';
import Item from "./Components/Item";
import ItemDate from './Components/ItemDate';
import Card from './Components/Card'

function App() {

  const response = [
    {
      itemName: "Nirma",
      itemDate: "8",
      itemMonth: "Feb",
      itemYear: "2000"
    },
    {
      itemName: "Ghadi",
      itemDate: "9",
      itemMonth: "Jan",
      itemYear: "2002"
    },
    {
      itemName: "Surf",
      itemDate: "10",
      itemMonth: "March",
      itemYear: "2001"
    },
    {
      itemName: "Rin",
      itemDate: "11",
      itemMonth: "June",
      itemYear: "1999"
    }
  ]

  return (
    <div className="App">
      <Card>

        <Item name={response[0].itemName}>
          Kuch biiiiiiiii
        </Item>
        <ItemDate day={response[0].itemDate} month={response[1].itemMonth} year={response[0].itemYear}></ItemDate>

        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[2].itemYear}></ItemDate>

        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

        <Item name={response[3].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[3].itemMonth} year={response[3].itemYear}></ItemDate>
        <div className="App">Hello Fatty!!</div>
      </Card>
      
      
    </div>
  );
}

export default App;
