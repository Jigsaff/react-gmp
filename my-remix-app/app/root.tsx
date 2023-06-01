import { Links, LiveReload, Outlet } from '@remix-run/react';

import type { LinksFunction } from "@remix-run/node";
import styles from "./styles/app.css"

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: styles },
// ];
export function links() {
    return [{ rel: "stylesheet", href: styles }]
}


export default function App() {
  return (
      <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Movie App</title>
        <Links/>
      </head>
      <body>
      <Outlet/>
      <LiveReload/>
      </body>
      </html>
  );
}
