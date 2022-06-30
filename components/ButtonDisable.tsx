export default function ButtonDisable({ onClick, children: text }: { onClick: () => void; children: string }) {
    function handleClick() {
        if (onClick) {
            onClick();
        }
    }
    return (
        <>
            <button onClick={handleClick} className="bg-blue-200 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button">
                {text}
            </button>
        </>
    );
}
