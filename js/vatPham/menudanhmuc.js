﻿$(document).ready(function () {
    var flagDM = false;
    var flagNL = false;
    var flagDT = false;
    $("#btnDanhMuc").click(function () {
        if (flagDM) {
            $("#menuDanhMuc").css("left", "-190px");
            flagDM = false;
        } else {
            $("#menuDanhMuc").css("left", "-3px");
            flagDM = true;

            $("#menuNguyenLieu").css("left", "-190px");
            flagNL = false;
            $("#menuDoiTuong").css("left", "-190px");
            flagDT = false;
        }
    });
    $("#btnNguyenLieu").click(function () {
        if (flagNL) {
            $("#menuNguyenLieu").css("left", "-190px");
            flagNL = false;
        } else {
            $("#menuNguyenLieu").css("left", "-3px");
            flagNL = true;

            $("#menuDanhMuc").css("left", "-190px");
            flagDM = false;
            $("#menuDoiTuong").css("left", "-190px");
            flagDT = false;
        }
    });
    $("#btnDoiTuong").click(function () {
        if (flagDT) {
            $("#menuDoiTuong").css("left", "-190px");
            flagDT = false;
        } else {
            $("#menuDoiTuong").css("left", "-3px");
            flagDT = true;

            $("#menuDanhMuc").css("left", "-190px");
            flagDM = false;
            $("#menuNguyenLieu").css("left", "-190px");
            flagNL = false;
        }
    });
    $(".pagination").click(function () {
        //alert("hh");
        $('body,html').animate({ scrollTop: 0 }, 400);
    })
});