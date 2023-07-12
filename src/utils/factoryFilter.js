import MinHeap from "./heapq";
export default function calculateRequiredFilters(input) {
  let totalPollution = sumArray(input);
  const targetPollution = totalPollution / 2;
  const heap = new MinHeap();
  input.forEach((item) => {
    heap.add(-item);
  });
  let filters = 0;
  while (totalPollution > targetPollution) {
    let lowest = heap.poll();
    let nextItem = lowest / 2;
    totalPollution += nextItem;
    heap.add(nextItem);
    filters++;
  }
  return [filters, totalPollution];
}
function sumArray(arr) {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
}
