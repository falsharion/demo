// import "../components.css"
const Device = ({ image, description, bgColor, fade, delay }) => {
  return (
    <div
      className={`device flex flex-col justify-center items-center gap-[2rem] p-[2rem] text-white font-[700] text-[1.3rem] text-center w-full md:w-[33.33%]`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div data-aos={`fade-${fade}`} data-aos-delay={delay}>
        <img src={image} alt="" className="mx-auto" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Device;


