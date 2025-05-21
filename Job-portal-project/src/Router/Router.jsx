import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Createjob from "../Pages/Createjob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import Updatejob from "../Pages/Updatejob";
import Login from "../Pages/Login";
import JobDetails from "../Pages/jobDetails";
const router = createBrowserRouter([
    {
        path: "/",element: <App/>,
        children: [
            {path: "/",
                element: <Home/>},
            {path:"/post-job",
                element: <Createjob/>
            },
            {
                path: "/my-job",
                element: <MyJobs/>
            },
            {
                path: "/salary",
                element: <SalaryPage/>
            },
            {
                path: "/edit-job/:id",
                element: <Updatejob/>,
                loader: ({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
            },
            {
                path: "/job/:id",
                element: <JobDetails/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
        ]
    },
]);

export default router;