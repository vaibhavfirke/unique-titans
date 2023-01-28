import React from 'react'
import styles from "@/styles/Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_top}>
            <div>
                <p>Contact Us</p>
                <ul>
                    <li>educate@gmail.com</li>
                    <li>+91 7832678644</li>
                    <li>Chat With Us</li>
                </ul>
            </div>
            <div>
                <p>Services</p>
                <ul>
                    <li>The Best Thing Will Deliver</li>
                    <li>Providing A Study Path</li>
                    <li>Helping Student To Make Right Choice</li>
                    <li>Join Our Site At 10 Per Month</li>
                </ul>
            </div>
            <div>
                <p>Courses</p>
                <ul>
                    <li>UPSC</li>
                    <li>CAT</li>
                    <li>PROGRAMMER</li>
                    <li>SSC & RAILWAYS</li>
                </ul>
            </div>
            <div>
                <p>Roadmaps</p>
                <ul>
                    <li>MBBS</li>
                    <li>IAS</li>
                    <li>Web DEVELOPER</li>
                    <li>SSC & RAILWAYS</li>
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