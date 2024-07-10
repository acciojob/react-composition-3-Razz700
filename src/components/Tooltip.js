import React, { useState } from 'react'

const Tooltip = (props) => {
    const [check1,setcheck1]=useState(false);
    const [check2,setcheck2]=useState(false);
    const handle_enter=(check)=>{
        console.log('hi in enter mouse');
        if (check=='first') {
         setcheck1(true);
        }else{
            setcheck2(true);
            console.log('hi in else');
        }

    }
    const handleleave=(check)=>{
        if (check=='first') {
            setcheck1(false);
           }else{
               setcheck2(false);
           }
    }
  return (
    <div>
        <div className='now'>
        {check1 && <p className='tooltiptext'>{props.text.first}</p>} 
        <h2 onMouseEnter={()=>handle_enter('first')} onMouseLeave={()=>handleleave('first')} className='tooltip'>{props.children.first}</h2>
        </div>
        <div className='now'>
        {check2 && <p className='tooltiptext'>{props.text.second}</p>}
        <p onMouseEnter={()=>{handle_enter('second')}} onMouseLeave={()=>{ handleleave('second')}} className='tooltip'>{props.children.second}</p>
        </div>
    </div>
  )
}

export default Tooltip


// import React, { useState } from 'react'

// const Tooltip = (props) => {
//   const [check1, setCheck1] = useState(false);
//   const [check2, setCheck2] = useState(false);

//   const handleEnter = (check) => {
//     if (check === 'first') {
//       setCheck1(true);
//     } else {
//       setCheck2(true);  
//     }
//   };

//   const handleLeave = (check) => {
//     if (check === 'first') {
//         console.log('hiddddd');
//       setCheck1(false);
//     } else {
//       setCheck2(false);
//     }
//   };

//   return (
//     <div>

//         {check1 && <p className='tooltiptext'>{props.text.first}</p>}
//         <h2 
//           onMouseEnter={() => handleEnter('first')} 
//           onMouseLeave={() => handleLeave('first')} 
//           className='tooltip'>{props.children.first}</h2>

    
//         {check2 && <p className='tooltiptext'>{props.text.second}</p>}
//         <p 
//           onMouseEnter={() => handleEnter('second')} 
//           onMouseLeave={() => handleLeave('second')} 
//           className='tooltip'
//         >
//           {props.children.second}
//         </p>
//     </div>
//   );
// };

// export default Tooltip;
