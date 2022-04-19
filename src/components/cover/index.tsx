import React, { useState } from "react";
import logo from "./logo.svg";
import { Hooks } from "../hooks";
import { UUIDGen } from "../uuid-gen";
import "./style.css";

export function Cover() {
  const [root, setRoot] = useState<"cover" | "hooks" | "uuid-gen">("cover");
  const onHomeClicked = () => {
    setRoot("cover");
  };
  const onHooksClicked = () => {
    setRoot("hooks");
  };
  const onUUIDGenClicked = () => {
    setRoot("uuid-gen");
  };
  if (root === "hooks") {
    return <Hooks onClickHome={onHomeClicked} />;
  } else if (root === "uuid-gen") {
    return <UUIDGen onClickHome={onHomeClicked} />;
  } else if (root === "cover") {
    return (
      <div className="Cover">
        <div className="Panel">
          <button onClick={onHooksClicked}>Hooks</button>
          <button onClick={onUUIDGenClicked}>uuid-gen</button>
        </div>
        <header className="Header">
          <img src={logo} className="Logo" alt="logo" />
          <a
            className="Link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
