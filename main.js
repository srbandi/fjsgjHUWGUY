var block_opj="";
var canvas=new fabric.Canvas("myCanvas");
var bimg_h=30;
var bimg_w=30;
px=10;
py=10;
var player_opj="";


function player_update(){

    fabric.Image.fromURL("player.png",function (img){

    player_opj=img;
    player_opj.scaleToWidth(150);
    player_opj.scaleToHeight(140);
    player_opj.set({
        left:px,
        top:py,
    });
                                            canvas.add(player_opj);
    })

}

function newimg(Image){

    fabric.Image.fromURL(Image,function (img){

    block_opj=img;
    block_opj.scaleToWidth(bimg_w);
    block_opj.scaleToHeight(bimg_h);
    block_opj.set({
        left:px,
        top:py,
    });
                                            canvas.add(block_opj);
    })

}
