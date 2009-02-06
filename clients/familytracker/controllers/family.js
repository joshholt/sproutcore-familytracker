// ==========================================================================
// Familytracker.FamilyController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName
  @version 0.1
  @static
*/
Familytracker.familyController = SC.ObjectController.create(
/** @scope Familytracker.albumController */ {

  contentBinding: 'Familytracker.masterController.selection'

}) ;
