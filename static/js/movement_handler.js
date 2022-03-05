document.addEventListener('DOMContentLoaded', function(){
        // Find search button
        const searchButton1 = document.querySelector('#search-button');
        console.log(searchButton1)
        // Pause animation
        searchButton1.style.animationPlayState = 'paused';

        // Wait for button to be clicked
        document.querySelector('#search-button').onclick = function(){
                if(searchButton1.style.animationPlayState == 'paused'){
                        searchButton1.style.animationPlayState = 'running';
                }

                // Otherwise pause the animation
                else{
                        searchButton1.style.animationPlayState = 'paused';
                }

        };
});