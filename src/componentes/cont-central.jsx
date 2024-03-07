import React from "react";
import '../estilos-sass/cont-central.scss';
import InputLblTyp from "./input-label-type";
import Footer from "./footer";
function ContCentral(){

  return(
    <div className="cont-central">
          <h1>Inputs</h1>
          <div className="fila-input">
            <InputLblTyp titulo="&lt; Input /&gt;" subtit="Label" style="default" />
            <InputLblTyp titulo="&:hover" subtit="Label" style="defhover"/>
            <InputLblTyp titulo="&:focus" subtit="Label" style="default2" status="default2"/>
          </div>
          <div className="fila-input">
            <InputLblTyp titulo="&lt; Input error /&gt;" subtit="Label" style="error" status="error"/>
            <InputLblTyp titulo="&:hover" subtit="Label" style="errhover"/>
            <InputLblTyp titulo="&:focus" subtit="Label" style="error2" status="error2"/>
          </div>
          <div className="fila-input">
            <InputLblTyp titulo="&lt; Input disabled /&gt;" subtit="Label" style="disabled" />
          </div>
          <div className="fila-input2">
            <InputLblTyp titulo="&lt; Input helperText=”Some interesting text” /&gt;" subtit="Label" style="default" mst="pie"/>
            <InputLblTyp titulo="&lt; Input helperText=”Some interesting text” /&gt;" subtit="Label" style="error" status="error" mst="pie"/>
          </div>
          <div className="fila-input2">
            <InputLblTyp titulo="&lt; Input startIcon /&gt;" subtit="Label" style="default" lc="call"/>
            <InputLblTyp titulo="&lt; Input endIcon /&gt;" subtit="Label" style="default" lc2="lock"/>
          </div>
          <div className="fila-input2">
            <InputLblTyp titulo='&lt; Input value="text" /&gt;' subtit="Label" style="default" value="text"/>
          </div>
          <div className="fila-input2">
            <InputLblTyp titulo='&lt; Input size="sm" /&gt;' subtit="Label" style="sma"/>
            <InputLblTyp titulo='&lt; Input size="md" /&gt;' subtit="Label" style="med"/>
          </div>
          <div className="fila-input3">
            <InputLblTyp titulo='&lt; Input fullWidth /&gt;' subtit="Label" style="full" value="Text"/>
          </div>
          <div className="fila-input2">
            <InputLblTyp titulo='&lt; Input multiline row="4" /&gt;' subtit="Label" style="multi"/>
          </div>
          <Footer />
    </div>
  );
}

export default ContCentral;