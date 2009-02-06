/* Start ----------------------------------------------------- controllers/contact_list.js*/

// ==========================================================================
// Familytracker.ContactListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Familytracker.contactListController = SC.CollectionController.create(
/** @scope Familytracker.contactListController */ {
  //useControllersForContent: NO,
  //commitChangesImmediately: false,
  allowsEmptySelection: false,
  allowsMultipleSelectoin: false,
  contentBinding: 'Familytracker.contactDetailController.contacts'
}) ;


/* End ------------------------------------------------------- controllers/contact_list.js*/

