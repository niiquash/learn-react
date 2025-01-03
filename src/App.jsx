import Joke from "./Joke";

function App() {
  return (
    <div className="contacts">
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Joke punchline="I know a man with a wooden leg named Smith. What's the name of his other leg?" />
    </div>
  );
}

export default App;
