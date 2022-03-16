document.addEventListener('DOMContentLoaded', function(){
        // Find search button
        const searchButton1 = document.querySelector('#search-button');
        
        // Pause animation
        searchButton1.style.animationPlayState = 'paused';

        // Wait for button to be clicked
        searchButton1.onclick = function(){
                startAnimation(searchButton1);

                const buttonText = ["Search", "Sort", "Hash"]
                console.log(typeof buttonText)
                async function f(){
                        let promise = new  Promise((resolve, reject)=>{

                                // make new buttons after half time has spent for animation of search button 1
                                setTimeout(()=>{
                                        resolve(makeButtons(buttonText, document.querySelector(".search-algorithm") ));    
                                }, 
                                (parseInt(window.getComputedStyle(searchButton1).animationDuration.split("s")[0]) / 2) * 1000)
                                // This parseInt here is just calculating the half of time taken for searchButton1 to complete its animation
                         })
                         return promise;
                }
                f().then(()=>{
                        // Find search button
                        const algorithmTypeButtons= document.querySelectorAll('.algorithm-type-button');
                        
                        for(var i = 0; i < algorithmTypeButtons.length;i++){
                                // Add on click event listener for all buttons that are algorithm type
                                algorithmTypeButtons[i].onclick = function(){  
                                         
                                        let parent = this.parentElement;

                                        // Remove all child of this parent
                                        while(parent.lastChild){
                                                parent.removeChild(parent.lastChild)
                                        }

                                        // And add the selected child so that its the only one remaining
                                        this.classList.add("animation")
                                        parent.appendChild(this);
                                        startAnimation(this);

                                        // Disable the button so that its only clickable once
                                        disableClick(this);

                                        }        
                                
                                }
                        }
                )
                // Disable the button so that its only clickable once
                disableClick(searchButton1);
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

        element.style.animationPlayState = 'running';

}



/**
 * Makes n number of buttons inside the container which is passed as argument. n is 
 * equal to the number of button-display-texts in the buttonText argument.
 * 
 * @param {object} buttonText Essentially an array that contains all the button-display-texts.
 * @param {object} containerToAddButtons Container to which new buttons are appended
 * 
 * @return  Nothing
 */
function makeButtons( buttonText, containerToAddButtons){
        console.log(typeof buttonText)

        // Create a container to save all buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add("button-container");
        buttonContainer.classList.add("animation");

        // Create buttons in the container based on number of text items in buttonText
        for(let button = 0; button < buttonText.length; button++){
                buttonContainer.innerHTML += `<button type="button" id= "algorithm-type-${button}" class= "button algorithm-type-button">${buttonText[button]}</button>`
        }
        startAnimation(buttonContainer);
        // Add the element to the container passed in argument
        containerToAddButtons.append(buttonContainer);

}



/**
 * Disable the element's click property 
 * 
 * @param {object} element Element for which click needs to be disabled
 * @return  Nothing
 */
function disableClick(element){
        element.onclick = null;
}