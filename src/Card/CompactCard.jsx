import React,{useState} from 'react'
import { motion} from "framer-motion";
import Draggable from 'react-draggable';

const CompactCard = (Props) => {
    const [saveinfo, setsaveinfo] = useState();
  const [namerover, setnamerover] = useState("");
  const [dateearth, setdateearth] = useState("");
  const [count, setcount] = useState(0);
  const [status, setstatus] = useState(count);
  console.log(Props);
  return (
    
       <>
   <Draggable>
        <div className="fullcard"> 
      <motion.div
         className="CompactCard"
        style={{
          position:'relative'

        }}
      
          onClick={Props.setExpanded}
        
      >
       
         <img src={Props.param.img_src} alt="Imgcard"/>   
          <div className="radialbar"
          style={{
            position:'absolute'
  
          }}
          >
            <div className="roverclass">
          <span>{Props.param.rover.name}</span>
          </div>
          <div className="dateclass">
          <span>{Props.param.earth_date}</span>
          </div>
          
          </div>
          
        </motion.div>
        <div>
          <button 
           onClick={()=>{ 
                Props. addToCartHandler({id:Props.param.id,
                     earth_date:Props.param.earth_date,name:Props.param.rover.name
                })}
            } style={{
            width:'150px',
            height:'30px',
            backgroundColor:'rgb(73, 214, 160)'
          }}>SAVE</button>
          </div>
          </div>
          </Draggable>
      </>
   
  )
}

export default CompactCard
