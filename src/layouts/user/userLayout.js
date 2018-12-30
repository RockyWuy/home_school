class Basic {
    constructor(props) {
        this.name = props.name;
    }
}
class Person extends Basic {
    constructor(props) {
        super(props);
        this.sets = props.sets;
    }
}
let person = new Person({
    name: 111,
    sets: 2222
})
console.log(person)
