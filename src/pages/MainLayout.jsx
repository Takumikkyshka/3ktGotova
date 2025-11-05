import { NavLink, Outlet } from "react-router";
import { CartContext } from "../storage";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {

    const [cart, setCart] = useState([])

    return (
        <CartContext value={[cart, setCart]}>
            <div className="container mx-auto">
                <Header></Header>

                <main><Outlet /></main>

                <Footer></Footer>
            </div >
        </CartContext>
    )
}
