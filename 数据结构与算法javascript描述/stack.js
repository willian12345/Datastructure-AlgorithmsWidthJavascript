import { print } from './utils'

function Stack() { 
	this.dataStore = []; 
	this.top = 0; 
	this.push = push; 
	this.pop = pop; 
	this.peek = peek; 
	this.clear = clear; 
	this.length = length;
}
function push(element) { 
	this.dataStore[this.top++] = element;
}
function peek() {
	return this.dataStore[this.top-1]
}
function pop() {
	return this.dataStore[--this.top];
}
function clear() { 
	this.top = 0;
}
function length() { 
	return this.top;
}

/**
 * 进制转换
 * @param {*} num 
 * @param {*} base 
 */
function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base); 
  } while (num > 0);

  var converted = "";
  while (s.length() > 0) {
    converted += s.pop(); 
  }
  return converted;
}

// console.log(mulBase(10, 2))

// 是否是回文 eg: abcd-dcba
function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]); 
  }
  var rword = "";
  while (s.length() > 0) {
    rword += s.pop(); 
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}

print(isPalindrome('hello'))


// 递归
function factorial(n) {
  if (n === 0) {
    return 1; 
  } else {
    return n * factorial(n-1);
  } 
}

// 用栈模拟递归
function fact(n) {
  var s = new Stack();
  while (n > 1) {
    s.push(n--); 
  }
  var product = 1;
  while (s.length() > 0) {
    product *= s.pop(); 
  }
  return product;
}
print(factorial(5)); // 显示 120 print(factorial(5)); // 显示 120
print(fact(5)); // 显示 120 print(fact(5)); // 显示 120