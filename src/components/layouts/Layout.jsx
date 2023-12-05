import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <section>
        <Header />
      <section className="max-w-[1444px] mx-auto min-h-screen flex flex-col">
        {children}
        <Footer />
      </section>
    </section>
  );
};

export default Layout;
