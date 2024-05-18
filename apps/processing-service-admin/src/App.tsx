import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProcessedPostList } from "./processedPost/ProcessedPostList";
import { ProcessedPostCreate } from "./processedPost/ProcessedPostCreate";
import { ProcessedPostEdit } from "./processedPost/ProcessedPostEdit";
import { ProcessedPostShow } from "./processedPost/ProcessedPostShow";
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
        title={"ProcessingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProcessedPost"
          list={ProcessedPostList}
          edit={ProcessedPostEdit}
          create={ProcessedPostCreate}
          show={ProcessedPostShow}
        />
      </Admin>
    </div>
  );
};

export default App;
