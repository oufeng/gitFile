/*
Lightbox JS: Fullsize Image Overlays
by Lokesh Dhakar - http://www.huddletogether.com

For more information on this script, visit:
http://huddletogether.com/projects/lightbox/

Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
(basically, do anything you want, just leave my name and link)

Table of Contents
-----------------
Configuration

Functions
- getPageScroll()
- getPageSize()
- pause()
- getKey()
- listenKey()
- showLightbox()
- hideLightbox()
- initLightbox()
- addLoadEvent()

Function Calls
- addLoadEvent(initLightbox)

*/



//
// Configuration
//
// If you would like to use a custom loading image or close button reference them in the next two lines.

var lightboxContainer = {
    "loadingImage": "../Include/Images/V2/skin_green/loading.gif",
    "arrayPic": [],
    "current": 0,
    "rotation": 0
};

//
// getPageScroll()
// Returns array with x,y page scroll values.
// Core code from - quirksmode.org
//
function getPageScroll() {

    var yScroll;

    if (self.pageYOffset) {
        yScroll = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {// Explorer 6 Strict
        yScroll = document.documentElement.scrollTop;
    } else if (document.body) {// all other Explorers
        yScroll = document.body.scrollTop;
    }

    return new Array("", yScroll);
}



//
// getPageSize()
// Returns array with page width, height and window width, height
// Core code from - quirksmode.org
// Edit for Firefox by pHaez
//
function getPageSize() {

    var xScroll;
    var yScroll;

    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }

    var windowWidth;
    var windowHeight;
    if (self.innerHeight) {// all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }

    // for small pages with total height less then height of the viewport
    var pageHeight;
    var pageWidth;
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }

    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }


    return new Array(pageWidth, pageHeight, windowWidth, windowHeight);

}


//
// pause(numberMillis)
// Pauses code execution for specified time. Uses busy code, not good.
// Code from http://www.faqts.com/knowledge_base/view.phtml/aid/1602
//
function pause(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) {
            return;
        }
    }
}

//
// getKey(key)
// Gets keycode. If 'x' is pressed then it hides the lightbox.
//

function getKey(e) {
    var keycode;
    var key;
    if (e == null) { // ie
        keycode = event.keyCode;
    } else { // mozilla
        keycode = e.which;
    }
    key = String.fromCharCode(keycode).toLowerCase();

    if (key == "x") { hideLightbox(); }
}


//
// listenKey()
//
function listenKey() { document.onkeypress = getKey; }


