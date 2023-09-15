import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addUserstart, updateUserstart } from '../../../redux/action/user.action'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

let initialstate = {}
export default function AddOrEditUser() {
  let dispatch = useDispatch()
  const navigate = useNavigate()
  let { id } = useParams()

  const users = useSelector(state => state.user.users);

  if (users) {
    const user = users.find(user => user.id === id)
    if (user) {
      initialstate = user
    }
    else {
      initialstate = { name: '', email: '', password: "", role: "customer", status: "0" }
    }
  }

  let [formData, setFormdata] = useState(initialstate)

  let { name, email, password, role, status } = formData

  const inputchange = (event) => {

    setFormdata((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value
    }))
  }

  const submit = ((event) => {
    event.preventDefault()


    if (id) {
      delete formData.id
      dispatch(updateUserstart(id, formData))

      toast.success(" User Updated successfully...");

      setTimeout(() => {
        navigate("/admin/users")
      }, 2000);
    }
    else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          formData.uid = user.uid

          dispatch(addUserstart(formData))
          toast.success(" User Create successfully...");

          setTimeout(() => {
            navigate("/admin/users")
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage)

        });
    }
  })

  useEffect(() => {

  }, [id])

  return (
    <div className="card">
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <div>
          {id ? "Edit" : "Add"} user
        </div>
        <div><Link to="/admin/users" className='btn btn-success'>Back</Link></div>
      </div>
      <div className="card-body">
        <form onSubmit={submit}>

          <div className="mb-4">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name'
              value={name} onChange={inputchange} />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name='email'
              value={email} onChange={inputchange} readOnly={id ? true : false} />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name='password'
              value={password} onChange={inputchange} readOnly={id ? true : false} />
          </div>

          <div className='mb-3'>
            <label htmlFor="status">Role</label>
            <select className="form-control" id='role' name='role' defaultValue={role} onChange={inputchange} >
              <option hidden>select category</option>
              <option value="customer">Costomer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor="status">Status</label>
            <select className="form-control" id='status' name='status' defaultValue={status} onChange={inputchange} >
              <option hidden>select Status</option>
              <option value="1">Active</option>
              <option value="0">InActive</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            {id ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  )
}
