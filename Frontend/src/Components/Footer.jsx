import React from 'react'
import styles from "@/styles/Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_top}>
            <div>
                <p>Contact Us</p>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>
            <div>
                <p>Contact Us</p>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>
            <div>
                <p>Contact Us</p>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>
            <div>
                <p>Contact Us</p>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>
        </div>
        <div className={styles.footer_bottom}>
                <div>
                    Follow Us On:
                </div>
               <div>
               <hr />
               </div>
                <div>
                    <img src="youtube.png" alt="youtube" />
                    <img src="instagram.png" alt="instagram" />
                    <img src="facebook.png" alt="facebook" />
                    <img src="twitter.png" alt="twitter" />
                </div>
        </div>
    </div>
  )
}

export default Footer