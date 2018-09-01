document.addEventListener("DOMContentLoaded", function(event) {

    const tabsSwitchers = document.querySelectorAll('.tabs_headers .tab_title');
    const tabs = document.querySelectorAll('.tabs__content .tab');
    const paymentMethodsWrapers = document.querySelectorAll('.radio-wrap');
    const paymentMethodsButtons = document.querySelectorAll('.radio-wrap input[type="radio"]');

    tabsSwitchers.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabSwitcher(this.getAttribute('id'));
        })
    });


    paymentMethodsButtons.forEach(function (item) {
        item.addEventListener('click', function () {

            paymentMethodsWrapers.forEach(function (item) {
                removeActiveClass(item);
            });

            this.parentElement.classList.add('active');
        })
    });

    function removeActiveClass(item) {
        item.classList.remove('active');
    }


    function tabSwitcher(classOfSwitcher) {
        const switcher = document.querySelector(`#${classOfSwitcher}`);
        const neededTab  = document.querySelector(`.${classOfSwitcher}`);

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

