import Home from "@/components/Home/Home";
import ProtectRoute from "@/components/ProtectRoute/ProtectRoute";
import Layout from "@/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Archive from "../archive/archive";
import Drafts from "../drafts/drafts";
import Forums from "../forums/forums";
import Inbox from "../inbox/inbox";
import Junk from "../junk/junk";
import Login from "../login/login";
import Opportunities from "../opportunities/opportunities";
import Promotions from "../promotions/promotions";
import Sent from "../sent/sent";
import Shopping from "../shopping/shopping";
import Social from "../social/social";
import Trash from "../trash/trash";
import Updates from "../updates/updates";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/inbox", element: <Inbox /> },
          { path: "/drafts", element: <Drafts /> },
          { path: "/sent", element: <Sent /> },
          { path: "/junk", element: <Junk /> },
          { path: "/trash", element: <Trash /> },
          { path: "/archive", element: <Archive /> },
          { path: "/social", element: <Social /> },
          { path: "/updates", element: <Updates /> },
          { path: "/forums", element: <Forums /> },
          { path: "/shopping", element: <Shopping /> },
          { path: "/promotions", element: <Promotions /> },
          { path: "/opportunities", element: <Opportunities /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
