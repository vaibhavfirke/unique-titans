import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import styles from '../styles/Navbar.module.css'
import {Button,Text} from "@chakra-ui/react"
const Navbar = () => {
  const router=useRouter();
  const [login,setLogin]=useState(false);
  const [name,setName]=useState("")
  const [reload,setReload]=useState(false)
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setLogin(true);
      let user=JSON.parse(localStorage.getItem("user"))
       setName(user.name)
      
    }
  },[reload])
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src="favicon-32x32.png" alt="logo" />
        </div>
        <ul className={styles.list}>
            <li>
            <Link href={"/"}>Dashboard</Link>
            </li>
            <li>
            <Link href={"/"}>Services</Link>
            </li>
            <li>
            <Link href={"/"}>Courses</Link>
            </li>
            <li>
            <Link href={"/"}>Roadmaps</Link>
            </li>
            <li>
           {login?
           <Text fontSize={"18px"} color="white">{name}</Text>:<Link href={"/login"} ><Button cursor="pointer" color={"black"}>Login</Button></Link>
          
          }
           </li>
          <li>
          {login?<Button onClick={()=>{
            localStorage.clear();
            setReload(true)
          }} cursor="pointer">Logout</Button>:""}
      </li>
           
        </ul>
    </div>
  )
}

export default Navbar