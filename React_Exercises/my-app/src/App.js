
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";
import { Route, Routes } from "react-router-dom";

export function App () {


    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome name="John" />} />

                <Route path="/counter" element={<ClickCounter />} />
            </Routes>
        </div>
            
    )
}




