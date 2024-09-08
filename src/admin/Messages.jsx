
import { useEffect, useContext, useState } from 'react'
import MessageCard from '../Components/MessageCard'
import { ContextStore } from '../store/ContextStore'
import { deleteRequest, fetchData } from '../actions/serverActions'
import { toast } from 'react-toastify'

export default function Messages() {

  const { token } = useContext(ContextStore)
  const [messages, setMessages] = useState([])

  const fetchAllMessages = async () => {
    const serverResponse = await fetchData(`${import.meta.env.VITE_APP_SERVER_URI}api/admin/messages`, token)
    const response = await serverResponse.json()
    if (serverResponse.ok) {
      setMessages(response)
    }
    else {
      console.log(response)
    }
  }

  const handleDelete = async (id) => {
    let flag = confirm("Do you really want to delete this Message !")
    if (flag) {
      const serverResponse = await deleteRequest(`${import.meta.env.VITE_APP_SERVER_URI}api/admin/messages/${id}`, token)
      const response = await serverResponse.json()
      if (serverResponse.ok) {
        fetchAllMessages();
        toast.success(response.message)
      }
      else {
        toast.error(response.message)
      }
    }
  }

  useEffect(() => {
    fetchAllMessages();
  }, [])

  return (
    <div>
      <h1 className='text-2xl font-bold my-5  text-center text-blue-700'>All Messages</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {messages.map((message) => {
          return <MessageCard key={message._id} {...message} handleDelete={handleDelete} />
        })}
      </div>
    </div>
  )
}
