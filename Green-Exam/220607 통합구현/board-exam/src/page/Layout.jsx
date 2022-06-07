import React from "react";
import { NavLink } from "react-router-dom";

const Layout = () => {
    const activeStyle = {
        color: "green",
        fontWeight: "bold",
    };

    return (
        <div>
            <nav className="nav_container">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/boardlist"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Board
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Layout;
