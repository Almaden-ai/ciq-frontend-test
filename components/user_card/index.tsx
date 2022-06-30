import { useState } from "react";
import ButtonDisable from "../ButtonDisable";
import { userCardProps } from "./@types/_props";

export function UserCard({ username, userEmail, userAvatarURL }: userCardProps) {
    function getUserNameAbbreviation() {
        if (!username) return;
        if (userAvatarURL) return "";

        let aux = "";

        const splittedName = username.split(" ");

        if (splittedName[0]) aux += splittedName[0][0].toUpperCase();
        if (splittedName[1]) aux += splittedName[1][0].toUpperCase();

        return aux;
    }

    const [showModal, setShowModal] = useState(false);
    const [ativo, setAtivo] = useState(false);

    function handleDisable() {
        setShowModal(false);
        setAtivo(!ativo);
    }

    const opacidade = ativo ? "opacity-30" : "opacity-100";

    return (
        <div className="w-full h-[100px] bg-white dark:bg-[#333333] border border-[#bababa99] flex flex-row justify-start items-center rounded-md px-4 transition-all">
            <span className={`flex flex-row justify-start items-center ${opacidade}`}>
                <div
                    style={{
                        backgroundImage: `url('${userAvatarURL}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="w-[75px] h-[75px] bg-[#50BFD7] rounded-full flex justify-center items-center"
                >
                    <p className="text-lg text-white font-bold">{getUserNameAbbreviation()}</p>
                </div>

                <div className="px-4">
                    <div className="flex justify-start items-center">
                        <p className="text-[#868686] dark:text-[#FAFAFA] text-lg font-bold">{username}</p>
                    </div>

                    <p className="text-[#4A4A4A] dark:text-[#C8C8C8] text-sm">{userEmail}</p>
                </div>
            </span>

            <div className="ml-auto flex flex-row">
                <ButtonDisable onClick={() => setShowModal(true)}>{ativo ? "Ativar" : "Desativar"}</ButtonDisable>
                {showModal ? (
                    <>
                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h3 className="text-2xl font=semibold">{ativo ? "Você realmente deseja ativar este usuário?" : "Você realmente deseja desativar este usuário?"}</h3>
                                        <button className="bg-transparent border-0 text-black" onClick={() => setShowModal(false)}>
                                            <span className="text-black opacity-7 h-8 w-8 mx-4 my-1 text-xl block bg-gray-400 rounded-full">x</span>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(false)}>
                                            Cancelar
                                        </button>
                                        <button className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" onClick={handleDisable}>
                                            Sim
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
}
