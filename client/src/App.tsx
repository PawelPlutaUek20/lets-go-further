import { type Component, createResource } from "solid-js";

const showMovieHandler = async () =>
  (await fetch(`http://localhost:4000/v1/movies/1`)).json();

const testRateLimit = async () => {
  return Promise.allSettled(
    Array(6)
      .fill(undefined)
      .map(() =>
        fetch("http://localhost:4000/v1/healthcheck").then((res) => {
          if (!res.ok) {
            return res.json().then((err) => {
              throw err;
            });
          }
          return res.json();
        })
      )
  );
};

const App: Component = () => {
  const [resource] = createResource(showMovieHandler);

  return (
    <div>
      <span>{resource.loading && "Loading..."}</span>
      <button onClick={() => testRateLimit().then(console.log)}>onClick</button>
      <div style={{ margin: "0 1rem" }}>
        <pre>{JSON.stringify(resource(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
