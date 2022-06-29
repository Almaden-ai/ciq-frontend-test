import Image from "next/image";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/actions/themeReducer.actions";


export function Header() {

    const dispath = useDispatch();

    return(
        <header
            className="w-full h-[50px] flex flex-row bg-[#50BFD7]"
        >

            <Image 
                width={120}
                height={50}

                src="/images/logos/almaden-vector-with-text.svg"
            />

            <div
                className="ml-auto mr-[50px] h-full flex flex-row justify-start items-center"
            >
                <p

                    className="cursor-pointer px-5px mr-[5px] text-white font-bold"
                    onClick={() => dispath(changeTheme("dark"))}
                >
                    Dark
                </p>

                <p
                    className="cursor-pointer px-[5px] text-white font-bold"
                    onClick={() => dispath(changeTheme("light"))}
                >
                    Light
                </p>
            </div>
        </header>
    )
}