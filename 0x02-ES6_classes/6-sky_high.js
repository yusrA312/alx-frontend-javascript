// Importing Building from a relative path
import Building from './5-building';

// Extending the Building class
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor
    this._floors = floors; // Set the _floors property
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Method to provide evacuation warning message
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`; // Access floors via getter
  }
}

