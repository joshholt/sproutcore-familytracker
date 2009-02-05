/* Start ----------------------------------------------------- views/contact_card.js*/

// ==========================================================================
// Familytracker.ContactCardView
// ==========================================================================

require('core');

/** @class

  A Contact Card View will display a single contact in a collection
  in business card fasion.

  @extends SC.View
  @author Josh Holt
  @version 0.1
*/
Familytracker.ContactCardView = SC.View.extend(
/** @scope Familytracker.ContactCardView.prototype */ {
  emptyElement: '<div></div>',
  
  content: null,
  contentBindingDefault: SC.Binding.MultipleNotEmpty,
  
  render: function() {
    var html = [];
    var content = this.get('content');
    
    // Iterate through the collection and
    // Create the card for the contact
    if(content){
      html.push(this._renderCard(content));
    }
    
    //set the innerHTML of the view
    
    html = html.join('');
    this.set('innerHTML',html);
  }.observes('content'),
  
  _renderCard: function(record) {
    var html = [];
    html.push('<div class="contactCard">');
    html.push('<h1>');
    html.push(record.get("firstName") + ' ' + record.get("lastName"));
    html.push('</h1>');
    html.push('<p>');
    html.push(record.get("address"));
    html.push('</p>');
    html.push('</div>');
    return html.join('');
  }
}) ;


/* End ------------------------------------------------------- views/contact_card.js*/

