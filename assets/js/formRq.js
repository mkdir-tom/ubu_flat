function province(e,t){var o=new XMLHttpRequest,n=new FormData;n.append("pid",e),n.append("Cur",t),o.onreadystatechange=function(){4==this.readyState&&200==this.status&&(document.getElementById(t+"CityIDlable").innerHTML=this.responseText,selectOption(document.getElementById(t+"CityID"),myStorage.getItem(t+"CityID")),city(document.getElementById(t+"CityID").options[document.getElementById(t+"CityID").selectedIndex].value,t))},o.open("post","function/formprovince.php",!0),o.send(n)}function city(e,t,o){var n=new XMLHttpRequest,a=new FormData;a.append("cid",e),a.append("Cur",t),n.onreadystatechange=function(){4==this.readyState&&200==this.status&&(document.getElementById(t+"DistrictIDlable").innerHTML=this.responseText,selectOption(document.getElementById(t+"DistrictID"),myStorage.getItem(t+"DistrictID")))},n.open("post","function/formcity.php",!0),n.send(a)}function chvalformrequest(){var e=document.getElementById("FromRqs");return""==chvailable("SocialID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.SocialID.style="box-shadow: 0 0 3px #D11434",e.SocialID.focus(),!1):""==chvailable("PName")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.PName.style="box-shadow: 0 0 3px #D11434",e.PName.focus(),!1):""==chvailable("PName")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.PName.style="box-shadow: 0 0 3px #D11434",e.PName.focus(),!1):""==chvailable("Name")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.Name.style="box-shadow: 0 0 3px #D11434",e.Name.focus(),!1):""==chvailable("Surname")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.Surname.style="box-shadow: 0 0 3px #D11434",e.Surname.focus(),!1):0==chvailable("PositionID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.PositionID.style="box-shadow: 0 0 3px #D11434",e.PositionID.focus(),!1):0==chvailable("FacID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.FacID.style="box-shadow: 0 0 3px #D11434",e.FacID.focus(),!1):0==chvailable("CurProvinceID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.CurProvinceID.style="box-shadow: 0 0 3px #D11434",e.CurProvinceID.focus(),!1):0==chvailable("CurCityID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.CurCityID.style="box-shadow: 0 0 3px #D11434",e.CurCityID.focus(),!1):0==chvailable("CurDistrictID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.CurDistrictID.style="box-shadow: 0 0 3px #D11434",e.CurDistrictID.focus(),!1):""==chvailable("Address")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.Address.style="box-shadow: 0 0 3px #D11434",e.Address.focus(),!1):0==chvailable("ProvinceID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.ProvinceID.style="box-shadow: 0 0 3px #D11434",e.ProvinceID.focus(),!1):0==chvailable("CityID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.CityID.style="box-shadow: 0 0 3px #D11434",e.CityID.focus(),!1):0==chvailable("DistrictID")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.DistrictID.style="box-shadow: 0 0 3px #D11434",e.DistrictID.focus(),!1):""==chvailable("ChildrenCount")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.ChildrenCount.style="box-shadow: 0 0 3px #D11434",e.ChildrenCount.focus(),!1):0==chvailable("st_d")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.st_d.style="box-shadow: 0 0 3px #D11434",e.st_d.focus(),!1):0==chvailable("st_m")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.st_m.style="box-shadow: 0 0 3px #D11434",e.st_m.focus(),!1):0==chvailable("st_y")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.st_y.style="box-shadow: 0 0 3px #D11434",e.st_y.focus(),!1):0==chvailable("bi_d")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.bi_d.style="box-shadow: 0 0 3px #D11434",e.bi_d.focus(),!1):0==chvailable("bi_m")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.bi_m.style="box-shadow: 0 0 3px #D11434",e.bi_m.focus(),!1):0==chvailable("bi_y")?(popupalert(3,"เช็คข้อมูล","กรอกข้อมูลไม่ครบตามแบบฟอร์ม"),e.bi_y.style="box-shadow: 0 0 3px #D11434",e.bi_y.focus(),!1):0!=chvailable("RoomtypeID")||void popupalert(3,"เช็คข้อมูล","กรุณาเลือกประเภทของอาคาร")}function closefq(){location.reload()}function getval(e){var t=document.getElementsByName(e);if("select-one"==t[0].type)return t[0].value;if("text"==t[0].type||"number"==t[0].type||"email"==t[0].type)return t[0].value;if("checkbox"==t[0].type&&t[0].checked)return t[0].value;if("radio"==t.type)for(var o=0;o<t.length;o++)if(t[o].checked)return t[o].value}function checkSoID(e){var t=document.getElementById("SocialID").value,o=new FormData;o.append("SocialID",t);var a=document.getElementById("typediv"),s=new XMLHttpRequest;return s.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=this.responseText.split(String.fromCharCode(5));a.innerHTML=e[0];var t=JSON.parse(e[1]);for(i in FromRqs=document.FromRqs,t){var o=JSON.stringify(i).replace(/['"']+/g,""),s=document.getElementsByName(o);if(savesVl(s[0].name,t[i]),"text"==s[0].type||"number"==s[0].type)s[0].value=t[i];else if("select-one"==s[0].type)selectOption(s[0],myStorage.getItem(s[0].name)),"FacID"==s[0].name?(fac(s[0].options[s[0].selectedIndex].value),selectOption(document.getElementById("DeptID"),myStorage.getItem("DeptID"))):"CurProvinceID"==s[0].name?(province(s[0].options[s[0].selectedIndex].value,"Cur"),selectOption(document.getElementById("CurCityID"),myStorage.getItem("CurCityID")),city(s[0].options[s[0].selectedIndex].value,"Cur"),selectOption(document.getElementById("CurDistrictID"),myStorage.getItem("CurDistrictID"))):"ProvinceID"==s[0].name&&(province(s[0].options[s[0].selectedIndex].value,""),selectOption(document.getElementById("CityID"),myStorage.getItem("CityID")),city(s[0].options[s[0].selectedIndex].value,""),selectOption(document.getElementById("DistrictID"),myStorage.getItem("DistrictID")));else if("radio"==s[0].type){var l=FromRqs.length;for(n=0;n<l;n++)if(FromRqs[n].name==s[0].name&&FromRqs[n].value==myStorage.getItem(s[0].name)){FromRqs[n].checked=!0;break}}}}},s.open("POST","./form/readcheckSoID.php",!0),s.send(o),!1}function shownotics(e){document.getElementById("notics").style.display=1==e?"block":"none"}function rights(e){document.getElementById("rights").style.display=1==e?"block":"none"}formRequeset=(()=>{for(var e,t=new FormData,o=document.getElementById("FromRqs").elements,n=0;e=o[n++];)t.append(e.name,e.value);t.append("RoomtypeID",document.querySelector("input[name = RoomtypeID]:checked").value),t.append("PersonnelType",document.querySelector("input[name = PersonnelType]:checked").value),t.append("RightClaim",document.querySelector("input[name = RightClaim]:checked").value),t.append("RepaymentRight",document.querySelector("input[name = RepaymentRight]:checked").value),t.append("MaritalStatus",document.querySelector("input[name = MaritalStatus]:checked").value),t.append("DissaterEffect",document.getElementById("DissaterEffect").value);var a=new XMLHttpRequest;return a.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=this.responseText;document.getElementById("box-formreq").innerHTML=e}},a.open("POST","./form/viewformRq.php",!0),a.send(t),!1}),window.onload=function(){var e=document.FromRqs;for(i=0;i<e.length;i++){var t=e[i];"text"==t.type||"number"==t.type?(t.addEventListener("blur",function(){savesVl(this.name,this.value)}),""==t.value&&(t.value=myStorage.getItem(t.name))):"FacID"==t.name?(selectOption(t,myStorage.getItem(t.name)),fac(t.options[t.selectedIndex].value)):"CurProvinceID"==t.name?(selectOption(t,myStorage.getItem(t.name)),province(t.options[t.selectedIndex].value,"Cur"),city(t.options[t.selectedIndex].value,"Cur")):"ProvinceID"==t.name?(selectOption(t,myStorage.getItem(t.name)),province(t.options[t.selectedIndex].value,""),city(t.options[t.selectedIndex].value,"")):"select-one"==t.type?("CurProvinceID"!=t.name&&"ProvinceID"!=t.name&&"CurCityID"!=t.name&&"CityID"!=t.name&&"CurDistrictID"!=t.name&&"DistrictID"!=t.name&&"FacID"!=t.name&&"DeptID"!=t.name&&t.addEventListener("change",function(){savesVl(this.name,this.value)}),selectOption(t,myStorage.getItem(t.name))):"radio"==t.type&&t.addEventListener("click",function(){savesVl(this.name,this.value)})}},document.getElementById("notics").style.display="none",document.getElementById("rights").style.display="none";