# Task Day 4

### 1. Make a Promise
Code di bawah masih menggunakan callback untuk menangani proses asynchronous.
Buatlah function dengan nama `readDir` berbasis [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) untuk menangani proses yang sama.

```js
const fs = require('fs')

fs.readdir('/', (err, result) => {
  if (err) {
    throw new Error(err.message)
  }
  console.log(result)
})
```
### 2. Get Request With Axios
Ambilah data dari https://jsonplaceholder.typicode.com/posts dan https://jsonplaceholder.typicode.com/users 
dengan menggunakan [Axios](https://github.com/axios/axios). Lalu gabungkan output `posts` dan `users` berdasarkan `userId` yang tepat.

Contoh hasil akhir:

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "user": {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    "user": {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  },
  {
    "userId": 6,
    "id": 53,
    "title": "ut quo aut ducimus alias",
    "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique",
    "user": {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    }
  }
]
```
### 3. Playing With Promise
Dengan menggunakan [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), buatlah output code di bawah menjadi "1, 2, 3, Done".

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {

  }, 1000);
}

console.log('Done')
```

> Anda hanya boleh menambahkan code, bukan menghapus atau mengubah urutan code, atau menambahkan `setTimeout` baru.

### 4. Fetch the Data
Fetch data from https://mul14.github.io/data/employees.json

1. Find employees which have salary more than Rp15.000.000
2. Find employees which life in Jakarta
3. Find employees which birthday on March
4. Find employees in Research and Development departement
5. Find how many each employee absences in October 2019