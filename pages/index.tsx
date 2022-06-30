import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../components/header";
import { UserCard } from "../components/user_card";
import getAllUsuarios, { getAllRecords, getTotalPerPage } from "../services/httpService";
import { reducers } from "../store/@types/reducers.d";

const Home: NextPage = () => {
    const theme = useSelector((state: reducers) => state.theme);

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [perPage, setPerPage] = useState(0);

    useEffect(() => {
        getAllUsuarios(page).then((allUsers) => {
            setUsers(allUsers);
        });
        getAllRecords().then((allRecords) => {
            setTotalRecords(allRecords);
        });
        getTotalPerPage().then((perPage) => {
            setPerPage(perPage);
        });
    }, []);

    function handlePagination(currentPage: number) {
        setPage(currentPage);
        getAllUsuarios(page).then((allUsers) => {
            setUsers(allUsers);
        });
    }

    return (
        <div>
            <Head>
                <title>Almaden</title>
                <meta name="description" content="Simple nextJS boilerplate to create something :)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="w-[1200px] ml-auto mr-auto pt-[50px] pb-[20px]">
                <h2 className="text-black dark:text-white font-bold pb-[10px]">Projeto Teste - Almaden</h2>

                <ol>
                    <li className="text-sm text-black dark:text-white">- Analise o componente abaixo.</li>

                    <li className="text-sm text-black dark:text-white">
                        - Alterando esta mesma pagina, faça uma listagem de usuários, consultando a&nbsp;
                        <a className="text-blue-500" href="https://reqres.in/" target="_blank" rel="noreferrer">
                            <u>API</u>.
                        </a>
                    </li>

                    <li className="text-sm text-black dark:text-white">- A API possui paginação, sendo assim, deverá ser criado um componente de paginação funcional.</li>

                    <li className="text-sm text-black dark:text-white">
                        - Adicione o botão -Desativar- no componente{" "}
                        <i>
                            {"<"}UserCard{"/>"}.
                        </i>
                    </li>

                    <li className="text-sm text-black dark:text-white">- Ao clicar no botão -Desativar- deverá aparecer um modal de confirmação, perguntando se o usuário realmente deseja fazer a desativação do respectivo usuário.</li>

                    <li className="text-sm text-black dark:text-white">- Quando um usuário estiver como desativado na listagem, este deve aparecer com uma coloração apagada</li>

                    <li className="text-sm text-black dark:text-white">- Todos os componentes criados devem se adaptar ao tema claro e escuro.</li>

                    <li className="text-sm text-black dark:text-white">- (Não obrigatório) Após criar os componentes de listagem de usuários e o componente de paginação, adicione os, no storybook presente no projeto.</li>
                </ol>

                <h2 className="text-black dark:text-white font-bold pt-[10px]">Tecnologias existentes no projeto:</h2>

                <ul>
                    <li className="text-black dark:text-white text-xs pt-[5px]">
                        - Typescript (
                        <a href="https://www.typescriptlang.org/" target="_blank" className="text-blue-500" rel="noreferrer">
                            https://www.typescriptlang.org/
                        </a>
                        )
                    </li>

                    <li className="text-black dark:text-white text-xs pt-[2px]">
                        - ReactJS (
                        <a href="https://pt-br.reactjs.org/" target="_blank" className="text-blue-500" rel="noreferrer">
                            https://pt-br.reactjs.org/
                        </a>
                        )
                    </li>

                    <li className="text-black dark:text-white text-xs pt-[2px]">
                        - NextJS (
                        <a href="https://nextjs.org/" target="_blank" className="text-blue-500" rel="noreferrer">
                            https://nextjs.org/
                        </a>
                        )
                    </li>

                    <li className="text-black dark:text-white text-xs pt-[2px]">
                        - TailWindCSS (
                        <a href="https://tailwindcss.com/" target="_blank" className="text-blue-500" rel="noreferrer">
                            https://tailwindcss.com/
                        </a>
                        )
                    </li>

                    <li className="text-black dark:text-white text-xs pt-[2px]">
                        - Redux (
                        <a href="https://redux.js.org/" target="_blank" className="text-blue-500" rel="noreferrer">
                            https://redux.js.org/
                        </a>
                        )
                    </li>

                    <li className="text-black dark:text-white text-xs pt-[2px]">
                        - Storybook (
                        <a href="https://storybook.js.org" target="_blank" className="text-blue-500" rel="noreferrer">
                            https://storybook.js.org/
                        </a>
                        )
                    </li>
                </ul>

                <p className="text-sm text-black dark:text-white mt-[20px]">⚠️ Redux já configurado no projeto, também, já há a existência do reducer para a alteração dos temas (dark/light), para mudar entre os temas basta clicar nos textos no lado direito do cabeçalho da página.</p>

                <p className="text-sm text-black dark:text-white mt-[5px]">⚠️ Não é permitido a utilização de qualquer biblioteca externa, todos os componentes devem ser feitos utilizando apenas as tecnologias já instaladas nesse repositório.</p>
            </div>
            <div className="w-[1200px] ml-auto mr-auto">
                {users.map(({ id, first_name, last_name, email, avatar }) => (
                    <UserCard key={id} username={`${first_name} ${last_name}`} userGroup="User" userEmail={email} userAvatarURL={avatar} />
                ))}
            </div>

            <div className="w-[1200px] ml-auto mr-auto mt-4 mb-4 flex justify-center">
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px">
                        {Array.from({ length: Math.ceil(totalRecords / perPage) }, (_, i) => (
                            <li key={i}>
                                <button onClick={() => handlePagination(i + 1)} className={`py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${page == i + 1 ? "bg-blue-200" : ""} `}>
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Home;
