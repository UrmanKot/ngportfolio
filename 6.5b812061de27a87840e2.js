(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"57Z3":function(t,n,e){"use strict";e.r(n),e.d(n,"ParallaxModule",function(){return c});var a=e("ofXK"),s=e("tyNb"),i=e("fXoL");const p=["scene"],o=["scene"],l=[{path:"space",component:(()=>{class t{constructor(){}ngOnInit(){new Parallax(this.sceneRef.nativeElement)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.xb({type:t,selectors:[["app-space-mouse-move"]],viewQuery:function(t,n){if(1&t&&i.Rb(p,3),2&t){let t;i.Nb(t=i.Mb())&&(n.sceneRef=t.first)}},decls:11,vars:0,consts:[[1,"space-parallax"],[1,"space-parallax__scene"],["scene",""],["data-depth","0.3",1,"space-parallax__layer"],["src","assets/img/parallax/planet-1.png"],["data-depth","0.5",1,"space-parallax__layer"],["src","assets/img/parallax/planet-2.png"],["data-depth","0.4",1,"space-parallax__layer"],["src","assets/img/parallax/astronaut.png"],["data-depth","0.2",1,"space-parallax__layer"],["src","assets/img/parallax/rocket.png"]],template:function(t,n){1&t&&(i.Gb(0,"div",0),i.Gb(1,"ul",1,2),i.Gb(3,"li",3),i.Eb(4,"img",4),i.Fb(),i.Gb(5,"li",5),i.Eb(6,"img",6),i.Fb(),i.Gb(7,"li",7),i.Eb(8,"img",8),i.Fb(),i.Gb(9,"li",9),i.Eb(10,"img",10),i.Fb(),i.Fb(),i.Fb())},styles:[".space-parallax[_ngcontent-%COMP%]{height:100%;width:100%;overflow:hidden;background:url(background.10ca2b8c06707cc41c85.jpg) 50%/cover no-repeat fixed}.space-parallax__layer[_ngcontent-%COMP%]{display:flex!important;width:100%}.space-parallax__layer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 auto!important}"]}),t})()},{path:"planets",component:(()=>{class t{constructor(){}ngOnInit(){new Parallax(this.sceneRef.nativeElement)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.xb({type:t,selectors:[["app-planets-mouse-move"]],viewQuery:function(t,n){if(1&t&&i.Rb(o,3),2&t){let t;i.Nb(t=i.Mb())&&(n.sceneRef=t.first)}},decls:33,vars:0,consts:[[1,"planets","f-roboto"],[1,"planets__header"],[1,"planets__logo"],[1,"planets__nav"],[1,"planets__links"],[1,"planets__link"],["src","assets/img/parallax/linkedin.png"],["src","assets/img/parallax/facebook.png"],["src","assets/img/parallax/instagram.png"],[1,"planets__screen"],[1,"planets__scene"],["scene",""],["data-depth","0.1",1,"planets__bg"],["src","assets/img/parallax/background.png"],["data-depth","0.2",1,"planets__rock-1"],["src","assets/img/parallax/rock.png"],["data-depth","1.2",1,"planets__earth"],["src","assets/img/parallax/earth.png"],["data-depth","0.1",1,"planets__text"],["data-depth","0.4",1,"planets__mid"],["src","assets/img/parallax/mid.png"],["data-depth","0.1",1,"planets__fore"],["src","assets/img/parallax/foreground.png"],[1,"swiper__container"],[1,"swiper__wrapper"],[1,"swiper__slide"],[1,"swiper__slide-number"]],template:function(t,n){1&t&&(i.Gb(0,"div",0),i.Gb(1,"header",1),i.Gb(2,"div",2),i.Qb(3,"\u0428\u0430\u043f\u043a\u0430"),i.Fb(),i.Gb(4,"nav",3),i.Gb(5,"ul",4),i.Gb(6,"li",5),i.Eb(7,"img",6),i.Fb(),i.Gb(8,"li",5),i.Eb(9,"img",7),i.Fb(),i.Gb(10,"li",5),i.Eb(11,"img",8),i.Fb(),i.Fb(),i.Fb(),i.Fb(),i.Gb(12,"section",9),i.Gb(13,"div",10,11),i.Gb(15,"div",12),i.Eb(16,"img",13),i.Fb(),i.Gb(17,"div",14),i.Eb(18,"img",15),i.Fb(),i.Gb(19,"div",16),i.Eb(20,"img",17),i.Fb(),i.Gb(21,"div",18),i.Gb(22,"h1"),i.Qb(23,"UnitCode"),i.Fb(),i.Fb(),i.Gb(24,"div",19),i.Eb(25,"img",20),i.Fb(),i.Gb(26,"div",21),i.Eb(27,"img",22),i.Fb(),i.Fb(),i.Fb(),i.Gb(28,"section",9),i.Gb(29,"div",23),i.Gb(30,"div",24),i.Gb(31,"div",25),i.Eb(32,"div",26),i.Fb(),i.Fb(),i.Fb(),i.Fb(),i.Fb())},styles:[".planets[_ngcontent-%COMP%]{overflow-x:hidden;background:#000;height:100%}.planets__header[_ngcontent-%COMP%]{position:fixed;z-index:100;height:8vh;width:100%;display:flex;justify-content:space-between;align-items:center;padding:10px 30px}.planets__logo[_ngcontent-%COMP%]{color:#fff;font-weight:600;font-size:1.6em}.planets__nav[_ngcontent-%COMP%]   .planets__links[_ngcontent-%COMP%]{display:flex}.planets__nav[_ngcontent-%COMP%]   .planets__link[_ngcontent-%COMP%]{padding:0 5px}.planets__nav[_ngcontent-%COMP%]   .planets__link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:scale(.45)}section[_ngcontent-%COMP%]{height:100vh;overflow:hidden}.planets__bg[_ngcontent-%COMP%]{left:-30px!important}.planets__bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:110vw;height:100vh;filter:brightness(.6);object-fit:cover}.planets__rock-1[_ngcontent-%COMP%]{position:absolute!important;left:10vw!important;top:20vh!important}.planets__rock-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%;filter:brightness(.5)}.planets__earth[_ngcontent-%COMP%]{position:absolute!important;left:40vw!important;top:25vh!important}.planets__earth[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;height:400px;z-index:1;filter:brightness(.7)}.planets__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:5vw;font-weight:700;letter-spacing:20px;position:absolute;top:36vh;left:35vw;color:#fff;text-transform:uppercase}.planets__mid[_ngcontent-%COMP%]{left:-150px!important;bottom:-100px!important;top:unset!important}.planets__mid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;z-index:2;left:-20px;top:20vh!important;filter:brightness(.8)}.planets__fore[_ngcontent-%COMP%]{right:-50px!important;bottom:-200px!important;top:0!important;left:unset!important}.planets__fore[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;height:110vh;z-index:3;filter:brightness(.5);object-fit:cover}"]}),t})()}];let r=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Bb({type:t}),t.\u0275inj=i.Ab({imports:[[s.b.forChild(l)],s.b]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.Bb({type:t}),t.\u0275inj=i.Ab({imports:[[a.b,r]]}),t})()}}]);