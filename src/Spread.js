import React from 'react'

const Spread = () => {
  const fri =
    {id:165,
      Name:"pradeep",
      dept:"CSE",
      mark:"75",
      gender:"Male",
      city:"kumbakonam",
      father:"Mr.deiva"
    }

    const {Name,dept,...remains}=fri
    
    const update={
      ...fri,
      dept:"ECE"
    }

    console.log(update)
  
  return (
    <div>
      {fri.map((i)=>{
          return(
            <div>
            {i.Name}
            </div>
            )
      })}
    </div>
  )
}

export default Spread
