import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <section>
      <section className="max-w-[1444px] mx-auto min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </section>
    </section>
  );
};

export default Layout;
