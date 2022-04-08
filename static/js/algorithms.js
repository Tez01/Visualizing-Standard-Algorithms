document.addEventListener('DOMContentLoaded', function(){
        
});

class Algorithm{
        
        constructor(arrayData, algorithmName){
                this.data = arrayData;
                this.name = algorithmName;
        }
        
}

class SelectionSort extends Algorithm{
        constructor(arrayData){
                super(arrayData, "Selection Sort")
        }

        visualize(){
                //makeTwoPortions
                const visualizeContainer = document.querySelector("vp-item2-2");
                visualizeContainer.style.gridTemplateRows = "9fr 2fr"
                // Appear single box below first box after green and assign it min value
                // Make both red
                // Go to end while checking minimum, if new minimum found make that bar red
                // Make the bar which is red move to after green and make it green
                // repeat step 2 - 5

        }

}


