import React, {useState} from "react";
import axios from "axios"


export default function Home() {
    const [query, setQuery] = useState('');

    const fetchQoute = aysnc () => {
        if (query) {
        const response = await axios.get (`https://buddha-api.com/api/random/`, {
            params : {
                
                    "id": "dalai_lama-8",
                    "text": "The true hero is one who conquers his own anger and hatred.",
                    "byId": "dalai_lama",
                    "byName": "Dalai Lama",
                    "byImage": "https://buddha-api.com/img/buddhist/dalai_lama.png"
                }
            });
        console.log(response.data);
        set
        }
    };
    return(

    <div>
        <h1>Home</h1>
        <input
        type="text"
        placeholder="Today's qoute: "
        value={query}
        />
    </div>
)
};

