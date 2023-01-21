const AUTHOR = 'YAMADA, Yoshihiko';

export class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getName() {
        return this.lastName + this.firstName;
    }
}

export class Area { }