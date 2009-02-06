/* Start ----------------------------------------------------- controllers/contact.js*/

// ==========================================================================
// Familytracker.ContactController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.Object
  @author    AuthorName
  @version 0.1
  @static
*/
Familytracker.contactController = SC.ObjectController.create(
/** @scope Familytracker.photoController */ {
  
  contentBinding: 'Familytracker.detailController.selection',
  commitChangesImmediately: false,
  
  performCommitChanges: function() {
    var idx_of_change = Familytracker.detailController.indexOf(this)
    arguments.callee.base.apply(this,arguments);
    Familytracker.detailController.replace(idx_of_change,null,this);
    //Familytracker.detailController.set('content', Familytracker.Contact.findAll({'familyList': this.get('familyList')})._reverse());
  }
  
}) ;


/* End ------------------------------------------------------- controllers/contact.js*/
