import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        getStarred(){
            return this.get('store').query('entry', { starred: true });            
        },
        getRowsBy(param) {
            if (param !== '') {
                return this.get('store').query('entry',param);                
            } else {
                return this.get('store').findAll('entry');
            }
        }
    }
});
