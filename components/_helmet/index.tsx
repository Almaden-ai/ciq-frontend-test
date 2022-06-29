import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { reducers } from '../../store/@types/reducers';

export function HelmetComponent() {

    const theme = useSelector((state: reducers) => state.theme);

    return(

        <Helmet>

            <html className={theme}></html>
            <body className="bg-[#f7f6f7] dark:bg-[#333333]"></body>

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        </Helmet>
    )
}