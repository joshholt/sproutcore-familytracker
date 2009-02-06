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

  properties: ['guid','familyName'],
  contacts: SC.Record.hasMany('Familytracker.Contact','familyList'),
  members: function() {
    return this.get('contacts').count();
  }.property('members')

}) ;


/* End ------------------------------------------------------- models/family.js*/
