import Button from "../Button/Button";

function Image() {
    return (
        <>
            <img alt="random" src="https://picsum.photos/200/300"
            height="100"
            width={200}
            />
            <Button />
        </>
    );
}

export {Image};