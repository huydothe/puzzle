function changimage() {
    let srcimage;
    let valuehuyid;
    let namedataid = document.getElementById('img-1').getAttribute('huy-id');
    if (namedataid === 'monkey') {
        srcimage = "image/panda_swap_part1x1.jpg";
        valuehuyid = 'panda';
    } else {
        srcimage = "image/monkey_part1x1.jpg";
        valuehuyid = 'monkey'
    }
    document.getElementById('img-1').setAttribute('src',srcimage);
    document.getElementById('img-2').setAttribute('huy-id',valuehuyid);
    checkWin()
}
function changimage2() {
    let srcimage;
    let valuehuyid;
    let namedataid = document.getElementById('img-2').getAttribute('huy-id');
    if(namedataid==='monkey') {
        srcimage='image/panda_swap_part1x1.jpg';
        valuehuyid='panda';
    }else {
        srcimage="image/monkey_part1x1.jpg";
        valuehuyid='monkey';
    }
    document.getElementById('img-2').setAttribute('src',srcimage);
    document.getElementById('img-2').setAttribute('src',srcimage);
}