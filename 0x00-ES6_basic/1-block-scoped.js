export default function taskBlock(trueOrFalse) {
 
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    bollean x = task && task2;
    if (x)
      return("hi")
  }

  return [task, task2];
}
