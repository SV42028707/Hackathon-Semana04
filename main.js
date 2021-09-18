/* EJERCICIO #00
let promise = new Promise(
function(resolve, reject) {
resolve(1);
 setTimeout(() => resolve(2), 1000);
});

promise.then(alert) 


EJERCICIO #01
let delay = function (ms) {
  return new Promise( function(resolve, reject) {
              setTimeout(() => resolve(`runs after ${ms / 1000} seconds`), ms);
              });
}

delay(3000).then(alert)


EJERCICIO #02
let promise = new Promise(
function(resolve, reject) {
//reject(1);
 setTimeout(() => resolve(2), 1000);
});
promise.then(alert, alert)
promise.then(alert).catch(alert);

//En este caso, sí se comportan de la misma manera
//en cualquier circunstancia, para cualquier función de controlador


EJERCICIO #03
const loadJson = async function (url) {
  const res = await fetch(url);
  if (res.status == 200) {
    return await res.json();
  } else {
    throw new Error(res.status);
  }
};

loadJson("no-such-user.json").catch(alert);


EJERCICIO #04
*/
