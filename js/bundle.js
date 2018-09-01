(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

document.addEventListener("DOMContentLoaded", function (event) {

    var tabsSwitchers = document.querySelectorAll('.tabs_headers .tab_title');
    var tabs = document.querySelectorAll('.tabs__content .tab');
    var paymentMethodsWrapers = document.querySelectorAll('.radio-wrap');
    var paymentMethodsButtons = document.querySelectorAll('.radio-wrap input[type="radio"]');

    tabsSwitchers.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabSwitcher(this.getAttribute('id'));
        });
    });

    paymentMethodsButtons.forEach(function (item) {
        item.addEventListener('click', function () {

            paymentMethodsWrapers.forEach(function (item) {
                removeActiveClass(item);
            });

            this.parentElement.classList.add('active');
        });
    });

    function removeActiveClass(item) {
        item.classList.remove('active');
    }

    function tabSwitcher(classOfSwitcher) {
        var switcher = document.querySelector('#' + classOfSwitcher);
        var neededTab = document.querySelector('.' + classOfSwitcher);

        tabsSwitchers.forEach(function (item) {
            removeActiveClass(item);
        });

        tabs.forEach(function (item) {
            removeActiveClass(item);
        });

        switcher.classList.add('active');
        neededTab.classList.add('active');
    }

    // activate middle tab after loading the page
    tabSwitcher('tabExpress');
});

},{}]},{},[1]);
