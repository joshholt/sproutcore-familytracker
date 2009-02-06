/* Start ----------------------------------------------------- controllers/family_list.js*/

// ==========================================================================
// Familytracker.familyListController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Familytracker.familyListController = SC.CollectionController.create(
/** @scope Familytracker.contactListController */ {
  allowsEmptySelection: false,
  allowsMultipleSelection: false,
  members: function() {
      return this.contacts.count();
  }.observes('Familytracker.Family.contacts.count')//,
  //commitChangesImmediately: false
  //useControllersForContent: NO
}) ;


/* End ------------------------------------------------------- controllers/family_list.js*/

