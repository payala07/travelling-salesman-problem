var shops =[];
var totalshops = 10;

var recordDistance;
var bestRoute;

function setup(){
    createCanvas(400,300);
    for (var i = 0; i< totalshops; i++){
        //Position of our shops
        var vector = createVector(random(width), random(height));
        shops[i] = vector;
    }

    var distance = calcDistance(shops);
    recordDistance = vector;
    bestRoute = shops.slice();
}

function draw(){
    background(0);
    fill(150,0,200);

    for(var i = 0; i < shops.length; i ++){
        //draws circles at the positions generated at random
        ellipse(shops[i].x, shops[i].y,10,10);
    }
    
    //Normal path
    stroke(255);
    strokeWeight(1);
    noFill(0);
    beginShape();
    for(var i = 0; i < shops.length; i ++){
        vertex(shops[i].x, shops[i].y);
    }
    endShape();
    
    //Best path
    stroke(255, 0, 255);
    strokeWeight(4);
    noFill(0);
    beginShape();
    for(var i = 0; i < shops.length; i ++){
        vertex(bestRoute[i].x, bestRoute[i].y);
    }
    endShape();

    var i = floor(random(shops.length));
    var j = floor(random(shops.length));
    
    swap(shops, i, j);

    var distance = calcDistance(shops);
    if(distance < recordDistance){
        recordDistance = distance;
        bestRoute = shops.slice();
        console.log(recordDistance);
    }
}
//swaps positions of two random arrays
function swap(a, i ,j ){
    var temp = a[i];
    a[i] = a[j];
    a[j] = a[i];
}

//Return total distance of the points in the order they are
function calcDistance(points){
    var sum = 0;
    for(var i= 0; point < points.length-1; i++){
        var distance =dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
        sum += distance;
    }
    return distance;
}