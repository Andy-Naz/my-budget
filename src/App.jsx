import { Routes, Route, Navigate } from "react-router-dom"
import MainPage from "./pages/MainPage"
import HistoryPage from "./pages/HistoryPage"
import AppLoader from "./components/ui/hoc/appLoader"
import TransactionLayout from "./layouts/TransactionLayout"
import EditTransaction from "./components/ui/transaction/EditTransaction"
import TransactionForm from "./components/ui/transaction/TransactionForm"
import MainLayout from "./layouts/MainLayout"
import Test from "./components/ui/Test"

function App() {
    return (
        <>
            <AppLoader>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<MainPage />} />
                        <Route path="history" element={<HistoryPage />} />
                        <Route path="transaction" element={<TransactionLayout />}>
                            <Route index element={<TransactionForm />} />
                            <Route path=":transactionId" element={<EditTransaction />} />
                        </Route>
                        <Route path="test" element={<Test />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </AppLoader>
        </>
    )
}

export default App
