The project is a simple website aimed at allowing users to donate unnecessary items.

#### APPLICATION DEMO

https://give-away-things-b4399.web.app/#/

#### TECHNOLOGIES USED

![technology](https://user-images.githubusercontent.com/55457173/81610991-a1819880-93da-11ea-9835-642251b07fd5.png)

#### PRESENTATION

Using Firebase with Realtime Database, an array of data is retrieved.

When clicking the appropriate button (Foundations, Non-governmental Organizations, Local Collections) - the content below them changes.

Foundations: 3 pages with 3 entries each
Non-governmental Organizations: 2 pages with 3 entries each
Local Collections: one page, pagination is hidden.

![pagination](https://user-images.githubusercontent.com/55457173/81607438-fa4e3280-93d4-11ea-929e-610494acaa7b.gif)

Form validation is done using Formik. After correctly filling out the form, the data is sent via a POST method as JSON to the endpoint: https://fer-api.coderslab.pl/v1/portfolio/contact


![form](https://user-images.githubusercontent.com/55457173/81607493-1225b680-93d5-11ea-9942-7c252d87de2c.gif)

The application supports registration, login, and logout using Firebase Authentication.

After successful authentication, the user is redirected to the homepage with a modified header, allowing them to navigate to the "Donate Items" form or log out.

![logIn](https://user-images.githubusercontent.com/55457173/81607547-249ff000-93d5-11ea-90e5-62f96b245643.gif)

Navigating to the "Donate Items" form is possible after proper login or registration. The form consists of 4 steps, between which the user can navigate using the Next and Back buttons. At the end, a summary is shown. After clicking the confirm button, the data from the forms is sent to Firebase.
 
![giveStuff](https://user-images.githubusercontent.com/55457173/81607677-587b1580-93d5-11ea-89b5-9414b3296075.gif) 
