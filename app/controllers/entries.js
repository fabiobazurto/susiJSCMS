import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        getRowsBy(param) {
            if (param !== '') {
                return this.get('store').query('entry', { category: param });
            } else {
                return this.get('store').findAll('entry');
            }
        }
    }
});
