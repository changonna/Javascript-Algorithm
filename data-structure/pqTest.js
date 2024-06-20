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
            return (a > b) ? 1 : -1;
        }
    }
    enq(el) {
        const size = this._el.push(el);
        let current = size - 1;
        
        while (current > 0) {
            let parent = Math.floor((current - 1) / 2);
            if (this._compare(current, parent) < 0) break; 
            // parent가 더 우선순위가 높으면 멈춰
            this._swap(current, parent);
            current = parent;
        }
        return size;
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
            const left = current * 2 + 1;
            const right = current * 2 + 2;
            
            if (left < size && this._compare(left, largest) >= 0) {
                largest = left;
            }
            if (right < size && this._compare(right, largest) >= 0) {
                largest = right;
            }
            if (current === largest) break;
            
            this._swap(current, largest);
            current = largest;
        }
        
        return first;
    }
    peek() {
        if(this.size() === 0) throw Error;
        return this._el[0];
    }
    size() {
        return this._el.length;
    }
    _compare(a, b) {
        return this._comparator(this._el[a], this._el[b]);
    }
    _swap(a, b) {
        const temp = this._el[a];
        this._el[a] = this._el[b];
        this._el[b] = temp;
    }
}

// 최대 힙 (Max Heap)
let pq = new PriorityQueue(function(a, b) {
    return a.cash - b.cash;
});

pq.enq({cash: 100, name: 'ncg'});
pq.enq({cash: 200, name: 'sne'});
pq.enq({cash: 300, name: 'lsh'});

console.log(pq.size()); // 3
console.log(pq.deq()); // 300
console.log(pq._el); // 200, 100
console.log(pq.peek()); // 200

/**
 * 3
 * 1 2
 */
