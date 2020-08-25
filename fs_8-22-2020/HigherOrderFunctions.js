const higherOrderFunction = (f, num) => {
  for (i=0 ; i<num; i++){
    f()
  }

}

module.exports = higherOrderFunction