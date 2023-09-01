import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from "./components/ui/NavBar"
import MainPage from "./pages/MainPage"
import HistoryPage from "./pages/HistoryPage"
import TransactionPage from "./pages/TransactionPage"
import AppLoader from "./components/ui/hoc/appLoader"

function App() {
    return (
        <>
            <AppLoader>
                <NavBar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="history" element={<HistoryPage />} />
                    <Route path="transaction" element={<TransactionPage />} />
                    {/* <Route path="transactionedit" element={<EditTransaction />} /> */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </AppLoader>
        </>
    )
}

export default App
