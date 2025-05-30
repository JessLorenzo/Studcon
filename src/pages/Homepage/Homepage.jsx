import "./Homepage.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}
