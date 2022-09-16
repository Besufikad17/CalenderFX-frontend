import React, { useState } from 'react';
import './assets/style.css';
import { Card, CardText } from "reactstrap";
import { useMediaQuery } from "./hooks";
import moment from 'moment';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { gregorianToEthiopic } from './util';

const Grid = () => {
  const mediaMatch = useMediaQuery('(max-width: 1200px)');
  const etMonths = ["መስከረም", "ጥቅምት", "ኅዳር", "ታኅሳስ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ኃምሌ", "ነሐሴ", "ጷጉሜን"];
  const now = {
    "year": new Date().getFullYear(),
    "month": new Date().getMonth() + 1,
    "day": new Date().getDate()
  }

  const [etDate, setETDate] = useState(
    gregorianToEthiopic(now.year, now.month, now.day)
  );

  const month = etMonths[etDate.month - 1];
  let weekdays = [];


  for (let i = 0; i < 7; ++i) {
    weekdays.push(<th className="weekdays"><p>{"ሰማረሐዓቅእ".slice(i, i + 1)}</p></th>);
  }

  const firstDayOfMonth = () => {
    let dateObject = moment();
    //console.log(firstDay)
    return moment(dateObject)
      .startOf("month")
      .format("d");
  };

  let firstDay = firstDayOfMonth();

  let blanks = [];
  for (let i = 0; i < firstDay; i++) {
    blanks.push(
      <td className="blank">{""}</td>
    );
  }

  let daysInMonth = [];
  for (let d = 1; d <= 35 - firstDay; d++) {
    let style_ = d === etDate.day ? "current-day" : "weekdays";
    daysInMonth.push(
      <td key={d} className={style_}>
        {d}
      </td>
    );
  }

  var totalSlots = [...blanks, ...daysInMonth];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {

    if (i % 7 !== 0) {
      cells.push(row); // if index not equal 7 that means not go to next week
    } else {
      rows.push(cells); // when reach next week we contain all td in last week to rows
      cells = []; // empty container
      cells.push(row); // in current loop we still push current row to new container
    }
    if (i === totalSlots.length - 1) { // when end loop we add remain date
      rows.push(cells);
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr>{d}</tr>;
  });


  const prevMonth = (e) => {
    e.preventDefault();
    console.log('triggered');
    const index = etMonths.indexOf(etDate.month) === 1 ? 12 : etMonths.indexOf(etDate.month) - 1 ;
    if(index === 12){
      setETDate({
        "year": etDate.year - 1,
        "month": index + 1,
        "day": 0
      })
    }else{
      setETDate({
        ...etDate,
        "day": 0,
        "month": index + 1
      })
    }

    console.log(etDate);
  }

  const nextMonth = (e) => {

  }


  return (
    <div>
      <Card className="text-center"
        style={{
          background: "transparent",
          borderStyle: "none",
          margin: mediaMatch ? "auto" : "0px 280px 0px 280px"
        }}
      >
        <CardText>
          <br /><br />
          <h5 style={{ color: "#ffffff" }}>Ethiopian Calendar</h5>
        </CardText>
        <table style={{
          background: "rgba( 255, 255, 255, 0.2 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 5.5px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}>
          <thead>
            <tr className="calendar-header">
              <td className="nav-month">
                <i onClick={(e) => {alert('triggered')}}><AiOutlineArrowLeft/></i>
              </td><td/><td/>
              <td>
                {month + " " +etDate.year.toString() }
              </td><td/><td/>
              <td className="nav-month">
                <AiOutlineArrowRight />
              </td>
            </tr>
            <tr>{weekdays}</tr>
          </thead>
          <tbody>{daysinmonth}</tbody>
        </table>
      </Card>
    </div>
  );
}




export default Grid;