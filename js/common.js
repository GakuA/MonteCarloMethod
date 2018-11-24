var arrLsArr = [];

$(function() {
	if (!localStorage.getItem("arr")) {
		localStorage.setItem("arr", "1,2,3");
	}

	if (!localStorage.getItem("kaiouken")) {
		localStorage.setItem("kaiouken", "1");
	}

	//界王拳
	$("#kaiouken input").val(localStorage.getItem("kaiouken"));

	$("#kaiouken input").change(function() {
		localStorage.setItem("kaiouken", $("#kaiouken input").val());
	});

	var lsArr = localStorage.getItem("arr");
	$("#arr").html(lsArr);
	arrLsArr = lsArr.split(",");
	$("#bet").html("BET:" + (parseInt(arrLsArr[0]) + parseInt(arrLsArr[arrLsArr.length - 1]))*localStorage.getItem("kaiouken"));

	//win
	$("#win").click(function() {
		if (arrLsArr.length <= 3) {
			arrLsArr = ["1","2","3"];
		} else {
			arrLsArr.pop();
			arrLsArr.shift();
		}
		localStorage.setItem("arr", arrLsArr.join(","));
		$("#arr").html(arrLsArr.join(","));
		$("#bet").html("BET:" + (parseInt(arrLsArr[0]) + parseInt(arrLsArr[arrLsArr.length - 1]))*localStorage.getItem("kaiouken"));
	});

	//lose
	$("#lose").click(function() {
		arrLsArr.push(parseInt(arrLsArr[0]) + parseInt(arrLsArr[arrLsArr.length - 1]));
		localStorage.setItem("arr", arrLsArr.join(","));
		$("#arr").html(arrLsArr.join(","));
		$("#bet").html("BET:" + (parseInt(arrLsArr[0]) + parseInt(arrLsArr[arrLsArr.length - 1]))*localStorage.getItem("kaiouken"));
	});
});
