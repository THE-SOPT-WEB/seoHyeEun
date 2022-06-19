import Complete from "@/pages/Complete";
import Error404 from "@/pages/Error404";
import Main from "@/pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/complete" element={<Complete />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}
