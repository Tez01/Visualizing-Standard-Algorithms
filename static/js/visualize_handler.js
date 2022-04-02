document.addEventListener('DOMContentLoaded', function(){

        document.querySelector('#vp-item3-2').onkeyup = function(event){ // vp-item3-2 is the input box
                if(event.key === ","){        
                        clearDiv(document.querySelector('#vp-item2'));    // Clear the visualization area
                        //visualize the input in the textbox
                        displayList(this.value.split(","), document.querySelector('#vp-item2'));  // passing an array of data points instead of string
                }
                const inputData = document.querySelector('#vp-item3-2').value
                
                // Convert to array and start visualizing
        }

        document.querySelector('#vp-item4').onclick = function(){       // When start button is clicked
                if(document.querySelector('#vp-item1').innerText === "Binary Search"){
                        

                }
                console.log(document.querySelector('#vp-item1').innerText)
        }
})


/**
 * This function displays the list data passed as argument in a bar format on screen 
 * 
 * @param {array}  arrayData an array of data for which visualization need to be done.
 * @param {object} DOMElement HTML DOM object of where this visualization need to be displayed 
 * This function will check for each value in the array to be a real number. Other data types will be skipped.
 * For simplicity, only integer part of floats will be used to display.
 * Assumes the inputArea parameter is a HTML DOM object, otherwise behaviour is undefined
 * @return  Nothing
 */
function displayList(arrayData, DOMElement){
        const cleanedArray = cleanArray(arrayData) // Clean the input array for any non-real number values.
        const maxValue = getMaxInArray(cleanedArray);// Get max value in array
        console.log(`Cleaned array: ${cleanedArray} , maxValue: ${maxValue}`);
        cleanedArray.forEach(dataElement=>{
                const element = document.createElement('div');
                element.classList.add("rectangle");
                element.style.height = `${parseInt((dataElement/ maxValue) * 100)}%`
                DOMElement.append(element);
        });

}

/**
 * This function returns maxValue in array 
 * 
 * @param {array}  arrayData an array of data for which visualization need to be done.
 * Assumes everyelement is a real number in the arrayData
 */
function getMaxInArray(arrayData){
        return arrayData.reduce(function(a, b) {  
                        return Math.max(a, b);
        }, -Infinity);
}


/**
 * This function cleans the input array for any non-real number values and converts negative values to positives.
 * 
 * @param {array}  arrayData an array of data for which visualization need to be done.
 * Assumes everyelement is a real number in the arrayData
 */
function cleanArray(arrayData){
        newArray = [];
        arrayData.forEach((element) =>{
                if(!isNaN(parseInt(element))){  // If element is not a NaN
                        newArray.push(Math.abs(parseInt(element)) )// Push the positive int portion to newArray
                }
                console.log(typeof NaN)
        });
        return newArray;
}


/**
 * This function removes every child element in the element passed as argument
 * 
 * @param {object}  parent parent element from which all childs will be removed
 * Assumes everyelement is a real number in the arrayData
 */
 function clearDiv(parent){
        while(parent.firstChild){
                parent.removeChild(parent.firstChild);
        }
 }