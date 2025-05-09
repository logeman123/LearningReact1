import React from 'react';
import { createRoot } from "react-dom/client";

function App () {
        const hours = new Date().getHours()
        let timeOfDay

        if (hours < 12) {
                timeOfDay = "morning"
        } else if (hours >= 12 && hours < 18) {
                timeOfDay = "afternoon"
        } else {
                timeOfDay = "evening"
        }



        return (
                <h1> Good {timeOfDay} it is {hours % 12} </h1>
        )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);