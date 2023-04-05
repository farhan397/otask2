import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react'

import Imgcard from './Imgcard/Imgcard';
import Datafilter from './DataFilter/Datafilter';
import axios from 'axios';
import { useLayoutEffect } from 'react';
import GetSaveContainer from './containers/GetSaveContainer';


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function App() {
  const[datesss,setdates]=useState("");
const[roverss,setroverss]=useState("");
const[cam,setcam]=useState("");
const[btnsearch1,setbtnsearch1]=useState(0);
const [mydata, setdata] = useState([]);


  
  const btnsearch=(rovers,camera,datess)=>{
    
   
    setdates(datess);
    setroverss(rovers);
    setcam(rovers);
    setbtnsearch1(1)


}

 
  
  return (
    <div className="App">
     
      <div>
        <GetSaveContainer/>
       
        
      </div>
      {/* <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div> */}
    </div>
  );
}

// Form fields:

// 1-date taken (range: from-to)
// 2-rover (multiple choice)
// 3-camera (multiple choice; only the 3 cameras that are present on all rovers)
// 	Once the search form is submitted, retreive results from API and display a paginated/lazy loading grid with result images (thumbnails with date taken, rover name).

// 	Thumbnail images can be clicked/tapped - displaying full screen/modal window with larger image.

// 	Images can be added to basket/cart, displayed below the search results.

// 	Images added to basket/cart can be moved (order in the cart can be changed). Can be removed (remove one, remove all from basket)

// 	Once 10 photos are added, display/enable 'Start Grid' button

// 	Once clicked, display a grid of images (tiles) one by one. 
// 	Use all 10 images selected in step 5. Images can and should repeat. 
// 	Once full viewport is filled with tiles, rotate them randomly (one image at	` a time). 
// 	Sample effect can be observed at Youtube video linked below:
// 	https://www.youtube.com/watch?v=peudGV9jbAE 


// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY



// ThirdTask
// dark-mode switching functionality Implementations   
  
// When in Dark mode:  
//   The button icon should be faSun  
//   The button icon colour should be (#FFA500). You can use the color prop on the Icon component.  
    
// Instructions   
//   Each UI Element will be Seprate Component  like button , text area will be one component  
//   Dark And Light Mode CSS should be in Seprate Files   
// UI Should be look like as it is provided in SS , Colors can be vary but it should be in professional look.  







export default App;
