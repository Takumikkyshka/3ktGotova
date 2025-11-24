import { createBrowserRouter } from "react-router";
import IndexPage from "./pages/IndexPage";
import AdminPage from "./pages/AdminPage";
import MainLayout from "./pages/MainLayout";
import QuizesPage from "./pages/QuizesPage";
import CreateQuizPage from "./pages/CreateQuizPage";
import PlayingQuizPage from "./pages/PlayingQuizPage";
import BookPage from "./pages/BookPage";
import OneBookPage from "./pages/OneBookPage";
import UsersPage from "./pages/UsersPage";
import GetUserPage from "./pages/GetUserPage";
import CartPage from "./pages/CartPage";
import Kt3Page from "./pages/Kt3Page";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import Kt5Page from "./pages/5KtPage";

export const router = createBrowserRouter([
    {
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: IndexPage
            },
            {
                path: 'admin',
                Component: AdminPage
            },
            {
                path: 'quizes',
                Component: QuizesPage
            },
            {
                path: 'quizes/create',
                Component: CreateQuizPage
            },
            {
                path: 'quizes/:id',
                Component: PlayingQuizPage
            },
            {
                path: 'books',
                Component: BookPage
            },
            {
                path: 'books/:id',
                Component: OneBookPage
            },
            {
                path: 'users',
                Component: UsersPage
            },
            {
                path: 'users/:id',
                Component: GetUserPage
            },
            {
                path: 'cart',
                Component: CartPage
            },
            {
                path: 'kt3',
                Component: Kt3Page
            },
            {
                path: 'products',
                Component: Kt3Page
            },
            {
                path: 'product/:id',
                Component: ProductPage
            },
            {
                path: '5kt',
                Component: Kt5Page
            },
            {
                path: '*',
                Component: NotFoundPage
            }
        ]
    }
]);