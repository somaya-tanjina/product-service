import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../assets/notfound.jpeg"

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
      <div  >
          <div className=''>
              <h1 className="text-3xl font-bold text-cyan-700 text-center">
                  OOPs 404!!Page is not Foud!!!
              </h1>
              <button
                  onClick={() => navigate("/")}
                  className=" btn btn-secondary block mx-auto my-5"
              >
                  Go to Home
              </button>
          </div>
          <div className="w-96 mx-auto">
              <img className="w-100" src={img} alt="" />
          </div>
      </div>
  );
};

export default NotFoundPage;