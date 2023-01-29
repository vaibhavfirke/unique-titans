import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import ChatModal from "../Components/modal"
export default function App({ Component, pageProps }) {
  return <>
  <ChakraProvider>
    <Navbar/>
    <br/>
    <ChatModal/>
    <Component {...pageProps} />
    <br/>
    <Footer/>
  </ChakraProvider>
  </>
}
