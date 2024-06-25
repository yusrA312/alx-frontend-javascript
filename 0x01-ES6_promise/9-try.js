export default function guardrail(mathFunction) {
  const queue = [];

  Promise.resolve()
    .then(() => mathFunction())
    .then(result => queue.push(result))
    .catch(error => queue.push(`Error: ${error.message}`))
    .finally(() => queue.push('Guardrail was processed'));

  return queue;
}
