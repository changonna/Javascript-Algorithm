class PriorityQueue {
    constructor(comparator) {
      this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
      this._el = [];
    }
  
    static DEFAULT_COMPARATOR(a, b) {
      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      } else {
        a = a.toString();
        b = b.toString();
        if (a === b) return 0;
        return a > b ? 1 : -1;
      }
    }

    isEmpty() {
      return this.size() === 0;
    }
  
    peek() {
      if (this.isEmpty()) throw new Error('PriorityQueue is empty');
      return this._el[0];
    }
  
    deq() {
      const first = this.peek();
      const last = this._el.pop();
      const size = this.size();
  
      if (size === 0) return first;
  
      this._el[0] = last;
      let current = 0;
  
      while (current < size) {
        let largest = current;
        const left = 2 * current + 1;
        const right = 2 * current + 2;
  
        if (left < size && this._compare(left, largest) >= 0) {
          largest = left;
        }
  
        if (right < size && this._compare(right, largest) >= 0) {
          largest = right;
        }
  
        if (largest === current) break;
  
        this._swap(largest, current);
        current = largest;
      }
  
      return first;
    }
  
    enq(element) {
      const size = this._el.push(element);
      let current = size - 1;
  
      while (current > 0) {
        const parent = Math.floor((current - 1) / 2);
        if (this._compare(current, parent) <= 0) break;
        this._swap(parent, current);
        current = parent;
      }
  
      return size;
    }
  
    size() {
      return this._el.length;
    }
 
    forEach(fn) {
      return this._el.forEach(fn);
    }
  
    _compare(a, b) {
      return this._comparator(this._el[a], this._el[b]);
    }
  

    _swap(a, b) {
      const aux = this._el[a];
      this._el[a] = this._el[b];
      this._el[b] = aux;
    }
  }





// 최대 힙(Max Heap)
let pq = new PriorityQueue(function(a, b) {
    return a.cash - b.cash;
});

pq.enq({cash: 250, name: 'changon na'});
pq.enq({cash: 300, name: 'sohyun lee'});
pq.enq({cash: 150, name: 'naeun son'});
console.log(pq.size()); // 3
console.log(pq.deq()); // {cash: 300, name: 'sohyun lee'}
console.log(pq.peek()); // {cash: 250, name: 'changon na'}
console.log(pq.size()); // 2

// 최소 힙(Min Heap)
let pqMin = new PriorityQueue(function(a, b) {
    return b.cash - a.cash;
});

pqMin.enq({cash: 250, name: 'changon na'});
pqMin.enq({cash: 300, name: 'sohyun lee'});
pqMin.enq({cash: 150, name: 'naeun son'});
console.log(pqMin.size()); // 3
console.log(pqMin.deq()); // {cash: 150, name: 'naeun son'}
console.log(pqMin.peek()); // {cash: 250, name: 'changon na'}
console.log(pqMin.size()); // 2