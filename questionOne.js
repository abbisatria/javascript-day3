const cekHariKerja = (day) => {
 return new Promise((resolve, rejected) => {
  setTimeout(() => {
   const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
   let cek = dataDay.find((item) => {
    return item === day
   })
   if (cek) {
    resolve(cek)
   } else {
    rejected(new Error('Hari ini bukan hari kerja'))
   }
  }, 3000)
 })
}

function thenCatch(day) {
 cekHariKerja(day)
 .then(result => { 
  console.log(result)
 })
 .catch(error => {
  throw error
 })
}
thenCatch('rabu')
/* 
then catch akan mengembalikan satu callback dengan satu parameter
jika hasil nya resolve maka masuk ke then
jika hasil nya rejected maka masuk ke catch 
*/


async function tryCatch(day) {
 try{
  const result = await cekHariKerja(day)
  console.log(result)
 }catch(error){
  throw error
 }
}
tryCatch('rabu')
/*
async membuat sebuah fungsi asynchronous menjadi synchronous
await menunda eksekusi selanjutnya hingga proses asynchronous nya selesai
jika hasil nya resolve maka masuk ke try
jika hasil nya rejected maka masuk ke catch
*/