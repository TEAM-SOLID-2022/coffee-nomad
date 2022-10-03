import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/Maps.module.css";
import defaultImage from "../public/coffee_table.jpeg";
import Header from "../components/header";
import Link from "next/link";
import Cat from "../components/cat";

export default function Maps() {
  return (
    <>
      <Header pageTitle="Coffee Shop Maps" />

      <div className={styles.container}>
        <Navbar></Navbar>

        <main>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Coffee Shop of the Day</h1>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "500px",
                height: "auto",
              }}
            >
              <Image src={defaultImage} alt="coffee" />
            </div>
            <div style={{ padding: "30px", width: "500px" }}>
              <h2>Coffee Shop Name</h2>
              <p>
                Irure aliqua Lorem labore nisi enim ad sit nostrud sunt eiusmod
                qui excepteur quis in. Consectetur consectetur labore ut veniam
                anim incididunt voluptate enim. Ex magna et non do.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15785.832803839416!2d124.60982558784909!3d8.454742900269443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff8d55cb7c9173%3A0x40b605eeea44b35d!2sGrounded%20Cafe!5e0!3m2!1sen!2sph!4v1663306881687!5m2!1sen!2sph"
                style={{
                  width: "600",
                  height: "450",
                  style: "border:0;",
                  allowfullscreen: "",
                  loading: "lazy",
                  referrerpolicy: "no-referrer-when-downgrade",
                }}
              ></iframe>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "50px",
            }}
          ></div>

          <div>
            <h2 style={{ textAlign: "center", fontSize: "30px" }}>
              Coffee Shops
            </h2>
            <div style={{ textAlign: "center", fontSize: "30px" }}>
              <Link href="/catalogue/">Catalogue</Link>
            </div>
            <div style={{ textAlign: "center" }}>
              <Cat limit={5}></Cat>
            </div>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}
