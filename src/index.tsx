import * as dotenv from "dotenv";
dotenv.config();
import ApolloClient from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Sidebar from "./Components/Sidebar";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

const Main = () => (
  <ApolloProvider client={client}>
    <Sidebar />
  </ApolloProvider>
);

ReactDOM.render(<Main />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
