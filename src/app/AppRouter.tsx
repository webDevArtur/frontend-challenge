import {Route, Routes} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import Layout from '../components/Layout/Layout.tsx';
import AllCatsPage from "../pages/AllCatsPage/AllCatsPage.tsx";
import LovelyCatsPage from "../pages/LovelyCatsPage/LovelyCatsPage.tsx";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={
                    <Layout>
                        <Outlet/>
                    </Layout>
            }>
                <Route index element={<AllCatsPage />} />

                <Route path="/allcats" element={<AllCatsPage/>} />
                <Route path="/lovelycats" element={<LovelyCatsPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;