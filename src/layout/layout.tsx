import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
