let tempStr = ''
export const print = function (...rest) {
  if(rest.length === 0 && tempStr){
    console.log(tempStr)
    tempStr = ''
  }else{
    console.log(...rest)
  }
}

export const putstr = function(s){
  tempStr+=s
}