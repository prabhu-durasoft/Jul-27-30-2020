* Create GuessingGameComponent.js
* Create GuessingGameComponent.test.js
* Have a textbox to enter your number
* Click of the button displays the message __Aim Higher__ or __Aim Lower__ or __You've got it in x attempts__
* Use the GuessingGame class we wrote yesterday
* Store the GuessingGame object in the state of GuessingGameComponent.js
``` javascript
    class GuessingGameComponent {
        constructor(props) {
            super(props);
            this.state = {
                game: new GuessingGame()
            }
        }

        render() {
            //YOUR CODE GOES HERE
        }

    }

```