import Blog from "@/components/Blog";
import Header from "@/components/Header";
import Overview from "@/components/Overview";

export default function Home(params) {
  return (
    <>
      <Header />
      <Overview />
      <Blog />
    </>
  );
}
