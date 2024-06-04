import Navbar from "@components/Navbar";
import "@styles/globals.css";

import { Children } from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = (props: IRootProps) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Navbar />
          {props.children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
