import React from 'react';
import PureCounter from "@srexi/purecounterjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faIndustry, faThumbsUp, faPeopleRoof, faPlus } from "@fortawesome/free-solid-svg-icons";

const BussinessSummery = () => {
const pure = new PureCounter();
  return (
      <div>
          <div className="my-28">
              <h1 className="text-5xl text-center font-bold ">
                  Why You Choose{" "}
                  <span className="text-cyan-600">Thrive Manufacture</span>?
              </h1>
              <p className=" text-2xl font-bold text-center mt-4">
                  Be Benefited with us
              </p>
          </div>
          <div className="lg:px-20 px-3 lg:flex justify-around items-center">
              <div className="my-7">
                  <p className="text-7xl text-center text-cyan-600">
                      <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                  </p>

                  <p className="text-5xl font-bold my-7 text-center">
                      <span
                          data-purecounter-start="72"
                          data-purecounter-end="380"
                          class="purecounter"
                      >
                          72
                      </span>
                  </p>
                  <p className="text-2xl font-bold my-3 text-center">
                      Get Sevices
                  </p>
              </div>
              <div>
                  <p className="text-7xl text-center text-cyan-600">
                      <FontAwesomeIcon icon={faIndustry}></FontAwesomeIcon>
                  </p>

                  <p className="text-5xl font-bold my-7 text-center">
                      <span
                          data-purecounter-start="100"
                          data-purecounter-end="940"
                          class="purecounter"
                      >
                          100 <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                      </span>
                  </p>
                  <p className="text-2xl font-bold my-3 text-center">
                      Hard Workers
                  </p>
              </div>
              <div>
                  <p className="text-7xl text-center text-cyan-600">
                      <FontAwesomeIcon icon={faPeopleRoof}></FontAwesomeIcon>
                  </p>

                  <p className="text-5xl font-bold my-7 text-center">
                      <span
                          data-purecounter-start="50"
                          data-purecounter-end="140"
                          class="purecounter"
                      >
                          50 <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                      </span>
                  </p>
                  <p className="text-2xl font-bold my-3 text-center">
                      Happy Clients
                  </p>
              </div>

              <div>
                  <p className="text-7xl text-center text-cyan-600">
                      <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                  </p>
                  <p className="text-5xl font-bold text-center my-7">
                      <span
                          data-purecounter-start="303"
                          data-purecounter-end="553"
                          class="purecounter"
                      >
                          303 <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                      </span>
                  </p>
                  <p className="text-2xl font-bold my-3 text-center">
                      FeedBacks
                  </p>
              </div>
          </div>
      </div>
  );
};

export default BussinessSummery;