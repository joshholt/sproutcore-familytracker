/* Start ----------------------------------------------------- models/family.js*/

// ==========================================================================
// Familytracker.Family
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Familytracker.Family = SC.Record.extend(
/** @scope Familytracker.Family.prototype */ {
  contactType: 'Familytracker.Contact',
  
  members: function() {
      return this.get('contacts').get('count');
  }.property('contacts')

});


/* End ------------------------------------------------------- models/family.js*/
