import React from 'react';
import PureCounter from "@srexi/purecounterjs";


const BussinessSummery = () => {
const pure = new PureCounter();
  return (
      <div className="flex">
          <div>
              <p>
                  I can count: <span class="purecounter">0</span>
              </p>
          </div>

          <div>
              <p>
                  It's over (wait for it):
                  <span
                      data-purecounter-start="0"
                      data-purecounter-end="9001"
                      data-purecounter-currency="$"
                      class="purecounter"
                  >
                      0
                  </span>
                  !!!
              </p>
          </div>
      </div>
  );
};

export default BussinessSummery;