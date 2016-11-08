'use strict'

let multiple = (a, b) => {

  if(typeof a === 'undefined' && typeof b === 'undefined'){
    // params a & b not exist
    return 'no params'
  }else if(a && !b || b && !a){
    // only 1 params exist
    return 'only 1 param'
  }else{
    return a * b
  }
}

module.exports = {
  multiple: multiple
}
