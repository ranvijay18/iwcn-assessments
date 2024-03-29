import './Input.css'

const Input = (props) => {

    const handleAddNote = async (e) => {
        e.preventDefault()
        try {
            const obj = {
                note: e.target.note.value
            }
            const response = await fetch('http://localhost:5000/add-note', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(obj),
            });

            const data = await response.json()

            props.onSubmit(data)
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
          } catch (error) {
            console.error('Error posting data:', error);
          }
    }
   return(
    <>
    <form onSubmit={handleAddNote}>
    <input type="text" name='note' size='60' placeholder='Take a note...' />
    </form>
    </>
   )
}



export default Input