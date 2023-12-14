import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: '$435.50',
		current_order_status: 'INSUFFICIENT',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'INSUFFICIENT',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',
		order_total: '$836.44',
		current_order_status: 'INSUFFICIENT',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',
		order_total: '$334.50',
		current_order_status: 'SUFFICIENT',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14T03:24:00',
		order_total: '$876.00',
		current_order_status: 'SUFFICIENT',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'SUFFICIENT',
		shipment_address: 'Los Angeles, CA 90017'
	}
]
export default function RecentOrders() {
    return (
        <div className='bg-white flex-1 place-items-start pb-4 pt-3 px-4 rounded-sm border border-grey-200'>
          <strong> RecentOrders</strong>
          <div className="mt-3">
            <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                <thead>
                    <tr>
                        <td
                        >ID
                        </td>
                        <td >Product ID
                        </td>
                        <td
                        >Catagory
                        </td>
                        <td >Status
                        </td>
                        <td>Total Sales</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                {recentOrderData.map(order => 
            <tr key={order.id} >
                <td>{order.id}</td>
                <td>{order.product_id}</td>
                <td>{order.customer_name}</td>
                <td>{order.order_date}</td>
                <td>{order.order_total}</td>
                <td>{getOrderStatus(order.current_order_status)}</td>
                
                </tr>
            
          )}  
                </tbody>

            </table>
          </div>
          <div>

          </div>
         
        </div>
      );
    }
