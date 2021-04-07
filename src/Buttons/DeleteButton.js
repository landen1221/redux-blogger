import "../CSS/DeleteButton.css"

const DeleteButton = ({handleDelete, id}) => {  
    // can't yet see effect. Blog state is different on view pg and home page.
    
    return (

        <button onClick={() => handleDelete(id)} id="DeleteButton">Delete</button>
    )
}

export default DeleteButton