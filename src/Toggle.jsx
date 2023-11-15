import { useState } from 'react';

export default function Toggle() {
    const [flag, setFlag] = useState(0);

    const toggleFlag = () => {
        setFlag((prevFlag) => (prevFlag + 1) % 3);
    };

    let emoji;

    if (flag === 0) {
        emoji = "😆";
    } else if (flag === 1) {
        emoji = "😭";
    } else {
        emoji = "😊";
    }

    return (
        <>
            <h1 onClick={toggleFlag} style={{ fontSize: 80 }}>{emoji}</h1>
        </>
    );
}
