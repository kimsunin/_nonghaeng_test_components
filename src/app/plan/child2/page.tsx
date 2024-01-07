import Header from "@/components/Header";
import Nav from "@/components/Navigator";
import Footer from "@/components/Footer";
import { planLinks } from "@/storage/linkData/linkData";

export default function Plan() {
  return (
    <>
      <header>
        <Header />
      </header>
      <hr />
      <nav>
        <Nav links={planLinks} />
      </nav>
      <hr />
      <main>
        <h1>기획 자식2 컴포넌트</h1>
      </main>
      <hr />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
