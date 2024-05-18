import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StoredEventList } from "./storedEvent/StoredEventList";
import { StoredEventCreate } from "./storedEvent/StoredEventCreate";
import { StoredEventEdit } from "./storedEvent/StoredEventEdit";
import { StoredEventShow } from "./storedEvent/StoredEventShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogEventProcessorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="StoredEvent"
          list={StoredEventList}
          edit={StoredEventEdit}
          create={StoredEventCreate}
          show={StoredEventShow}
        />
      </Admin>
    </div>
  );
};

export default App;
