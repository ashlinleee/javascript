var items=new Array();
items.push("leadership");
items.push("communication");
items.push("sales");
var incrementedItems=new Array();
items.forEach((x)=>
{
    console.log(x);
    incrementedItems.push(x+1);
});
console.log("----Incremented Array----")
incrementedItems.forEach((y)=>
{
    console.log(y);
})

