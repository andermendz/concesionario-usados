import React from 'react';
import { useUser } from 'context/userContext';


const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();

  

  if (roleList.includes(userData.rol)) {
    return children;
  }

  return  <div className='text-8xl text-red-500 '>NO TIENES AUTORIZACION PARA INGRESAR A ESTE SITIO.</div>;
};


export default PrivateRoute;