// components/layout.js
import Head from 'next/head'
import SiteHeader from './SiteHeader/SiteHeader';
import SiteFooter from './SiteFooter/SiteFooter';
import SiteMain from './SiteMain/SiteMain';
 
export default function Layout({ children }) {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<title>Ty Titlke!!!</title>
      </Head>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}