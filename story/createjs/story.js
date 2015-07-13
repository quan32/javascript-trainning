(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.story = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{soushin:2},true);

	// timeline functions:
	this.frame_0 = function() {
		this.textList = [
				{name : "オルト花子", text : "これはテスト文章です\nこれはテスト文章です2\nこれはテスト文章です3"},
				{name : "ダッシュ美", text : "仮のテキストなのです\n仮のテキストなのです2\n仮のテキストなのです3"},
				{name : "オルト花子", text : "入れ替わったりするよ～"}
			]
	}
	this.frame_1 = function() {
		this.stop();
			
			this.btn.onClick = function(e) {
				exportRoot.main.checkNext();
			};
	}
	this.frame_2 = function() {
		this.stop();
		
			this.btn.onClick = function(e) {
				location.href = argument.url;
			};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// btn
	this.btn = new lib.btn();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn}]}).wait(3));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ASwZAMAAAgx/MglfAAAMAAAAx/MAlfAAAEBdwBdwMi7fAAAMAAAi7fMC7fAAAMAAAC7f").cp();
	this.shape.setTransform(120,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(3));

	// movie
	this.main = new lib.game_movie();
	this.main._off = true;

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1).to({_off:false},0).wait(2));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EBdwBdwMi7fAAAMAAAi7fMC7fAAAMAAAC7f").cp();
	this.shape_1.setTransform(120,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479.9,-439.9,1200,1200);


// symbols:
(lib._1 = function() {
	this.initialize(img._1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,640);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,640);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,640);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,640);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,640);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


