import React, { Component } from 'react';
import './App.css';
import { store } from "./store";
import
{ setName9, setNumber9, setName10, setNumber10, setName11,
  setNumber11, setName12, setNumber12, setName1, setNumber1,
  setName2, setNumber2, setName3, setNumber3, setName4, setNumber4
}
from "./actions";

class App extends Component {
  openBooking = (id) => {
    let box = document.getElementById(id);
    box.style.display = "inLine";
  };
  closeBooking = (id) => {
    let box = document.getElementById(id);
    box.style.display = "none";
  };
  dispatchInfo = (name, number, id) => {
    let namefield = document.getElementById(name);
    let numberfield = document.getElementById(number);
    let slot = document.getElementById(id);
    let nameInput = namefield.value;
    let numberInput = numberfield.value;
    if (name === "9name") {
      store.dispatch(setName9(nameInput));
      store.dispatch(setNumber9(numberInput));
    }
    if (name === "10name") {
      store.dispatch(setName10(nameInput));
      store.dispatch(setNumber10(numberInput));
    }
    if (name === "11name") {
      store.dispatch(setName11(nameInput));
      store.dispatch(setNumber11(numberInput));
    }
    if (name === "12name") {
      store.dispatch(setName12(nameInput));
      store.dispatch(setNumber12(numberInput));
    }
    if (name === "1name") {
      store.dispatch(setName1(nameInput));
      store.dispatch(setNumber1(numberInput));
    }
    if (name === "2name") {
      store.dispatch(setName2(nameInput));
      store.dispatch(setNumber2(numberInput));
    }
    if (name === "3name") {
      store.dispatch(setName3(nameInput));
      store.dispatch(setNumber3(numberInput));
    }
    if (name === "4name") {
      store.dispatch(setName4(nameInput));
      store.dispatch(setNumber4(numberInput));
    }
    slot.style.backgroundColor = "rgba(255,0,0,0.8)";
  };
  render() {
    return (
      <div>
        <div className="headerDiv">
          <div className="title">
            <h1>Time Slot Buddy</h1>
            <p style={{paddingLeft:"20px"}}>By Chris Yang</p>
          </div>
        </div>
        <div className="timeSlotDesc">
          <h2>Time Slots</h2>
          <p>
            Click on available time slots to book
            <br/>
            <span style={{color:"red"}}>Red</span> time slots are <span style={{fontStyle:"italic"}}>booked</span>
            <br/>
            Click on booked timeslots to edit information
          </p>
        </div>
        <div className="timeSlots">
          <p className="slot" id="slot9" onClick={() => this.openBooking("9am")}>9:00am - 10:00am</p>
          <div className="bookSlot" id="9am">
            <div className="bookInfo">
              <p>This slot has been booked by:</p>
              <p>{store.getState().name9}</p>
              <p>{store.getState().number9}</p>
            </div>
            <input id= "9name" type="text" name="Name" placeholder="Name" style={{fontFamily:"Avenir"}}/>
            <input id = "9num" type="text" name="text" placeholder="Phone Number" style={{fontFamily:"Avenir"}} />
            <p className="bookButton" onClick={() => this.dispatchInfo("9name","9num","slot9")}>Book</p>
            <p className="closeButton" onClick={() => this.closeBooking("9am")}>Close  X</p>
          </div>
          <p className="slot" id="slot10" onClick={() => this.openBooking("10am")}>10:00am - 11:00am</p>
          <div className="bookSlot" id="10am">
            <div className="bookInfo">
              <p>This slot has been booked by:</p>
              <p>{store.getState().name10}</p>
              <p>{store.getState().number10}</p>
            </div>
            <input id= "10name" type="text" name="Name" placeholder="Name" style={{fontFamily:"Avenir"}}/>
            <input id = "10num" type="text" name="text" placeholder="Phone Number" style={{fontFamily:"Avenir"}} />
            <p className="bookButton" onClick={() => this.dispatchInfo("10name","10num","slot10")}>Book</p>
            <p className="closeButton" onClick={() => this.closeBooking("10am")}>Close  X</p>
          </div>
          <p className="slot" id="slot11" onClick={() => this.openBooking("11am")}>11:00am - 12:00pm</p>
          <div className="bookSlot" id="11am">
            <div className="bookInfo">
              <p>This slot has been booked by:</p>
              <p>{store.getState().name11}</p>
              <p>{store.getState().number11}</p>
            </div>
            <input id= "11name" type="text" name="Name" placeholder="Name" style={{fontFamily:"Avenir"}}/>
            <input id = "11num" type="text" name="text" placeholder="Phone Number" style={{fontFamily:"Avenir"}} />
            <p className="bookButton" onClick={() => this.dispatchInfo("11name","11num","slot11")}>Book</p>
            <p className="closeButton" onClick={() => this.closeBooking("11am")}>Close  X</p>
          </div>
          <p className="slot" id="slot12" onClick={() => this.openBooking("12pm")}>12:00pm - 1:00pm</p>
          <div className="bookSlot" id="12pm">
            <div className="bookInfo">
              <p>This slot has been booked by:</p>
              <p>{store.getState().name12}</p>
              <p>{store.getState().number12}</p>
            </div>
            <input id= "12name" type="text" name="Name" placeholder="Name" style={{fontFamily:"Avenir"}}/>
            <input id = "12num" type="text" name="text" placeholder="Phone Number" style={{fontFamily:"Avenir"}} />
            <p className="bookButton" onClick={() => this.dispatchInfo("12name","12num","slot12")}>Book</p>
            <p className="closeButton" onClick={() => this.closeBooking("12pm")}>Close  X</p>
          </div>
          <p className="slot" id="slot1" onClick={() => this.openBooking("1pm")}>1:00pm - 2:00pm</p>
          <div className="bookSlot" id="1pm">
            <div className="bookInfo">
              <p>This slot has been booked by:</p>
              <p>{store.getState().name1}</p>
              <p>{store.getState().number1}</p>
            </div>
            <input id= "1name" type="text" name="Name" placeholder="Name" style={{fontFamily:"Avenir"}}/>
            <input id = "1num" type="text" name="text" placeholder="Phone Number" style={{fontFamily:"Avenir"}} />
            <p className="bookButton" onClick={() => this.dispatchInfo("1name","1num","slot1")}>Book</p>
            <p className="closeButton" onClick={() => this.closeBooking("1pm")}>Close  X</p>
          </div>
          <p className="slot" id="slot2" onClick={() => this.openBooking("2pm")}>2:00pm - 3:00pm</p>
          <div className="bookSlot" id="2pm">
            <div className="bookInfo">
              <p>This slot has been booked by:</p>
              <p>{store.getState().name2}</p>
              <p>{store.getState().number2}</p>
            </div>
            <input id= "2name" type="text" name="Name" placeholder="Name" style={{fontFamily:"Avenir"}}/>
            <input id = "2num" type="text" name="text" placeholder="Phone Number" style={{fontFamily:"Avenir"}} />
            <p className="bookButton" onClick={() => this.dispatchInfo("2name","2num","slot2")}>Book</p>
            <p className="closeButton" onClick={() => this.closeBooking("2pm")}>Close  X</p>
          </div>
          <p className="slot" id="slot3" onClick={() => this.openBooking("3pm")}>3:00pm - 4:00pm</p>
          <div className="bookSlot" id="3pm">
            <div className="bookInfo">
              <p>This slot has been booked by:</p>
              <p>{store.getState().name3}</p>
              <p>{store.getState().number3}</p>
            </div>
            <input id= "3name" type="text" name="Name" placeholder="Name" style={{fontFamily:"Avenir"}}/>
            <input id = "3num" type="text" name="text" placeholder="Phone Number" style={{fontFamily:"Avenir"}} />
            <p className="bookButton" onClick={() => this.dispatchInfo("3name","3num","slot3")}>Book</p>
            <p className="closeButton" onClick={() => this.closeBooking("3pm")}>Close  X</p>
          </div>
          <p className="slot" id="slot4" onClick={() => this.openBooking("4pm")}>4:00pm - 5:00pm</p>
          <div className="bookSlot" id="4pm">
            <div className="bookInfo">
              <p>This slot has been booked by:</p>
              <p>{store.getState().name4}</p>
              <p>{store.getState().number4}</p>
            </div>
            <input id= "4name" type="text" name="Name" placeholder="Name" style={{fontFamily:"Avenir"}}/>
            <input id = "4num" type="text" name="text" placeholder="Phone Number" style={{fontFamily:"Avenir"}} />
            <p className="bookButton" onClick={() => this.dispatchInfo("4name","4num","slot4")}>Book</p>
            <p className="closeButton" onClick={() => this.closeBooking("4pm")}>Close  X</p>
          </div>
        </div>
        <div className="footer">
          <p>Chris Yang</p>
        </div>
      </div>
    );
  }
}

export default App;
