var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3eb2966c-a86e-4122-8b32-6fc274ea96f4","d05f0984-c4ee-44bf-b73a-dade410efd1f","76b37a08-a48d-4341-a6cb-10593d79dffe","157b499d-3d3d-44f7-9769-e15c0ea96cb3","eb1d25cf-5a9c-4429-8b78-ae1f82f03535","3f8a3fd8-def9-44d0-a8f9-5bdd8567ccb6","c384a766-a492-4af4-88ff-fca54fb4a3ba","5ee338aa-c2db-40ba-8faa-fb012d35c56b","a5e00090-c499-408c-90c3-9d2c3c27d620","572d992c-b493-4a7a-a61e-a33337a3fbc4","90cab91f-f9f6-4d30-8f37-b67fbab5f162","49718298-9496-4fc9-91d2-3052455fdf3b","892712bc-a982-4072-b024-e415ee9c99fe","6daf752d-c816-4ebc-8cf0-b7db8d0869ff","abbf3373-d048-4701-a685-a49e8f29751e","ac75d3d2-f463-41da-9945-c0ea5f118fd4","0b3c94f7-bf62-4b41-ae31-9682585fbd91","90d20d05-ead3-4549-a86a-a5655b220087","0da1da7d-fcc4-415a-8dbf-0180017f5382","d886a914-db6c-444e-b928-2a78017e78be","3909834c-c19e-48f4-b6ee-e0a1cd4313ce","ad15d8c7-dab0-4066-93fc-963b7477b8bd","c83f7613-3e46-43c9-bf5b-89e98cde400b","d765b5ad-cdd0-43ec-b25f-6dc7a7d09022","634038f3-fd51-4835-baa4-afd9396b20ee","1061416f-b6f9-42c0-ba8a-c0a7911ec055","907da1b5-31ea-429f-9f49-038fb9b5d5b2","34472b8b-4822-4825-8af4-09897f2837d6","02191fde-8e7d-4851-9153-2804fed8e8d2","3a3fbd9f-6678-409e-a4f8-1fc529a97b07","177ce24f-0b51-41c6-8b20-224faea3d66e"],"propsByKey":{"3eb2966c-a86e-4122-8b32-6fc274ea96f4":{"name":"bonii.jpg_1","sourceUrl":null,"frameSize":{"x":70,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"fFouE7uUcmfAXMyKSc7eD8bzGs0g_wE2","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":40},"rootRelativePath":"assets/3eb2966c-a86e-4122-8b32-6fc274ea96f4.png"},"d05f0984-c4ee-44bf-b73a-dade410efd1f":{"name":"bonii.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":70,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q8HtaHTcX_.mD40vxmcwxnlq2HBaw3eX","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":40},"rootRelativePath":"assets/d05f0984-c4ee-44bf-b73a-dade410efd1f.png"},"76b37a08-a48d-4341-a6cb-10593d79dffe":{"name":"sonii.jpg_1","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"rEGQ_z5aAERuZzO_DoYHfjXFsMM_ATYu","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/76b37a08-a48d-4341-a6cb-10593d79dffe.png"},"157b499d-3d3d-44f7-9769-e15c0ea96cb3":{"name":"dd.jpg_1","sourceUrl":null,"frameSize":{"x":60,"y":50},"frameCount":4,"looping":true,"frameDelay":1,"version":"9kNPxB37rd0uhABq8CftMpr6htnCZpWV","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":100},"rootRelativePath":"assets/157b499d-3d3d-44f7-9769-e15c0ea96cb3.png"},"eb1d25cf-5a9c-4429-8b78-ae1f82f03535":{"name":"dd.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":60,"y":50},"frameCount":4,"looping":true,"frameDelay":1,"version":"7mvWZDGwhyg88XhCCtBvwAUE8Gwo4xe3","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":100},"rootRelativePath":"assets/eb1d25cf-5a9c-4429-8b78-ae1f82f03535.png"},"3f8a3fd8-def9-44d0-a8f9-5bdd8567ccb6":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png"},"c384a766-a492-4af4-88ff-fca54fb4a3ba":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":370,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"uNaF.Y_xOobyvZj6V5Vl1H6MKwNAaMZu","loadedFromSource":true,"saved":true,"sourceSize":{"x":370,"y":50},"rootRelativePath":"assets/c384a766-a492-4af4-88ff-fca54fb4a3ba.png"},"5ee338aa-c2db-40ba-8faa-fb012d35c56b":{"name":"mario2.jpg_1","sourceUrl":null,"frameSize":{"x":70,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"8GofyvO4YVqaRzxM8Mt9HdMj1em.EgEt","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":120},"rootRelativePath":"assets/5ee338aa-c2db-40ba-8faa-fb012d35c56b.png"},"a5e00090-c499-408c-90c3-9d2c3c27d620":{"name":"mario2.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":70,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"SX_KXDzKhLszAydT02.MOnKgK_cj.z9j","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":120},"rootRelativePath":"assets/a5e00090-c499-408c-90c3-9d2c3c27d620.png"},"572d992c-b493-4a7a-a61e-a33337a3fbc4":{"name":"xss.jpg_1","sourceUrl":null,"frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZikJXnlg3zZKhjq.8kWGHr2whgCtorEs","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/572d992c-b493-4a7a-a61e-a33337a3fbc4.png"},"90cab91f-f9f6-4d30-8f37-b67fbab5f162":{"name":"xss.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":150,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"jkecTkdg5I3Il5wq_YGsWd742e9jEYNi","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":100},"rootRelativePath":"assets/90cab91f-f9f6-4d30-8f37-b67fbab5f162.png"},"49718298-9496-4fc9-91d2-3052455fdf3b":{"name":"ma stap.jpg_1","sourceUrl":null,"frameSize":{"x":140,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"x.U_M6jSVknC3k2c0YGkit1OKSwHOSXy","loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":100},"rootRelativePath":"assets/49718298-9496-4fc9-91d2-3052455fdf3b.png"},"892712bc-a982-4072-b024-e415ee9c99fe":{"name":"ma stap.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":140,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"vHrGzD5xB8v9WcrrboDZA1ihIPhO9hAh","loadedFromSource":true,"saved":true,"sourceSize":{"x":140,"y":100},"rootRelativePath":"assets/892712bc-a982-4072-b024-e415ee9c99fe.png"},"6daf752d-c816-4ebc-8cf0-b7db8d0869ff":{"name":"ma jo.jpg_1","sourceUrl":null,"frameSize":{"x":200,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"80Hz4bfyvbTI3m3CEIsVb1t7DnQD8TXu","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":400},"rootRelativePath":"assets/6daf752d-c816-4ebc-8cf0-b7db8d0869ff.png"},"abbf3373-d048-4701-a685-a49e8f29751e":{"name":"ma jo.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"sqMVXyUjv1GUqPA9no4_3yVWJErU2TRN","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/abbf3373-d048-4701-a685-a49e8f29751e.png"},"ac75d3d2-f463-41da-9945-c0ea5f118fd4":{"name":"ma th.jpg_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"2zOXBHW3WQds..RT5mPZEyVP29U.9KxL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ac75d3d2-f463-41da-9945-c0ea5f118fd4.png"},"0b3c94f7-bf62-4b41-ae31-9682585fbd91":{"name":"ma th.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"aDSAiL0LfHza3UwQhpF7MrEx5kIjnNbu","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0b3c94f7-bf62-4b41-ae31-9682585fbd91.png"},"90d20d05-ead3-4549-a86a-a5655b220087":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"HG9aagCa_xVbFUYR4pruSgAkRTXL.3u_","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/90d20d05-ead3-4549-a86a-a5655b220087.png"},"0da1da7d-fcc4-415a-8dbf-0180017f5382":{"name":"animation_2_copy_1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"0kTmP.xzlBOUOjgw9xIFNnUHZQlZPVV9","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/0da1da7d-fcc4-415a-8dbf-0180017f5382.png"},"d886a914-db6c-444e-b928-2a78017e78be":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"0LZ4LOR8SAD1uB6LueprL4QAkJcSdkI_","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/d886a914-db6c-444e-b928-2a78017e78be.png"},"3909834c-c19e-48f4-b6ee-e0a1cd4313ce":{"name":"animation_3_copy_1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"scQsK.ujA3QpT5EM9Un9CI0bZzeeV2oF","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/3909834c-c19e-48f4-b6ee-e0a1cd4313ce.png"},"ad15d8c7-dab0-4066-93fc-963b7477b8bd":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":200,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"x.Q7KyIddr0xoSimfIQQy4DHmkghXfX7","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":50},"rootRelativePath":"assets/ad15d8c7-dab0-4066-93fc-963b7477b8bd.png"},"c83f7613-3e46-43c9-bf5b-89e98cde400b":{"name":"animation_4_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"3hGP5bDfR3rmj9vHWGTCkEEYLfg7xSq.","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":50},"rootRelativePath":"assets/c83f7613-3e46-43c9-bf5b-89e98cde400b.png"},"d765b5ad-cdd0-43ec-b25f-6dc7a7d09022":{"name":"animation_4_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":250,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"FEFqP1Ayg.4Y0WqS9loLiGGkFY5xfq8r","loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":50},"rootRelativePath":"assets/d765b5ad-cdd0-43ec-b25f-6dc7a7d09022.png"},"634038f3-fd51-4835-baa4-afd9396b20ee":{"name":"animation_4_copy_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":350,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"8Wm944MPp5GDDtl.rP3R0IiCx0VOhOz5","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":50},"rootRelativePath":"assets/634038f3-fd51-4835-baa4-afd9396b20ee.png"},"1061416f-b6f9-42c0-ba8a-c0a7911ec055":{"name":"animation_0","sourceUrl":null,"frameSize":{"x":200,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"zkCniruupvZaXL22sf.9gXGsYWCZNJcU","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":30},"rootRelativePath":"assets/1061416f-b6f9-42c0-ba8a-c0a7911ec055.png"},"907da1b5-31ea-429f-9f49-038fb9b5d5b2":{"name":"animation_0_copy_1","sourceUrl":null,"frameSize":{"x":200,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"sfTYf3W2RsQ4VieetTe8rwMDW9Pshh8d","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":30},"rootRelativePath":"assets/907da1b5-31ea-429f-9f49-038fb9b5d5b2.png"},"34472b8b-4822-4825-8af4-09897f2837d6":{"name":"db.jpg_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"hxOjeWnUFBHrobVPYMsleFh9lvfJiodG","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/34472b8b-4822-4825-8af4-09897f2837d6.png"},"02191fde-8e7d-4851-9153-2804fed8e8d2":{"name":"animation_90","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"4uQX8jDcZ.FKvbYNPm4xqASfNutq2Yvj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/02191fde-8e7d-4851-9153-2804fed8e8d2.png"},"3a3fbd9f-6678-409e-a4f8-1fc529a97b07":{"name":"flatDark41_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN/category_gameplay/flatDark41.png","frameSize":{"x":108,"y":48},"frameCount":1,"looping":true,"frameDelay":2,"version":"3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":48},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3Tm5mJDk49xZFIlKxkunVL7xtIFyOPTN/category_gameplay/flatDark41.png"},"177ce24f-0b51-41c6-8b20-224faea3d66e":{"name":"winter_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":5,"looping":true,"frameDelay":60,"version":"elk0xboe1dlmrnGMV1hcyH1cTLAKk0_h","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":1200},"rootRelativePath":"assets/177ce24f-0b51-41c6-8b20-224faea3d66e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----









