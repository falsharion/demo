import AOS from 'aos'
import Header from "../../components/Header.jsx";
import Stats from "./components/stats.jsx";
import Dash from "./components/dash.jsx";
import Device from "./components/device.jsx";
import Service from "./components/service.jsx";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import workMan from "../../assets/workMan.png";
import workWoman from "../../assets/workWoman.png";
import printer from "../../assets/icon-printer.svg";
import scanner from "../../assets/icon-scanner.svg";
import arrow from "../../assets/icon-arrow.svg";
import rfid from "../../assets/icon-rfid.svg";
import Buttons from "../../components/Buttons.jsx";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './components.css'
const Home = () => {

  const [count1, setCount1] = useState(62);
  const [count2, setCount2] = useState(40);
  const [count3, setCount3] = useState(71);

  useEffect(() => { 

    const interval1 = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
    }, 3000); 
    const interval2 = setInterval(() => {
      setCount2((prevCount) => prevCount + 1);
    }, 4000); 
    const interval3 = setInterval(() => {
      setCount3((prevCount) => prevCount + 1);
    }, 5000); 
  
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);
  
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>
      <Header
  image={"black"}
  heading={
    <p className="text-3xl md:text-4xl lg:text-5xl text-center leading-[3rem] md:leading-[8rem]">
      Welcome To
      <span className="font-[700] text-4xl md:text-6xl lg:text-7xl block">ADSOFUN</span>
    </p>
  }
  description={
    <p className="text-[1.2rem] md:text-[1.3rem] lg:w-[50rem] text-lightGray my-[3.5rem] text-center md:my-[1.7rem] lg:my-[3.5rem]">
      We are providing IT services that boost the performance of both
      human capital and operational systems; ultimately helping promote
      sustainable economies for the global community that we are proud to
      serve.
    </p>
  }
/>

<section className="text-white bg-[#97CDDE] p-[2.5rem]">
  <h2
    data-aos="fade-right"
    data-aos-delay="150"
    className="font-[700] text-xl md:text-3xl lg:text-4xl text-center md:text-left"
  >
    Boost your Productivity
  </h2>

  <div
    data-aos="fade-up"
    data-aos-delay="150"
    className="font-[700] text-sm md:text-lg ml-0 md:ml-[3.6rem] mt-2 md:mt-[1rem] text-center md:text-left"
  >
    <p>
      Adsofun Concepts LLC is a provider of IT consultancy, network
      installation, maintenance and systems/application development.
      <br />
      Our complete range of IT solutions can be tailored to your specific
      business requirements
      <br />
      No matter the scope of your need, whether you serve your local
      community or reach across shores to serve an international market
    </p>

    <h3
      data-aos="fade-up"
      data-aos-delay="150"
      className="text-lighterGray text-lg md:text-2xl mt-2 md:mt-[2rem] text-center md:text-left"
    >
      Adsofun Concepts LLC will help develop the ideal IT solutions.
    </h3>
  </div>
</section>

<section className="bg-darkGray grid grid-cols-1 md:grid-cols-3 py-4 md:py-8">
  <span
    data-aos="fade-right"
    data-aos-delay="150"
    className="block md:inline-block text-center md:text-left md:pr-4"
  >
    <Stats count={`${count1}+`} text={"Satisfied Customers "} />
  </span>
  <span
    data-aos="fade-up"
    data-aos-delay="200"
    className="block md:inline-block text-center md:text-left md:pr-4"
  >
    <Stats count={`${count2}+`} text={"Range Of Services "} />
  </span>
  <span
    data-aos="fade-left"
    data-aos-delay="250"
    className="block md:inline-block text-center md:text-left"
  >
    <Stats count={`${count3}+`} text={"Products Offered"} />
  </span>
</section>

