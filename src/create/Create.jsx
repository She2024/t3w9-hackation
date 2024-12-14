import '../styles.css'
import '/home/she2024/webdev2024/T3/t3w9-hackathon/src/style/Create.css'



const Create = ()=> {
    const handleSubmit = (e) => {
        alert('submitted')
    }
    return(
        <section className= "create">
            <form className="create_fields" onSubmit={(e) => handleSubmit(e)}>
                <div className="tags">
                    <label htmlFor="title">Title</label>
                    <input className="test-background" name="title"/>
                </div>
                <div>
                    <label className="tags" htmlFor="tags">Tags</label>
                    <input name="tags"/>
                </div>
                <lable className="journalEntry_lable" htmlFor="JournalEntry">Make a new entry</lable>
                <textarea className="journalEntry_text-background" name="JournalEntry"></textarea>
                <button className="buttons" type="submit"></button>
            </form>

        </section>
    
    )

}

export default Create;
