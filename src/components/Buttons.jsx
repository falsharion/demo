const Buttons = ({bgColor, text, textColor}) => {
    return (
      <>
        <button className={`bg-${bgColor} px-[2rem] py-[0.5rem] rounded-full font-[700] cursor-pointer text-${textColor}`}>
          {text}
        </button>
      </>
    );
}

export default Buttons;