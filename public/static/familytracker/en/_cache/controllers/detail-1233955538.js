/* Start ----------------------------------------------------- controllers/detail.js*/

// ==========================================================================
// Familytracker.DetailController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName
  @version 0.1
  @static
*/
Familytracker.detailController = SC.ArrayController.create(
/** @scope Familytracker.detailController */ {
  /**
    Since this controller displays the contacts for the selected family, its
    content property is bound to the contacts property of the selected family
    controller.
  */
  contentBinding: 'Familytracker.familyController.contacts',
  allowsEmptySelection: false,
  allowsMultipleSelection: false
  
});


/* End ------------------------------------------------------- controllers/detail.js*/

