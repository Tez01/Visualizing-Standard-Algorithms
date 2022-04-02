class Algorithm{
        
        constructor(arrayData, algorithmName){
                this.data = arrayData;
                this.name = algorithmName;
        }
        
}

class BinarySearch extends Algorithm{
        constructor(arrayData, target){
                super(arrayData, "Binary Search")
                this.target = target;
        }

        visualize(){
                
        }

}

const myAlgo = new BinarySearch([1,2,3], 1)

