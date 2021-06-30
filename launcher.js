class Launcher{
    constructor(x,y){

        this.launcher = Constraint.create({bodyA:x, pointB:y, stiffness:4, length:4})
        this.pointB = y;
    }

    display() {

        if(this.launcher.bodyA){
             line(this.launcher.bodyA.position.x, this.launcher.bodyA.position.y, this.pointB.x, this.pointB.y)
        }
    }

    fly() {

        this.launcher.bodyA = null
    }
}