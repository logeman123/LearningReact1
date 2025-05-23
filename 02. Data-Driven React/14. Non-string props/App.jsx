import Joke from "./Joke"

/**
 * Challenge: Think critically - how would you pass in a prop that 
 * isn't a string datatype.
 * 
 * E.g. Say you want each Joke component to receive an "upvotes" 
 * and "downvotes" prop that is a number, as well as a prop with 
 * an array of comments, and a boolean of whether the joke is a 
 * pun (`isPun`).
 */

export default function App() {
    return (
        <main>
            <Joke
                punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
                upvotes={100}
                downvotes={20}
                comments={["This is a comment", "This is another comment"]}
                isPun={true}
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                upvotes={100}
                downvotes={20}
                comments={["This is a comment", "This is another comment"]}
                isPun={true}
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
                upvotes={100}
                downvotes={20}
                comments={["This is a comment", "This is another comment"]}
                isPun={true}
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm." 
                upvotes={100}
                downvotes={20}
                comments={["This is a comment", "This is another comment"]}
                isPun={true}
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
                upvotes={100}
                downvotes={20}
                comments={["This is a comment", "This is another comment"]}
                isPun={true}
            />
        </main>
    )
}
