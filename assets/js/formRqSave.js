function SaveFormReq(){for(var e,t=new FormData,n=document.getElementById("confirmFr").elements,a=0;e=n[a++];)"hidden"===e.type&&t.append(e.name,e.value);var o=new XMLHttpRequest;return o.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=this.response;1==e?(alert("บันทึกข้อมูลสำเร็จ"),document.getElementById("shprint").style.display="inline-block",document.getElementById("cosfr").style.display="inline-block",document.getElementById("saveform").style.display="none",document.getElementById("blackin").style.display="none",myStorage.clear()):(alert("บันทึกข้อมูลไม่สำเร็จ"),console.log(e))}},o.open("POST","./form/insertfromreq.php",!0),o.send(t),!1}function SaveFormReqUpdate(){for(var e,t=new FormData,n=document.getElementById("confirmFr").elements,a=0;e=n[a++];)"hidden"===e.type&&t.append(e.name,e.value);var o=new XMLHttpRequest;return o.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=this.response;1==e?(alert("บันทึกข้อมูลสำเร็จ"),document.getElementById("shprint").style.display="inline-block",document.getElementById("cosfr").style.display="inline-block",document.getElementById("saveform").style.display="none",document.getElementById("blackin").style.display="none",myStorage.clear()):(console.log(e),alert("บันทึกข้อมูลไม่สำเร็จ"))}},o.open("POST","./form/updatefromreq.php",!0),o.send(t),!1}