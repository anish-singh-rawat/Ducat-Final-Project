import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorystart } from '../../redux/action/category.action'
import { getProductstart } from '../../redux/action/product.action'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { useState } from 'react'
import { getUserstart } from '../../redux/action/user.action'

export default function Auth() {

  const navigate = useNavigate();
  let categories = useSelector(state => state.category.categories)
  let [user, setUser] = useState({})

  const dispatch = useDispatch();

  const checkUserAutentication = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
         const uid = user.uid;
         setUser(user)
      } 
      else {
         navigate("/login")
      }
    });

  }

  useEffect(() => {
    checkUserAutentication()
    dispatch(getCategorystart());
    dispatch(getProductstart())
    dispatch(getUserstart())
  }, [categories.length, user.uid])
  return (
    <div className='container mb-4'>
      <div className='row'>
        <div className="col-sm-3">
          <Sidebar />
        </div>
        <div className="col-sm-9">
          <Outlet />
        </div>
      </div>

    </div>
  )
}
