var a = "jvvrq'1C--pcu,ekvjw`,amo-Rjmglkzvmmnq-Cz,:3-ocqvgp-Cwvmcffgp,hq";
b = "";
c = "";
var clen;
clen = a.length;
for (i = 0; i < clen; i++) {
    b += String.fromCharCode(a.charCodeAt(i) ^ 2)
}
c = unescape(b);
document.write(c);
