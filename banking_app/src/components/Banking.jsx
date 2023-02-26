import { Input, Button } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";

const deposit = (amount) => {
    return { 
        type : "DEPOSIT",
        payload : {
            amount,
        }
    };
};

/*
deposite (100);

{
    type : "DEPOSIT",
    payload : {
        amount : 100
    }
}
*/

const withdraw = (amount) => {
    return { 
        type : "WITHDRAW",
        payload : {
            amount,
        }
    };
};

const collectInterest = () => {
    return {
        type : "COLLECT_INTEREST",
    };
};

const deleteAccount = () => {
    return {
        type : "DELETE_ACCOUNT",
    };
};

const Banking = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleDeposit = () => {
        dispatch(deposit(Number(value)));
        setValue("");
    };

    const handleWithdraw = () => {
        dispatch(withdraw(Number(value)));
        setValue("");
    };

    const handleInterest = () => {
        dispatch(collectInterest());
        setValue("");
    };

    const handleDelete = () => {
        dispatch(deleteAccount());
        setValue("");
    };

    return (
        <div>
            <div>
                <Input 
                    value={value} onChange={(event) => setValue(event.target.value)} 
                    style={{width : '50%', marginBottom : "10px"}} type="text"
                />
            </div>
            <Button onClick={handleDeposit} style={{marginRight : "10px"}}>Deposit</Button>
            <Button onClick={handleWithdraw} style={{marginRight : "10px"}}>Withdraw</Button>
            <Button onClick={handleInterest} style={{marginRight : "10px"}}>Collect Intrest</Button>
            <Button onClick={handleDelete} >Delete Account</Button>
        </div>
    );
};

export default Banking;