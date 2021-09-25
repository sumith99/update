import { useEffect, useState } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { forEach } from "lodash";

function App() {

  const [result, setresult] = React.useState({
    index: "",
    key: "",
    value: "",
    obj: ""
  })

  const [filtered, setFilteres] = useState()
  const [obj, setObj] = useState({})
  const [showData, setShowData] = useState()
  const family = [{
    id: 1,
    img: "father.png",
    name: "Aniket",
    age: "50",
    address:
    {
      pincode: 1234,
      plotNo: 24,
      nagar: 'mahadev nagar'
    },
    parent: {
      name: 'suresh',
      age: 55
    },
    contact: {
      number: "212121"
    },
    data: {
      userdata: "anemy",
      children: []
    }
  },



  {
    id: 2,
    img: "father2.png",
    name: "Rushi",
    age: "502",
    address:
    {
      pincode: 1232224,
      plotNo: 22224
    },
    parent: {
      name: 'SAMMY',
      age: 552
    },
    contact: {
      number: "475888745"
    },
    data: {
      userdata: "154456"
    }
  },
  {
    id: 3,
    img: "faaf",
    name: "Sumit",
    age: "502",
    address:
    {
      pincode: 2112,
      plotNo: 87878
    },
    parent: {
      name: 'sreefref',
      age: 98
    },
    contact: {
      number: "78778878787"
    },
    data: {
      userdata: "7675656"
    }
  },
  {
    id: 4,
    img: "father.png",
    name: "ram",
    age: 79,
    address:
    {
      pincode: 2432432,
      plotNo: 42424
    },
    parent: {
      name: 'shym',
      age: 55
    },
    contact: {
      number: "24454445554"
    },
    data: {
      userdata: "harry",
      children: []
    }
  },
  {
    id: 5,
    img: "father.png",
    name: "paresh",
    age: "30",
    address:
    {
      pincode: 8520,
      plotNo: 24
    },
    parent: {
      name: 'vijay',
      age: 62
    },
    contact: {
      number: "99635251241"
    },
    data: {
      userdata: "pawan",
      children: []
    }
  }
    ,
  {
    id: 6,
    img: "father.png",
    name: "mukesh",
    age: "70",
    address:
    {
      pincode: 7875,
      plotNo: 44
    },
    parent: {
      name: 'pravin',
      age: 75
    },
    contact: {
      number: "756656546"
    },
    data: {
      userdata: "shah",
      children: []
    }
  }

  ];

  let [inputData, setInputData] = useState(family)


  // const [inputinputData, setInputinputData] = useState(inputData)

  const handleInputChange = (e) => {
    setresult({ ...result, [e.target.name]: e.target.value })
  }
  console.log(result);
  const addValue = () => {
    if (result.obj === 'address') {
      family[result.index].address[result.key] = result.value
    } else if (result.obj === 'parent') {
      family[result.index].parent[result.key] = result.value;
    } else if (result.obj === 'contact') {
      console.log("contactt=====>");
      family[result.index].contact[result.key] = result.value
    } else if (result.obj === 'data') {
      family[result.index].data[result.key] = result.value
    } else {
      family.push({ [result.key]: result.value });
      console.log("contactt=====>", family);
    }
    console.log("my", family);
    setInputData(family)
    setShowData(family)
  }
  console.log("res", result.obj);
  // my["name", "age"] = "dd";

  console.log("---", family);

  const deleteMethod = () => {
    if (result.obj === 'address') {
      delete family[result.index].address[result.key]
    } else if (result.obj === 'parent') {
      delete family[result.index].parent[result.key]
    } else if (result.obj === 'contact') {
      delete family[result.index].contact[result.key]
    } else if (result.obj === 'data') {
      delete family[result.index].data[result.key]
    } else {
      delete family[result.index]
    }
    setInputData(family)
    console.log(family);
  }
  const FilterData = () => {
    if (result.obj === 'address') {
      setFilteres(family[result.index].address)
    } else if (result.obj === 'parent') {
      setFilteres(family[result.index].parent[result.key])
    } else if (result.obj === 'contact') {
      setFilteres(family[result.index].contact[result.key])
    } else if (result.obj === 'data') {
      setFilteres(family[result.index].data[result.key])
      console.log("datatattatatatat", (family[result.index].data[result.key]))
    } else {
      setFilteres(family[result.index])
    }
  }

  useEffect(() => {
    typeof filtered == 'object' ? setObj(true) : setObj(false);
    console.log("truueee", typeof filtered);
  }, [FilterData]);
  console.log("dataatat", inputData);
  return (
    <div className="form-group container mt-5 card">
      <h2 className="justify-content-center card-body text-info">Add/Delete/View Family Data :</h2>

      <label for="exampleFormControlInput1" class="form-label">Enter index Number</label>
      <input type="number" className="form-control" placeholder="index number...." name="index" onChange={(e) => handleInputChange(e)} /><br />
      <label for="exampleFormControlInput1" class="form-label">Enter key</label>
      <input type="text" placeholder="enter key...." className="form-control" name="key" onChange={(e) => handleInputChange(e)} /><br />
      <label for="exampleFormControlInput1" class="form-label">Enter values</label>
      <input type="text" name="value" className="form-control" placeholder="Enter value......" onChange={(e) => handleInputChange(e)} /><br />
      <label for="exampleFormControlInput1" class="form-label">Select category</label>
      <select name="obj" id="" className="form-control" onChange={(e) => handleInputChange(e)}><br />
        <option value="">-:  select one group  :-</option>
        <option value="parent">parent</option>
        <option value="address">address</option>
        <option value="contact">contact</option>
        <option value="data">data</option>
      </select>
      <div className="">
        <button onClick={addValue} className="btn col-2 btn-primary">Add</button>
        <button onClick={deleteMethod} className="btn col-2 btn-danger m-4">Delete index wise</button>
        <button onClick={FilterData} className="btn col-2 btn-success m-4">View Data</button>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Pincode</th>
            <th scope="col">Plot No</th>
            <th scope="col">Parent Name</th>
            <th scope="col">Parent Age</th>
            <th scope="col">Data</th>
            <th scope="col">Contact Number</th>
            {showData ? <th scope="col"> Updated : {result.key}</th> : ''}

          </tr>
        </thead>

        <tbody>
          {
            inputData.map((val, index) => {
              return (
                <tr>
                  <th>{index}</th>
                  <th>{val.name && val.name}</th>
                  <td>{val.age && val.age}</td>
                  <td>{val.address && val.address.pincode}</td>
                  <td>{val.address && val.address.plotNo}</td>
                  <td>{val.parent && val.parent.name}</td>
                  <td>{val.parent && val.parent.age}</td>
                  <td>{val.data && val.data.userdata}</td>
                  <td>{val.contact && val.contact.number}</td>
                  <td>{showData && index == result.index ? result.value : ''}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className="card">
        {

        }
        <table className="table table-striped table-bordered table-hover">
          <thead class="table-light">
            {
              obj ? filtered && Object.keys(filtered).map((val) => {
                return (
                  <th>{val}</th>
                )
              }) : <th>{result.key}</th>
            }
          </thead>
          <tbody>
            <tr>
              {
                filtered && Object.values(filtered).map((val) => {
                  return (
                    <td>
                      {val}
                    </td>
                  )
                })}
            </tr>
          </tbody>
        </table>
        <h2 className="text-warning">Your {result.key} : <span className="text-muted">{console.log(filtered)}</span> </h2>
      </div>
    </div>
  );
}


export default App;
