import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
type TypeUser = {
  id: number;
  name: string;
  email: string;
};

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState<TypeUser | null>(null);
  const fetchData = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await data.json();
    setUser(user);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {user && (
        <>
          <h1>{user.name}</h1>
          <h4>{user.email}</h4>
        </>
      )}
    </div>
  );
};

export default UserDetail;
