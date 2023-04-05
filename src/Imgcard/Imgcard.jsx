import React, { useState, useEffect } from "react";
// import { APIdata } from "../Data/Data";
import Card from "../Card/Card";
import { BsSave } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";

import { useRef } from "react";
import axios from "axios";


const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;



const Imgcard = (props) => {
  const [datess, setdate] = useState("");
  const [rovers, setrovers] = useState("");
  const [camera, setcamera] = useState("");
  const [filterarray, setfilterarray] = useState([]);
  const [data, setData] = useState([]);
  const [first, setFirst] = useState(10);
  const [dropdownpage, setdropdownpage] = useState(data.length);
  const [rows, setRows] = useState(0);

  console.log("getsavevalue", props.data)

  useEffect(() => {
   
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=IjogzEZwfkiZ90b8ymZs9LUgtNqZ3YHf0QahCdlS"
      )
      .then(response =>{setData(response.data.photos);
        setfilterarray(response.data.photos)
          })
         .catch(error => console.log(error));
  }, []);
  const triggerRef = useRef(null);

  console.log(first);

  const btnsearch = () => {
    // console.log(datess);
    // console.log(rovers);
    // console.log(camera);
    const filteredUser = data.filter((item) => {
      return (
        item.camera.full_name === camera &&
        // item.earth_date === datess &&
        item.rover.name
      );
    });
    setfilterarray(filteredUser);
    //  settotal(filterarray.length);
  };
  const handelInfiniteScroll = async () => {
    
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // setLoading(true);
        setFirst((first) => first + 5);
        // setFirst(pre);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <div
        class="dropdownitems"
        style={{
          backgroundColor: "rgb(215, 230, 221)",
          margin: "10px",
        }}
      >
        <div class="select1">
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "4.5ex",
              left: "2em",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "rgb(215, 230, 221)",
            }}
          >
            Rover
          </label>

          <select
            name="format"
            id="format"
            onChange={(e) => {
              setrovers(e.target.value);
            }}
          >
            <option selected>Enter value...</option>
            <option>Curiosity</option>
          </select>
        </div>
        <label style={{ fontSize: 15, color: "red", paddingLeft: 20 }}></label>

        {/* select2 item */}

        <div class="select1">
          <label
            for="first"
            style={{
              position: "absolute",
              fontSize: 10,
              bottom: "4.5ex",
              left: "2em",
              padding: "0 5px",
              zIndex: 1,
              backgroundColor: "rgb(215, 230, 221)",
            }}
          >
            Camera
          </label>

          <select
            name="format"
            id="format"
            onChange={(e) => {
              setcamera(e.target.value);
            }}
          >
            <option selected>Enter value...</option>
            <option>Mast Camera</option>
          </select>
        </div>
        <label style={{ fontSize: 15, color: "red", paddingLeft: 20 }}></label>

        <div className="sdate">
          <input
            type="date"
            style={{
              width: "200px",
              height: "30px",
            }}
            onChange={(e) => {
              setdate(e.target.value);
            }}
          />
        </div>

        <button
          type="button"
          onClick={btnsearch}
          style={{
            width: "100px",
            height: "35px",
            backgroundColor: "rgb(73, 214, 160)",
          }}
        >
          Search
        </button>

        <div className="sdate">

        <span
                for="first"
                style={{
                  position: "absolute",
                  fontSize: 10,
                 
                 
                  top: "4ex",
                  padding:'3px',
                  borderRadius:"40%",
                  backgroundColor:"red",
                 color:"white",
                  zIndex: 1,
                  
                }}
              >
               { props.data.length}
              </span>
        
          {/* <BsSave /> */}
          <RiNotification2Line/>
        </div>
      </div>

      <div
        className="parentContainer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "1px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        {rows===0&&( 
          filterarray.slice(1,first).map((card, index) => (
            <Card item={card} key={index}

            />
          )))} 
          {rows===1&&(
          
         filterarray.slice(1,dropdownpage).map((card, index) => (
            <Card item={card} key={index}

            />
        
          )))}
   
      </div>
      {/* {loading && <Loading />} */}
      {/* <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingPosts />
        </div> */}
      

    
<div style={{
    marginBottom:"10px",
    position:'sticky'
    // width:100,
    // marginLeft:'80%',
    
    
  }}> 
  <div class="select1" style={{
    marginBottom:"10px",
    position:'sticky',
    // width:100,
    marginLeft:'80%',
    backgroundColor:'blue'
  }}>
  
          <select name="format" id="format" style={{
             appearance:'none',
             paddingLeft:"20px",
             paddingRight:"20px"
          }} onChange={(e) => {
            setdropdownpage(e.target.value);
            setRows(1)
          }}>
            <option selected value={filterarray.length}></option>
            <option value={6}>5</option>
            <option value={11}>10</option>
            <option value={16}>15</option>
            <option value={21}>20</option>
            <option value={26}>25</option>
            <option value={31}>30</option>

          </select>
        </div>
        </div>





        
        
   <div>
   
      </div>
    </>
  )

}




export default Imgcard
