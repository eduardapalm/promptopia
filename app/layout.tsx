import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
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
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <div className="app">
            <Navbar />
            {props.children}
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
