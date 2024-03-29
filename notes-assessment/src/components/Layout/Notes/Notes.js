import Card from '../../UI/NoteCard/Card'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Notes = (props) => {

    const [notes , setNotes] = useState([])



    const postNote = props.onAdd;
    
    
    const handleDelete = async (e) => {
        const id = e.target.parentNode.parentNode.id;
        console.log(id);
        try {
            const response = await fetch(`http://localhost:5000/delete-note/${id}`);

            const data = await response.json();
            console.log(data)
           if(data === true){
             window.location.reload()
           }
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
   
          } catch (error) {
            console.error('Error posting data:', error);
          }
    }

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000/all-notes');

            const data = await response.json();
            setNotes(data);
      
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
   
          } catch (error) {
            console.error('Error posting data:', error);
          }
    }

    useEffect(() => {
        getData();
    },[postNote])


     

    return(
        <div className="display-notes">
            {notes.map((ele, index) => {
                return <Card key={index}>
                  <p className='note'>{ele.note}</p>
                  <p className='date'>{ele.createdAt}</p>
                  <div className='delete-btn' onClick={handleDelete} id={ele.id}><FontAwesomeIcon icon={faTrash} size='xs'/></div>
                </Card>
            })}
        </div>
    )
}


export default Notes