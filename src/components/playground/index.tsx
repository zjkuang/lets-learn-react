import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./style.css";

export interface UUIDGenProperties {
  onClickHome: () => void;
}

export function UUIDGen(prop: UUIDGenProperties) {
  const [uuidString, setUuidString] = useState(uuid());
  const onClickGenerateUuid = () => {
    setUuidString(uuid());
  };
  return (
    <div className="UUIDGen">
      <button onClick={prop.onClickHome}>Home</button>
      <div className="Interest">
        <button className="Button" onClick={onClickGenerateUuid}>
          Generate UUID
        </button>
        <text className="Text">{uuidString}</text>
      </div>
    </div>
  );
}
