export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <p>Upvotes: {props.upvotes}</p>
            <p>Downvotes: {props.downvotes}</p>
            <p>Comments: {props.comments.length}</p>
            <p>Is a pun: {props.isPun ? "Yes" : "No"}</p>
            <hr />
        </>
    )
}