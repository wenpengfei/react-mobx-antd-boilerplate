
import { observable, action } from 'mobx';

export default class AppStore {

    @observable counter = 0;

    @action increment = () => {
        this.counter += 1;
    }

    @action decrement = () => {
        this.counter -= 1;
    }
}