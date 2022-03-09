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

                const buttonText = ["Search", "Sort", "Hash"]
                makeButtons(buttonText, document.querySelector(".search-algorithm") );

                // On clicking any of those move from center and cascade after searchButton 1.
                

        };
});

function makeButtons( buttonText, containerToAddButtons){
        // Create a container to save all buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add("button-container");

        // Create buttons in the container based on number of text items in buttonText
        for(let button = 0; button < buttonText.length; button++){
                buttonContainer.innerHTML += `<button type="button" class= "search-button">${buttonText[button]}</button>`
        }

        // Add the element to the container passed in argument
        containerToAddButtons.append(buttonContainer);

}







// Todo:
// Make the button in center