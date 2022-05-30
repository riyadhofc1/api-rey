import React from "react";

function Head() {
  return (
    <head>
      <link rel="stylesheet" href="styles/docs.css" />
    </head>
  );
}

function Main() {
  return (
    <main>
      <h1>Hello from About</h1>
    </main>
  );
}

export default function Render() {
  return (
    <React.StrictMode>
      <Head></Head>
      <Main></Main>
    </React.StrictMode>
  );
}
