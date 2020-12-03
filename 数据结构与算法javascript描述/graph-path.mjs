import  { print, putstr }  from './utils'
/**
 * 图
 * @param v 
 */
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.edgeTo = [];
  this.adj = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.bfs = bfs;
  // 先默认都没有访问过
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false
  }
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
  this.showPath = showPath;
}

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (var i = 0; i < this.vertices; ++i) {
      putstr(i + " -> ");
      for (var j = 0; j < this.vertices; ++j) {
          if (this.adj[i][j] != undefined) {
              putstr(this.adj[i][j] + ' ');
          }
      }
      print();
  }
}

/**
 * 广度优先
 * 1查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中 
 * 2从图中取出下一个顶点 v，添加到已访问的顶点列表;
 * 3将所有与 v 相邻的未访问顶点添加到队列。      
 * */ 
function bfs(s) {
  var queue = [];
  this.marked[s] = true;
  queue.push(s); // 添加到队尾 
  while (queue.length > 0) {
    var v = queue.shift(); // 从队首移除 
    if (v !== undefined) {
        print("Visisted vertex: " + v);
    }
    for(var i = 0; i< this.adj[v].length; i++){
        var w = this.adj[v][i]
        if (!this.marked[w]) {
          this.edgeTo[w] = v
          // console.log(w, v)
          this.marked[w] = true
          queue.push(w);
        }
    }
  }
  console.log(this.adj)
}

function pathTo(source, v) {
  if (!this.hasPathTo(v)) {
      return undefined;
  }
  var path = [];
  for (var i = v; i != source; i = this.edgeTo[i]) {
      path.push(i);
  }
  path.push(source);
  
  return path;
}

function hasPathTo(v) {
  return this.marked[v];
}

function showPath(paths){
  while (paths.length > 0) {
      if (paths.length > 1) {
          putstr(paths.pop() + '-');
      } else {
          putstr(paths.pop());
      }
  }
}

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.bfs(0)
var vertex = 4;
var source = 0;
var paths = g.pathTo(source, vertex);
console.log(paths)
// g.showPath(paths)