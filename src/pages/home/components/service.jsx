const Service = ({image, text}) => {
    return (
        <>
            <div className="grid place-items-center gap-[1.5rem] mt-[4rem]">
                <img src={image} alt="" />
                <p>{text}</p>
            </div>
        </>
    );
}

export default Service;