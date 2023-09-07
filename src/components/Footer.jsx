import logo from "../assets/main-logo.svg";
import emailIcon from "../assets/icon-email.svg";
import callIcon from "../assets/icon-call.svg";
import addressIcon from "../assets/icon-address.svg";
// import { Link } from "react-router-dom";
import Contact from "./contacts.jsx";

const Footer = () => {

  return (
    <>
     <footer className=" sticky ">
  <div className="flex flex-col md:flex-row justify-around p-[2rem] bg-black text-white">
    {/* list container */}
    <div className="w-full md:w-[18rem] grid gap-[1.5rem] ">
      <img
        data-aos="fade-right"
        data-aos-delay="350"
        src={logo}
        alt=""
        className="h-[3.5rem]"
      />
      <p data-aos="fade-right" data-aos-delay="400">
        These days, in the highly competitive environments of commerce,
        Information Technology or IT no longer plays a secondary role. In
        fact, IT has become a primary component in any business operation.
        From human resources, marketing, production and quality assurance,
        the power of IT cannot be denied. With this, you need to partner
        with an IT services and consultancy firm that can address your
        company
      </p>
    </div>

    <div className="w-full md:w-auto mt-4 md:mt-0">
      <p
        data-aos="fade-right"
        data-aos-delay="400"
        className="border-b-[0.2rem] border-dotted border-lightBlue text-[1.3rem] font-[700] mb-[2rem] md:mb-0"
      >
        Quick links
      </p>

      <ul className="flex flex-col gap-[1.5rem]">
        <li data-aos="fade-right" data-aos-delay="450">
          <a href="/">Home</a>
        </li>
        <li data-aos="fade-right" data-aos-delay="450">
          <a href="/products">Products</a>
        </li>
        <li data-aos="fade-right" data-aos-delay="450">
          <a href="/careers">Careers</a>
        </li>
        <li data-aos="fade-right" data-aos-delay="450">
          <a href="contact">Contact</a>
        </li>
        <li data-aos="fade-right" data-aos-delay="450">
          <a href="/shop">shop</a>
        </li>
      </ul>
    </div>

    <div className="w-full md:w-auto mt-4 md:mt-0">
      <p
        data-aos="fade-left"
        data-aos-delay="400"
        className="border-b-[0.2rem] border-dotted border-lightBlue w-fit mb-[2rem] text-[1.3rem] font-[700]"
      >
        Contact Us
      </p>

      <ul className="grid gap-[1.5rem]">
        <li data-aos="fade-left" data-aos-delay="450">
          <Contact
            icon={emailIcon}
            title={"Email Us"}
            address={"sales.adsofun@gmail.com"}
          />
        </li>
        <li data-aos="fade-left" data-aos-delay="450">
          <Contact icon={callIcon} title={"Call Us"} address={"07033126462"} />
        </li>
        <li data-aos="fade-left" data-aos-delay="450">
          <Contact
            icon={addressIcon}
            title={"Address"}
            address={"29 Kola-Amodu Crescent, Magodo, Lagos, Nigeria"}
          />
        </li>
      </ul>
    </div>
  </div>

  <span className="flex flex-col md:flex-row md:justify-between py-[1rem] px-[6rem] items-center">
    <img src={logo} alt="" className="mb-4 md:mb-0" />

    <ul className="flex gap-[2rem] justify-evenly text-[0.8rem]">
      <li>Privacy Policy</li>
      <li>Terms and Conditions</li>
      <li>
        <a href="contact">Contact us</a>
      </li>
      <li>
        <a href="/careers">Careers</a>
      </li>
    </ul>
  </span>
</footer>

    </>
  );
};

export default Footer;
