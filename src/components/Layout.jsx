import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ title, children }) {
  return (
    <div className="app-wrapper">
      <Header title={title} />
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}
