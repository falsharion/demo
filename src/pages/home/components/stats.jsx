import Dash from "./dash";
const Stats = ({count, text}) => {
    return (
        <>
            <div className="grid place-items-center gap-[0.5rem]">
                <p className="text-[5rem] text-white font-[700]">{count}</p>
                <Dash/>
                <p className="text-white text-[1.5rem]">{text}</p>
            </div>
        </>
    );
}

export default Stats;