import "./Instructions.css";

class Instructions extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <div className='Instructions-container'>
        <h1>Instructions</h1>
        <div className='Instructions-addRoom'>
          <h2>To add a room to your house:</h2>
          <ol>
            <li>Click on house map</li>
            <li>Choose <q>Add new room</q></li>
            <li>Click on the new room added</li>
            <li>Click on Background Select</li>
            <li>Select the type of room you want to create (Bedroom, Kitchen, Office, etc.)</li>
            <li>Select an option from the default backgrounds for your room</li>
            <li>Click on <q>Create</q></li>
          </ol>
        </div>
        <div className='Instructions-changeBackground'>
          <h2>To change the background of an existing room:</h2>
          <ol>
            <li>Click on house map</li>
            <li>Choose the room whose background you want to change</li>
            <li>Click on Background Select</li>
            <li>Select the type of room you want to create (Bedroom, Kitchen, Office, etc.)</li>
            <li>Select an option from the default backgrounds for your room</li>
            <li>Click on <q>Create</q></li>
          </ol>
        </div>
        <div className='Instructions-addObjects'>
          <h2>To add numbers and images to your room:</h2>
          <ol>
            <li>Enter the Image URL and click on <q>Upload Image URL</q></li>
            <li>To view as an image, select <q>Image</q> otherwise, select <q>Number</q></li>
          </ol>
        </div>
        <div className='Instructions-editObjects'>
          <h2>To edit objects in your room:</h2>
          <ol>
            <li>Click on the object you want to edit</li>
            <li>Select <q>Object</q> in <q>Log</q></li>
            <li>Choose which fields to edit by clicking on their respective Edit buttons</li>
          </ol>
        </div>
      </div>
      </>
    );
  }
  
}

export default Instructions;
