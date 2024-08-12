import React, { useContext } from "react";
import Routing from "./Routing.js";
import { useEffect } from "react";
import { DataContext } from "./Components/DataProvider/DataProviders";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return <Routing />;
}

export default App;
