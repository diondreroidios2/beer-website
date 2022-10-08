import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const parms = useParams();
  const [singleData, setSingleData] = useState();

  const getSingleData = async () => {
    let url = `https://api.punkapi.com/v2/beers/${parms.id}`;
    const res = await axios.get(url);
    setSingleData(res?.data[0]);
  };

  useEffect(() => {
    getSingleData();
  }, [parms.id]);

  return (
    <div className="container">
      <div>
        <img src={singleData?.image_url} alt="main" height={300} />
        <div className="container" style={{margin: "25px 0px"}} >
          <h4>Name: {singleData?.name}</h4>
          <h4>Tips: {singleData?.brewers_tips}</h4>
          <h4>Contributed By: {singleData?.contributed_by}</h4>
          <h4>Food Pairing:</h4>
          <ul>
            {singleData?.food_pairing.map((item) => {
              return <li>{item} </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
