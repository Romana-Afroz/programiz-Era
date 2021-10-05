// for servicess part
import React from 'react';
import useService from '../../Hook/UseService';
import AllServices from '../AllServices/AllServices';

// import { Link } from 'react-router-dom'

const Services = () => {
  const [service] = useService()
  return (
    <div className="container" style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "15px"

    }}>

      {
        service.map(service => <AllServices service={service}></AllServices>)
      }
    </div>
  );
};
export default Services;
