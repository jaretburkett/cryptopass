import {autorun, observable} from 'mobx';

class Store {
    // init states
    @observable seedhex='';
}

let store = new Store;

export default store;

autorun(()=>{
    // this runs on a change to the state
});
