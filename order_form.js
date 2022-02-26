var Shark = {};

Shark.Fields = {
  OrderCategory: 'shark_ordercategory',
};

Shark.onOrderCategoryChange = function (executionContext) {
  var formContext = executionContext.getFormContext();
  var orderCategory = formContext
    .getAttribute(Shark.Fields.OrderCategory)
    .getValue();
  alert('Selected OrderCategory is :' + orderCategory);
};
