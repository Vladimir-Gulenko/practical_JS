var tableId = document.getElementById('person');
var tbody = tableId.children[1];

// constructor pattern way of creating object class
var peopleConstructor = function (name, age, state) {
    this.age = age;
    this.name = name;
    this.state = state;

    this.printPerson = function () {
        var newRow = document.createElement('tr');
        newRow.appendChild(document.createElement('td')).innerHTML = this.name;
        newRow.appendChild(document.createElement('td')).innerHTML = this.age;
        newRow.appendChild(document.createElement('td')).innerHTML = this.state;
        tbody.appendChild(newRow);
    }
};

// NOTE: Creating the instance of which directly call the function constructor
var person1 = new peopleConstructor("Kim", 29, "Canada");
var person2 = new peopleConstructor("Jhon", 45, "New York");
var person3 = new peopleConstructor("Jack", 35, "Boston");

person1.printPerson();
person2.printPerson();
person3.printPerson();