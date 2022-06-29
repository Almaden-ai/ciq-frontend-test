import { userCardProps } from "./@types/_props";

export function UserCard({ username, userEmail, userAvatarURL, ...props}: userCardProps) {


    function getUserNameAbbreviation() {

        if (!username) return;
        if (userAvatarURL) return "";

        let aux = "";

        const splittedName = username.split(" ");

        if (splittedName[0]) aux += splittedName[0][0].toUpperCase();
        if (splittedName[1]) aux += splittedName[1][0].toUpperCase();

        return aux;
    }

    return(
        <div
        
            className="w-full h-[100px] bg-white dark:bg-[#333333] border border-[#bababa99] flex flex-row justify-start items-center rounded-md px-4 transition-all"
        >

                <div
                    style={{
                        backgroundImage: `url('${userAvatarURL}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    className="w-[75px] h-[75px] bg-[#50BFD7] rounded-full flex justify-center items-center"
                >
                    <p
                        className="text-lg text-white font-bold"
                    >
                        {getUserNameAbbreviation()}
                    </p>
                </div>

                <div
                    className="px-4"
                >

                    <div
                        className="flex justify-start items-center"
                    >

                        <p
                            className="text-[#868686] dark:text-[#FAFAFA] text-lg font-bold"
                        >
                            {username}
                        </p>
                        
                    </div>
                    
                    <p
                        className="text-[#4A4A4A] dark:text-[#C8C8C8] text-sm"
                    >
                        {userEmail}
                    </p>
                </div>

                <div
                    className="ml-auto flex flex-row"
                >

                    {/* Talvez aqui  */}
                </div>
        </div>
    )
}