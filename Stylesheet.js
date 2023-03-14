import React from 'react'
import './Mystyle.css';
function Stylesheet()
{
  return(  <div>
        <h1 class='primary'>This is My Style</h1>
    </div>
  )
}
// function Stylesheet(props)
// {
//     let className=props.primary ? 'primary' :''
//     return(
//         <div>
//             <h1 className={className}>This is My New Style</h1>
//         </div>
//     )
// }
export default Stylesheet