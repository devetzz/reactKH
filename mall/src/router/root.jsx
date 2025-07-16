import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loading from '../pages/Loading';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Main = lazy(() => delay(2000).then(() => import("../pages/MainPage")))
const About = lazy(() => delay(2000).then(() => import("../pages/AboutPage")));
const ListPage = lazy(() => delay(2000).then(() => import('../pages/todo/ListPage')));
const ReadPage = lazy(() => delay(2000).then(() => import('../pages/todo/ReadPage')));
const AddPage = lazy(() => delay(2000).then(() => import('../pages/todo/AddPage')));
const ModifyPage = lazy(() => delay(2000).then(() => import('../pages/todo/ModifyPage')));

const root = createBrowserRouter([
    {
        path: '/', element: (
            <Suspense fallback={<Loading />}>
                <Main />
            </Suspense>
        ),
    },
    {
        path: "/about", element: (
            <Suspense fallback={<Loading />}>
                <About />
            </Suspense>
        ),
    },
    {
        path: "/todo/list", element: (
            <Suspense fallback={<Loading />}>
                <ListPage />
            </Suspense>
        ),
    },
    {
        path: "/todo/read/:tno", element: (
            <Suspense fallback={<Loading />}>
                <ReadPage />
            </Suspense>
        ),
    },
    {
        path: "/todo/modify/:tno", element: (
            <Suspense fallback={<Loading />}>
                <ModifyPage />
            </Suspense>
        ),
    },
    {
        path: "/todo/add", element: (
            <Suspense fallback={<Loading />}>
                <AddPage />
            </Suspense>
        ),
    },
]);

export default root;