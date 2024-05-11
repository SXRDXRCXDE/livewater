import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
    return (
        <div className="App">
            <div className={'w-full min-h-screen h-auto flex flex-col items-center justify-center gap-4 '}>
                <div className={'w-auto h-auto p-4 bg-[#85dbec] rounded-xl shadow-2xl text-4xl'}>
                    Live Water Information
                </div>

                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
