import React from 'react'

function Namelist() {
    const names=['Manager','Tech Lead', 'Senior Software Develope','Junior Software Developer']
  return (
    <div>
      {/* Option 1 */}
        <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2>

      {/* Option 2 */}
        {/* { names.map(namedemo => <h2>{namedemo}</h2>) } */}

      {/* Option 3 */}
      {/* {names} */}
    </div>
  )
}

export default Namelist