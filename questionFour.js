const fetch = require('node-fetch');

const getName = () => {
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(result => result.json())
 .then(result => {
  const dataName = result
  dataName.forEach(m => console.log(m.name))
 })
 .catch(error => {
  throw error
 })
}
getName()