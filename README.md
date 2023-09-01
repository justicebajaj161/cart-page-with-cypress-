
Problem Statement
Cart App Development with React 
You are tasked with building a Cart App using React for the frontend . This app should allow users to view items, add them to their cart, and modify the quantities of the items in their cart.
Requirements:
General:
The app should be built using React for the frontend 
The app should be responsive and user-friendly.
Features:
Navigation Bar (<nav> tag)
The navigation bar should always be present on the page.
It should contain the text "CartPage".
It should stay at the top of the page when scrolling (Hint: CSS position: sticky).
It should display the total count of unique products in the cart.
Cart Container
The cart container should have a class of .cart.
Within the cart container, each cart item should have its own distinct container with a class of .cart-item.
Cart Items
Each cart item should have:
An image (inside an <img> tag).
A title (inside a <h4> tag).
A price display with a class of .item-price.
An amount display with a class of .amount.
There should be buttons to increase (+.amount-btn) and decrease (-.amount-btn) the quantity of the cart item. When clicked, they should respectively increase or decrease the item's quantity.
There should be a remove button for each item with a class of .remove-btn. Clicking this should remove the item from the cart.
When the item count reaches zero (either by decreasing or by using the remove button), the item should be removed from the cart.
Total Price Display
The total price of all items in the cart should be displayed and should have a class of .cart-total span.
Clear Cart Button
There should be a button to clear all items from the cart with a class of .clear-btn.
Clicking this should remove all items from the cart.
Loading Indicator
When fetching products, a loading indicator (or element) with a class of .loading should be displayed.
This loading indicator should not be present once products have been loaded.
Error Handling
If there's an error in fetching the data (for instance, from Firebase), an error message with a class of .error-message should be displayed to the user.
Empty Cart Message
If the cart is empty, a message "Your cart is empty" should be displayed to the user.
Data Persistence
The cart's data should be retained even after a page refresh.
Testing:
Once you've built your application, you should ensure that it passes all the provided test cases. The test cases check various functionalities of your app, ensuring that it functions correctly and provides a smooth user experience.
Important Classes, IDs, and Error Messages:
Classes: nav, cart, cart-item, item-price, amount, amount-btn, remove-btn, clear-btn, loading, error-message.
Error Messages: "Your cart is empty".

