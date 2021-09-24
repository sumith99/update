import { useState } from "react";
import React from "react";
// import 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [result, setresult] = React.useState({
    index: "",
    key: "",
    value: "",
    obj: ""
  })
  const [filtered, setFilteres] = useState()

  const my = [{
    id: '1',
    img: "father.png",
    name: "Jan Doe",
    age: "50",
    address:
    {
      pincode: 1234,
      plotNo: 24
    },
    parent: {
      name: 'suresh',
      age: 55
    },
    contactNo: [{}]
  },
  {
    id: '2',
    img: "father2.png",
    name: "Jan Doe2",
    age: "502",
    address:
    {
      pincode: 1232224,
      plotNo: 22224
    },
    parent: {
      name: 'suraadsesh',
      age: 552
    }
  }
  ];
  let [inputData, setInputData] = useState(my)


  // const [inputinputData, setInputinputData] = useState(inputData)
  console.log("00", my[0].address);
  const handleInputChange = (e) => {
    setresult({ ...result, [e.target.name]: e.target.value })
  }
  console.log(result);

  const addValue = () => {
    if (result.obj === 'address') {
      my[result.index].address[result.key] = result.value
    } else if (result.obj === 'parent') {
      my[result.index].parent[result.key] = result.value
    } else {
      my[result.index][result.key] = result.value
    }
    console.log("my", my);
    setInputData(my)
  }

  console.log(my);


  const deleteMethod = () => {
    if (result.obj === 'address') {
      delete my[result.index].address[result.key]
    } else if (result.obj === 'parent') {
      delete my[result.index].parent[result.key]
    } else {
      delete my[result.index]
    }
    setInputData(my)

    console.log(my);
  }
  const FilterData = () => {
    if (result.obj === 'address') {
      setFilteres(my[result.index].address[result.key])
    } else if (result.obj === 'parent') {
      setFilteres(my[result.index].parent[result.key])
    } else {
      setFilteres(my[result.index])
    }
  }
  return (
    <div className="form-group container mt-5">
      <h2 className="justify-content-center">Family Tree</h2>
      <label for="exampleFormControlInput1" class="form-label">Enter index</label>
      <input type="number" className="form-control" placeholder="index" name="index" onChange={(e) => handleInputChange(e)} /><br />
      <label for="exampleFormControlInput1" class="form-label">Enter key values</label>
      <input type="text" placeholder="key" className="form-control" name="key" onChange={(e) => handleInputChange(e)} /><br />
      <label for="exampleFormControlInput1" class="form-label">Enter values</label>
      <input type="text" name="value" className="form-control" placeholder="value" onChange={(e) => handleInputChange(e)} /><br />
      <label for="exampleFormControlInput1" class="form-label">Select category</label>
      <select name="obj" id="" className="form-control" onChange={(e) => handleInputChange(e)}><br />
        <option value="">select group</option>
        <option value="parent">parent</option>
        <option value="address">address</option>
      </select>
      <button onClick={addValue} className="btn btn-primary">Add</button>
      <button onClick={deleteMethod} className="btn btn-danger m-4">Delete index wise</button>
      <button onClick={FilterData} className="btn btn-success m-4">View Data</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">age</th>
            <th scope="col">PINCODE</th>
            <th scope="col">Plot no</th>
            <th scope="col">parent name</th>
            <th scope="col">parent age</th>
          </tr>
        </thead>
        <tbody>
          {
            inputData.map((val) => {
              return (
                <tr>
                  <th scope="row">{val.name}</th>
                  <td>{val.age}</td>
                  <td>{val.address.pincode}</td>
                  <td>{val.address.plotNo}</td>
                  <td>{val.parent.name}</td>
                  <td>{val.parent.age}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <h1>Your Data: {filtered}</h1>
    </div>
  );
}

export default App;
