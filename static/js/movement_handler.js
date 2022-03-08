document.addEventListener('DOMContentLoaded', function(){
        // Find search button
        const searchButton1 = document.querySelector('#search-button');
        console.log(searchButton1)
        // Pause animation
        searchButton1.style.animationPlayState = 'paused';

        // Wait for button to be clicked
        searchButton1.onclick = function(){
                // ANimate from center to left if already paused
                if(searchButton1.style.animationPlayState == 'paused'){
                        searchButton1.style.animationPlayState = 'running';
                }

                // Otherwise pause the animation
                else{
                        searchButton1.style.animationPlayState = 'paused';
                }

                makeButtons(this, 2);


        };
});

function makeButtons(sourceElement, numOfButtons){
        // Get width and height of source element
        let width = sourceElement.offsetWidth;
        let height = sourceElement.offsetHeight;

        //Make numOfArrows number of arrows by alternating between up and down
        for( let i = 0; i < numOfButtons; i++ ){

                makeArrow()
        }
}







// Todo:
// Make the button in center