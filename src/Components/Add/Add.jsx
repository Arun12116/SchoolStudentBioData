import React, { useState } from 'react'
import "./Add.css"
const Add = () => {
    const inisitialData = {
        Name: "",
        DateOfBirth: "",
        AdharNumber: null,
        MobileNumber: null,


    }
    const [isAdding, setIsAdding] = useState(false)
    const [userData, setUserData] = useState(inisitialData)
    const getDataFromLs = () => {
        const data = localStorage.getItem("person_data")
        if (data) {
            return JSON.parse(data)
        } else {
            return []
        }
    }
    const [lsUserData, setLsUserData] = useState(() => {
        return getDataFromLs();

    })

    // console.log(lsUserData);


    const handleData = (e, filed) => {
        const updatedData = {
            ...userData
        }
        updatedData[filed] = e.target.value
        setUserData(updatedData)

    }


    const saveHandle = _ => {
        const userDatafromLs = localStorage.getItem("person_data")
        const person = {
            Name: userData.Name,
            DateOfBirth: userData.DateOfBirth,
            AdharNumber: userData.AdharNumber,
            MobileNumber: userData.MobileNumber,
            age: getAge(userData.DateOfBirth)
        };
        if (userDatafromLs) {
            const parseData = JSON.parse(userDatafromLs)
            const personArray = [...parseData, person]

            localStorage.setItem("person_data", JSON.stringify(personArray))
            setLsUserData(personArray)
        } else {
            const newArr = [person]
            localStorage.setItem("person_data", JSON.stringify(newArr))
            setLsUserData(newArr)
        }
        setIsAdding(false)
        setUserData(inisitialData)

    }
    const getAge = (dob) => {
        return "18"

    }
    const deleteHandle = (AdharNumber) => {
        const data = getDataFromLs();
        const removeData = data.filter((ele) => ele.AdharNumber !== AdharNumber)
        localStorage.setItem("person_data", JSON.stringify(removeData))
        setLsUserData(removeData)
    }
    return (
        <>
            <div className="add-wrapper">
                <h1>Add new Person</h1>
                <div className='table_wrapper'>
                    <table>
                        <thead>

                            <tr>
                                <th>Name</th>
                                <th>Date of birth</th>
                                <th>Adhar Number</th>
                                <th>Mobile Number</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {
                            lsUserData.map((user) => {

                                return <tr>

                                    <td>
                                        {user.Name}
                                    </td>
                                    <td>
                                        {user.DateOfBirth}
                                    </td>
                                    <td>
                                        {user.AdharNumber}
                                    </td>
                                    <td>
                                        {user.MobileNumber}
                                    </td>

                                    <td>
                                        {user.age}
                                    </td>
                                    <td>
                                        <div className='save_btn'>

                                            <button onClick={() => deleteHandle(user.AdharNumber)}> Delete</button>
                                        </div>




                                    </td>
                                </tr>




                            })

                        }


                        {
                            isAdding && (
                                <tr>

                                    <td>
                                        <input type='text' value={userData.Name} onChange={(e) => handleData(e, "Name")} />

                                    </td>
                                    <td>
                                        <input type='date' value={userData.DateOfBirth} onChange={(e) => handleData(e, "DateOfBirth")} />

                                    </td>
                                    <td>
                                        <input type='number' value={userData.AdharNumber} onChange={(e) => handleData(e, "AdharNumber")} />

                                    </td>
                                    <td>
                                        <input type='number' value={userData.MobileNumber} onChange={(e) => handleData(e, "MobileNumber")} />

                                    </td>

                                    <td>
                                        25
                                    </td>
                                    <td>
                                        <div className='save_btn'>
                                            <button onClick={saveHandle}>save</button>
                                            <button onClick={deleteHandle}> Delete</button>
                                        </div>




                                    </td>
                                </tr>

                            )
                        }


                    </table>


                </div>
                <div className="btn-wrapper">
                    <button className='button' onClick={() => setIsAdding(true)} disabled={isAdding}>Add new Person</button>
                </div>
            </div>

        </>
    )
}

export default Add