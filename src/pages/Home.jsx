import JournalEntrySquare from "../components/JournalEntrySquare/JournalEntrySquare";
import "../styles.css";


const Home = () => {
    return (
        <section>
           <div className='journal-container'> 
            <h1 className='header'> Welcome to your Gratitude Journal</h1>
            <div className ="journal-list">
                <JournalEntrySquare />
                <JournalEntrySquare />
                <JournalEntrySquare />
            </div>
           </div>
        </section>

    )
}

export default Home;