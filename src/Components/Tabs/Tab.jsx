import React from 'react'
import "./Tabs.css"
const Tab = ({changeTabes}) => {

    const tabs = {
        Add: "Add",
        Reterive: "Reterive"
    
    
      }
    return (
        <>
        <div className="wrapper_tabs">
        <button className='button' onClick={()=>changeTabes(tabs.Add)}>Add</button>
        <button className='button' onClick={()=>changeTabes(tabs.Reterive)}>Reterives</button>
        
        </div>
     
        
        </>
    )
}

export default Tab