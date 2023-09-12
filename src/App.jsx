import { Routes, Route, Navigate } from "react-router-dom"
import MainPage from "./pages/MainPage"
import HistoryPage from "./pages/TransactionListPage"
import AppLoader from "./components/ui/hoc/appLoader"
import TransactionLayout from "./layouts/TransactionLayout"
import EditTransaction from "./components/ui/transaction/EditTransaction"
import TransactionForm from "./components/ui/transaction/TransactionForm"
import MainLayout from "./layouts/MainLayout"
import Test from "./components/ui/Test"
import RegisterForm from "./components/forms/RegisterForm"
import LoginForm from "./components/forms/LoginForm"
import AuthLayout from "./layouts/AuthLayout"
import LogOut from "./layouts/LogOut"

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
                        <Route path="auth" element={<AuthLayout />}>
                            <Route path="signIn" element={<LoginForm />} />
                            <Route path="signUp" element={<RegisterForm />} />
                        </Route>
                        <Route path="logout" element={<LogOut />} />
                        <Route path="test" element={<Test />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </AppLoader>
        </>
    )
}

export default App
