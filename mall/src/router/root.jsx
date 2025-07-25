import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//root page
const Main = lazy(() => delay(2000).then(() => import("../pages/MainPage")));
const About = lazy(() => delay(2000).then(() => import("../pages/AboutPage")));
// todo page
const ListPage = lazy(() =>
  delay(2000).then(() => import("../pages/todo/ListPage"))
);
const ReadPage = lazy(() =>
  delay(2000).then(() => import("../pages/todo/ReadPage"))
);
const AddPage = lazy(() =>
  delay(2000).then(() => import("../pages/todo/AddPage"))
);
const ModifyPage = lazy(() =>
  delay(2000).then(() => import("../pages/todo/ModifyPage"))
);

// product page
const ProductListPage = lazy(() => import("../pages/product/ListPage"));
const ProductAddPage = lazy(() => import("../pages/product/AddPage"));
const ProductReadPage = lazy(() => import("../pages/product/ReadPage"));
const ProductModifyPage = lazy(() => import("../pages/product/ModifyPage"));
// Login Page
const LoginPage = lazy(() => import("../pages/member/LoginPage"));
const LogoutPage = lazy(() => import("../pages/member/LogoutPage"));
// kakao Page
const KakaoRedirect = lazy(() => import('../pages/member/KakaoRedirectPage'));


const root = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
  // todo 경로
  {
    path: "/todo/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ListPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/read/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ReadPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/modify/:tno",
    element: (
      <Suspense fallback={<Loading />}>
        <ModifyPage />
      </Suspense>
    ),
  },
  {
    path: "/todo/add",
    element: (
      <Suspense fallback={<Loading />}>
        <AddPage />
      </Suspense>
    ),
  },

  // product 경로
  {
    path: "/product/list",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductListPage />
      </Suspense>
    ),
  },
  {
    path: "/product/add",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductAddPage />
      </Suspense>
    ),
  },
  {
    path: "/product/read/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductReadPage />
      </Suspense>
    ),
  },
  {
    path: "/product/modify/:pno",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductModifyPage />
      </Suspense>
    ),
  },
  // Login page 경로
  {
    path: "/member/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/member/logout",
    element: (
      <Suspense fallback={<Loading />}>
        <LogoutPage />
      </Suspense>
    ),
  },
  // Kakao Page 경로
  {
    path: '/member/kakao', element: (
      <Suspense fallback={<Loading />}>
        <KakaoRedirect />
      </Suspense>
    ),
  },
]);

export default root;
