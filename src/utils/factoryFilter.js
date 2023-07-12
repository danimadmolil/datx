import MinHeap from "./heapq";
export default function calculateRequiredFilters(input) {
  let totalFilter = sumArray(input);
  const targetFilter = totalFilter / 2;
  const heap = new MinHeap();
  input.forEach((item) => {
    heap.add(-item);
  });
  let filters = 0;
  while (totalFilter > targetFilter) {
    let lowest = heap.poll();
    let nextItem = lowest / 2;
    totalFilter += nextItem;
    heap.add(nextItem);
    filters++;
  }
  return [filters, totalFilter];
}
function sumArray(arr) {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
}
