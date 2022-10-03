import Image from "next/image";
import Link from "next/link";
import logo from "/public/coffeework2.jpg";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.topPart}>
      <nav className={styles.topPartNav}>
        <Link href="/" >
            <div className={styles.topPartBrand}>
          <Image
            src={logo}
            alt="coffeework"
            height={60}
            width={60}
          />
          <div className={styles.topHeader}>The Coffee Nomad</div>
          </div>
        </Link>

        <div className={styles.topLinks}>
          <div>
            <Link href="/maps"> Maps </Link>
          </div>
          <div>
            <Link href="/contact-us"> Contact Us </Link>
          </div>
          <div>
            <Link href="/about-us"> About Us </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
