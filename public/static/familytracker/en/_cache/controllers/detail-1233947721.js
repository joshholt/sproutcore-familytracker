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
Familytracker.detailController = SC.CollectionController.create(
/** @scope Familytracker.detailController */ {

  useControllersForContent: NO,

  /**
    Since this controller displays the contacts for the selected family, its
    content property is bound to the contacts property of the selected family
    controller.
  */
  contentBinding: 'Familytracker.familyController.contacts'
  
});


/* End ------------------------------------------------------- controllers/detail.js*/

