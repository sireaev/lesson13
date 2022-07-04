class Animal {
    membre = 0;
    areBlana = false;
    static tip = 'tip';
    constructor(data) {
        if (data) {
            this.membre = data.membre;
            this.areBlana = data.areBlana;
            // this.tip = data.tip;
        }
    }

    walk(isDefault = true) {
        if (isDefault) {
            console.log('Animal has started to walk!');
        }
    }
}



class Urs extends Animal {
    _height = 0;
    _weight = 0;
    static extendedTip = super.tip;
    constructor(data) {
        super(data);
        if (data) {
            this._height = data.height;
            this._weight = data.weight;
        }
    }

    get height() {
        return this._height;
    }

    set height(height) {
        this._height = height;
    }

    get weight() {
        return this._height;
    }

    set weight(weight) {
        this._weight = weight;
    }

    static afiseazaTipulStatic() {
        return this.extendedTip;
    }

    walk() {
        super.walk(false);
        console.log('Animal has started to wolk on 4 feet');
    }
}

// const a = new Urs({tip: 'carnivore'});
// console.log(a.extendedTip);


function myFunction() {
    document.write('<h1>This is my function<h1>');
}

function myFunctionThatReturnsSomething() {
    return '<h1>This is my function<h1>'
}

// const output = myFunctionThatReturnsSomething();
// document.write(output)

// document.write(myFunctionThatReturnsSomething());

const myDeclarationOfFunction = function() {
    return '<h2>This is my Heading 2!</h2>';
}

// document.write(myDeclarationOfFunction);


// SELF INVOKED FUNCTIONS
// ((function() {
//     document.write('<h1>This is my heading in anonym function!');
// })())

// (() => {
//     document.write('<h1>This is my heading in anonym function!');
// })()


// Sugar methods of JavaScript
// bind, call, apply
// bind - defineste contextul unui obiect (function type)

let user = {
    name: 'Victoria',
    getName: function() {
        return this.name;
    }
}

let user2 = {
    name: '',
    getName: function(test1, test2, test3) {
        console.log('this.name= ', this.name, test1, test2, test3)
        return this.name;
    }
}

const definedUser = {
    name: 'definedUser'
}

const definedUser2 = {
    name: 'definedUser2'
}

// bind - schimbati contextul functiei
// user2.getName = user2.getName.bind({ name: 'Gabriela' })

// call - schimba contextul functiei si apelati argumente prin virgula
// document.write(user2.getName.call(definedUser, '1', '2', '3'));

// apply - schimba contextul functiei si apeleaza ca argument un array
document.write(user2.getName.apply(definedUser, ['4', '5', '6']));
