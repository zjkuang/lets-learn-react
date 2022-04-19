import React from "react";
import { ComponentProperties } from "../Common";
import "./style.css";

export interface HooksProperties extends ComponentProperties {}

export function Hooks(prop: HooksProperties) {
  React.useEffect(() => {
    setTimeout(() => {
      prop.onClickHome();
    }, 2000);
  }, [prop]);

  React.useEffect(() => {
    let released = false;
    setTimeout(() => {
      if (!released) {
        alert('Ha!');
      }
    }, 4000);
    
    return () => {
      released = true;
    };
  }, [prop]);

  return (
    <div className="Hooks">
      <button onClick={prop.onClickHome}>Home</button>
      <div className="Interest">
        <text className="Text">Hooks</text>
      </div>
    </div>
  );
}
