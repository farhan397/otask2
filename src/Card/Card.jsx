import React,{useState} from 'react'
import { motion} from "framer-motion";
import { BiMessageSquareX} from "react-icons/bi";
import "./Card.css"
import CompactCard from './CompactCard';
import Draggable from 'react-draggable';


import Savecontainer from '../containers/Savecontainer';
// import { useSelector, useDispatch } from 'react-redux'
// import { NotiInc } from '../states/reducers';

const Card = ({item}) => {
    const [expanded, setExpanded] = useState(false);
  // const img=  props.img_src;

    
  return (
   <>
      {expanded ? (
        
         <ExpandedCard param={item} setExpanded={() => setExpanded(false)} />
      ) : (
       
        <Savecontainer param={item} setExpanded={() => setExpanded(true)} />
      )}
   
   </>
  )
}

// function CompactCard({ param, setExpanded }) {
//   const [saveinfo, setsaveinfo] = useState();
//   const [namerover, setnamerover] = useState("");
//   const [dateearth, setdateearth] = useState("");
//   const [count, setcount] = useState(0);
//   const [status, setstatus] = useState(count);
  
  
//     return (
//         <>
//         <div className="fullcard"> 
//       <motion.div
//          className="CompactCard"
//         style={{
//           position:'relative'

//         }}
      
//          onClick={setExpanded}
        
//       >
       
//          <img src={param.img_src} alt="Imgcard"/>   
//           <div className="radialbar"
//           style={{
//             position:'absolute'
  
//           }}
//           >
//             <div className="roverclass">
//           <span>${param.rover.name}</span>
//           </div>
//           <div className="dateclass">
//           <span>${param.earth_date}</span>
//           </div>
          
//           </div>
          
//         </motion.div>
//         <div>
//           <button 
//           //  onClick={savebtnclick}
//           style={{
//             width:'150px',
//             height:'30px',
//             backgroundColor:'rgb(73, 214, 160)'
//           }}>SAVE</button>
//           </div>
//           </div>

//       </>
//     );
//   }
  function ExpandedCard({ param, setExpanded }) {
    

      return(
<Draggable>
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
    </Draggable>
      )
  }

export default Card
