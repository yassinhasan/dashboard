var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}$(function(){$(".toogle-sidebar").on("click",function(){$(".side-bar").toggleClass("no-sidebar"),$(".content-area").toggleClass("full-width")}),$(".links-area > li >  a").on("click",function(){$(this).find($("i")).toggleClass("fa-angle-right  fa-angle-down"),$(this).next($(".child-links")).slideToggle(500)}),$(".full-screen").on("click",function(){$(this).toggleClass("active"),$(this).hasClass("active")?openFullscreen():closeFullscreen()}),$(".toggle-settings").click(function(){$(this).find("i").toggleClass("fa-cog  fa-times"),$(".setting").toggleClass("hide")}),$(".setting").click(function(e){e.stopPropagation()}),$("html,body").click(function(e){$(".setting").css("right");e.target!==$(".setting")&&($(".setting").hasClass("hide")||(console.log("hellp"),$(".setting").toggleClass("hide"),$(".toggle-settings i").toggleClass("fa-cog  fa-times")))});var e=[];$(".color-option li").each(function(l){e.push($(this).data("theme"))}),console.log(e),$(".color-option li").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$("body").removeClass(e.join(" ")),$("body").addClass($(this).data("theme"))});var l=[];$(".selectfonts option").each(function(e){l.push($(this).data("fonts"))}),console.log(l),$(".selectfonts").on("change",function(){console.log("hi"),$("body").removeClass(l.join(" ")),$("body").addClass($(this).children("option:selected").data("fonts"))})});