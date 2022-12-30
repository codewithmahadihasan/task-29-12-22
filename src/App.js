import { useEffect, useState } from "react";

function App() {
const [name,setName]= useState('')
const [users,setUsers] = useState([])

const [error,setError]= useState()


  useEffect(()=>{
    fetch(name.length? `https://jsonplaceholder.typicode.com/users/?name=${name}`: 'https://jsonplaceholder.typicode.com/users/')
     .then(res=>res.json())
    .then(data=>setUsers(data)).catch(er=> setError(er.message))
  },[name])

//  console.log(error)



const search =(event)=>{
  event.preventDefault();
  const name = event.target.name.value 
  setName(name)
}

  return (
  <div>
     <form onSubmit={search} className="flex flex-col mx-auto items-center w-[700px] mb-4 mt-10 md:flex-row md:px-16">
            <input
              placeholder="Name"
              name="name"
              type="text"
              className="flex-grow w-48 h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 border-black focus:border-teal-700 focus:outline-none focus:shadow-outline"
            />
            <button
             
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-purple-900 bg-teal-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
            >
              Search
            </button>
    </form>
  
    <div className="grid max-w-sm mt-10 gap-5 mb-8 lg:grid-cols-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl sm:mx-auto">
    {
    users.length?  users?.map((user)=> <div user={user} key={user.id} className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
         
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-purple-400"
            aria-label="Read article"
            title={user?.name}
          >
          Name:  {user?.name}
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          Username:  {user?.username}
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          Email:  {user?.email}
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          Number:  {user?.phone}
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
         Website:   {user?.website}
          </p>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
           City: {user?.address?.city}
          </p>
          
        </div>): <h1 className="text-5xl font-semibold text-center mt-20">No user Found</h1>
    }
       
      
      </div>
 
  </div>
  );
}

export default App;
