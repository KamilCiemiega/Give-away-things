Projekt jest prostą stroną internetową, mającą na celu umożliwienie urzytkownikowi oddania niepotrzebnych rzeczy.

#### DEMO APLIKACJI

https://give-away-things-b4399.web.app/#/

#### UŻYTE TECHNOLOGIE

![technology](https://user-images.githubusercontent.com/55457173/81610991-a1819880-93da-11ea-9835-642251b07fd5.png)

#### PREZENTACJA

Przy pomocy firebase z wykorzystaniem Realtime Database pobierana jest tablica z danymi.

Po kliknięciu w odpowiedni przycisk (Fundacjom, Organizacjom pozarządowym, Lokalnym zbiórkom) - jest zmieniana treść pod nimi.

Fundacje: 3 strony po 3 wpisy
Organizacje pozarządowe: 2 strony po 3 wpisy
Lokalne zbiórki: jedna strona paginacja zostaje ukryta.

![pagination](https://user-images.githubusercontent.com/55457173/81607438-fa4e3280-93d4-11ea-929e-610494acaa7b.gif)

Walidacja formularza odbywa się przy pomocy formika, po porawnym uzupełnieniu formularza dane wysyłane są metodą POST jako JSON do endpointu: https://fer-api.coderslab.pl/v1/portfolio/contact.

![form](https://user-images.githubusercontent.com/55457173/81607493-1225b680-93d5-11ea-9942-7c252d87de2c.gif)

Możliwość rejsetracji,logowania,wylogowania z wykorzystaniem Firebase Authentication.

Po poprawnej autoryzacji użytkownik zostaje przekierowany do strony głównej ze zmienionym nagłówkiem dającym możliwość przejścia do formularza "Oddaj rzeczy" czy wylogowania.

![logIn](https://user-images.githubusercontent.com/55457173/81607547-249ff000-93d5-11ea-90e5-62f96b245643.gif)

 Przejście do formularza "Oddaj rzeczy" jest możliwe po prawidłowym zalogowaniu się lub zarejestrowaniu.Formularz składa sięz 4 kroków,pomiędzy którymi możemy się przemieszczać z wykorzysaniem przysików Dalej,Wstecz.Na końcu pokazuje nam się podsumowanie.Po kliknięciu przycisku potwiedzam dane z formularzy wysyłane są do firebase.
 
![giveStuff](https://user-images.githubusercontent.com/55457173/81607677-587b1580-93d5-11ea-89b5-9414b3296075.gif) 
