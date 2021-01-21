let Queue2 = (function () {
  const items = new WeakMap();
  class Queue2 {
	  constructor () {
			items.set(this, []); }
		enqueue(element) {
			let q = items.get(this); q.push(element);
		}
		dequeue() {
			let q = items.get(this); let r = q.shift(); return r;
		}
		print(){
			console.log(items.get(this))
		}
	}
	return Queue2;
})();


const queue = new Queue2()
queue.enqueue("John"); 
queue.enqueue("Jack");
queue.print();