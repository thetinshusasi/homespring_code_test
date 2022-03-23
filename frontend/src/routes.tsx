import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import BooksProvider from './providers/BooksProvider';


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <BooksProvider>

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="*" element={<Home />} />
                </Routes>
            </BooksProvider>

        </BrowserRouter>

    )
}
