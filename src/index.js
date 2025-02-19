import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/HomePage';
import ViewGroups from './Components/ViewGroups';
import AddExpense from './Components/AddExpense';
import History from './Components/History';
import CreateGroup from './Components/CreateGroup';
import { Provider } from 'react-redux';
import ExSplitStore from './Store/Store';
import GroupDetails from './Components/GroupDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "groups",
        element: <ViewGroups />,
      },
      {
        path: "groups/:groupID",
        element: <GroupDetails />,
        loader: ({ params }) => {
          return params.groupID;
        },
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "add-expense",
        element: <AddExpense />,
      },
      {
        path: "create-group",
        element: <CreateGroup />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ExSplitStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
