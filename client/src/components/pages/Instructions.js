import "./Instructions.css";

class Instructions{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <div className="Instructions-container">
        <h1>Instructions</h1>
        <div className="Instructions-addRoom>
          <h2>To add a room to your house:</h2>
          <ol>
            <li>Click on house map</li>
            <li>Choose "Add new room"</li>
            <li>Click on the new room added</li>
            <li>Click on Background Select</li>
            <li>Select the type of room you want to create (Bedroom, Kitchen, Office, etc.)</li>
            <li>Select an option from the default backgrounds for your room</li>
            <li>Click on "Create"</li>
          </ol>
        </div>
        <div className="Instructions-changeBackground">
          <h2>To change the background of an existing room:</h2>
          <ol>
            <li>Click on house map</li>
            <li>Choose the room whose background you want to change</li>
            <li>Click on Background Select</li>
            <li>Select the type of room you want to create (Bedroom, Kitchen, Office, etc.)</li>
            <li>Select an option from the default backgrounds for your room</li>
            <li>Click on "Create"</li>
          </ol>
        </div>
        <div className="Instructions-addObjects">
          <h2>To add numbers and images to your room:</h2>
          <ol>
            <li>Enter the Image URL and click on "Upload Image URL"</li>
            <li>To view as an image, select "Image"; otherwise, select "Number"</li>
          </ol>
        </div>
        <div className="Instructions-editObjects">
          <h2>To edit objects in your room:</h2>
          <ol>
            <li>Click on the object you want to edit</li>
            <li>Select "Object" in "Log"</li>
            <li>Choose which fields to edit by clicking on their respective Edit buttons</li>
          </ol>
        </div>
      </div>
      </>
    );
  }
  
}
