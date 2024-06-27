class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error("Building is an abstract class and cannot be instantiated directly.");
        }
        this._sqft = sqft;
    }

    // Getter for sqft attribute
    get sqft() {
        return this._sqft;
    }

    // Method to check if evacuationWarningMessage is implemented
    evacuationWarningMessage() {
        throw new Error("Class extending Building must override evacuationWarningMessage");
    }
}

export default Building;
