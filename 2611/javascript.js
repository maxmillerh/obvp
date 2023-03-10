let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function () {
  fetch('/ajax.html').then(
    response => {
      return response.text();
    }
  ).then(
    text => {
      div.innerHTML = text;
    }
  );
});

let form = document.querySelector('form');
let input1 = document.querySelector('[name="input1"]');
let input2 = document.querySelector('[name="input2"]');
form.addEventListener('submit', function (event) {
  let searchParams = new URLSearchParams();

  searchParams.set('input1', input1.value);
  searchParams.set('input2', input2.value);

  let path = '/handler/?' + searchParams.toString();

  fetch(path).then(
    response => {
      return response.text();
    }
  ).then(
    text => {
      console.log(text); // ответ сервера
    }
  );

  event.preventDefault();
});

form.addEventListener('submit', function (event) {
  let promise = fetch('/handler/', {
    method: 'POST',
    body: new FormData(this),
  }).then(
    response => {
      return response.text(); // ответ сервера
    }
  ).then(
    text => {
      console.log(text);
    }
  );

  event.preventDefault();
});