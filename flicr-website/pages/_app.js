import '../styles/globals.css';
import Layout from "../components/Layout";
import CompLoader from "../components/CompLoader/CompLoader";
import * as React from "react";
function MyApp({Component, pageProps}) {
    const [isLoading, setIsLoading] = React.useState(true);
 
    const toggleContent=()=>{
       
        setIsLoading(!isLoading);
      }
    return<>
  <CompLoader callBackFn={toggleContent}/> 
 <Layout>
 <Component {...pageProps}/>
</Layout> 

    
    </>
}

export default MyApp
