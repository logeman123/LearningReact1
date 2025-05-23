import Joke from "./components/joke";

/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

export default function App() {
    return (   
        <div className="jokes-container">
        <Joke
            punchline="I got my daughter a fridge for her birthday."
        />
        <Joke
            question="How did I learn to make ice cream?"
            punchline="I read the instructions."
        />
        <Joke
            question="Why don't pirates travel on mountain roads?"
            punchline="Scurvy."
        />
        </div>
    )
}