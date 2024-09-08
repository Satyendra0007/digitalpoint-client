import { useContext, useEffect, useState } from 'react'
import { ContextStore } from '../store/ContextStore'
// import UserCard from '../components/UserCard'
import { toast } from 'react-toastify';
import { deleteRequest, fetchData } from '../actions/serverActions';
import UserCard from '../Components/UserCard';

export default function Users() {

  const { token } = useContext(ContextStore)
  const [users, setUsers] = useState([])

  const fetchAllUserData = async () => {
    const serverResponse = await fetchData(`${import.meta.env.VITE_APP_SERVER_URI}api/admin/users`, token)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      setUsers(response)
    }
    else {
      console.log(response)
    }
  }


  const handleDelete = async (id, email) => {
    let flag = confirm("Do you really want to delete this user " + email)
    if (flag) {
      const serverResponse = await deleteRequest(`${import.meta.env.VITE_APP_SERVER_URI}api/admin/users/${id}`, token)
      const response = await serverResponse.json()
      if (serverResponse.ok) {
        fetchAllUserData();
        toast.success(response.message)
      }
      else {
        toast.error(response.message)
      }
    }
  }

  useEffect(() => {
    fetchAllUserData();
  }, [])

  return (
    <div>
      <h1 className='text-2xl font-bold my-5  text-center text-blue-700'>All Users</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {users.map((user) => {
          return <UserCard key={user._id} {...user} handleDelete={handleDelete} />
        })}
      </div>
    </div>
  )
}
