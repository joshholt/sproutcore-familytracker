/* Start ----------------------------------------------------- models/contact.js*/

// ==========================================================================
// Familytracker.Contact
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Familytracker.Contact = SC.Record.extend(
/** @scope Familytracker.Contact.prototype */ {
  properties: ['guid','firstName','lastName', 'address','phoneNumber','familyList'],
  familyListType: 'Familytracker.Family'
}) ;


/* End ------------------------------------------------------- models/contact.js*/

