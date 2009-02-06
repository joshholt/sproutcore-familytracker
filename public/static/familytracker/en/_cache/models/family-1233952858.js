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
  contacts: function() {
    var this_fams_contacts = Familytracker.Contact.findAll({'familyList',this.get('guid')});
    return this_fam_contacts;
  }.property('contacts'),
  
  contactsType: 'Familytracker.Contact',
  
  members: function() {
      return this.get('contacts').get('count');
  }.property('contacts')

});


/* End ------------------------------------------------------- models/family.js*/