//
// showLightbox()
// Preloads images. Pleaces new image in lightbox then centers and displays.
//
function showLightbox(arrPic, objPic) {
    //赋值给全局变量
    lightboxContainer.arrayPic = arrPic;
    // prep objects
    var objBody = document.getElementsByTagName("html").item(0);
    var objOverlayParent = document.getElementById("overlayParent");
    var objOverlay = document.getElementById("overlay");
    var objLightbox = document.getElementById("lightbox");
    var objImage = document.getElementById("lightboxImage");
    var objLoadingImage = document.getElementById("loadingImage");
    var objLeftImage = document.getElementById("leftImage");
    var objRightImage = document.getElementById("rightImage");
    var objCloseImage = document.getElementById("closeImage");
    var objTurnRight = document.getElementById("turnRight");
    var objTurnLeft = document.getElementById("turnLeft");

    var arrayPageSize = getPageSize();
    var arrayPageScroll = getPageScroll();

    // center loadingImage if it exists
    if (objLoadingImage) {
        objLoadingImage.style.top = ((arrayPageSize[3] - objLoadingImage.height) / 2) + "px";
        objLoadingImage.style.left = ((arrayPageSize[2] - 9 - objLoadingImage.width) / 2) + "px";
        objLoadingImage.style.display = "block";
    }

    // set height of Overlay to take up whole page and show
    objBody.style.overflow = "hidden";
    objOverlayParent.style.display = "block";
    objOverlay.style.Height = (arrayPageSize[1] + "px");
    objOverlay.style.display = "block";

    // preload image
    var imgPreload = new Image();

    imgPreload.onload = function () {
        // center lightbox and make sure that the top and left values are not negative
        // and the image placed outside the viewport
        if (imgPreload.width > 1024) {
            imgPreload.height = imgPreload.height / (imgPreload.width / 1024);
            imgPreload.width = 1024;
        }
        if (imgPreload.height > 1024) {
            imgPreload.width = imgPreload.width / (imgPreload.height / 1024);
            imgPreload.height = 1024;
        }

        var lightboxTop = (arrayPageSize[3] - imgPreload.height) / 2;
        var lightboxLeft = ((arrayPageSize[0] - imgPreload.width) / 2);

        objLightbox.style.top = (lightboxTop < 0) ? "0px" : lightboxTop + "px";
        objLightbox.style.left = (lightboxLeft < 0) ? "0px" : lightboxLeft + "px";

        lightboxContainer.current = 0;
        lightboxContainer.rotation = 0;
        if ("transform" in document.documentElement.style) {
            objImage.style.transform = "rotate(0deg)";
        }
        else if ("filter" in document.documentElement.style) {
            objLightbox.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=0)";
        }

        objImage.onload = function () {
            objImage.width = imgPreload.width;
            objImage.height = imgPreload.height;
            arrayPageSize = getPageSize();
            if (objImage.height > arrayPageSize[3]) {
                objOverlay.style.height = (objImage.height + "px");
            }
            else {
                objOverlay.style.height = (arrayPageSize[3] + "px");
            }

            objLightbox.style.display = "block";
            objImage.style.display = "block";
            objTurnRight.style.display = "block";
            objTurnLeft.style.display = "block";
            objLeftImage.style.display = "block";
            objRightImage.style.display = "block";
            objCloseImage.style.display = "block";

            var cueentPic = indexArr(lightboxContainer.arrayPic, objPic.src);

            if (cueentPic == 0) {
                objLeftImage.style.display = "none";
            }
            if (cueentPic == lightboxContainer.arrayPic.length - 1) {
                objRightImage.style.display = "none";
            }
        };
        objImage.src = objPic.src;

        objImage.title = objPic.title;


        // A small pause between the image loading and displaying is required with IE,
        // this prevents the previous image displaying for a short burst causing flicker.
        if (navigator.appVersion.indexOf("MSIE") != -1) {
            pause(250);
        }

        if (objLoadingImage) { objLoadingImage.style.display = "none"; }

        // Hide select boxes as they will 'peek' through the image in IE
        var selects = document.getElementsByTagName("select");
        for (i = 0; i != selects.length; i++) {
            selects[i].style.visibility = "hidden";
        }

        // After image is loaded, update the overlay height as the new image might have
        // increased the overall page height.
        arrayPageSize = getPageSize();
        objOverlay.style.Height = (arrayPageSize[1] + "px");

        // Check for 'x' keypress
        listenKey();

        return false;
    };

    imgPreload.src = objPic.src;

}



function indexArr(arr, current) {
    for (var i = 0; i < arr.length; i++) {
        if (current.indexOf(arr[i]) >= 0) {
            return i
            break;
        }

    }
}

//
// hideLightbox()
//
function hideLightbox() {
    // get objects
    var objBody = document.getElementsByTagName("html").item(0);
    var objOverlayParent = document.getElementById("overlayParent");
    var objOverlay = document.getElementById("overlay");
    var objLightbox = document.getElementById("lightbox");
    var objLeftImage = document.getElementById("leftImage");
    var objRightImage = document.getElementById("rightImage");
    var objCloseImage = document.getElementById("closeImage");
    var objLightboxImage = document.getElementById("lightboxImage");
    var objTurnRight = document.getElementById("turnRight");
    var objTurnLeft = document.getElementById("turnLeft");

    // hide lightbox and overlay
    objBody.style.overflow = "auto";
    objOverlayParent.style.display = "none";
    objOverlay.style.display = "none";

    objLightbox.style.display = "none";
    objLightbox.style.top = "0px";
    objLightbox.style.left = "0px";

    objLeftImage.style.display = "none";
    objRightImage.style.display = "none";
    objCloseImage.style.display = "none";
    objLightboxImage.style.display = "none";
    objLightboxImage.setAttribute("src", "");

    objTurnRight.style.display = "none";
    objTurnLeft.style.display = "none";

    // make select boxes visible
    var selects = document.getElementsByTagName("select");
    for (i = 0; i != selects.length; i++) {
        selects[i].style.visibility = "visible";
    }

    // disable keypress listener
    document.onkeypress = "";
}




