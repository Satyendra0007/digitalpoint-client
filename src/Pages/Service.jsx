import React, { useContext, useEffect } from 'react'
import ServiceCard from '../Components/ServiceCard'
import Heading from '../Components/Heading'
import services from '../data/servicesData'
import { ContextStore } from '../store/ContextStore'
import { useNavigate } from 'react-router-dom'

export default function Service() {
  const navigate = useNavigate()
  const { isLoggedIn } = useContext(ContextStore)

  useEffect(() => {
    if (!isLoggedIn)
      navigate("/login")
  })
  return (
    <div className='container mx-auto md:max-w-7xl' >
      <Heading text={"Our Services"} />
      <div className="px-6 flex flex-col gap-6 md:flex-row md:flex-wrap justify-center ">
        {services.map((service, index) => {
          return <ServiceCard key={index} {...service} />
        })}
      </div>
    </div>
  )
}
