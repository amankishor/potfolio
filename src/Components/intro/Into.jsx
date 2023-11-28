import "./in.scss";
import {init} from "ityped";
import { useEffect ,useRef} from "react";

export default function Into() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);


  return (
    <div className="intro"  id = "intro">
      <div className="left">
      <div className="imgContainer">
        <img src= "assests/aman.png" alt=""/>
      </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>hi therre , i"am</h2>
          <h1>Aman kishor</h1>
          <h3>
            freelancer <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assests/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
