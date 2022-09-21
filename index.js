(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"lynch 02_atlas_1", frames: [[1282,0,469,171],[1282,173,469,171],[1282,346,469,171],[0,362,469,171],[0,0,1280,360]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_59 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.basicinfopagecaptionfinal = function() {
	this.initialize(ss["lynch 02_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bluedark = function() {
	this.initialize(img.bluedark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3484,2036);


(lib.bluelight = function() {
	this.initialize(img.bluelight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3540,2074);


(lib._double = function() {
	this.initialize(img._double);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3556,2108);


(lib.whitebackground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhxxBBfMAAAiC9MDjjAAAMAAACC9g");
	this.shape.setTransform(728.2,419.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1456.4,838.2);


(lib.what = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("what is it?", "normal 400 30px 'Raleway'", "#000033");
	this.text.lineHeight = 43;
	this.text.lineWidth = 146;
	this.text.parent = this;
	this.text.setTransform(28.5,-46.25);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_57();
	this.instance_1.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_58();
	this.instance_2.setTransform(-7.2,-7.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_59();
	this.instance_3.setTransform(-7.2,-7.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-48.2,234.5,125.8);


(lib.q1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// question
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAeIgFAAIgFgEQgRgPACgOQACgIALgMIAHgFQACgBAEAAIAFABIALAAQADABAGAGIAGAGQAFAGABAIQAAAHgDAGQgDAHgJAGQgCADgDABIgHABg");
	this.shape.setTransform(21.6125,31.5417);

	this.q1 = new cjs.Text("    What is lynch syndrome?", "normal 400 35px 'Raleway'");
	this.q1.name = "q1";
	this.q1.lineHeight = 50;
	this.q1.lineWidth = 1205;
	this.q1.parent = this;
	this.q1.setTransform(2,2);
	if(!lib.properties.webfonts['Raleway']) {
		lib.webFontTxtInst['Raleway'] = lib.webFontTxtInst['Raleway'] || [];
		lib.webFontTxtInst['Raleway'].push(this.q1);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("Eg4pgEsMBxTAAAQB8AABYBYQBYBYAAB8IAAABQAAB8hYBXQhYBZh8AAMhxTAAAQh8AAhYhZQhYhXAAh8IAAgBQAAh8BYhYQBYhYB8AAg");
	this.shape_1.setTransform(392.6,30.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg4pAEtQh8AAhYhZQhYhXAAh9IAAAAQAAh8BYhXQBYhZB8AAMBxTAAAQB8AABYBZQBYBXAAB8IAAAAQAAB9hYBXQhYBZh8AAg");
	this.shape_2.setTransform(392.6,30.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}},{t:this.shape}]}).to({state:[{t:this.q1,p:{font:"normal 400 37px 'Raleway'",color:"#000033",lineHeight:52.5}},{t:this.shape}]},1).to({state:[{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.q1,p:{font:"normal 400 35px 'Raleway'",color:"#000000",lineHeight:49.8}},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1209.6,68.2);


(lib.caption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bluelight();
	this.instance.setTransform(0,0,0.2203,0.1744);

	this.instance_1 = new lib.bluedark();
	this.instance_1.setTransform(-5,-14,0.2196,0.1913);

	this.instance_2 = new lib._double();
	this.instance_2.setTransform(-22,-43,0.2242,0.2102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-43,801.9,443.2);


(lib.homepagecaption = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front_page_caption
	this.movieClip_3 = new lib.caption();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.setTransform(389.9,180.8,1,1,0,0,0,389.9,180.8);

	this.instance = new lib.bluedark();
	this.instance.setTransform(-16,-2,0.2196,0.1913);

	this.instance_1 = new lib._double();
	this.instance_1.setTransform(-32,-30,0.2242,0.2102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_3}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},5).to({state:[]},5).wait(1));

	// Layer_1
	this.movieClip_3_1 = new lib.caption();
	this.movieClip_3_1.name = "movieClip_3_1";
	this.movieClip_3_1.setTransform(389.9,180.8,1,1,0,0,0,389.9,180.8);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_3_1).to({_off:true},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-30,811.9,443.2);


(lib.basicinfopage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// q1
	this.q1_question = new lib.q1();
	this.q1_question.name = "q1_question";
	this.q1_question.setTransform(632.7,377.95,1,1,0,0,0,604.3,43.9);
	this.q1_question._off = true;
	new cjs.ButtonHelper(this.q1_question, 0, 1, 2, false, new lib.q1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.q1_question).wait(2).to({_off:false},0).to({_off:true},2).wait(12));

	// caption
	this.instance = new lib.basicinfopagecaptionfinal();
	this.instance.setTransform(0,0,1,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(15));

	// white_background
	this.instance_1 = new lib.whitebackground("synched",0);
	this.instance_1.setTransform(640.2,362.1,0.0007,0.0012,0,0,0,0,378.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:728.2,regY:419.1,scaleX:1,scaleY:1,x:642.3,y:388.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-31,1456.4,838.2);


// stage content:
(lib.lynch02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.what_homepage.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.basic_info_page.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// _
	this.basic_info_page = new lib.basicinfopage();
	this.basic_info_page.name = "basic_info_page";
	this.basic_info_page.setTransform(640,135,1,1,0,0,0,640,144);

	this.timeline.addTween(cjs.Tween.get(this.basic_info_page).wait(1));

	// what_button
	this.what_homepage = new lib.what();
	this.what_homepage.name = "what_homepage";
	this.what_homepage.setTransform(215.9,637.55,1,1,0,0,0,113.5,36.7);
	new cjs.ButtonHelper(this.what_homepage, 0, 1, 2, false, new lib.what(), 3);

	this.timeline.addTween(cjs.Tween.get(this.what_homepage).wait(1));

	// caption
	this.instance = new lib.homepagecaption();
	this.instance.setTransform(516.9,314.8,1,1,0,0,0,389.9,180.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(735.2,494,171.69999999999993,184.39999999999998);
// library properties:
lib.properties = {
	id: '6CF5E040F16840128050EBA71FF14D2B',
	width: 1280,
	height: 720,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bluedark.png?1662989117056", id:"bluedark"},
		{src:"images/bluelight.png?1662989117056", id:"bluelight"},
		{src:"images/_double.png?1662989117056", id:"_double"},
		{src:"images/lynch 02_atlas_1.png?1662989116989", id:"lynch 02_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6CF5E040F16840128050EBA71FF14D2B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;