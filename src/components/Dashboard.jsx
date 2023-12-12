import React from 'react'
import { Link } from 'react-router-dom';

export default function Dashboard() {

    return <div>this is dashboard <Link to="/products" className="underline"> <p> go to products</p></Link></div>
}