function orderWeight(strng) {
    strng = strng.split(' ')
    return strng.sort(function(a , b) {
      let aSum = Number(a.split('').reduce((sum, value) => sum + Number(value), 0))
      let bSum = Number(b.split('').reduce((sum, value) => sum + Number(value), 0))
      
      if (aSum === bSum)
        {
          return a.localeCompare(b)
        }
      else{
        a = aSum
        b = bSum
        
        return a - b
      }
    }).join(' ')
}