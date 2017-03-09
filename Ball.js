function Mover() {
	this.x = width/2;
	this.y = height/2;
	this.xspeed = 0;
	this.yspeed = 0;
	this.xacc = 0.2;
	this.yacc = 0.1;

	this.update = function() {
		this.y = this.y + this.yspeed;
		this.yspeed = this.yspeed + this.yacc;
		
	}

	this.wind = function() {
		this.x = this.x + this.xspeed;
		this.xspeed = this.xspeed + this.xacc;
	}

	this.edges = function() {
		if (this.x > width) {
			this.x = width;
			this.xspeed *= -1;
		}

		if (this.x < 0) {
			this.x = 0;
			this.xspeed *= -1;
		}

		if (this.y > height){
			this.y = height;
			this.yspeed *= -1;
		}

		if (this.y < 0) {
			this.y = 0;
			this.yspeed *= -1;
		}
	}

	this.show = function() {
		ellipse(this.x, this.y, 30, 30);
		fill(100);
	}
}