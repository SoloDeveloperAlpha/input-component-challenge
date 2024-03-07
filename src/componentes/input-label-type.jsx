import React from "react";
import '../estilos-sass/input-label-type.scss';
function InputLblTyp(props){

  
  const foco = () => {
    if(props.status==="default2"){
      return '#2962FF';
    } else if(props.status ==="error"){
      return '#D32F2F';
    }else if(props.status ==="error2"){
      return '#D32F2F';
    } else {
      return null;
    }
  };

  const fondo = () => {
    if(props.style==="disabled"){
      return {backgroundColor: 'Transparent'}
    }
  };

  const estilo = `${props.style}`!= "disabled" ? {border:`1px solid ${foco()}`} : {backgroundColor:"#F2F2F2"};

  if (props.style === "sma"){
    estilo.height = '40px';
  } else if(props.style === "med"){
    estilo.height = null;
  } else if(props.style === "full"){
    estilo.width = '900px';
  }

  return(
    <div className="cont-input" >
      <label htmlFor="etq">{props.titulo}</label>
      <div className="lb-input">
        <span style={{color: `${foco()}`}}>{props.subtit}</span>
        <div className={`prop-style ${props.style}`} style={estilo}>
          <span class="material-symbols-outlined" style={props.lc === null ? {display:'none'} : null}>{props.lc}</span>
          <input type="text" name="inp" id="inp" placeholder="Placeholder" style={fondo()} value={props.value != null ? 'Text' : null}/>
          <span class="material-symbols-outlined" style={props.lc2 === null ? {display:'none'} : null}>{props.lc2}</span>
        </div>
        <small className={props.status === 'error' || 'error2' ? `mostrar ${props.pie1}` : 'mostrar'} style={`${props.mst}` === 'pie' ? {color:`${foco()}`} : {display:'none'} }>Some interesting text</small>
      </div>
    </div>

  );
};

export default InputLblTyp;

/**&lt; Input /&gt; */