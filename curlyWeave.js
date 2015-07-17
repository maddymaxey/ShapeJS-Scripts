/*
MM - ShapeJs Script
Renders a small swatch
Works best with args[0]= 20 and args[1]= 2 as args
*/


function makeFiber(fiberLength,voxelSize) {

    var radius = 0.5*MM;
    var Radius = 0.5*MM; // 4 for chunky yark aesthetic
    var springPeriod = 2.5*MM;
    var springLength = fiberLength*MM;
    var g = radius+Radius+voxelSize;
    var fiber = new Spring(radius, Radius, springPeriod, springLength);
    return fiber;
  
}



function main(args) {
  var i = 0;
  var count;
  var voxelSize = 0.1*MM;
  var g = 10*MM; 
  var fiberLength = args[0];
  var depth = fiberLength*MM; // total grid is limited to 8000, 4000, 8000
  var grid= createGrid(-depth,depth,-g,g,-depth,depth,voxelSize);
  var maker = new GridMaker();
  var union = new Union();
  var gridDensity = args[1];
  var fiberNumber = fiberLength/gridDensity;
  
  while (i < fiberNumber){
    
    if (i%2 ===0) {
    count = i*gridDensity;
    var fiber = makeFiber(fiberLength,voxelSize);
    var ct = new CompositeTransform();
    ct.add(new Rotation(0,1,0, Math.PI/2)); 
    ct.add(new Translation(fiberLength/2*MM,1.5*MM,2*count*MM));
    fiber.setTransform(ct);
    union.add(fiber);}
    
    else {
    
    count = i*gridDensity;
    var fiber3 = makeFiber(fiberLength,voxelSize);
    var ct2 = new CompositeTransform();
    ct2.add(new Rotation(0,1,0, Math.PI/2)); 
    ct2.add(new Translation(fiberLength/2*MM,-1.5*MM,2*count*MM));
    fiber3.setTransform(ct2);
    union.add(fiber3);
    }
   
    i++;
  }
 
  var n = 0;
  
  while (n < fiberNumber){ 
    count = n*gridDensity;
    var fiber2 = makeFiber(fiberLength,voxelSize);
    fiber2.setTransform(new Translation(count*MM,0,fiberLength*0.5*MM));
    union.add(fiber2);
     n++;
  }
  
 
  maker.setSource(union);
  maker.makeGrid(grid);
  return grid;
}


