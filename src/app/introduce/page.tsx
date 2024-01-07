import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { introduceLinks } from "@/storage/linkData/linkData";

export default function Introduce() {
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <Nav links={introduceLinks} />
      </nav>
      <hr />
      <main>
        <h1>소개 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
