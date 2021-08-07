class Tux {
    constructor() {
        this.x = 150;
        this.y = 0;
        this.vy = 0;
        this.originalWidth = 154;
        this.originalHeight = 138;
        this.width = this.originalWidth;
        this.height = this.originalHeight;
        this.weight = 1;
        this.frameX = 0;
        this.jumping = true;
        this.sliding = false;
        this.charSlideWidth = 40;
        this.charSlideheight = 20;
    }

    update() {
        //Stop character at floor level
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.vy = 0;
        } else {
            //Otherwise set y velocity to act as gravity, along with setting y co-ord += y velocity
            this.vy += this.weight;
            this.vy *= 0.9; // slow down velocity
            this.y += this.vy;
        }
        //Don't allow character out the top of canvas
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }
        //If space bar pressed and char not jumping, call jump
        if (arrowUpPressed && !this.jumping) {
            this.jump();
        }
        //Check if char is on floor, if so, set jumping to false;
        if (this.y > canvas.height - this.height) {
            this.jumping = false;
        }
        //If ArrowDown pressed
        if (arrowDownPressed && !this.sliding && !this.jumping) {
            this.slide();
        }
        // Once let go of arrow down, set hitbox back to original position
        if (!arrowDownPressed) {
            this.height = this.originalHeight;
            this.width = this.originalWidth;
        }
        if (this.jumping) {
            this.jumpAnim();
        }
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if (this.y > canvas.height - this.height && !this.sliding) {
            playerImage.src = "static/animations/penguin/walk_spritesheet.png";
            this.originalWidth = 154;
            this.frameX = frameX;
        }
        ctx.drawImage(
            playerImage,
            this.frameX * this.originalWidth,
            0,
            this.originalWidth,
            this.originalHeight,
            this.x,
            this.y,
            this.width + 5,
            this.height + 10,
            this.originalWidth,
            this.originalHeight
        );
    }

    jump() {
        this.vy -= 50; //jump height
        this.jumping = true;
        this.frameX = 0;
        this.jumpAnim();
    }

    jumpAnim() {
        this.originalWidth = 144;
        if (this.y >= canvas.height - this.height - 80) this.frameX = 0;
        else if (this.y >= canvas.height - this.height - 160) this.frameX = 1;
        else this.frameX = 2;
        playerImage.src = "static/animations/penguin/penguin_jump@2x.png";
    }

    slide() {
        this.originalWidth = 144;
        this.width = this.width + 20;
        this.frameX = 0;
        playerImage.src = "static/animations/penguin/penguin_slide02@2x.png";
        this.sliding = true;
    }

    die() {
        playerImage.src = "static/animations/penguin/penguin_die04@2x.png";
    }
}

const tux = new Tux();
