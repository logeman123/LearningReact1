export default function Joke(props) {
    return (
        <div>
            {props.question && <h3>Question: {props.question}</h3>}
            <h3>Punchline: {props.punchline}</h3>
        </div>
    )
}