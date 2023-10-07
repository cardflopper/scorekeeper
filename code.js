start();



function createTableElement(columns=5, rows=5,id){
    var tableElement = document.createElement('table');
    for(row = 0; row < rows; row++){
        var trElement = document.createElement('tr');
        for(col = 0; col< columns; col++){
            var tdElement = document.createElement('td');
            trElement.appendChild(tdElement);
        }
        tableElement.append(tr);
    }
    tableElement.setAttribute("id",id);
    return tableElement;
}



//from web, not written by myself
function start() {
    //createTableElement(4,4,"scoreBoard")
    var scoreEntryElements = document.getElementsByClassName("scoreEntry");
    for(el of scoreEntryElements){
        el.children[1].addEventListener("input", event => showChange(event) , true);
    }
}

function test(){
    var score = document.getElementById("p0").children[1];
    alert(score.value);
}

function showChange(event){
    var str = event.target.value;
    var arr = str.split(',');
    var sum = 0;
    for(item of arr){
        sum += parseInt(item);
    }
    
    event.target.parentNode.children[2].innerText = isNaN(sum) ? "score:-": "score:"+sum;    
}
