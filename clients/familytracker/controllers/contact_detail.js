// ==========================================================================
// Familytracker.ContactDetailController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.ObjectController
  @author AuthorName
  @version 0.1
  @static
*/
Familytracker.contactDetailController = SC.ObjectController.create(
/** @scope Familytracker.contactDetailController */ {
  commitChangesImmediately: false,
  contentBinding: 'Familytracker.familyListController.selection'
}) ;
