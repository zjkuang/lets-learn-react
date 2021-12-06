import React, { useState } from "react";
import logo from "./logo.svg";
import { Playground } from "../playground";
import "./style.css";

export function Cover() {
  const [root, setRoot] = useState<"cover" | "playground">("cover");
  const onPlaygroundClicked = () => {
    setRoot("playground");
  };
  const onHomeClicked = () => {
    setRoot("cover");
  };
  return root === "cover" ? (
    <div className="Cover">
      <button onClick={onPlaygroundClicked}>Playground</button>
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
  ) : (
    <Playground onClickHome={onHomeClicked} />
  );
}
