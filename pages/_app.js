import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Stories</title>
        <meta
          name="description"
          content="Welcome to Stories, your go-to platform for immersive and engaging content sourced from the vast realms of Reddit. With Stories, we curate a diverse collection of captivating narratives, insightful discussions, awe-inspiring visuals, and thought-provoking articles, all delivered to you in one convenient place.
Immerse yourself in a world of stories that span across various topics, from fascinating facts to the wonders of science, the mysteries of space, the pulse of politics, and the endless realms of technology. Discover firsthand accounts, breathtaking imagery, and enlightening perspectives shared by a vibrant community of contributors.
With our seamless integration of the Reddit API, Stories ensures a seamless browsing experience, delivering the latest and most relevant content from your chosen categories. Explore the vast landscape of knowledge, entertainment, and inspiration, all at your fingertips.
Whether you're seeking a momentary escape, a spark of creativity, or a chance to broaden your horizons, Stories has you covered. Prepare to embark on a journey filled with intriguing narratives, eye-opening discoveries, and moments that will leave you inspired and entertained.
Join us on Stories and unlock a world of endless possibilities. Ignite your curiosity, expand your mind, and embark on an unforgettable storytelling adventure. Get ready to immerse yourself in Stories - where knowledge meets inspiration and captivating content awaits!
"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/9451/9451236.png"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
        integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
        crossOrigin="anonymous"
        async
      />
      <Component {...pageProps} />
    </>
  );
}
