import { observable, decorate } from "mobx";

class Sentence {
    parts = [];

    constructor() {
        this.parts = [];
    }

    add(part) {
        this.parts.push(part);
    }

    toString() {
        return this.parts.join(' ');
    }
}

decorate(Sentence, {
    parts: observable,
})

export default new Sentence();
