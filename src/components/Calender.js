import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import { Card, CardText } from 'reactstrap';
import { useMediaQuery } from './hooks';
import EC from 'ec.js';

export default function App() {
  const et = EC.instance('ethiopian');
  const mediaMatch = useMediaQuery('(max-width: 1200px)');
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <Card className="text-center"
      style = {{
        background: "transparent",
        borderStyle: "none",
        margin: mediaMatch ? "auto" : "0px 280px 0px 280px"
      }}
    >
        <CardText>
                    <br /><br />
                    <h5 style={{ color: "#ffffff" }}>Ethiopian Calendar</h5>
                </CardText>
     {/* <Calendar 
      value={dateState}
      onChange={changeDate}
      /> */}
   
    </Card>
  )
}

