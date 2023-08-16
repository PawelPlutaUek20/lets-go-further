import { type Component, createResource } from 'solid-js';

const showMovieHandler = async () =>
  (await fetch(`http://localhost:4000/v1/movies/1`)).json();


const App: Component = () => {
  const [resource] = createResource(showMovieHandler);

  return (
    <div>
      <span>{resource.loading && "Loading..."}</span>
      <div style={{ margin: "0 1rem" }}>
        <pre>{JSON.stringify(resource(), null, 2)}</pre>
      </div>
    </div>
  );
};

export default App;
