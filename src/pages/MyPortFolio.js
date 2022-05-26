import React from 'react';

const MyPortFolio = () => {
  return (
      <div className="lg:flex justify-around">
          <div class="card lg:w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                  <h2 class="card-title">Somaya Tanjina</h2>
                  <p className="text-xl font-bold">
                      {" "}
                      Email:
                      <span className="text-cyan-600">
                          somaya.eng.cou@gmail.com
                      </span>
                  </p>
                  <p className="text-xl font-bold">
                      Educational Background:
                      <span className="text-cyan-600">
                          Undergrade student of Comilla University
                      </span>
                  </p>

                  <p className="text-xl ">
                      3 Website Links:
                      <span className="text-cyan-600">
                          <ul>
                              <li>
                                  <a href="https://app.netlify.com/sites/eng-dictionary/settings/domain">
                                      https://app.netlify.com/sites/eng-dictionary/settings/domain
                                  </a>
                              </li>
                              <li>
                                  {" "}
                                  <br />
                                  <a href="https://st-know-weather.netlify.app/">
                                      https://st-know-weather.netlify.app/
                                  </a>
                              </li>
                              <li>
                                  <br />
                                  <a href="https://laptop-warehouse-687a2.web.app/">
                                      https://laptop-warehouse-687a2.web.app/
                                  </a>
                              </li>
                          </ul>
                      </span>
                  </p>
              </div>
          </div>
          <div class="card w-96 bg-base-100 my-10 shadow-xl">
              <div class="card-body">
                  <h2 class="card-title">List of Skill</h2>
                  <div>
                      <ul>
                          <li>Html</li>
                          <li>Css</li>
                          <li>Sass</li>
                          <li>Tailwind</li>
                          <li>Bootstrap</li>
                          <li>Javascript</li>
                          <li>React</li>
                          <li>Node js</li>
                          <li>Mongo Db</li>
                          <li>Docker</li>
                          <li>Firebase</li>
                          <li>Linux</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default MyPortFolio;
