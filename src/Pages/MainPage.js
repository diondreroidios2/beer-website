import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const POST_PER_PAGE = 5;

const MainPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");

  const getAllData = async () => {
    const url = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${POST_PER_PAGE}`;
    const res = await axios.get(url);
    setData(res.data);
  };

  useEffect(() => {
    getAllData();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const beersValue = useMemo(() => {
    if (inputValue == "") {
      return data;
    }
    return data.filter((item) => {
      return item.name?.toLowerCase().includes(inputValue?.toLowerCase());
    });
  }, [inputValue, data]);

  return (
    <>
      <div className="container-fluid  ">
        <div className="row">
          <div className="col-10 mx-auto mt-5 ">
            <div className="mb-5">
              <input
                className="p-2"
                placeholder="Seach By Beer Name"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            </div>
            <table className="table table-bordered table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Tagline</th>

                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {beersValue?.map((cur) => {
                  return (
                    <>
                      <tr key={cur.id}>
                        <th>{cur.id}</th>
                        <td>{cur.name} </td>
                        <td>{`${cur.boil_volume?.value} ${cur.boil_volume?.unit}  `}</td>
                        <td>{cur.tagline}</td>
                        <Link to={"/" + cur.id}>
                          <td>Show Detail</td>
                        </Link>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <div className="float-right">
              {currentPage > 1 && <button onClick={goToPrevPage}>Previous Page</button>}
              <button onClick={goToNextPage}>Next Page</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
