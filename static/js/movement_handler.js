

function makeButtons( buttonText, containerToAddButtons){
        // Create a container to save all buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add("button-container");

        // Create buttons in the container based on number of text items in buttonText
        for(let button = 0; button < buttonText.length; button++){
                buttonContainer.innerHTML += `<button type="button" id= "algorithm-type-${button}" class= "button algorithm-type-button">${buttonText[button]}</button>`
        }

        // Add the element to the container passed in argument
        containerToAddButtons.append(buttonContainer);

}document.addEventListener('DOMContentLoaded', function(){
        // Find search button
        const searchButton1 = document.querySelector('#search-button');
        
        // Pause animation
        searchButton1.style.animationPlayState = 'paused';

        // Wait for button to be clicked
        searchButton1.onclick = function(){
                startAnimation(searchButton1);

                const buttonText = ["Search", "Sort", "Hash"]
                async function f(){
                        let promise = new  Promise((resolve, reject)=>{
                                setTimeout(()=>{
                                        // make new buttons
                                        resolve(makeButtons(buttonText, document.querySelector(".search-algorithm") ));    
                                }, (parseInt(window.getComputedStyle(searchButton1).animationDuration.split("s")[0]) / 2) * 1000) // Trigger creation of buttons when animation is at half

                         })
                         return promise;
                }
                f().then(()=>{
                                        // Find search button
                                const algorithmTypeButton= document.querySelector('#algorithm-type-0');
                                console.log(algorithmTypeButton)
                                if(algorithmTypeButton != null){
                                        algorithmTypeButton.style.animationPlayState = 'paused';
                                        algorithmTypeButton.onclick = function(){
                                                
                                                startAnimation(algorithmTypeButton);
                                        }
                                }
                        }
                )
        };

        
        

});



/**
 * Starts the animation for a particular element passed as argument.  Undefined if element doesnot have any
 * animations
 * 
 * @param {object} element Element for which animation need to be turned on
 * @return  Nothing
 */
function startAnimation(element){
        
        // Start animation if already paused
        if(element.style.animationPlayState == 'paused'){
                element.style.animationPlayState = 'running';
        }
        // Otherwise pause the animation
        else{
                element.style.animationPlayState = 'paused';
        }
}


// Todo:
// Make the button in center