//
// initLightbox()
// Function runs on window load, going through link tags looking for rel="lightbox".
// These links receive onclick events that enable the lightbox display for their targets.
// The function also inserts html markup at the top of the page which will be used as a
// container for the overlay pattern and the inline image.
//
function initLightbox() {

    if (!document.getElementsByTagName) { return; }

    document.onkeydown = showkey;

    var objBody = document.getElementsByTagName("body").item(0);

    /*增加*/
    var objOverlayParent = document.createElement("div");
    objOverlayParent.setAttribute("id", "overlayParent");
    objOverlayParent.style.display = "none";
    objOverlayParent.style.position = "fixed";
    objOverlayParent.style.top = "0";
    objOverlayParent.style.right = "0";
    objOverlayParent.style.bottom = "0";
    objOverlayParent.style.left = "0";
    objOverlayParent.style.zIndex = "1002";
    objOverlayParent.style.overflowY = "auto";
    //objOverlayParent.style.overflowX = "auto";
    objBody.insertBefore(objOverlayParent, objBody.firstChild);
    /*减少*/

    // create overlay div and hardcode some functional styles (aesthetic styles are in CSS file)
    var objOverlay = document.createElement("div");
    objOverlay.setAttribute("id", "overlay");
    //去除背景的点击事件
    //objOverlay.onclick = function () { hideLightbox(); return false; }
    objOverlay.style.display = "none";
    objOverlay.style.position = "fixed";
    objOverlay.style.top = "0";
    objOverlay.style.left = "0";
    objOverlay.style.bottom = "0";
    objOverlay.style.right = "0";
    objOverlay.style.zIndex = "90";
    objOverlay.style.width = "100%";
    objOverlay.style.backgroundColor = "#000000";
    objOverlay.style.opacity = "0.5";
    objOverlay.style.filter = "alpha(opacity = 50)";

    objOverlayParent.insertBefore(objOverlay, objOverlayParent.firstChild);

    var arrayPageSize = getPageSize();
    var arrayPageScroll = getPageScroll();

    // preload and create loader image
    var imgPreloader = new Image();

    // if loader image found, create link to hide lightbox and create loadingimage
    imgPreloader.onload = function () {

        var objLoadingImageLink = document.createElement("a");
        objLoadingImageLink.setAttribute("href", "#");
        objLoadingImageLink.onclick = function () { hideLightbox(); return false; }
        objOverlay.appendChild(objLoadingImageLink);

        var objLoadingImage = document.createElement("img");
        objLoadingImage.src = lightboxContainer["loadingImage"];
        objLoadingImage.setAttribute("id", "loadingImage");
        objLoadingImage.style.position = "fixed";
        objLoadingImage.style.zIndex = "150";
        objLoadingImage.style.border = "none";
        objLoadingImageLink.appendChild(objLoadingImage);

        imgPreloader.onload = function () { }; //clear onLoad, as IE will flip out w/animated gifs

        return false;
    }

    imgPreloader.src = lightboxContainer["loadingImage"];

    // create lightbox div, same note about styles as above
    var objLightbox = document.createElement("div");
    objLightbox.setAttribute("id", "lightbox");
    objLightbox.style.display = "none";
    objLightbox.style.position = "absolute";
    objLightbox.style.zIndex = "100";
    //objLightbox.style.backgroundColor = "#FFF";
    objLightbox.style.padding = "0px";
    objOverlayParent.insertBefore(objLightbox, objOverlay.nextSibling);
    objLightbox.onclick = function () {
        /*放大缩写 未完成；
        var objLightboxImage = document.getElementById("lightboxImage");
        var currentWidth = objLightboxImage.width;

        objLightboxImage.height = objLightboxImage.height * 1.2;
        objLightboxImage.width = objLightboxImage.width * 1.2;
        var diffWidth = (objLightboxImage.width - currentWidth) / 2;
        objLightbox.style.left = (parseInt(objLightbox.style.left) - diffWidth)+"px";
        */
    }

    var arrayPageSize = getPageSize();
    var arrayPageScroll = getPageScroll();

    var objLeftImage = document.createElement("span");
    objLeftImage.setAttribute("id", "leftImage");
    objLeftImage.style.zIndex = "105";
    objLeftImage.style.position = "fixed";
    objLeftImage.style.display = "none";
    objLeftImage.style.width = "46px";
    objLeftImage.style.height = "88px";
    objLeftImage.style.backgroundImage = "url(../Include/Images/V2/skin_green/spritesheet.png)";
    objLeftImage.style.backgroundPosition = "-56px -89px";
    objLeftImage.style.backgroundRepeat = "no-repeat";
    objLeftImage.style.cursor = "pointer";
    objLeftImage.style.top = (arrayPageSize[3] - 88) / 2 + "px";
    objLeftImage.style.left = "30px";

    objLeftImage.onclick = function () {
        NextImage("prev");
    };
    objOverlayParent.insertBefore(objLeftImage, objOverlay.nextSibling);

    var objRightImage = document.createElement("span");
    objRightImage.setAttribute("id", "rightImage");
    objRightImage.style.zIndex = "105";
    objRightImage.style.position = "fixed";
    objRightImage.style.display = "none";
    objRightImage.style.width = "46px";
    objRightImage.style.height = "88px";
    objRightImage.style.backgroundPosition = "-112px -94px";
    objRightImage.style.backgroundRepeat = "no-repeat";
    objRightImage.style.backgroundImage = "url(../Include/Images/V2/skin_green/spritesheet.png)";
    objRightImage.style.cursor = "pointer";
    objRightImage.style.top = (arrayPageSize[3] - 88) / 2 + "px";
    objRightImage.style.right = "30px";

    objRightImage.onclick = function () {
        NextImage("next");
    };
    objOverlayParent.insertBefore(objRightImage, objLightbox.nextSibling);

    var objCloseImage = document.createElement("span");
    objCloseImage.setAttribute("id", "closeImage");
    objCloseImage.style.zIndex = "105";
    objCloseImage.style.position = "fixed";
    objCloseImage.style.display = "none";
    objCloseImage.style.width = "33px";
    objCloseImage.style.height = "33px";
    objCloseImage.style.backgroundPosition = "-168px -94px";
    objCloseImage.style.backgroundRepeat = "no-repeat";
    objCloseImage.style.backgroundImage = "url(../Include/Images/V2/skin_green/spritesheet.png)";
    objCloseImage.style.cursor = "pointer";
    objCloseImage.style.right = "36.5px";
    objCloseImage.style.top = "10px";
    objCloseImage.onclick = function () {
        hideLightbox();
    };
    objOverlayParent.insertBefore(objCloseImage, objLightbox.nextSibling);

    var objTurnLeft = document.createElement("img");
    objTurnLeft.setAttribute("id", "turnLeft");
    objTurnLeft.style.zIndex = "105";
    objTurnLeft.style.position = "fixed";
    objTurnLeft.style.display = "none";
    objTurnLeft.style.width = "50px";
    objTurnLeft.style.height = "50px";
    objTurnLeft.style.bottom = "20px";
    objTurnLeft.style.left = (arrayPageSize[2] / 2) - 100 + "px";
    objTurnLeft.src = "../Include/Images/V2/skin_green/turnLeft.png";
    objTurnLeft.style.cursor = "pointer";
    objTurnLeft.style.backgroundColor = "#000000";
    objTurnLeft.style.opacity = "0.5";
    objTurnLeft.style.filter = "alpha(opacity = 50)";

    objTurnLeft.onclick = function () {
        Rotate("left");
    };

    objOverlayParent.insertBefore(objTurnLeft, objLightbox.nextSibling);

    var objTurnRight = document.createElement("img");
    objTurnRight.setAttribute("id", "turnRight");
    objTurnRight.style.zIndex = "105";
    objTurnRight.style.position = "fixed";
    objTurnRight.style.display = "none";
    objTurnRight.style.width = "50px";
    objTurnRight.style.height = "50px";
    objTurnRight.style.bottom = "20px";
    objTurnRight.style.right = (arrayPageSize[2] / 2) - 100 + "px";
    objTurnRight.src = "../Include/Images/V2/skin_green/turnRight.png";
    objTurnRight.style.cursor = "pointer";
    objTurnRight.style.backgroundColor = "#000000";
    objTurnRight.style.opacity = "0.5";
    objTurnRight.style.filter = "alpha(opacity = 50)";

    objTurnRight.onclick = function () {
        Rotate("right");
    };

    objOverlayParent.insertBefore(objTurnRight, objLightbox.nextSibling);


    // create image
    var objImage = document.createElement("img");
    objImage.setAttribute("id", "lightboxImage");
    objImage.style.border = "none";
    objImage.style.clear = "both";
    objLightbox.appendChild(objImage);
}

