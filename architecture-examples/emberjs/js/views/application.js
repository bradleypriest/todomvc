Todos.ApplicationView = Ember.View.extend({
  filterBinding: "controller.currentFilter",

  isAll: function() {
    return Ember.empty( this.get('filter') );
  }.property('filter'),

  isActive: function() {
    return this.get('filter') === 'active';
  }.property('filter'),

  isCompleted: function() {
    return this.get('filter') === 'completed';
  }.property('filter')
});
