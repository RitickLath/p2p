import { useContext, useEffect } from "react";
import { socketContext } from "./contexts/socketContext";

import Layout from "./layout";

const App = () => {
  return (
    <div>
      <Layout />
    </div>
  );
};

export default App;
