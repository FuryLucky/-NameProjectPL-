//  Here is our custom Particle
MonsterParticle = function (game, x, y) {

    Phaser.Particle.call(this, game, x, y, game.cache.getBitmapData('particleShade'));

};

MonsterParticle.prototype = Object.create(Phaser.Particle.prototype);
MonsterParticle.prototype.constructor = MonsterParticle;

function launchBall() {

	var bmdHit = game.add.bitmapData(0, 0);

    var radgrad = bmdHit.ctx.createRadialGradient(32, 32, 4, 32, 32, 32);

    radgrad.addColorStop(0, 'rgba(0, 0, 0, 0.8)');
    radgrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    bmdHit.context.fillStyle = radgrad;
    bmdHit.context.fillRect(0, 0, 64, 64);

    game.cache.addBitmapData('particleShade', bmdHit);

    emitter = game.add.emitter(sprite.x+10, sprite.y+10, 1);
    emitter.particleClass = MonsterParticle;
    emitter.makeParticles();


    emitter.setRotation(30, 30);
    emitter.setScale(0.1, 0, 0.1, 0, 10000);

    emitter.start(true, 100, null, 1000);

    updateBitmapDataTexture();

}

function bounceBall() {

    var bmdOver = game.add.bitmapData(0, 0);

    var radgrad = bmdOver.ctx.createRadialGradient(32, 32, 4, 32, 32, 32);

    radgrad.addColorStop(0, 'rgba(0, 255, 255, 0.5)');
    radgrad.addColorStop(1, 'rgba(0, 255, 255, 0)');

    bmdOver.context.fillStyle = radgrad;
    bmdOver.context.fillRect(0, 0, 64, 64);

    game.cache.addBitmapData('particleShade', bmdOver);

    emitter = game.add.emitter(sprite.x+10, sprite.y+10, 10);
    emitter.particleClass = MonsterParticle;
    emitter.makeParticles();


    emitter.setRotation(0, 0);
    emitter.setScale(0.1, 0, 0.1, 0, 10000);

    emitter.start(true, 3000, null, 100);
}

function hitBall() {
	
    var bmdhit = game.add.bitmapData(0, 0);

    var radgrad = bmdhit.ctx.createRadialGradient(32, 32, 4, 32, 32, 32);

    radgrad.addColorStop(0, 'rgba(255, 0, 0, 1)');
    radgrad.addColorStop(1, 'rgba(255, 0, 0, 0)');

    bmdhit.context.fillStyle = radgrad;
    bmdhit.context.fillRect(0, 0, 64, 64);

    game.cache.addBitmapData('particleShade', bmdhit);

    emitter = game.add.emitter(circle.x+10, circle.y+10, 75);
    emitter.particleClass = MonsterParticle;
    emitter.makeParticles();

    emitter.setRotation(0, 0);
    emitter.setScale(0.1, 0, 0.1, 0, 10000);

    emitter.start(true, 5000, null, 100);
}



function updateBitmapDataTexture() {

    var bmd = game.cache.getBitmapData('particleShade');

    bmd.context.clearRect(0, 0, 64, 64);

    var radgrad = bmd.ctx.createRadialGradient(32, 32, 4, 32, 32, 32);
    var c = Phaser.Color.getRGB(Phaser.Color.getRandomColor(0, 255, 255));

    radgrad.addColorStop(0, Phaser.Color.getWebRGB(c));
    c.a = 0;
    radgrad.addColorStop(1, Phaser.Color.getWebRGB(c));

    bmd.context.fillStyle = radgrad;
    bmd.context.fillRect(0, 0, 64, 64);

    bmd.dirty = true;

}

