import Link from "next/link"
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src="favicon-32x32.png" alt="logo" />
        </div>
        <ul className={styles.list}>
            <li>
            <Link href={"/"}>Home</Link>
            </li>
            <li>
            <Link href={"/"}>Home</Link>
            </li>
            <li>
            <Link href={"/"}>Home</Link>
            </li>
            <li>
            <Link href={"/"}>Home</Link>
            </li>
            <li>
            <Link href={"/"}>Home</Link>
            </li>
            <li>
            <Link href={"/"}>Home</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar