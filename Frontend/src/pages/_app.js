import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return <>
  <ChakraProvider>
    <Navbar/>
    <br/>
    <Component {...pageProps} />
    <br/>
    <Footer/>
  </ChakraProvider>
  </>
}
