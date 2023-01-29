import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  const router=useRouter();
  const [login,setLogin]=useState(false);
  const [name,setName]=useState("")
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setLogin(true);
      setName(localStorage.getItem("name"))
    }
  },[])
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src="NeXT-Logo-Background-PNG-Image.png" alt="logo" />
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
            <a onClick={(login)?"":()=>{
                router.push("/login")
            }}>{(login)?name:"Login"}</a>
            </li>
            <li>
            <a onClick={(login)?()=>{
                localStorage.clear()
            }:()=>{
                router.push("/register")
            }}>{(login)?"Logout":"Register"}</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar