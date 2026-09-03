import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import { store } from "~/Redux/store";
import { MyAppProps } from "~/layout/types";
import { Layouts } from "~/layout/Layouts";
function App({ Component, pageProps }: MyAppProps, { session }: any) {
 const Layout = Layouts[Component.Layout] ?? ((page: any) => page);
 return (
  <Provider store={store}>
   {/* <SessionProvider session={session}> */}
   <Layout>
    <Component {...pageProps} />
   </Layout>
   {/* // </Provider> */}
   {/* </SessionProvider > */}
  </Provider>
 );
}
export default App;
