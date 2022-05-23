import React from 'react';
import { BsCart2 } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { CgArrowsExchangeV } from "react-icons/cg";
export default function Milestones() {

  const data = [
    {
      icon: BsCart2,
      title: "Ordenes Completadas",
      value: "1.247K",
    },
    {
      icon: CgArrowsExchangeV,
      title: "Total de ingresos ",
      value: "317K",
    },
    {
      icon: FaUser,
      title: "Total de visitas sitio",
      value: "2.5M",
    },
    {
      icon: BsCart2,
      title: "Total de ventas hechas",
      value: "52,47K",
    },
  ]

  return <div className='milestones'>
      {
        data.map((milestone)=>{
          return (
            <div className="milestone">
              <div className="icon">
                <milestone.icon/>
              </div>
              <div className="details">
                <h4>{milestone.title}</h4>
                <h2> {milestone.value} </h2>
              </div>
            </div>
          )
        })
      }
    </div>
  
}
