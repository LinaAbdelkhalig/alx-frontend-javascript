export default function (mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push('Guardrail was processed');
  }
  queue.push('Guardrail was processed');
  return queue;
}
