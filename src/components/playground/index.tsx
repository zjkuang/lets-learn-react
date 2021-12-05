import React from "react";
import "./style.css";

export interface PlaygroundProperties {
  onHome: () => void;
}

export function Playground(prop: PlaygroundProperties) {
  return (
    <div className="Playground">
      <button onClick={prop.onHome}>Home</button>
    </div>
  );
}