(lib.starline_01 = function() {
	this.initialize(img.starline_01);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,628,134);


(lib.starline_02 = function() {
	this.initialize(img.starline_02);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,90);


(lib.txt_bg = function() {
	this.initialize(img.txt_bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,216);


(lib.シンボル3のコピー = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib._2();
	this.instance.setTransform(-239.9,-319.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-239.9,-319.9,480,640);


(lib.シンボル3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_1 = new lib._1();
	this.instance_1.setTransform(-239.9,-319.9);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-239.9,-319.9,480,640);


(lib.シンボル1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,next:15,start:16},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.parent.canTap = true;
	}
	this.frame_37 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(22).call(this.frame_37));

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiIhAIERAAIiJCBIiIiB").cp();
	this.shape.setTransform(13.7,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},16).to({state:[]},16).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.mq_touch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlh1IAACpIg0AWIg2gSIAAitIgWAAIAAC7ICDAuIBLgdIAAjMIhOAAACQh1IAADKIBcAhIByg6IgRgQIg0AaIhBgaIAAiNIBDAAIAtAkIATgOIg4gqIiTAAAIggGIAAB1IAXAAIAAjkIgXAAIAABbIhkAAIAAhbIhKAAIAADkIBKAAIAAh1IBkAAAnzhgIAADPIBNAAIAAjPIBCAAIAAgVIjSAAIAAAVIBDAAAiPhfIAACQIg6AYIhAgVIAAiTIB6AAAlQh1IAADSIBWAYICBg2IAAi0IjXAA").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},17).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.7,-11.8,113.5,23.6);


(lib.mq_black = function() {
	this.initialize();

	// レイヤー 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.486)").s().p("AUTjTIAAGnMgolAAAIAAmnMAolAAA").cp();

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-129.9,-21.1,260,42.4);


(lib.btn = function() {
	this.initialize();

	// layer1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.008)").s().p("ASwZAMglfAAAMAAAgx/MAlfAAAMAAAAx/").cp();
	this.shape_3.setTransform(120,160);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


(lib.bg_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_2 = new lib.bg();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,320);


(lib.talkbg = function() {
	this.initialize();

	// レイヤー 1
	this.instance_3 = new lib.txt_bg();
	this.instance_3.setTransform(-215.9,-69.6,0.675,0.645);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-215.9,-69.6,432,139.3);


(lib.starline02 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_4 = new lib.starline_02();
	this.instance_4.setTransform(-201.7,-28.9,0.675,0.645);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-201.7,-28.9,403.7,58.1);


(lib.starline01 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_5 = new lib.starline_01();
	this.instance_5.setTransform(211.2,46.9,0.675,0.645,-178.9);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-212.6,-46.8,425.4,93.8);


(lib.mc_namebox = function() {
	this.initialize();

	// timeline function:
	this.frame_0 = function() {
		this.viewtext = new createjs.Text("","13px Arial","#FFFFFF");
			this.viewtext.shadow = new createjs.Shadow("#000000", 2, 2, 0);
			this.addChild(this.viewtext);
			
			this.setText = function(str)
			{
				this.viewtext.text = str;
			}
	}

	// レイヤー 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.004)").s().p("ARYk/MgivAAAIAAJ/MAivAAAIAAp/").cp();
	this.shape_4.setTransform(110.8,33);

	this.addChild(this.shape_4);
	this.frame_0();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,1,222.5,64);


(lib.mq_nextbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
			exportRoot.gotoAndStop("soushin");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6));

	// レイヤー 5
	this.instance_6 = new lib.mq_touch();
	this.instance_6.setTransform(234.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(7));

	// レイヤー 3
	this.instance_7 = new lib.mq_touch();
	this.instance_7.setTransform(0,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).wait(1));

	// レイヤー 1
	this.instance_8 = new lib.mq_black();
	this.instance_8.setTransform(0.1,0,1,0.189);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({scaleY:1},5,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(177.6,-11.7,113.5,23.6);


(lib.mc_navi_popup = function() {
	this.initialize();

	// レイヤー 9
	this.namebox = new lib.mc_namebox();
	this.namebox.setTransform(20.5,198.5);

	// レイヤー 5
	this.maintextbox = new lib.mc_namebox();
	this.maintextbox.setTransform(20.5,228);

	// レイヤー 7
	this.instance_9 = new lib.starline02();
	this.instance_9.setTransform(119.8,204.1,0.84,0.66);

	// レイヤー 8
	this.instance_10 = new lib.starline01();
	this.instance_10.setTransform(141.5,210.1,0.74,0.56);

	// レイヤー 2
	this.instance_11 = new lib.talkbg();
	this.instance_11.setTransform(143.4,264.9,0.82,0.82);

	this.addChild(this.instance_11,this.instance_10,this.instance_9,this.maintextbox,this.namebox);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.6,183.8,370.2,138.2);


(lib.game_movie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{page1:13,page2:29,page3:73,page4:96},true);

	// timeline functions:
	this.frame_0 = function() {
		this.page = 0;
			this.canTap = false;
			
			this.checkNext = function()
			{
				if (!this.canTap)
					return;
					
				this.canTap = false;
				this.nextButton.gotoAndStop("stand");
				this.gotoAndPlay("page" + (++this.page + 1));
			}
			
			this.waitTap = function()
			{
				this.stop();
				this.nextButton.gotoAndPlay("next");
			}
			
			this.getData = function()
			{
				if (exportRoot.textList[this.page] == undefined)
					return {name:"", text:""};
					
				return exportRoot.textList[this.page];
			}
			
			this.viewText = function()
			{
				var data = this.getData();
				this.textarea.namebox.setText(data.name);
				this.textarea.maintextbox.setText(data.text);
			}
	}
	this.frame_13 = function() {
		this.viewText();
	}
	this.frame_28 = function() {
		this.waitTap();
	}
	this.frame_29 = function() {
		this.viewText();
	}
	this.frame_72 = function() {
		this.waitTap();
	}
	this.frame_73 = function() {
		this.viewText();
	}
	this.frame_95 = function() {
		this.waitTap();
	}
	this.frame_96 = function() {
		this.viewText();
	}
	this.frame_108 = function() {
		this.stop();
		this.nextbar.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(15).call(this.frame_28).wait(1).call(this.frame_29).wait(43).call(this.frame_72).wait(1).call(this.frame_73).wait(22).call(this.frame_95).wait(1).call(this.frame_96).wait(12).call(this.frame_108));

	// レイヤー 2
	this.nextButton = new lib.シンボル1();
	this.nextButton.setTransform(226.2,311.3,0.635,0.635,0,0,0,13.7,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextButton}]}).wait(109));

	// touch
	this.nextbar = new lib.mq_nextbar();
	this.nextbar.setTransform(119.7,232.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nextbar}]}).wait(109));

	// layer1
	this.textarea = new lib.mc_navi_popup();
	this.textarea.setTransform(-10.4,102);
	this.textarea.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.textarea).to({y:17,alpha:1},11,cjs.Ease.get(1)).wait(85).to({y:102,alpha:0},9,cjs.Ease.get(0.99)).to({_off:true},1).wait(3));

	// seen_change
	this.instance_12 = new lib.シンボル3();
	this.instance_12.setTransform(196,236,0.6,0.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(73).to({_off:false},0).to({scaleX:1,scaleY:1,x:173,y:323,alpha:1},10,cjs.Ease.get(1)).wait(26));

	// レイヤー 3
	this.instance_13 = new lib.シンボル3のコピー();
	this.instance_13.setTransform(-126.9,323);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({_off:false},0).to({x:63},15,cjs.Ease.get(1)).wait(6).to({y:325},0).wait(2).to({y:315},0).wait(2).to({y:313},0).wait(2).to({y:315},0).wait(2).to({y:325},0).wait(2).to({y:315},0).wait(2).to({y:313},0).wait(2).to({y:315},0).wait(2).to({y:325},0).wait(2).to({y:323},0).wait(5).to({scaleX:0.57,scaleY:0.57,x:60,y:233},10,cjs.Ease.get(1)).wait(26));

	// seen_change
	this.instance_14 = new lib.シンボル3();
	this.instance_14.setTransform(173,548);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(13).to({_off:false},0).to({y:318},8,cjs.Ease.get(1)).to({y:323},5).wait(3).to({scaleX:0.6,scaleY:0.6,x:196,y:236},11,cjs.Ease.get(1)).wait(33).to({scaleX:1,scaleY:1,x:173,y:323},10,cjs.Ease.get(1)).wait(26));

	// bg
	this.instance_15 = new lib.bg_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(109));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.1,0,471,424);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;