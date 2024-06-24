export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
// const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);  // 'this' automatically refers to the instance
    return this.sanFranciscoNeighborhoods;
  };
}
