import  { print, putstr }  from './utils'
function CArray(numElements) {
   this.dataStore = [];
   this.pos = 0;
   this.numElements = numElements;
   this.insert = insert;
   this.toString = toString;
   this.clear = clear;
   this.setData = setData;
   this.swap = swap;
   this.bubbleSort = bubbleSort;
   this.selectionSort = selectionSort;
   this.insertionSort = insertionSort;

   for (var i = 0; i < numElements; ++i) {
      this.dataStore[i] = i;
   }
}

function setData() {
   for (var i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * 
                          (this.numElements+1));
   }
}

function clear() {
   for (var i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0;
   }
}

function insert(element) {
   this.dataStore[this.pos++] = element;
}

function toString() {
   var retstr = "";
   for (var i = 0; i < this.dataStore.length; ++i) {
      retstr += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
         retstr += "\n";
      }
   }
   return retstr;
}

function swap(arr, index1, index2) {
   var temp = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = temp;
}

/**
 * 冒泡排序：冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。
 * 它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。
 * 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
 * 这个算法的名字由来是因为越大的元素会经由交换慢慢“浮”到数列的顶端。
 */
function bubbleSort() {
  var numElements = this.dataStore.length;
	for ( var outer = numElements; outer >= 2; --outer) {
		for(var inner = 0; inner <= outer - 1; ++inner ) {
			if( this.dataStore[inner] > this.dataStore[inner + 1] ){
				swap(this.dataStore, inner, inner + 1);
			}
    }
    print(this.toString(), '-----');
	}
}

/**
 * 选择排序：选择排序（Selection sort）是一种简单直观的排序算法。
 * 它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。
 *  选择排序是不稳定的排序方法。
 */
function selectionSort() {
  var min;  
  for (var outer = 0; outer <= this.dataStore.length - 1; ++outer) {
      min = outer;
      for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
        // 记住最小值
        if (this.dataStore[inner] < this.dataStore[min]) {
            min = inner;
        }
      }
      // 最小值与下一位互换
      swap(this.dataStore, outer, min);
  }
}

/**
 * 插入排序：插入排序基本操作就是将一个数据插入到已经排好序的有序数据中，
 * 从而得到一个新的、个数加一的有序数据，
 * 算法适用于少量数据的排序，时间复杂度为O(n^2)。
 * 是稳定的排序方法。插入排序的基本思想是：每步将一个待排序的纪录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。
 */
function insertionSort() {
  var temp, inner;
  for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
      temp = this.dataStore[outer];
      inner = outer;
      while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
          this.dataStore[inner] = this.dataStore[inner - 1];
          --inner;
      }
      this.dataStore[inner] = temp;
  }
}

var nums = new CArray(10);
nums.setData();
print(nums.toString());
// print("\nDuring Shellsort: \n");
nums.insertionSort();
print("\nAfter Shellsort: \n");
print(nums.toString());





/**
 * 
 * 时间复杂度
 */

function go(n) {
  var item = 0;
  for (var i = 1; i <= n; i++) {
   item += i;
  }
  return item;
}



function go2(n) {
var item = n*(n+1)/2
return item;
}

console.time('a')
go(100000)
console.timeEnd('a')
console.time('b')
go2(100000)
console.timeEnd('b')