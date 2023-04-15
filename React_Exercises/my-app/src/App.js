
import { ClickCounter } from "./ClickCounter";
import { GithubUserList } from "./GithubUserList";
import NotFound from "./NotFound";
import ShowGithubUser from "./ShowGithubUser";
import { Welcome } from "./Welcome";
import { Route, Routes, Link } from "react-router-dom";

export function App () {


    return (
        <div>
            <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/counter">Counter</Link></li>
                    <li><Link to="/users/OzkanYilmaz384">OzkanYilmaz384</Link></li>
                    <li><Link to="/users">Users</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Welcome name="John" />} />

                <Route path="/counter" element={<ClickCounter />} />

                <Route path="/users/:username" element={<ShowGithubUser />} />

                <Route path="/users" element={<GithubUserList />} />

                <Route path="*" element={<NotFound />} />
                
            </Routes>
        </div>
            
    )
}




