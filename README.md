# shopping_cart
shopping cart/ecommerce store for the odin project

### notes
-I realize this too late but we probably need a page, a child component
where the route(and I imagine we just create another router on main or pull
the informatiion up via states until main). For the api info we pull,
this is to add information, like a description, although the api doesn't provide it
so we can't but I would image we would for a real commerce site

Components:
    * navbar
    * home page 
        * profile component
        * popular items(maybe this link to the appropriate item url maybe not)
    * shopping page
        * menu item
    * shopping cart page
        * component of checkout with info on sum. Props are item and price and quantity
steps
1) figma-done. therefore we understand the funcitonality we need and all the main components we need for each that we'll reuse
2) create navbar and get it to go between the two pages. use tests-done(no need for tests)
3) use test driven development here, i want to learn test for ui in react
    a. click on navbar(wait specs say devs have already done so)
    b. clicking on menu item increment increases total items by 1 and lower increase price
    c. clicking on menu item decrease decreases total item by 1 and lower price
    d. change input and it should do so approrpiately. Do not allow anything besides number(numbers cannot be negative and maybe we should do a limit)
4) in shopping page we create menu item component
4a) we fetch the image api from https://github.com/surhud004/Foodish#readme
5) create a checkout page with totals, and a submit button(which does nothing)
6) Fill out page of normal content
7) CSS! work on our css animation and styling skills.
7a) external fonts
7b) animation for buttons
    7b1) I kinda want every time I click on a button that makes money, an animation of 
        mr krabs go money money money, or a gif of money burning on the site which 
        would be the user's wallet
7c) I want to do the thing in apps where you click on something and it goes to that header, i think that's very cool

