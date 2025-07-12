import {LinkedList} from './linked_list.js';

let list=new LinkedList()
list.prepend("fish");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.toString();
console.log(`size: ${list.size()}`);
console.log(`Head: ${list.getHead().value}`);
console.log(`Tail: ${list.getTail().value}`);
console.log(list.at(1));
console.log(list.contains('turtle'))
console.log(list.popNode())
list.toString();
console.log(list.findNode('kangaroo'))
list.insertAt('sheep',1);
list.toString();
console.log(list.removeAt(5));
list.toString();
