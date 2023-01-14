import { data } from "./jokesData";
import Joke from "./Joke";


const Testing = () => {
    const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

    const colorElements = colors.map(x => <h3>{x}</h3>);
    return(
        <ul>
            {colorElements}
        </ul>
    )
}


const Mapping = () => {
    const jokeElements = data.map(joke => {
        return(
            <Joke
                setup={joke.setup}
                punchline={joke.punchline}
            />
        )
    })

    return(
        <ul>
            {jokeElements}
        </ul>
    )


}


export {Testing, Mapping}