import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./style.css";

export interface PlaygroundProperties {
  onHome: () => void;
}

export function Playground(prop: PlaygroundProperties) {
  const [uuidString, setUuidString] = useState(uuid());
  const onClickGenerateUuid = () => {
    setUuidString(uuid());
  };
  return (
    <div className="Playground">
      <button onClick={prop.onHome}>Home</button>
      <div className="Interest">
        <button className="Button" onClick={onClickGenerateUuid}>
          Generate UUID
        </button>
        <text className="Text">{uuidString}</text>
      </div>
    </div>
  );
}