<section className="grid place-items-center text-white bg-midBlue p-6 md:p-[3rem] pt-6 md:pt-[3rem]">
        <h2 data-aos="fade-up" data-aos-delay='150' className="text-[3rem]">Services</h2>
        <span data-aos="fade-up" data-aos-delay='150'>
        <Dash />
        </span>
        <p data-aos="fade-up" data-aos-delay='150' className="text-[1.2rem] mt-[1rem]">
          Transform your business with our expert services in....
        </p>
        <div className="flex w-[100%] justify-around">
          <span data-aos="fade-right" data-aos-delay='150'>
          <Service text={"Managed Print Services"} image={service1} />
          </span>
          <span data-aos="fade-up" data-aos-delay='200'>
          <Service text={"IT Procurements"} image={service2} />
          </span>
          <span data-aos="fade-up" data-aos-delay='250'>
          <Service text={"Safety Trainings and Scoping"} image={service3} />
          </span>
          <span data-aos="fade-left" data-aos-delay='300'> 
          <Service text={"Industrial Services"} image={service4} />
           </span>
        </div>
      </section>

      <section className="flex flex-col md:flex-row">
  <Device
    image={printer}
    description={
      "A precise and versatile tool designed to produce high-quality, machine-readable barcodes for efficient inventory management and tracking."
    }
    bgColor={"#5d71f0"}
    fade={"right"}
    delay={'150'}
    className="w-full md:w-[33.33%] mb-4 md:mb-0"
  />
  <Device
    image={scanner}
    description={
      "A fast and accurate device for reading barcodes, simplifying data entry and streamlining inventory processes for optimal business efficiency."
    }
    bgColor={"lightBlue"}
    fade={"up"}
    delay={'200'}
    className="w-full md:w-[33.33%] mb-4 md:mb-0"
  />
  <Device
    image={rfid}
    description={
      "A wireless technology for automated identification and tracking of items using radio waves."
    }
    bgColor={"#5d71f0"}
    fade={"left"}
    delay={'300'}
    className="w-full md:w-[33.33%]"
  />
</section>



<section className="flex flex-col md:flex-row">
  <img
    src={workMan}
    alt="image of a man scanning items with a scanner"
    className="w-full h-[50vh] md:w-[40vw] md:h-auto"
  />

  <div className="bg-[#59ADD1] text-[white] p-[2rem] flex flex-col justify-center md:w-[60%]">
    <h3
      data-aos="fade-left"
      data-aos-delay="150"
      className="text-[2.5rem] md:text-[3rem] mb-[1rem]"
    >
      ADSOFUN...
    </h3>

    <p
      data-aos="fade-left"
      data-aos-delay="200"
      className="text-[1.2rem] md:text-[1.5rem] mb-[1.5rem]"
    >
      Comprehensive IT solutions designed to revolutionize warehousing
      operations, providing seamless inventory management, logistics
      optimization, and data-driven decision-making. From RFID tagging to
      AI-driven analytics, our solutions digitize and streamline processes,
      reducing errors and boosting efficiency. By integrating advanced
      technologies into your warehouse infrastructure, we enable real-time
      visibility, predictive insights, and a more efficient, effective
      warehousing system.
    </p>
  </div>
</section>

<section className="flex flex-col-reverse md:flex-row">
  <div className="py-[3rem] pl-[2rem] pr-[2rem] flex flex-col justify-center md:w-[60%]">
    <h3
      data-aos="fade-right"
      data-aos-delay="150"
      className="text-[2rem] md:text-[2.5rem] font-[700] mb-[0.5rem]"
    >
      Mission Statement
    </h3>

    <Dash />

    <p
      data-aos="fade-right"
      data-aos-delay="150"
      className="text-[1rem] md:text-[1.5rem] mt-[1rem] leading-[2rem]"
    >
      We have a mission to share the power of our intelligence to professionals,
      private companies and government sectors locally and internationally. We
      provide IT services that will boost the performance of human capital and
      operational systems, ultimately helping promote sustainable economies for
      the global community that we are proud to serve.
    </p>
  </div>

  <img
    src={workWoman}
    alt="image of a man scanning items with a scanner"
    className="w-full h-[50vh] md:w-[40vw] md:h-auto"
  />
</section>



      <section  className="bg-lightBlue text-center p-[5rem]">
        <p data-aos="fade-up" data-aos-delay='150' className=" text-[2.5rem] mb-[2rem] font-[00]">
          Join us on email for
          <span className="text-[#136D89] block">more trending products</span>
        </p>
          <span data-aos="fade-up" data-aos-delay='150'>
          <Buttons  bgColor={"black"} textColor={"white"} text={
            <Link to={'/contact'}>
              Join now
            </Link>
          } />

          </span>
        
      </section>
    </>
  );
};

export default Home;