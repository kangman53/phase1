function hello(callback) {
  setTimeout(() =>{
    const data = {
      a : 1,
      b : 2
    }

    callback(data);
  }, 2000);

  console.log(`Mengambil Data`);
}

hello((data) => {
  console.log(data);
})
