import React, { useState } from "react";

import { useActionCreator } from "../hooks/useActionCreator";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Repositories: React.FC = () => {
  const [term, setTerm] = useState("");

  const { loading, error, data } = useTypedSelector(
    ({ repositories }) => repositories
  );

  const { fetchRepositories } = useActionCreator();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      <div>
        {loading && "Loading..."}
        {error && error}
        {data && (
          <ul>
            {data.map((repo) => (
              <li key={repo}>{repo}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Repositories;
