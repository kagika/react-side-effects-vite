const FetchButton = ({getJoke}) => {
  return (
    // Step 2: Add an onClick event that calls `fetchJoke`
    <button className="fetch-button" onClick={getJoke}>Get a New Joke</button>
  )
}

export default FetchButton
