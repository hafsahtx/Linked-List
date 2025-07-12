class Node{
    constructor(value)
    {
    this.value=value
    this.next=null
    }
}
export class LinkedList{
    constructor(){
        this.head=null
    }
    append(value){
        let newnode=new Node(value);
        let current=this.head;
        if(current === null){
            this.head=newnode;
            return;
        }
        while(current.next){
            current=current.next;
        }
        current.next=newnode;
    }
    prepend(value){
        let newnode = new Node(value);
        if(!this.head){
            this.head=newnode;
            return;
        }
        let current = this.head;
        this.head = newnode;
        newnode.next = current;
        return;
    }
    size(){
        let count = 0;
        let current = this.head;
        while(current){
            count+=1;
            current = current.next;
        }
        return count;
    }
    getHead(){
        let current = this.head;
        return current;
    }
    getTail(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        return current;
    }
    at(index){
        let count = this.size();
        if(index>=count || index<0){
            return 'index out of bounds';
        }
        let current = this.head;
        while(index){
            current = current.next;
            index--;
        }
        return current;
    }
    popNode(){
        let current = this.head; //head   cat, dog
        let pop;
        if(!this.head){
            return;
        }
        if(!this.head.next){
            pop = current;
            this.head = null;
            return pop;
        }else{
            while(current.next.next){
                current = current.next;
            }
            pop = current.next;
            current.next = null;
            return pop;
        }
    }
    contains(value){
        let current = this.head;
        
        while(current){
            if(current.value === value){
                return "true";
        } current = current.next;
        }
        return "false";
        
    }
    findNode(value){
        let index = 0;
        let current = this.head;
        while(current){
            if(current.value === value){
                return index;
            }
            index++;
            current = current.next;
        }
        return null;
    }
    toStringNode(){
        let current = this.head;
        let result = "";
        while(current){
            result += `(${current.value}) -> `
            current = current.next;
        }
        console.log(result + "null");
    }
    insertAt(value,index){
        let count = 0;
        let size = this.size();
        let current = this.head;
        if (index===0){
             let newnode = new Node(value);
             this.head = newnode;
             newnode.next = current;
             return;
        }else if(index>=size || index<0){
            return 'index out of bounds';
        }
        while(current){ 
            if(count===index-1){ 
                let newnode = new Node(value); 
                newnode.next = current.next;
                current.next = newnode;  
                return;
            }
            count++;
            current = current.next; //current =1
            
        }
    }
    removeAt(index){
        let current = this.head;
        let pop;
        let size = this.size();
        let count = 0;
        if(index===0){
            pop = current;
            this.head = current.next;
            return pop;
        }else if(index>=size || index<0){
            return 'index out of bounds';
        }else{
            while(current){
                if(count===index-1){
                    pop = current.next;
                    current.next = current.next.next;
                    return pop;
                }
                count++;
                current = current.next
            }
        }
    }
   
}



