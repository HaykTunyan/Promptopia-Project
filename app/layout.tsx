import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discaver & Shear AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main role="main" className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
