import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import blogImage from "../public/coffee_table.jpeg";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header pageTitle="The Coffee Nomad Home" />

      <div className={styles.container}>
        <Navbar></Navbar>

        <div className={styles.imageBlog}>
          <Image src={blogImage} alt="Coffee-Table" />
        </div>

        <p className={styles.description}>Join me in my coffee journey.</p>

        <div
          className={styles.mainRight}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "50px",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "100%", height: "auto" }}>
            <Image
              className={styles.imageBlog}
              src={blogImage}
              alt="Coffee Table"
            />
          </div>
          <div style={{ justifyContent: "wrap", paddingLeft: "50px" }}>
            <div className={styles.boxHead}>What I Do Here</div>
            <div className={styles.boxDesc} style={{ marginRight: "50px" }}>
              <div>I look for coffeshops.</div>
              <br></br>Cagayan de Oro City has recently become the coffee shop
              capital of Northern Mindanao. This has resulted in a rise of
              individuals who enjoy going to coffee shops to work while enjoying
              a nice cup of joe. As a coffee lover myself, I've taken up the
              task of exploring coffee shops within Cagayan de Oro to rate them
              based on three things:<br></br>
              <li value="1">Price</li>
              <li>Coffee</li>
              <li>Workability</li>
            </div>
          </div>
        </div>

        <div
          className={styles.mainRight}
          style={{ display: "flex", justifyContent: "center", padding: "50px" }}
        >
          <div style={{ paddingLeft: "50px" }}>
            <div className={styles.boxHead}>What I Do Here</div>
            <div className={styles.boxDesc} style={{ marginRight: "50px" }}>
              <div>I look for coffeshops.</div>
              <br></br>Cagayan de Oro City has recently become the coffee shop
              capital of Northern Mindanao. This has resulted in a rise of
              individuals who enjoy going to coffee shops to work while enjoying
              a nice cup of joe. As a coffee lover myself, I've taken up the
              task of exploring coffee shops within Cagayan de Oro to rate them
              based on three things:<br></br>
              <li value="1">Price</li>
              <li>Coffee</li>
              <li>Workability</li>
            </div>
          </div>
          <div style={{ maxWidth: "100%", height: "auto" }}>
            <Image
              className={styles.imageBlog}
              src={blogImage}
              alt="Coffee Table"
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "100px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div className={styles.boxHead}>Where I've Been</div>
            <div>Insert Maps Here </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div className={styles.boxHead}>Join the Community</div>
            <div>Create an account to leave a review!</div>
          </div>
        </div>

        <main className={styles.main}>
          <div className={styles.grid}>
            <Link href="/maps">
              <div className={styles.card}>
                <h2>Maps &rarr;</h2>
                <p>Click here to go to and see the maps.</p>
              </div>
            </Link>

            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <Footer></Footer>
        {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      </div>
    </>
  );
}
