
import React from 'react';

const PrivateRoute = () => {
  return (
    <div>
      
    </div>
  );
};

export default PrivateRoute;
// import React, { useContext } from 'react'
// import { Navigate, useLocation } from 'react-router-dom'
// import { UserAuthContext } from '../contexts/AuthContext/AuthProvider'

// const PrivateRoute = ({ children }) => {
//   const { user, loader } = useContext(UserAuthContext)
//   const location = useLocation()
//   if (loader) {
//     return (
//       <div
//         className='w-16 h-16 my-5 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-purple-600'
//         bis_skin_checked='1'
//       ></div>
//     )
//   }
//   if (!user) {
//     return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
//   }
//   return children
// }

// export default PrivateRoute
