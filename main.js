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
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}
const demoGithubUser = async function () {
  try {
    let name = prompt('Enter a name?', 'iliakan')
    const user = await loadJson(`https://api.github.com/users/${name}`)
    alert(`Full name: ${user.name}.`)
    return user
  } catch (err) {
    console.dir(err)
    if (err instanceof HttpError && err.response.status == 404) {
      alert('No such user, please reenter.')
      return demoGithubUser()
    } else {
      throw err
    }
  }
}

demoGithubUser()


EJERCICIO #05
async function wait() {
await new Promise(resolve => setTimeout(resolve, 1000)); return 10;
} 

function f() {
  wait().then(console.log)
}

f()

EJERCICIO #06
//Sí, se activará el catch ya que cualquier error que haya en una promesa, el catch lo agarra.


EJERCICIO #07
const printNumbers = function (from, to) {
  setInterval(() => {
  if (from > to) {
    return
  }
  console.log(from++)
  }, 1000)
}

printNumbers(2, 8)


const printNumbers2 = function (beg, end) {
  setTimeout(() => {
    console.log(beg++)
    if (beg < end) {
    printNumbers2(beg, end)
  }
  }, 1000)
}

printNumbers2(2, 8)
*/
