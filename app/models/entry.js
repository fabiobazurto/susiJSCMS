import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    synopsis: DS.attr('string'),
    poster: DS.attr('string'),
    frontend_image: DS.attr('string'),
    starred: DS.attr('boolean')
});
