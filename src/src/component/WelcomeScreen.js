import React, { useContext } from 'react'



const WelcomeScreen = () => {
  // const { user} = useContext(UserAuthContext)
  // const [isAdmin] = useAdmin(user?.email)
  // const [isSeller] = useSeller(user?.email)


  return (
    <div className="h-screen text-gray-700 flex flex-col justify-center items-center pb-16">
      <div className="flex justify-center items-center">
        <p className="text-6xl font-bold">Welc</p>
        <div
          className="w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3
         border-blue-600"
        ></div>
        <p className="text-6xl font-bold mr-2">me</p>
        <p className="text-6xl font-bold flex justify-center items-center">
          T
          <div
            className="w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3
         border-blue-600"
          ></div>
        </p>
      </div>
      <div className="flex justify-center text-gray-500 items-center mt-4">
        <p className="text-3xl font-medium flex justify-center items-center">
          Admin Dashb
          <div
            className="w-6 h-6 border-8 border-dashed rounded-full animate-spin mt-3
         border-blue-600"
          ></div>
          ard
        </p>
        {/* {isSeller && <p className='text-3xl font-medium'>Seller Dashboard</p>}

        {!isAdmin  && !isSeller && <p className='text-3xl font-medium'>Buyer Dashboard</p>} */}
      </div>
    </div>
  );
}

export default WelcomeScreen
