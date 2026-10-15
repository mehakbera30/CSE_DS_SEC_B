import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData,setformData] = useState({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    console.log("form data update",formData);    // useefect issa hume yeh pata chelaga ki data update ho chuka hai and yeh ussa upar wala json se uthyega
  } , [formData])

  const handleChange=(e)=>{
       setformData({
        ...formData,      // formdata is use to access the value of useeffect at once
        [e.target.name] : e.target.value
       })
  }
const handleSubmit=(e)=>{
  e.preventDefault();    // prevent default browser behaviour and taki server down na ho
  alert("registration successfully");
  console.log(formData);
}

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='enter name' value={formData.name} onChange={handleChange}></input>
          <br/>
          <input type='text' name='email' placeholder='enter email' value={formData.email} onChange={handleChange}></input>
          <br/>
          <input type='text' name='password' placeholder='enter password' value={formData.password} onChange={handleChange}></input>
          <br/>
          <button type= 'submit'> REGISTRATION </button>
        </form>
      </div>
    </div>
  )
}

export default App

// agr hume form se data ya vlaue koh uthana hai toh hum e.target dom ka use krke ussa uthega aur ussa useeffect ke pass bhejega