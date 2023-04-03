import React,{useState} from 'react'
import { motion} from "framer-motion";
import { BiMessageSquareX} from "react-icons/bi";
import "./Card.css"

const Card = ({item}) => {
    const [expanded, setExpanded] = useState(false);
  // const img=  props.img_src;

    
  return (
   <>
      {expanded ? (
        
         <ExpandedCard param={item} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={item} setExpanded={() => setExpanded(true)} />
      )}
   
   </>
  )
}
const getDatafromLS=()=>{
  const data = localStorage.getItem('saveinfos');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}
function CompactCard({ param, setExpanded }) {
  const [saveinfo, setsaveinfo] = useState(getDatafromLS);
  const [namerover, setnamerover] = useState("");
  const [dateearth, setdateearth] = useState("");
  
  const [status, setstatus] = useState(getDatafromLS.length);
  
  const savebtnclick=()=>{

    setstatus((status) => status + 1);
    // setstatus(status+1)
     console.log(status)
    setnamerover(param.rover.name);
    setdateearth(param.earth_date);
    
    const savedate=[
      {
        namerover:namerover,
        dateearth:dateearth
      }
    ]
    setsaveinfo([...saveinfo,savedate])
    localStorage.setItem("saveinfos",JSON.stringify(saveinfo)); 
    
    //  console.log(saveinfo.length)
    //  alert(saveinfo.length);
  }
    return (
        <>
        <div className="fullcard"> 
      <motion.div
         className="CompactCard"
        style={{
          position:'relative'

        }}
      
        // layoutId="expandableCard"
         onClick={setExpanded}
        
      >
       
         <img src={param.img_src} alt="Imgcard"/>   
          <div className="radialbar"
          style={{
            position:'absolute'
  
          }}
          >
            <div className="roverclass">
          <span>${param.rover.name}</span>
          </div>
          <div className="dateclass">
          <span>${param.earth_date}</span>
          </div>
          
          </div>
          
        </motion.div>
        <div>
          <button 
           onClick={savebtnclick} 
          style={{
            width:'150px',
            height:'30px',
            backgroundColor:'rgb(73, 214, 160)'
          }}>SAVE</button>
          </div>
          </div>

      </>
    );
  }
  function ExpandedCard({ param, setExpanded }) {
    

      return(

        <motion.div
      className="ExpandedCard1"
      style={{  
        justifyContent:'center',
        alignItems:'center'  
      }}
      layoutId="expandableCard"
    >
      
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <BiMessageSquareX onClick={setExpanded} />
      </div>
      <img src={param.img_src} alt="Imgcard" style={{
        width:'300px',
        height:'300px'
      }}/>
        <span>{param.rover.name}</span>
        <span>{param.earth_date}</span>
      
      <span>Last 24 hours</span>
    </motion.div>
      )
  }

export default Card
