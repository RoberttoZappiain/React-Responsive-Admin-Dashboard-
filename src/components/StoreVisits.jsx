import React from 'react';
import { BiChevronRight } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";
import Title from "./Title";

export default function StoreVisits() {
  
  const data = [
    {title: "Masculino", value: 38},
    {title: "Femenino", value: 50},
    {title: "Visitas por dia", value: 88},    
  ];

  return <div className='storeVistis'>
      <Title title="Visitas del sitio" subtitle="Detalles acerca de las visitas en tu sitio " />
      <div className="anayltics">
        <div className="icon">
          <RiGroupLine/>
        </div>
        <div className="content">
          <div className="title">
            <h4>Analisis detallado</h4>
            <span>$112/Mes</span>
          </div>
          <BiChevronRight/>
        </div>
      </div>
      <div className="progress_bars">
      {
      data.map((x) => {
        return(
          <div className="progress_bar">
            <div className="title">
              <h5>{x.title}</h5>
              <h5>{x.value}</h5>
            </div>
            <progress value={x.value} max="100" />
          </div>
        )
      })
      }
      </div>
    </div>
  
}
