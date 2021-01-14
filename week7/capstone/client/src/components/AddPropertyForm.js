import React, {useState} from 'react'

export default function AddPropertyForm(props) {
    
    const initInputs = {address: props.address ||"",size: props.size ||"",limit: props.limit ||"",location: props.location ||"",}
    const [inputs, setInputs] = useState(initInputs)
    const [checked, setChecked] = useState(true)

    function handleChange(e){
        const {name, value} = e.target
        console.log(value)
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs,props._id)
        setInputs(initInputs)
        if (props.btnText === "Submit Edit") {
          props.editToggle(prevToggle => !prevToggle)
      }
  
    }
  return (
   <>
   <form onSubmit={handleSubmit} className="contact_form">
  
            <label>Address: </label><input type="text" name="address" value={inputs.address} onChange={handleChange} placeholder="Address" required/> 
            <label>Number of Bedrooms: </label><input type="text" name="size" value={inputs.size} onChange={handleChange} placeholder="size" required/> 
            <label>Proposed Rent :</label> <input type="text" name="limit" value={inputs.limit} onChange={handleChange} placeholder="limit" required/>
            <label>Address Zip :</label> <input type="text" name="location" value={inputs.location} onChange={handleChange} placeholder="location" /><br></br>
            <div className="item-1"><button className="search-btn">{props.btnText}</button></div>
    </form>


</>
  )
}
