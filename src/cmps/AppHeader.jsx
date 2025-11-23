import { NavLink } from "react-router-dom";
import { LoginSignup } from "./LoginSignup";

export function AppHeader() {
    return (
        <header>
            <section className="header-container">
                <section className="app-header">
                    <h1 >OfficeCart</h1>
                    <nav className="app-nav">
                        <NavLink to="/">home</NavLink>
                        <NavLink to="/about">about us</NavLink>
                        <NavLink to="/contact">contact us</NavLink>
                        <NavLink to="/cart"><img className="cart" src={`../../icons/cart.png`} alt="cart" /></NavLink>
                    </nav>
                    <LoginSignup />
                </section>
            </section>
        </header>
    )
}