import React, { ReactNode } from 'react';
import Nav from "../components/Nav";
import Provider from "@components/Provider";
import "@styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discaver & Shear AI Prompts",
};


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main role="main" className="app">
            <Nav />
            {children}
          </main>
      </body>
    </html>
  );
}
