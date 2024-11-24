// create node and simple one thinks
// ----------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size
//     }
// }

// const list = new LinkedList();
// console.log('list is Empty', list.isEmpty());
// console.log('list of size', list.getSize());


// ==================================================================
//Prepend linkedlist
// ----------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('this list is Empty');
//         } else {
//             let curr = this.head;
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }
// }

// let list = new LinkedList();
// console.log('empty', list.isEmpty());
// console.log('size', list.getSize());
// list.print();

// list.prepend(10);
// list.print();
// list.prepend(20);
// list.prepend(30);
// list.print();


// ==================================================================
// append Linked List(Empty list)
// ----------------------------------------------
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     //O(1)
//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }

//     //O(n)
//     append(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             let prev = this.head;
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('is Empty');
//         } else {
//             let current = this.head
//             let listValues = ''
//             while (current) {
//                 listValues += `${current.value} `
//                 current = current.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList();

// list.append(10)
// list.print()
// list.append(20);
// list.append(30);
// list.print();


// ==================================================================

//Linked List - Insert (Invalid Index)
// ----------------------------------------------

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node
//         }else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next;
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value);
//         }else{
//             const node = new Node(value);
//             let prev = this.head
//             for(let i=0 ; i<index-1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++;
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('its is empty');
//         }else{
//             let curr = this.head
//             let listValues = '';
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// let list = new LinkedList();

// console.log(list.isEmpty());
// console.log(list.getSize());
// // list.append(20);
// // list.append(40);
// list.insert(23,0)
// list.print();

// list.insert(344,0)
// list.print();

// list.insert(54,1);
// list.print();

// list.insert(90,2);
// list.print();


// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     getSize(){
//         return this.size;
//     }

//     prepend(value){
//         const node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value);
//         }else{
//             const node = new Node(value);
//             let prev = this.head;
//             for(let i=0 ; i<index -1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     // append(value){
//     //     const node = new Node(value);
//     //     if(this.isEmpty()){
//     //         this.head = node
//     //     }else{
//     //         let prev = this.head ;
//     //         while(prev.next){
//     //             prev = prev.next
//     //         }
//     //         prev.next = node
//     //     }
//     //     this.size++
//     // }

//     print(){
//         if(this.isEmpty()){
//             console.log('it is empty');
//         }else{
//             let curr = this.head;
//             let listValues = '';
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList();
// console.log(list.isEmpty())
// console.log(list.getSize())
// list.prepend(30)
// list.print();
// list.prepend(40);
// list.prepend(56)
// list.insert(5656,2)
// list.print()
// console.log(list.getSize())




// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return
//         }
//         if(index === 0){
//             this.prepend(value)
//         }else{
//             const node = new Node(value)
//             let prev = this.head
//             for(let i=0 ; i<index - 1 ; i++){
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//         }
//         this.size++
//     }

//     remove(index){
//         if(index < 0 || index>=this.size){
//             return null
//         }
//         let removedNode
//         if(index === 0){
//             removedNode = this.head
//         }else {
//             let prev = this.head
//             for(let i=0 ; i<index - 1 ; i++){
//                 prev = prev.next
//             }
//             removedNode = prev.next
//             prev.next = removedNode.next
//         }
//         this.size--
//         return removedNode.value
//     }
    
//     // append(value){
//     //     const node = new Node(value);
//     //     if(this.isEmpty()){
//     //         this.head = node
//     //     }else{
//     //         let prev = this.head
//     //         while(prev.next){
//     //             prev = prev.next
//     //         }
//     //         prev.next = node
//     //     }
//     //     this.size++
//     // }

//     print(){
//         if(this.isEmpty()){
//             console.log('it is empty');
//         }else{
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }

// }

// const list = new LinkedList();

// // console.log(list.isEmpty());
// // console.log(list.getSize());

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.print();
// list.insert(2100,2);
// list.print();
// // list.remove(2)
// // list.print()