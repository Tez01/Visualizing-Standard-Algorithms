document.addEventListener('DOMContentLoaded', function(){
        // Find search button
        const searchButton1 = document.querySelector('#search-button');
        
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

                console.log( parseInt(window.getComputedStyle(searchButton1).animationDuration.split("s")[0]))
                const buttonText = ["Search", "Sort", "Hash"]
                setTimeout(()=>{
                        makeButtons(buttonText, document.querySelector(".search-algorithm") );    
                }, (parseInt(window.getComputedStyle(searchButton1).animationDuration.split("s")[0]) / 2) * 1000)
                // Trigger creation of buttons when animation is at half
                searchButton1.addEventListener('animationend',()=>{
                        // make new buttons
                
                        
                })

        };
});

function makeButtons( buttonText, containerToAddButtons){
        // Create a container to save all buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add("button-container");

        // Create buttons in the container based on number of text items in buttonText
        for(let button = 0; button < buttonText.length; button++){
                buttonContainer.innerHTML += `<button type="button" class= "algorithm-type-button button">${buttonText[button]}</button>`
        }

        // Add the element to the container passed in argument
        containerToAddButtons.append(buttonContainer);

}







// Todo:
// Make the button in center