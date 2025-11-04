import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { SiEbox } from 'react-icons/si'

function Orders() {
  const [orders, setOrders] = useState([])
  const { serverUrl } = useContext(authDataContext)

  const fetchAllOrders = async () => {
    try {
      const result = await axios.post(`${serverUrl}/api/order/list`, {}, { withCredentials: true })
      setOrders(Array.isArray(result.data) ? result.data.slice().reverse() : [])
    } catch (error) {
      setOrders([])
    }
  }

  const statusHandler = async (e, orderId) => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/order/status`,
        { orderId, status: e.target.value },
        { withCredentials: true }
      )
      if (result.data) await fetchAllOrders()
    } catch (error) {
      // keep current state
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  return (
    <div className="w-screen min-h-screen bg-[#EFE9E4] text-[#2b2622]">
      <Nav />
      <div className="flex">
        <Sidebar />
        <div className="w-full lg:ml-[320px] md:ml-[240px] px-4 md:px-8 pt-24 pb-16">
          <h1 className="text-3xl font-semibold text-[#3a332d] mb-6">All Orders</h1>

          <div className="grid gap-5">
            {orders.map((order) => (
              <div
                key={order._id}
                className="w-full bg-white rounded-2xl p-5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#F5F2EF] rounded-xl grid place-items-center text-[#3a332d]">
                    <SiEbox className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[#3a332d] text-sm md:text-base">
                      {order.items.map((it, idx) => (
                        <span key={`${order._id}-${idx}`}>
                          {it.name.toUpperCase()} × {it.quantity} <span>{it.size}</span>
                          {idx < order.items.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-[#9B8C80] mt-2 space-y-0.5">
                      <p>{order.address.firstName + ' ' + order.address.lastName}</p>
                      <p>{order.address.street}</p>
                      <p>
                        {order.address.city}, {order.address.state}, {order.address.country} -{' '}
                        {order.address.pinCode}
                      </p>
                      <p>{order.address.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-[#4b453f]">
                  <p>Items: {order.items.length}</p>
                  <p>Method: {order.paymentMethod}</p>
                  <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
                  <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                  <p className="text-xl font-semibold text-[#2b2622] mt-1">₹ {order.amount}</p>
                </div>

                <div className="min-w-[220px]">
                  <label className="text-sm text-[#9B8C80] block mb-2">Update Status</label>
                  <select
                    value={order.status}
                    onChange={(e) => statusHandler(e, order._id)}
                    className="w-full h-11 rounded-xl bg-[#F5F2EF] border border-[#E6D9CF] focus:outline-none focus:ring-2 focus:ring-[#C8BDB3] px-3"
                  >
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            ))}

            {orders.length === 0 && (
              <div className="text-[#9B8C80] bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                No orders found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