//create back ground
var bg = createSprite(200, 200);
bg.setAnimation("winter_1");







//create platform to run
var first = createSprite(200, 370);
first.setAnimation("animation_1");
var sec = createSprite(100 , 250);
sec.setAnimation("animation_4");
var th = createSprite(360, 250);
th.setAnimation("animation_4_copy_1");
var four = createSprite(280, 150);
four.setAnimation("animation_4_copy_1_copy_1");
var last = createSprite(70, 40);
last.setAnimation("animation_4_copy_1_copy_1_copy_1");





//create players 
 var sonic = createSprite(100, 200);
sonic.setAnimation("xss.jpg_1");
var mario = createSprite(300, 200);
mario.setAnimation("ma stap.jpg_1");







//create bullet
var mb = createSprite(450, 200);
mb.setAnimation("animation_0_copy_1");
var sb = createSprite(450, 200);
sb.setAnimation("animation_3_copy_1");





//create lives
var sl = createSprite(100, 390);
sl.setAnimation("animation_0");
var ml = createSprite(300, 390);
ml.setAnimation("animation_0_copy_1");
mb.setAnimation("animation_2");
last.setCollider("rectangle",0,-10,330,15);
four.setCollider("rectangle",0,-10,230,15);
mario.setCollider("rectangle",0,0,0,80);
sonic.setCollider("circle",0,0,25)
sec.setCollider("rectangle",0,-10,185,15);
th.setCollider("rectangle",0,-10,100,15);
var mll = 100;
var sll = 100;
var sonicM = createSprite(100, 200);
sonicM.setAnimation("db.jpg_1");
var marioM = createSprite(300, 200);
marioM.setAnimation("ma jo.jpg_1");
var vs = createSprite(200, 200);
vs.setAnimation("animation_90");
var start = createSprite(200, 350);
start.setAnimation("flatDark41_1");
textSize(17);
textFont("Georgia");
fill(0);
function draw() {
//adding sound
playSound("assets/category_background/boxing_gym.mp3");
  
  
  
  //modifieng start button
  if (mousePressedOver(start)) {
    sonicM.visible = false;
    vs.visible = false;
    marioM.visible = false;
    start.visible = false;
  }
 
 
 
 
 //setting bullets and players according to platform
  mb.y = mario.y;
  sb.y = sonic.y;
  mario.collide(first);
  sonic.collide(first);
  mario.collide(sec);
  sonic.collide(sec);
  mario.collide(th);
  sonic.collide(th);
  mario.collide(four);
  sonic.collide(four);
  mario.collide(last);
  sonic.collide(last);
  
  
  
  
  
  //setting movement of players and bullets
  if (keyDown("right")) {
    mario.setAnimation("mario2.jpg_1");
    mario.velocityX = 5;
  }
  if (keyWentUp("right")) {
    mario.setAnimation("ma stap.jpg_1");
    mario.velocityX = 0;
  }
   if (keyDown("left")) {
    mario.setAnimation("mario2.jpg_1_copy_1");
    mario.velocityX = -5;
  }
  if (keyWentUp("left")) {
    mario.setAnimation("ma stap.jpg_1_copy_1");
    mario.velocityX = 0;
  }
  if (keyDown("b")) {
    mario.setAnimation("ma th.jpg_1_copy_1");
    mb.setAnimation("animation_2");
    mb.velocityX = -9;
    mb.x = mario.x;
  }
  if (keyDown("m")) {
    mario.setAnimation("ma th.jpg_1");
    mb.setAnimation("animation_2_copy_1");
    mb.x = mario.x;
    mb.velocityX = 9;
  }
  if (keyDown("up")) {
    mario.velocityY = -8;
  }
   
  if (keyDown("d")) {
    sonic.setAnimation("dd.jpg_1");
    sonic.velocityX = 5;
  }
  if (keyWentUp("d")) {
    sonic.setAnimation("xss.jpg_1");
    sonic.velocityX = 0;
  }
   if (keyDown("a")) {
    sonic.setAnimation("dd.jpg_1_copy_1");
    sonic.velocityX = -5;
  }
  if (keyWentUp("a")) {
    sonic.setAnimation("xss.jpg_1_copy_1");
    sonic.velocityX = 0;
  }
  if (keyDown("w")) {
    sonic.setAnimation("bonii.jpg_1_copy_1");
    sb.setAnimation("animation_3_copy_1");
    sb.velocityX = -9;
    sb.x = sonic.x;
  }
  if (keyDown("r")) {
    sonic.setAnimation("bonii.jpg_1");
    sb.setAnimation("animation_3");
    sb.x = sonic.x;
    sb.velocityX = 9;
  }
  if (keyDown("space")) {
    sonic.velocityY = -8;
    sonic.setAnimation("sonii.jpg_1")
  }
  
  
  
  
  
  
  
  //setting bullet score
  if (sb.isTouching(mario)) {
    mll = mll - 5;
    ml.width = ml.width - 10;
    sb.x = 4444;
  }
  if (mb.isTouching(sonic)) {
    sll = sll - 10;
    sl.width = sl.width - 7;
    mb.x = 4444;
  }
 
 
 
 
 
 
 
 
 //ending game 
  if (sll == 0) {
    var ani = createSprite(200, 200);
    ani.setAnimation("ma jo.jpg_1_copy_1");
  }
  if (mll == 0) {
    var ani1 = createSprite(200, 200);
    ani1.setAnimation("db.jpg_1");
  }
  
  
  
  
  
  
  
  
  //adding gravity
  sonic.velocityY = sonic.velocityY+0.8;
  mario.velocityY = mario.velocityY+0.8;
  
  
  
  
  
  
  
  
  //drawing our game on canvas
  drawSprites();
  
  
  
  
  
  
  //displaying of scores
  text("sonic life :"+sll, 15, 390);
  text("mario life :"+mll, 260, 390);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
