function slicer(lastNumber, sliceSize)
{
  var found = [];
  // each slices covers ["from" ... "to"], incl. "from" and "to"
  for (var from = 2; from <= lastNumber; from += sliceSize)
  {
    var to = from + sliceSize;
    if (to > lastNumber){
      to = lastNumber;
    }    
    found.push([from,to]);
  }
  console.log(JSON.stringify(found));
  return found;
}
slicer(1000000, 1024*128);