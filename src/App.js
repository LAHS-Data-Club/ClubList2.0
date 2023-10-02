import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <div className="w-full h-full min-h-[100vh] bg-gradient-to-br from-sky-100 to-blue-300 m-0 p-0">
            <Outlet></Outlet>
        </div>
    );
}
