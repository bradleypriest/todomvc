Todos.ApplicationController = Ember.ArrayController.extend({
  currentFilter: null,

  arrangedContent: function(){
    var filter = this.get('currentFilter');
    var content = this.get('content')
    if (filter === "active"){
      return content.filterProperty('isCompleted', false);
    } else if(filter === "completed"){
      return content.filterProperty('isCompleted');
    } else {
      return content;
    }
  }.property('content', 'currentFilter', 'content.@each.isCompleted'),

  remaining: function() {
    return this.get('content').filterProperty('isCompleted', false).get('length');
  }.property('content.@each.isCompleted'),

  remainingFormatted: function() {
    var remaining = this.get('remaining');
    var plural = remaining === 1 ? 'item' : 'items';
    return '<strong>%@</strong> %@ left'.fmt(remaining, plural);
  }.property('remaining'),

  completed: function() {
    return this.get('content').filterProperty('isCompleted', true).get('length');
  }.property('content.@each.isCompleted'),

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  allAreDone: function( key, value ) {
    content = this.get('content')
    if ( value !== undefined ) {
      content.setEach('isCompleted', value);
      return value;
    } else {
      return !!content.get('length') &&
        content.everyProperty('isCompleted', true);
    }
  }.property('content.@each.isCompleted')
});
