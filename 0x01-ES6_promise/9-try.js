export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const WW = mathFunction();
    queue.push(WW);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
