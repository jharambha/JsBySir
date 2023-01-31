var n;
function Size(){
    n = document.getElementById("size").value;
    document.getElementById("demo").innerHTML = n;}
    


function getElements(){
const container= document.getElementById("elements");

for(let i=0;i<n;i++){
    let input = document.createElement('input');
    input.type = 'number';
    input.name='element';
    input.min='1';
    container.appendChild(input);
}
}
var arr=[];
function array(){

arr = document.getElementsByName('element');

            for (var j = 0; j < n; j++) {
                var a = arr[j];
                 
                 document.getElementById("demo2").innerHTML = a.value;
               
            }}
        

function insertionSort(arr,n){
var b,key;
for(let a=1;a<n;a++){
key=arr[a];
b=a-1;

while (b >= 0 && arr[b] > key)
{ 
    arr[b+ 1] = arr[b]; 
    b = b - 1; 
} 
arr[b + 1] = key;
}

}
