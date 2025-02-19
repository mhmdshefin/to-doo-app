import React from 'react'
import Navbar from './Navbar'

const Addtodo = () => {
  return (
    <div>
      <Navbar/>
      <br />
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">User ID</label>
                        <input type="text" className="form-control" placeholder='enter user id'/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ID</label>
                        <input type="text" className="form-control" placeholder='enter ID' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder='enter title' />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <label htmlFor="" className="form-label">Status</label>
                  <select name="" id="" className="form-select">
                    <option value="select status">Select status</option>
                    <option value="complete">complete</option>
                    <option value="incomplete">incomplete</option>
                  </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addtodo
