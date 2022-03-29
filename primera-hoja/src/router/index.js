import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from '../layouts/Main';


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
               <Route element={<Main />}>
                   <Route path="/Ofertas" element={<Ofertas />} />
                   <Route path="/Full Days" element={<Full Days />} />
                   <Route path="/Alojamiento" element={<Alojamiento />} />
               </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;