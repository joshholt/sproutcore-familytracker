/* Start ----------------------------------------------------- controllers/contact_edit.js*/

// ==========================================================================
// Familytracker.ContactEditController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.ObjectController
  @author Josh Holt
  @version 0.1
  @static
*/
Familytracker.contactEditController = SC.ObjectController.create(
/** @scope Familytracker.contactDetailController */ {
  commitChangesImmediately: false,
  contentBinding: 'Familytracker.contactListController.selection'
}) ;


/* End ------------------------------------------------------- controllers/contact_edit.js*/

