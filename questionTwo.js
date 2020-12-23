const getMonth = (callback) => {
 setTimeout(() => {
  let error = true
  let month = [
   'January', 'February', 'March', 'April', 'May', 'Juni', 'July', 
   'August', 'September', 'October', 'November', 'Desember'
  ]
  if (!error) {
   callback(null, month)
  } else {
   callback(new Error('Sorry Data Not Found', []))
  }
 }, 4000)
}

getMonth(function (error, month) {
 if (error === null) {
   let mapMonth = month.map((m) => m);
   console.log(mapMonth);
 } else {
   console.log(error);
 }
});