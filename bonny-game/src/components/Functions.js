class Controls {
  add(array, num) {
    array.push(num);
    return array;
  }
  delete(array) {
    array.pop();
    return array;
  }
}

let Control = new Controls();

export default Control;
