
document.addEventListener('DOMContentLoaded', function(){
        document.querySelector("#visualize-page").style.display = 'none'
        
        // Find search button 1
        const searchButton1 = document.querySelector('#sb1');
        
        // Pause animation
        searchButton1.style.animationPlayState = 'paused';
        console.log(searchButton1.classList)
        // Wait for button to be clicked
        searchButton1.onclick = function(){
                startAnimation(searchButton1);

                const buttonText = ["Sort", "Search", "Hash"]
                async function f(){
                        let promise = new  Promise((resolve, reject)=>{

                                // make new buttons after half time has spent for animation of search button 1
                                setTimeout(()=>{
                                        resolve(makeButtons(buttonText, document.querySelector("#search-page"), "button algorithm-type-button"));    
                                }, 
                                (parseInt(window.getComputedStyle(searchButton1).animationDuration.split("s")[0]) / 2) * 1000)
                                // This parseInt here is just calculating the half of time taken for searchButton1 to complete its animation
                         })
                         return promise;
                }
                f().then(()=>{
                        // Find search button
                        const algorithmTypeButtons= document.querySelectorAll('.algorithm-type-button');
                        algorithmTypeButtons.forEach((button) =>{
                                button.onclick = async function(){  
                                        // Disable the button so that its only clickable once
                                       disableClick(this);
                                       
                                       // Keep only this element in the parent container and remove others
                                       keepOneElement(this);

                                       // Push to history the state of the buttonc clicked
                                //        addToHistory({data: null, title: null, url: `${button.innerHTML}`});

                                       // create more buttons for algorithms 
                                       // For search algorithms
                                       if(this.innerHTML === "Search"){
                                               let searchAlgorithmList = ["Binary Search", "Depth First Search", "Breadth First Search"]
                                               await makeButtons(searchAlgorithmList, document.querySelector("#search-page"), "button search-type-button stage3")
                                               
                                       }
                                       // For Hash algorithms
                                       else if((this.innerHTML === "Sort")){
                                               let sortAlgorithmList = ["Selection Sort", "Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"]
                                               await makeButtons(sortAlgorithmList, document.querySelector("#search-page"), "button sort-type-button stage3")

                                       }      // For Hash algorithms
                                       else if((this.innerHTML === "Hash")){
                                               let hashAlgorithmList = ["MD5", "SHA-1", "SHA-2"]
                                               await makeButtons(hashAlgorithmList, document.querySelector("#search-page"), "button hash-type-button stage3")

                                       }
                                       else{
                                               throw new Error("Unknown button");
                                       }      
                                       
                                       // Grab all above newly generated stage 3 buttons
                                       const stage3Buttons= document.querySelectorAll('.stage3');
                                       // Add click event listeners for all newly generated stage 3 buttons
                                       
                                       stage3Buttons.forEach((button) => {
                                        

                                               button.onclick = function() {
                                                //        addToHistory({data: null, title: null, url: `${window.location.href +'/' +  button.innerHTML}`});
                                                       document.querySelector('#search-page').style.display = 'none'      // On click, hide search page
                                                       document.querySelector('#visualize-page').style.display = 'grid' // and display the visualize page
                                                       document.querySelector("#vp-item1").innerHTML = `<h1>${this.textContent}</h1>`
                                                       

                                               }   
                                       });
                               
                               }
                               
                                // Add on click event listener for all buttons that are algorithm type
                               
                        })
                })
                // Disable the button so that its only clickable once
                disableClick(searchButton1);
        };

        // searchButton1.click();
        // window.setInterval(()=>{
        //         const button = document.querySelector(".algorithm-type-button");
        //         button.click();
        //         window.setInterval(()=>{
        //                 const button = document.querySelector(".stage3");
        //                 button.click();
        //         },200);
        // },1000);
        
                
        // window.setInterval(() =>{
        //         searchButton1.click();
                
        // }, 500);
        
        

});



/* ********************************** Helper functions *************************************/

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
 * @param {string} classList A string of all classes to add to buttons
 * @return  Nothing
 */
function makeButtons( buttonText, containerToAddButtons, classList = null){
        // Create a container to save all buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add("button-container");
        buttonContainer.classList.add("slowAppear");
        // Create buttons in the container based on number of text items in buttonText
        for(let button = 0; button < buttonText.length; button++){
                buttonContainer.innerHTML += `<button type="button" class="${classList == null ? "" : `${classList}`}" >${buttonText[button]}</button>`
                                                                        // if classList is null, set class equal to empty string, otherwise equal to classList
        }
        startAnimation(buttonContainer);
        // Add the element to the container passed in argument
        containerToAddButtons.append(buttonContainer);
        return new  Promise((resolve, reject) =>{
                resolve("Done")
        })
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


/**
 * Keep only the element that is passed in the argument in the parent container and remove all others. 
 * This function assumes, there is always a parent container for argument element. Otherwise behaviour is undefined
 * 
 * @param {object} element Element which need to be kept
 * @return  Nothing
 */
function keepOneElement(element){
        let parent = element.parentElement;

        // Remove all child of this parent
        while(parent.lastChild){
                parent.removeChild(parent.lastChild)
        }

        // And add the selected child so that its the only one remaining
        element.classList.add("slowAppear")
        parent.appendChild(element);
        startAnimation(element);

}

/**
 * Just a wrapper around history.pushState
 * 
 * @param {object} historyParameters, parameters such as state, title and url to add to history for a state
 * @return  Nothing
 */
function addToHistory(historyParameters){
        history.pushState(historyParameters.data, historyParameters.title, historyParameters.url);
}



