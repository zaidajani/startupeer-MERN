import React, { useEffect } from "react";
import { AuthNavBar } from "../../components/navbar/authenticatedNav";
import axios from "axios";

export const AuthenticatedView = () => {
  const [data, setData] = React.useState({});

  useEffect(() => {
    axios.get('http://localhost:4000/api/user/info', {
      headers: {
        'x-auth-token': localStorage.getItem('token')
      }
    }).then(res => {
      setData(res.data);
    })
  })

  return (
    <>
      <AuthNavBar username={data.username} />
    </>
  )
}