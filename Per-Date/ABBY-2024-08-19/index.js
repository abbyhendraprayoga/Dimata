// const a = 1;
// const b = 2;
// const c = 3;

// console.log(a);
// setTimeout(() => console.log(b), 1000);
// console.log(c);

// let janji = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("Done"), 1000);
//   //   setTimeout(() => reject(new Error("Ups")), 1000);
// });

// janji
//   .then((hasil) => {
//     console.log("[INI HASIL]", hasil);
//   })
//   .catch((error) => {
//     console.log("[INI ERROR]", error);
//   })
//   .finally(() => {
//     console.log("[INI RESOLVE], Resolve maupun reject tetap dijalankan");
//   });

function fetchDadJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.joke);
    })
    .catch((error) => {
      console.error(`Error fetching dad joke: ${error}`);
    })
    .finally(() => {
      console.log("THANK YOU!");
    });
}

fetchDadJoke();
