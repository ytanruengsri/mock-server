# Mock Zone
Simple fake json server with one file configuration

## Installation
```sh
$ npm install -g mock-zone
```

## Example
Create a json file `db.json`
```json
{
    "foods": [
        {
            "id": "f-001",
            "name": "Chicken Wings",
            "price": "4.5€"
        },
        {
            "id": "f-001",
            "name": "Burger Killer",
            "price": "6.8€"
        }
    ],
    "drinks": [
        {
            "id": "d-001",
            "name": "Coca-Cola",
            "price": "1.5€"
        },
        {
            "id": "d-001",
            "name": "Pepsi",
            "price": "1.6€"
        }
    ],
    "sweets": {
        "id": "s-001",
        "name": "Tiramisu",
        "price": "2€"
    }
}
```

Start the mock JSON server
```sh
$ mock-zone --data db.json
```

Enjoy!
```
http://localhost:3000/foods
```