
import { useState } from 'react';
import { useEffect } from 'react';

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [jokes, setJokes] = useState([]);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setJokes(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {jokes.map(joke => setJokes(
            <li key={joke.id}>s
              {jokes[0].setup}
            </li>
          ))}
        </ul>
      );
    }
  }
  export default MyComponent;