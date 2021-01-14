import React, {useState} from 'react'

export default function AddContactForm(props) {
    
    const initInputs = {fullName: props.fullName ||"",size: props.size ||"",limit: props.limit ||"",location: props.location ||"",}
    const [inputs, setInputs] = useState(initInputs)
    const [checked, setChecked] = useState(true)

    function handleChange(e){
        const {name, value} = e.target
        console.log(value)
        //setInputs(prevInputs => ({...prevInputs, [name]: value}))
        if(name==="saved"){
            setChecked(prevToggle => !prevToggle)
            console.log("yes")
            console.log(checked)
        }
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
  
            <label>Participant's Name</label><input type="text" name="fullName" value={inputs.fullName} onChange={handleChange} placeholder="Name" required/>
            <label>Number of Bedrooms: </label><input type="text" name="size" value={inputs.size} onChange={handleChange} placeholder="size" required/>
            <label>Shopping Limit :</label> <input type="text" name="limit" value={inputs.limit} onChange={handleChange} placeholder="limit" required/>
            <label>Preferred Zip :</label> <input type="text" name="location" value={inputs.location} onChange={handleChange} placeholder="location" /><br></br>
            <div className="item-1"><button className="search-btn">{props.btnText}</button></div>
    </form>


</>
  )
}
