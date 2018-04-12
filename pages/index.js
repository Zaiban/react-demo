/*

  This file (and other files under /pages folder) is specific to Next.js-framework
  Basically, it tells the root of the application to render an <App /> component

  Next.js is framework around React.js. Next makes it easy to start building your React app,
  as it hides most of the complicated stuff around a simple API.

  ---

  The /pages folder is like a routing folder in Next.js. Routes map like the following:

  pages/index.js -> app.example.com
  pages/contacts.js -> app.example.com/contacts
  pages/about.js -> app.example.com/about
  pages/hello/world.js -> app.example.com/hello/world

  ---

  A good approach is to define the "routes" of the application inside the "/pages" folder,
  and the "source code" under a different folder, i.e. "/src".
  The files under /pages only contain imports/exports from /src.

*/

import App from '../src/App';

export default () => <App />;
