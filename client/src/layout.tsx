import { Route, Routes } from "react-router-dom";
import CreateRoomPage from "./pages/CreateRoomPage";
import JoinRoomPage from "./pages/JoinRoomPage";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateRoomPage />} />
      <Route path="/join/:id" element={<JoinRoomPage />} />
    </Routes>
  );
};

export default Layout;
