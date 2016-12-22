function fighter() {
    this.x=130
    this.y=350
    this.w=jpg["self.png"].width
    this.h=jpg["self"].height
    var rs=this;
    fjmap.drawImage(jpg["self.png"],this.x,this.y);
    window.addEventListener('keydown',function (e) {
            if(e.keyCode==37){
                rs.left();
            }else {
                rs.right();
            }
    },true);
    fighter().prototype.move=function(x){
        fjmap.clearRect(this.x,this.y,this.w,this.h);
        fjmap.drawImage(jpg["self.png"].this.x+=x,this.y);

    }
}