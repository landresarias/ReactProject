
class Bubble {
    constructor(pageWidth, pageHeight) {
        this.xPos = Math.floor(Math.random() * pageWidth);
        this.x = 'left: ' + this.xPos + 'px;';
        this.yPos = pageHeight + Math.floor(Math.random() * 200);
        this.y = 'top: ' + this.yPos + 'px;';
        this.size = Math.floor(Math.random() * 7) + 4;
        this.sizePlus = this.size - 1;
        this.width = 'width: ' + this.size + 'px;';
        this.height = 'height: ' + this.sizePlus + 'px;';
        this.background = 'background: rgba(255, 255, 200, .13);';
        this.border = 'border-top: 1px solid #fff;';
        this.radius = 'border-radius: 50%;';
        this.speed = this.size * .2;
        this.dir = Math.floor(Math.random() * 2);
        this.ocillation = Math.floor(Math.random() * 7) + 2;
        this.count = 0;
    }  // constructor

    // our methods! aka things our bubble can do
    Move() {
        this.yPos -= this.speed;
        this.y = 'top: ' + this.yPos + 'px;';
        // back to back motion - off for now
        if(this.count > this.ocillation) {
            if(this.dir == 0) { // left
                if(this.size > 6) {
                    this.xPos -= this.speed * .4;
                    this.x = 'left: ' + this.xPos + 'px;'; 
                }
                this.count++;
            }
            else { // right
                if(this.size > 6) {
                    this.xPos += this.speed * .4;
                    this.x = 'left: ' + this.xPos + 'px;'; 
                }
                this.count++;
            }
        }
        else {
            if(this.dir == 0)
                this.dir = 1
            else
                this.dir = 0
            this.count = 0; 
        }
    } // Move()

    // called when bubble goes above screen
    Reset() {
        this.xPos = Math.floor(Math.random() * pageWidth);
        this.x = 'left: ' + this.xPos + 'px;';
        this.yPos = pageHeight + Math.floor(Math.random() * 200);
        this.y = 'top: ' + this.yPos + 'px;';
        this.size = Math.floor(Math.random() * 7) + 4;
        this.sizePlus = this.size - 1;
        this.width = 'width: ' + this.size + 'px;';
        this.height = 'height: ' + this.sizePlus + 'px;';
        this.speed = this.size * .2;
        this.ocillation = Math.floor(Math.random() * 7) + 2;
    } // Reset()
} // class

export default Bubble;