import Footer from "../components/footer";
import GridGallery from "../components/grid-gallery/grid-gallery";
import GromAndBride from "../components/personal-info";
import Head from "next/head";
import IntroSection from "../components/intro-section";
import Location from "../components/location";
import dynamic from "next/dynamic";

// const Countdown = dynamic(() => import("../components/countdown"), {
//   ssr: false,
// });
const Wishes = dynamic(() => import("../components/wishes"), {
  ssr: false,
});
const WishesSwiper = dynamic(() => import("../components/wishes-swiper"), {
  ssr: false,
});
const AudioMedia = dynamic(() => import("../components/audio-media"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Phong-Minh&apos;s Wedding</title>
        <meta name="description" content="Stories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: "white" }}>
        <AudioMedia />
        <IntroSection />
        <GromAndBride />
        {/* <Countdown /> */}
        <Location />
        <GridGallery />
        <Wishes />
        <WishesSwiper />
        <Footer />
      </main>
    </>
  );
}
