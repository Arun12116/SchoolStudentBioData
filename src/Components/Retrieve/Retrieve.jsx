import React, { useState } from 'react'
import "./Reterieve.css"
import { getDataFromLs } from '../utiles/Helper'
const Retrieve = () => {

  const [change, setChange] = useState("")
  const [showData, setShowData] = useState([])
  // const [isHandleSearchClicked, setHandleSearchClicked] = useState(false)
  // console.log(showData);
  const changeHandle = (e) => {

    setChange(e.target.value);
    // setHandleSearchClicked(false)

  }

  const handleSearch = () => {
    const data = getDataFromLs();
    const search = data.filter((ele) => ele.AdharNumber === change)
    setShowData(search)

  }
  const deleteAllItems=()=>{



  }
  return (

    <>
      <h1>Retrieve</h1>
      <div className="inpute-serach">
        <div>
          <input type="text" className='inpute' value={change} onChange={changeHandle} />
        </div>
        <div>
          <button className='button' onClick={handleSearch}>Find</button>

        </div>

      </div>
      {

        showData.length > 0 ? <p>dataFound</p> : <p>NotFound</p>
      }
      <div className="items">
        {
          showData.map((items) => {
            return (
              <>

                <p>Name:{items.Name}</p>
                <p>Date Of Birth:{items.DateOfBirth}</p>
                <p>Aadhar Number:{items.AdharNumber}</p>
                <p>Mobile Number:{items.MobileNumber}</p>
                <div>
                  <button className='button' onClick={deleteAllItems}>Delete </button>
                </div>
              </>
            )


          })
        }

      </div>

    </>
  )
}

export default Retrieve