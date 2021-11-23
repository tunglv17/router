import { type } from 'os';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
type TypeUser = {
 id: number,
 name: string,
 email: string
}

const UserPage = () => {
 const [user, setUser] = useState<TypeUser[]>([]);
 const fetchData = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const user = await data.json();
  setUser(user)
 }
 useEffect(() => {
  fetchData()
 }, [])
 return (
  <div>
   {user.map(item => 
   <>
   <Link to={`/users/${item.id}`}>{item.name}</Link>
   <h4>{item.email}</h4>
   </>
   )}
  </div>
 )
}

export default UserPage
