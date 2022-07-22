/* eslint-disable react/jsx-no-undef */
import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './Store/config';
import { ITask } from './Pages/Interface/interface';

const Edit = React.lazy(() => import('./Pages/Edit/Edit'));
const List = React.lazy(() => import('./Pages/Todo/Action/List/List'));
const Form = React.lazy(() => import('./Pages/Form/Form'));



export default function AppRoutes() {
    const list = useSelector((state: RootState) => state.todo.list);
    return (

        <div>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />

                        <Route path="/Edit/" element={<Edit />} />

                        <Route path="/List" element={<List />} />
                        <Route path="/Form" element={<Form />} />

                        <Route path="/Form/:id" element={<Form />} />

                    </Routes>
                </Suspense>

            </BrowserRouter>
        </div>

    )
}
