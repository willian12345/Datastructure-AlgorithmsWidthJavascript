function print(msg){
  console.log(msg)
}
function append(element) { 
  this.dataStore[this.listSize++] = element;
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) { 
      return i;
    }  
  }
  return -1; 
}

function remove(element) {
  var foundAt = this.find(element); 
  if (foundAt > -1) {
    this.dataStore.splice(foundAt,1); 
    --this.listSize;
    return true;
  }
  return false;
}

function length() { 
  return this.listSize;
}

function toString() { 
  return this.dataStore;
}

function insert(element, after) { 
  var insertPos = this.find(after); 
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element); 
    ++this.listSize;
    return true;
  }
  return false;
}

function clear() {
  delete this.dataStore; 
  this.dataStore = []; 
  this.listSize = this.pos = 0;
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) { 
      return true;
    } 
  }
  return false;
}

function front() { 
  this.pos = 0;
}
function end() {
  this.pos = this.listSize - 1;
}
function prev() { 
  if(this.pos >= 0){
    --this.pos
  }
}

function next() { 
  if (this.pos < this.listSize) {
    ++this.pos;
  } 
}
function currPos() { 
  return this.pos;
}
function moveTo(position) { 
  this.pos = position;
}
function getElement() {
  return this.dataStore[this.pos];
}

function List(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = []; // 初始化一个空数组来保存列表元素 
  this.clear = clear;
  this.find = find; 
  this.toString = toString; 
  this.insert = insert; 
  this.append = append; 
  this.remove = remove; 
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length; 
  this.currPos = currPos; 
  this.moveTo = moveTo; 
  this.getElement = getElement; 
  this.length = length; 
  this.contains = contains;
}


var names = new List(); 
names.append("Clayton"); 
names.append("Raymond"); 
names.append("Cynthia"); 
names.append("Jennifer"); 
names.append("Bryan"); 
names.append("Danny");
/**
 * 使用迭代器的一些优点。
 * • 访问列表元素时不必关心底层的数据存储结构
 * • 当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器。 
 * • 可以用不同类型的数据存储方式实现 cList 类，迭代器为访问列表里的元素提供了一种统一的方式。
 */

for(names.front(); names.currPos() < names.length(); names.next()) { 
  print(names.getElement());
}