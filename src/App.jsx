import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/NavBar"
import MainPage from "./pages/mainPage"
import HistoryPage from "./pages/HistoryPage"

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="history" element={<HistoryPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default App
