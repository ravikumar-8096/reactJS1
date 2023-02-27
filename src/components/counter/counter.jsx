import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";

let Counter = ({add}) => {
    // const [counter, setCounter] = React.useState(0);
    // let handleCounter = (value) => {
    //     // setCounter(counter + value)
    // }
    let signPad = useRef({});
    let data = "";
    const clear = () => {
      signPad.current.clear();
    };
    const save = () => {
      data = signPad.current.toDataURL();
      console.log('ravi-dat--',data);
    };
    const show = () => {
      signPad.current.fromDataURL(data);
      console.log('ravi-show--',signPad.current.fromDataURL(data));

    };
    return (
        <>
            <div className="container-fluid text-center mt-5">
                <h1 className="text-uppercase text-info h1 ">Sign</h1>
                {/* <div className="text-success display-3 my-4  font-weight-bold">{counter}</div> */}
                {/* <button className="btn btn-primary mx-2 border border-success" onClick={() => handleCounter(add)}>Submit</button> */}
                <SignaturePad penColor='green' toDataURL
    canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
    ref={signPad}
    />
     <button onClick={clear}>Clear</button>
        <button onClick={save}>Save</button>
        <button onClick={show}>Show</button>
                 </div>
            
        </>
    );
}

export default Counter;