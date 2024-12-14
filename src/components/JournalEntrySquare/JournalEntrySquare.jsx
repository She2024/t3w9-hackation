import '/home/she2024/webdev2024/T3/t3w9-hackathon/src/styles.css';

const JournalEntrySquare = () => {
    return (
        <div className="journal-entry">
            <h2 className="journal-entry_title">Title</h2>
            <h3 className="journal-entry_date">Create: Date </h3>
            <div>
                <ul className="journal-entry_tags">Tag1 Tag2</ul>
            </div>
            <p className="journal-entry_body">Body...</p>
        </div>
    )
}

export default JournalEntrySquare