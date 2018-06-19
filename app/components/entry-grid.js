import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.get('filter')('').then((results)=>this.set('results',results));
    }     
});
