export default function Clicker({ message, buttonText }) {
    function run() {
        alert(message);
    }
    return (
        <>
            <button onDoubleClick={run}>{buttonText}</button>
        </>
    )
}