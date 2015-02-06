/*
MM - ShapeJs Script
Renders individual fibers
Works best with 10-20 as args[0]
*/


function makeFiber(fiberLength) {

    var radius = 0.5*MM;
    var Radius = 0.5*MM; // 4 for chunky yark aesthetic
    var springPeriod = 2.5*MM;
    var springLength = fiberLength*MM;
    var g = radius+Radius+voxelSize;
    var fiber = new Spring(radius, Radius, springPeriod, springLength);
    return fiber;
  
}

function makeFiber2(fiberLength) {

    var radius = 0.5*MM;
    var Radius = 1*MM; // 4 for chunky yark aesthetic
    var springPeriod = 2.5*MM;
    var springLength = fiberLength*MM;
    var g = radius+Radius+voxelSize;
    var fiber = new Spring(radius, Radius, springPeriod, springLength);
    return fiber;
  
}

function makeFiber3(fiberLength) {

    var radius = 0.5*MM;
    var Radius = 0.5*MM; // 4 for chunky yark aesthetic
    var springPeriod = 1.25*MM;
    var springLength = fiberLength*MM;
    var g = radius+Radius+voxelSize;
    var fiber = new Spring(radius, Radius, springPeriod, springLength);
    return fiber;
  
}



function makeFiber4(fiberLength) {

    var radius = 0.5*MM;
    var Radius = 0.5*MM; // 4 for chunky yark aesthetic
    var springPeriod = 1.5*MM;
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
  
 
  var fiber = makeFiber2(fiberLength);
  var ct = new CompositeTransform();
  ct.add(new Translation(3*MM,0,0));
  fiber.setTransform(ct);
  union.add(fiber);
    
    count = i*gridDensity;
    var fiber3 = makeFiber3(fiberLength);
    union.add(fiber3);

   

 
  var n = 0;
  
 
    count = n*gridDensity;
    var fiber2 = makeFiber(fiberLength);
    fiber2.setTransform(new Translation(6*MM,0,0));
    union.add(fiber2);
  
  
      var fiber4 = makeFiber4(fiberLength);
    fiber4.setTransform(new Translation(9*MM,0,0));
    union.add(fiber4);
    

  
 
  maker.setSource(union);
  maker.makeGrid(grid);
  return grid;
}

