import { Routes, Route, Navigate } from "react-router-dom"
import MainPage from "./pages/MainPage"
import TransactionListPage from "./pages/TransactionListPage"
import AppLoader from "./components/ui/hoc/appLoader"
import TransactionLayout from "./layouts/TransactionLayout"
import TransactionEdit from "./components/ui/transaction/TransactionEdit"
import TransactionForm from "./components/ui/transaction/TransactionForm"
import MainLayout from "./layouts/MainLayout"
import RegisterForm from "./components/forms/RegisterForm"
import LoginForm from "./components/forms/LoginForm"
import AuthLayout from "./layouts/AuthLayout"
import LogOut from "./layouts/LogOut"
import ProtectedRoutes from "./components/ui/ProtectedRoutes"
import UserPage from "./pages/UserPage"
import UserPageEdit from "./pages/UserPageEdit"
import TestPage from "./components/ui/TestPage"

function App() {
    return (
        <>
            <AppLoader>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<MainPage />} />
                        <Route path="history" element={<TransactionListPage />} />
                        <Route path="transaction" element={<TransactionLayout />}>
                            <Route index element={<TransactionForm />} />
                            <Route path=":transactionId" element={<TransactionEdit />} />
                        </Route>
                        <Route path="auth" element={<AuthLayout />}>
                            <Route path="signIn" element={<LoginForm />} />
                            <Route path="signUp" element={<RegisterForm />} />
                        </Route>
                        <Route element={<ProtectedRoutes />}>
                            <Route path="user/:userId" element={<UserPage />} />
                            <Route path="user/:userId/edit" element={<UserPageEdit />} />
                        </Route>
                        <Route path="logout" element={<LogOut />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </AppLoader>
        </>
    )
}

export default App
