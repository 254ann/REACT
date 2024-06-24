The desktop view of the above react project
![react_assignment](https://github.com/254ann/REACT/assets/108072433/57449548-26c8-40e3-a33c-a6f351dfa480)

FOR the FIRST div that has STORIES,this is what I did: Initial Setup
Created a React project using vite.
In App component, defined the initial stories data as provided.
Defined the List Component
Created a List component that accepts a list prop and renders a list of items.
Ensured that each item in the list is passed as a prop to an Item component.
Define the Item Component
Created an Item component that accepts an item prop.
Rendered the item's details (title, author, number of comments, points) inside the Item component.
Passed Stories to List Component
In the App component, passed the initial stories data to the List component as a prop.
Added a Search Input
Added a search input field in the App component.
Used the useState hook to manage the state of the search term.
Filtered Stories Based on Search Term
Filtered the stories based on the search term.
Passed the filtered list of stories to the List component.

FOR THE LOGIN PART: Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  * The login button should trigger the login() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.
 
FOR THE SEARCH PRODUCT PART: Scenario:You are building an e-commerce application with a product list and a filter component. The application should display a list of products and allow users to filter these products based on a search term and selected categories. Your task is to lift the state up to the common ancestor component to manage the search term and selected categories.
Requirements:
App Component:
Manage the state for the search term and selected categories.
Pass the state and callback functions to FilterComponent and ProductListComponent.
FilterComponent:
Provide an input field for searching by product name.
Provide checkboxes for filtering by categories (e.g., "Electronics", "Clothing", "Books").
Call the respective callback functions passed from App to update the search term and selected categories.
ProductListComponent:
Receive the filtered list of products from App based on the search term and selected categories.
Display the list of filtered products using a ProductComponent.
ProductComponent:
Display individual product details (e.g., name, category, price).

FOR THE PRODUCT CARDS PART:This card, when clicking red, changes the background to red and also changes the shoe to the red shoes. This scenario should also work for different buttons black and orange. Download 3 pictures of Jordan - a red shoe, a black shoe and an orange shoe. Make sure you creating a productComponent , then using the component product to pass props where needed on dispayProductComponent

This is a react application created by the above code.,the below image shows part of the mobile phone view. This is clearly shows that this project is responsive.
![react](https://github.com/254ann/REACT/assets/108072433/cd6998fd-8536-491a-99a3-66e1cc6e3a41)
