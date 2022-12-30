particles=[]
timer=0

let p
preload=_=>{
	// const gui = new dat.gui.GUI()
	p=new PROPERTY
	// gui.add(p,'noiseDetail',10,640)
	// gui.add(p,'particleSize',1,5)
	// gui.add(p,'randomness',0,1)
	// gui.add(p,'noiseTorque',TWO_PI,100)
	// gui.add(p,'speed',1,20)
}

class PROPERTY{
	constructor(){
		this.noiseDetail=350
		this.particleSize=1.3
		this.randomness=0.9
		this.noiseTorque=80
		this.speed=8
	}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

setup=()=> {
    var p5Canvas = createCanvas(windowWidth,windowHeight)
    p5Canvas.parent("bg");
    
  for(i=3e3;i--;){
    particles.push({
      x:random(width),
      y:random(height),
      θ:0
    })
  }
}


draw=()=> {
    
    
  timer+=.003
  background('#1A1817')
  fill('#FFFFE0')
  noStroke()
  
  for(_ of particles)with(_){
    new_θ=noise(x/p.noiseDetail,y/p.noiseDetail,timer)*p.noiseTorque
// get average of θ and new_θ 
		X=cos(θ)+cos(new_θ)
    Y=sin(θ)+sin(new_θ)
    θ=atan2(Y,X)

    θ+=random(-1,1)*p.randomness
  
    x+=cos(θ)*p.speed
    y+=sin(θ)*p.speed
    x=(x+width)%width
    y=(y+height)%height
    rect(x,y,p.particleSize,p.particleSize)
  }


}
