// Search names by word
const seachName = (search) => {
 return new Promise((resolve, rejected) => {
  setTimeout(() => {
   const listName = ['Abbi', 'Satria', 'Soemingkar', 'Adji', 'Pamungkas']
   const nameSearch = listName.filter(data => data.toLowerCase().includes(search))
   if (nameSearch.length > 0) {
    resolve(nameSearch)
   } else {
    rejected(new Error('No word ' + search))
   }
  }, 3000)
 })
}

function showName(search) {
 seachName(search)
 .then(result => { 
  console.log(result)
 })
 .catch(error => {
  throw error
 })
}
showName('ad')

// Sum all the elements in the array
const sumArray = (array) => {
 return new Promise((resolve, rejected) => {
  setTimeout(() => {
   if (array.length > 0) {
    const arraySum = array.reduce((ac, cur) => ac + cur)
    resolve(arraySum)
   } else {
    rejected(new Error('The amount of data in the array must be greater than 0'))
   }
  }, 3000)
 })
}

async function showSumArray(array) {
 try{
  const result = await sumArray(array)
  console.log(result)
 }catch(error){
  throw error
 }
}
showSumArray([2, 25, 4, 14, 17, 30, 8])