import "./Styles/app.scss";
import Barber from './Assets/image.jpg';
import Form from './Components/Form'
import {useEffect} from 'react';
import axios from "axios";

function App() {

  const Fields = [
    [{type: 'text', placeholder: 'First Name'},{type: 'text', placeholder: 'Last Name'},],
    [{type: 'email', placeholder: 'Email'},{type: 'tel', placeholder: 'Contact Number'},],
    [{type: 'select', placeholder: 'Select Barber'},{type: 'select', placeholder: 'Select Service'},],
    [{type: 'date', placeholder: 'Select Date'},{type: 'select', placeholder: 'Select Time'},],
    [{type: 'text', placeholder: 'Price', disable: true, id:'price'},],
  ]
  return (
    <div className="App">
      <h1>Book your barber</h1>
      <p>Great Hair Doesn’t Happen By Chance. It <br/>Happens By Appointment! So, Don't Wait And Book
            Your Appointment Now!</p>
      <div className="image-container">
      <img src={Barber} alt="Image of a barber cutting a client's beard" />
      </div>
      <Form Fields={Fields}/>
    </div>
  );
}

export default App;
