import {LinkedList} from './linked_list.js';

let list=new LinkedList()
list.prepend("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.size()
list.getHead()
list.getTail()
list.at(2)
list.contains('snake')
list.popNode()
list.findNode('hamster')
list.insertAt('sheep',0);
list.removeAt(0);
list.toStringNode();
