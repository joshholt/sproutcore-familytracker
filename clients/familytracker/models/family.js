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
  
  
  contactsType: 'Familytracker.Contact',
  
  contacts: function() {
    var this_fams_contacts = Familytracker.Contact.findAll({'familyList': this.get('guid')});
    return this_fams_contacts._reverse();
  }.property('contacts'),
  
  members: function() {
      return this.get('contacts').get('length');
  }.property('members'),
  
  countChanged: function(){
    return this.set('members',this.get('contacts').get('length'));
  }.observes('contacts.length')

});
