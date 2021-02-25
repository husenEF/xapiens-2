# Task day 3  - OOP

## task 1
Create `Log` class with ability to log text with several levels. 
The levels based on [severity levels in Syslog](https://en.wikipedia.org/wiki/Syslog#Severity_level).

The `Log` class should be able to produce output to a `app.log` file, like so
```log
[2018-04-03T12:10:36.100Z] INFO: This is an information about something.
[2018-04-03T13:21:36.201Z] ERROR: We can't divide any numbers by zero.
[2018-04-03T16:45:36.210Z] NOTICE: Someone loves your status.
[2018-04-03T23:40:36.215Z] WARNING: Insufficient funds.
[2018-04-03T23:56:36.215Z] DEBUG: This is debug message.
[2018-04-04T04:54:36.102Z] ALERT: Achtung! Achtung!
[2018-04-04T05:01:36.103Z] CRITICAL: Medic!! We've got critical damages.
[2018-04-04T05:05:36.104Z] EMERGENCY: System hung. Contact system administrator immediately!
```

It would be great if you could create filter based on level, date, and messages.
For example filter by `CRITICAL` at `2018-04-04`.

> Don't use any 3rd-party library.

## task 2

Create `Cipher` class with ability to encrypt/decrypt a string.

Usage example
```js
const message = Cipher.encrypt('Ini tulisan rahasia', 'p4$$w0rd')

console.log(message) // Anyone without password can't read this message

const decryptedMessage = Cipher.decrypt(message, 'p4$$w0rd')

console.log(decryptedMessage) // Ini tulisan rahasia
```

## task 3 Cart - Method Chaining

Create `Cart` class with method chaining ability. 
> please crate with html code

Usage example
```js
const cart = new Cart()

// Do some chainings
cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
    .addItem({ item_id: 2, price: 10000 })               // By default quantity is 1
    .addItem({ item_id: 3, price: 5000, quantity: 2 })
    .removeItem({item_id: 2})
    .addItem({ item_id: 4, price: 400, quantity: 6 })
    .addDiscount('50%')

cart.totalItems() // 3

cart.totalQuantity() // 11

cart.totalPrice() // 51200

cart.showAll() // Show all items in cart

```