function showkey() {
    var key = event.keyCode;
    var objLeftImage = document.getElementById("leftImage");
    var obRightImage = document.getElementById("rightImage");
    if (objLeftImage.style.display == "block") {
        if (key == 37) {
            objLeftImage.click();
        }
    }
    if (obRightImage.style.display == "block") {
        if (key == 39) //按了→键！
            obRightImage.click();
    }
}

function IsTransformOrFilter() {
    if ("transform" in document.documentElement.style) {
        return "transform";
    }
    if ("filter" in document.documentElement.style) {
        return "filter";
    }
    return "";
}

function Rotate(direction) {
    var arrayPageSize = getPageSize();
    if (direction == "right") {
        lightboxContainer["current"] = lightboxContainer["current"] + 90;
        lightboxContainer["rotation"] >= 3 ? lightboxContainer["rotation"] = 0 : lightboxContainer["rotation"]++;
    }
    else if (direction == "left") {
        lightboxContainer["current"] = lightboxContainer["current"] - 90;
        lightboxContainer["rotation"] <= 0 ? lightboxContainer["rotation"] = 3 : lightboxContainer["rotation"]--;
    }
    else { }

    var lightboxImage = document.getElementById("lightboxImage");
    var objLightbox = document.getElementById("lightbox");

    var imgLoad = new Image();
    imgLoad.onload = function () {
        if (IsTransformOrFilter() == "filter") {
            if (lightboxContainer["rotation"] % 2 == 0) {
                if (imgLoad.width > 1024) {
                    lightboxImage.height = lightboxImage.height / (lightboxImage.width / 1024);
                    lightboxImage.width = 1024;
                }
                if (imgLoad.height > 1024) {
                    lightboxImage.width = lightboxImage.width / (lightboxImage.height / 1024);
                    lightboxImage.height = 1024;
                }


                var lightboxTop = (arrayPageSize[3] - lightboxImage.height) / 2;
                var lightboxLeft = (arrayPageSize[0] - lightboxImage.width) / 2;
            }
            else {
                if (lightboxImage.height > 1024) {
                    lightboxImage.width = lightboxImage.width / (lightboxImage.height / 1024);
                    lightboxImage.height = 1024;
                }

                var lightboxTop = (arrayPageSize[3] - lightboxImage.width) / 2;
                var lightboxLeft = (arrayPageSize[0] - lightboxImage.height) / 2;
            }
            objLightbox.style.top = (lightboxTop < 0) ? "0px" : lightboxTop + "px";
            objLightbox.style.left = (lightboxLeft < 0) ? "0px" : lightboxLeft + "px";

            objLightbox.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + lightboxContainer["rotation"] + ")";
            return;
        }
        else if (IsTransformOrFilter() == "transform") {
            if (lightboxContainer["current"] != 90 && lightboxContainer["current"] % 180 == 0) {
                if (imgLoad.width > 1024) {
                    lightboxImage.height = lightboxImage.height / (lightboxImage.width / 1024);
                    lightboxImage.width = 1024;
                }
                if (imgLoad.height > 1024) {
                    lightboxImage.width = lightboxImage.width / (lightboxImage.height / 1024);
                    lightboxImage.height = 1024;
                }

            }
            else {
                if (lightboxImage.height > 1024) {
                    lightboxImage.width = lightboxImage.width / (lightboxImage.height / 1024);
                    lightboxImage.height = 1024;
                }
            }

            lightboxImage.style.transform = "rotate(" + lightboxContainer["current"] + "deg)";
            return;
        }
        else { }
    }
    imgLoad.src = lightboxImage.getAttribute("src");
};

function NextImage(NextOrPrev) {
    var nextIndexPic;
    var lightboxImage = document.getElementById("lightboxImage");
    var src = lightboxImage.getAttribute("src");
    if (NextOrPrev == "next") {
        nextIndexPic = indexArr(lightboxContainer["arrayPic"], src) + 1;
    }
    else if (NextOrPrev == "prev") {
        nextIndexPic = indexArr(lightboxContainer["arrayPic"], src) - 1;
    }
    else { }
    hideLightbox();
    showLightbox(lightboxContainer["arrayPic"], { "src": lightboxContainer["arrayPic"][nextIndexPic], "title": src });
}

//
// addLoadEvent()
// Adds event to window.onload without overwriting currently assigned onload functions.
// Function found at Simon Willison's weblog - http://simon.incutio.com/
//
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }

}

addLoadEvent(initLightbox); // run initLightbox onLoad