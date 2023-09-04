const Contact = ({icon, title, address}) => {
    return (
      <div className="flex gap-[1rem] items-center">
        <img src={icon} alt="" className=" w-[4rem]" />

        <div>
          <p>{title}</p>
          <p className=" text-[#3A6DA1] font-[700]">{address}</p>
        </div>
      </div>
    );
}

export default Contact;