import React from "react";
import '../estilos-sass/cont-lateral.scss';

function ContLateral(){
  return(
    <div className="cont-lateral">
      <h1><span className="toq">Dev</span>Challenges.io</h1>
      <ul>
        <li>Typography</li>
        <li>Grid</li>
        <li>Buttons</li>
        <li className="active-li">Inputs</li>
      </ul>
    </div>

  );
}

export default ContLateral;