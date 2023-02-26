import { useSelector } from "react-redux";

const Balance = () => {
    const balance = useSelector((globalState) => {
        return globalState
    });

    return (
        <div>
            <h1>Balance : Rs. {balance}</h1>
        </div>
    );
};

export default Balance;