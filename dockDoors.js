// ==UserScript==
// @name         Chitty style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script is not allowed to use without the au
// @author       Mihaly Dani
// @match        https://dockscheduler.op.lastmile.com/dockscheduler/user/dockscheduler
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* DELETE FULLSCREEN CLASS FROM 1158
    var ext-comp-1158 = document.getElementById("ext-comp-1158");
    ext-comp-1158.classList.remove("x-fullscreen");

MAY WORK WITH:
  	waitForKeyElements (".x-fullscreen", removeNode);

function removeNode (jNode) {
    jNode.remove ();
}




    */
    var your_name = "asdasd";

    //PRINT//
    var printStyleElem = document.createElement('style');
    printStyleElem.media = 'print';
    printStyleElem.appendChild(document.createTextNode(`body {margin: 0; text-align: center; height: 100wh; } .x-layout-box-inner { display: none} #ext-comp-1166 { display: none} .printInvisible{display: none} .main-wrap { display: none } #header-middle { display: none } .footer-widget-area { display: none } .hiddenPrint { display: none }`));
    document.head.appendChild(printStyleElem);

    setTimeout(() => {
        const test = document.getElementById("ext-comp-1158");
        test.classList.remove("x-fullscreen")[0];
    }, 2000);



    //FORM//
    var form = document.createElement('div');
    form.style.width = "100%";
    form.style.height = "1690px";
    form.style.margin = "auto";
    form.style.display = "none";
    form.style.textAlign = "center";
    form.style.paddingTop = "20px";
    //form.style.background = "grey";
    form.style.border = "1px solid black";
    form.classList.add("printVisible");
    document.body.appendChild(form);

    var title_Div = document.createElement("div");
    title_Div.classList.add("title_Div");
    document.getElementsByClassName("printVisible")[0].appendChild(title_Div);
    var title = document.createElement("h1");
    title.innerHTML = "2.4 Supplier Delivery Record";
    title.style.marginTop = "20px";
    title.style.fontSize = "36px";
    title.style.color = "green";
    title.style.textDecoration = "underline";
    document.getElementsByClassName("title_Div")[0].appendChild(title);

    var printView = document.createElement("div");
    printView.classList.add("chiti");
    printView.style.width = "98%";
   //printView.style.height = "500px";
    printView.style.margin = "auto";
    printView.style.textAlign = "center";
    printView.style.paddingTop = "20px";
    //printView.style.background = "red";
    printView.style.display = "flex";
    printView.style.alignItems = "flex-start";
    printView.style.justifyContent = "space-around";

    //printView.classList.add("tables_div");
    document.getElementsByClassName("printVisible")[0].appendChild(printView);

//////FORM INPUT/////
    var form_input = document.createElement('div');
    //form_input.style.width = "100%";
    //form_input.style.height = "200px";
    form_input.style.margin = "200px 0";
    form_input.style.textAlign = "center";
    form_input.style.paddingTop = "20px";
    form_input.style.position = "fixed";
    form_input.style.zIndex = "999";
    //form.style.background = "grey";
    form_input.style.border = "1px solid black";
    form_input.classList.add("printVisible");
    form_input.classList.add("printInvisible");
    document.body.appendChild(form_input);


/*
    var tables_div = document.createElement('style');
    document.getElementsByClassName("tables_div")[0].style.width = "100%";
    document.getElementsByClassName("tables_div")[0].style.height = "500px";

*/


    var haulier = document.createElement("INPUT");
    haulier.setAttribute("type", "text");
    haulier.value = "Freshlinc";
    haulier.classList.add("hiddenPrint");
    form_input.appendChild(haulier);

    var br = document.createElement('br');
    form_input.appendChild(br);

    var tippingBay = document.createElement("INPUT");
    tippingBay.setAttribute("type", "number");
    tippingBay.value = "0";
    tippingBay.classList.add("hiddenPrint");
    form_input.appendChild(tippingBay);

    var br1 = document.createElement('br');
    form_input.appendChild(br1);

    var pltQty = document.createElement("INPUT");
    pltQty.setAttribute("type", "text");
    pltQty.value = "26 (all)";
    pltQty.classList.add("hiddenPrint");
    form_input.appendChild(pltQty);

    var br2 = document.createElement("br");
    form_input.appendChild(br2);


    var driverPhoneNumber = document.createElement("INPUT");
    driverPhoneNumber.setAttribute("type", "text");
    driverPhoneNumber.value = "07";
    driverPhoneNumber.classList.add("hiddenPrint");
    form_input.appendChild(driverPhoneNumber);

    var br4 = document.createElement("br");
    form_input.appendChild(br4);

    var buttonSave = document.createElement("BUTTON");
    buttonSave.id = "saveBtn";
    buttonSave.addEventListener("click", saveDatas);
    var buttonSaveT = document.createTextNode("Save");
    buttonSave.appendChild(buttonSaveT);
    form_input.appendChild(buttonSave);

    var buttonClear = document.createElement("BUTTON");
    buttonClear.addEventListener("click", clearDatas);
    var buttonClearT = document.createTextNode("Clear");
    buttonClear.appendChild(buttonClearT);
    form_input.appendChild(buttonClear);

    ////BUTTON SHOW/////
    var show_button = document.createElement("BUTTON");
    show_button.addEventListener("click", show_loyaut);
    show_button.textContent = "Show";
    show_button.id = "show_hide_button";
    //var show_buttonT = document.createTextNode("Show");
    //show_button.appendChild(show_buttonT);

    form_input.appendChild(show_button);



//SHOW LOYAUT// FINISH TIHS SHOW HIDE
    function show_loyaut() {
        if (form.style.display === "block") {
            show_button.textContent = "Show";
            form.style.display = "none";
            //form_input.style.position = "relative";
            form_input.style.marginTop = "250px";
        } else {
            form.style.display = "block";
            show_button.textContent = "Hide";

            form_input.style.position = "fixed";
            form_input.style.marginTop = "-1000px";
        }
    }

//SAVE BUTTON//
    function saveDatas(){

       //ARRIVAL TIME//
       arrivalTimeDiv.innerHTML = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

       //HULIER//
       haulierDiv.innerHTML = haulier.value;

       //TIPPING//
       tippingBayDiv.innerHTML = tippingBay.value;

       //PALLET QTY//
       pltQtyDiv.innerHTML = pltQty.value;


        //DATE//
        var today = new Date().toLocaleDateString('en-GB');
        dateDiv.innerHTML = today;


       //DRIVER PHONE NUMBER//
       driverPhoneNumberDiv.innerHTML = driverPhoneNumber.value;


        //////BOOKED HOURS///
        const apptid_divs = [...document.querySelectorAll('.apptSearchResultSelected .apptId')];
        const apptid_set = new Set(apptid_divs.map(div => div.textContent.trim()));
        const teest = [...apptid_set][0];
        //alert(apptid_set.size);
        const books_times_divs = [...document.querySelectorAll('.apptSearchResultSelected .details')];
        const book_times = new Set(books_times_divs.map(div => div.textContent.trim()));

        const booked_hours = [];
        for (let i = 0; i < apptid_set.size; i++) {
            const book_hours = [...book_times][i].split(" ");
            if (!booked_hours.includes(book_hours[2])) {
                booked_hours.push(book_hours[2]);
            }
        }
        //BOOK TIME//
        bookTimeDiv.innerHTML = booked_hours;


        //////NAMES///

        const apptid_divs11 = [...document.querySelectorAll('.apptSearchResultSelected')];
        const apptid_set11 = new Set(apptid_divs11.map(div => div.textContent.trim().split('#')[0]))
        //alert([...apptid_set11][2]);

        //alert(apptid_set11.size);


document.getElementById("app_div_tbl").innerHTML=`
<table style="margin: auto; width: 95%" border="1" cellspacing="0">
  <thead>
    <th class="app_name" style="width: 65%"></th>
    <th style="text-align: center;" colspan="2">Temperature</th>
    <th style="text-align: center;">Number of pallets tipped</th>
  </thead>
  <tbody>
  ${[...apptid_set11].map(txt=>`<tr><td style="font-size: 24px";>${txt}</td><td></td><td></td><td></td></tr>`).join("")}
  </tbody>
</table>`;

/*
        const booked_hours = [];
        for (let i = 0; i < apptid_set.size; i++) {
            const book_hours = [...app_name][i].split(" ");
            if (!booked_hours.includes(book_hours[2])) {
                booked_hours.push(book_hours[2]);
            }
        }
        */
        //BOOK TIME//
        //var bookTime = document.getElementsByClassName("timestamp")[0].innerHTML;
       // var bookTimeSplit = bookTime.split(" ");
       // bookTimeDiv.innerHTML = booked_hours;

/*

        (function (window, document, undefined) {
    "use strict";

    var wrap = document.getElementById("wrap"),
        setColumn = 3,
        setRow = 3,
        btnGen = document.getElementById("saveBtn");

        btnGen.addEventListener("click", generateTable);


    function generateTable(e) {
        var newTable = document.createElement("table"),
            tBody = newTable.createTBody(),
            nOfColumns = parseInt(setColumn.value, 10),
            nOfRows = parseInt(setRow.value, 10),
            row = generateRow(nOfColumns);

        newTable.createCaption().appendChild(document.createTextNode("Generated Table"));

        for (var i = 0; i < nOfRows; i++) {
            tBody.appendChild(row.cloneNode(true));
        }

        (wrap.hasChildNodes() ? wrap.replaceChild : wrap.appendChild).call(wrap, newTable, wrap.children[0]);
    }

    function generateRow(n) {
        var row = document.createElement("tr"),
            text = document.createTextNode("cell");

        for (var i = 0; i < n; i++) {
            row.insertCell().appendChild(text.cloneNode(true));
        }

        return row.cloneNode(true);
    }

    function copyTo(e) {
        prompt("Copy to clipboard: Ctrl+C, Enter", wrap.innerHTML);
    }
}(window, window.document));
*/
    }




//CLEAR BUTTON//
    function clearDatas(){
       //row_2_data_2.innerHTML = "";
      // row_3_data_2.innerHTML = "";
    }


    /////////////////////|////////////////////
    //////********///////|////////////////////
    //////********///////|////////////////////
    //////********///////|////////////////////
    //////********///////|////////////////////
    /////////////////////|////////////////////
    var leftSide = document.createElement("div");
    document.getElementsByClassName("chiti")[0].appendChild(leftSide);
    leftSide.classList.add("leftSide");
    leftSide.style.width = "50%";
    leftSide.style.height = "350px";
    leftSide.style.textAlign = "center";
    //leftSide.style.background = "green";

    ////????
    leftSide.style.display = "grid";
    leftSide.style.alignContent = "space-evenly";

    ///////////BOOK TIME///////////
    var bookTime_Div = document.createElement("div");
    bookTime_Div.classList.add("bookTime_Div");
    bookTime_Div.style.margin = "10px";
    bookTime_Div.style.display = "flex";
    bookTime_Div.style.justifyContent = "right";
    bookTime_Div.style.height = "30px";
    bookTime_Div.style.fontSize = "28px";
    bookTime_Div.style.fontWeight = "bold";
    document.getElementsByClassName("leftSide")[0].appendChild(bookTime_Div);
    var bookTimeText = document.createElement("div");
    bookTimeText.innerHTML = "Book Time: ";
    bookTimeText.style.fontSize = "24px";
    document.getElementsByClassName("bookTime_Div")[0].appendChild(bookTimeText);
    var bookTimeDiv = document.createElement("DIV");
    bookTimeDiv.style.border = "1px solid black";
    bookTimeDiv.style.width = "66%";
    bookTimeDiv.style.margin = "0 0 0 5px";
    document.getElementsByClassName("bookTime_Div")[0].appendChild(bookTimeDiv);

    ///////////ARRIVAL TIME///////////
    var arrivalTime_Div = document.createElement("div");
    arrivalTime_Div.classList.add("arrivalTime_Div");
    arrivalTime_Div.style.margin = "10px";
    arrivalTime_Div.style.display = "flex";
    arrivalTime_Div.style.justifyContent = "right";
    arrivalTime_Div.style.height = "30px";
    arrivalTime_Div.style.fontSize = "28px";
    arrivalTime_Div.style.fontWeight = "bold";
    document.getElementsByClassName("leftSide")[0].appendChild(arrivalTime_Div);
    var arrivalTimeText = document.createElement("div");
    arrivalTimeText.innerHTML = "Arrival Time: ";
    arrivalTimeText.style.fontSize = "24px";
    document.getElementsByClassName("arrivalTime_Div")[0].appendChild(arrivalTimeText);
    var arrivalTimeDiv = document.createElement("DIV");
    arrivalTimeDiv.style.border = "1px solid black";
    arrivalTimeDiv.style.width = "66%";
    arrivalTimeDiv.style.margin = "0 0 0 5px";
    document.getElementsByClassName("arrivalTime_Div")[0].appendChild(arrivalTimeDiv);

    ///////////DOORS OPEN///////////
    var doorOpenTime_Div = document.createElement("div");
    doorOpenTime_Div.classList.add("doorOpenTime_Div");
    doorOpenTime_Div.style.margin = "10px";
    doorOpenTime_Div.style.display = "flex";
    doorOpenTime_Div.style.justifyContent = "right";
    doorOpenTime_Div.style.height = "30px";
    doorOpenTime_Div.style.fontSize = "28px";
    doorOpenTime_Div.style.fontWeight = "bold";
    document.getElementsByClassName("leftSide")[0].appendChild(doorOpenTime_Div);
    var doorOpenTimeText = document.createElement("div");
    doorOpenTimeText.innerHTML = "Doors Open:  ";
    doorOpenTimeText.style.fontSize = "24px";

    document.getElementsByClassName("doorOpenTime_Div")[0].appendChild(doorOpenTimeText);
    var doorOpenTimeDiv = document.createElement("DIV");
    doorOpenTimeDiv.style.border = "1px solid black";
    doorOpenTimeDiv.style.width = "66%";
    doorOpenTimeDiv.style.margin = "0 0 0 5px";
    document.getElementsByClassName("doorOpenTime_Div")[0].appendChild(doorOpenTimeDiv);

    ///////////HAULIER///////////
    var haulier_Div = document.createElement("div");
    haulier_Div.classList.add("haulier_Div");
    haulier_Div.style.margin = "10px";
    haulier_Div.style.display = "flex";
    haulier_Div.style.fontSize = "28px";
    haulier_Div.style.fontWeight = "bold";
    haulier_Div.style.justifyContent = "right";
    haulier_Div.style.height = "30px";
    document.getElementsByClassName("leftSide")[0].appendChild(haulier_Div);
    var haulierText = document.createElement("div");
    haulierText.innerHTML = "Haulier";
    haulierText.style.fontSize = "24px";
    document.getElementsByClassName("haulier_Div")[0].appendChild(haulierText);
    var haulierDiv = document.createElement("DIV");
    haulierDiv.style.border = "1px solid black";
    haulierDiv.style.width = "66%";
    haulierDiv.style.margin = "0 0 0 5px";
    document.getElementsByClassName("haulier_Div")[0].appendChild(haulierDiv);

    ///////////TIPPING BAY NO///////////
    var tippingBay_Div = document.createElement("div");
    tippingBay_Div.classList.add("tippingBay_Div");
    tippingBay_Div.style.margin = "10px";
    tippingBay_Div.style.display = "flex";
    tippingBay_Div.style.justifyContent = "right";
    tippingBay_Div.style.height = "30px";
    tippingBay_Div.style.fontSize = "28px";
    tippingBay_Div.style.fontWeight = "bold";
    document.getElementsByClassName("leftSide")[0].appendChild(tippingBay_Div);
    var tippingBayText = document.createElement("div");
    tippingBayText.innerHTML = "Tipping Bay No: ";
    tippingBayText.style.fontSize = "24px";
    document.getElementsByClassName("tippingBay_Div")[0].appendChild(tippingBayText);
    var tippingBayDiv = document.createElement("DIV");
    tippingBayDiv.style.border = "1px solid black";
    tippingBayDiv.style.width = "66%";
    tippingBayDiv.style.margin = "0 0 0 5px";
    document.getElementsByClassName("tippingBay_Div")[0].appendChild(tippingBayDiv);


    ///////////PALET QUANTITY///////////
    var pltQty_Div = document.createElement("div");
    pltQty_Div.classList.add("pltQty_Div");
    pltQty_Div.style.margin = "10px";
    pltQty_Div.style.display = "flex";
    pltQty_Div.style.justifyContent = "right";
    pltQty_Div.style.height = "30px";
    pltQty_Div.style.fontSize = "28px";
    pltQty_Div.style.fontWeight = "bold";
    document.getElementsByClassName("leftSide")[0].appendChild(pltQty_Div);
    var pltQtyText = document.createElement("div");
    pltQtyText.innerHTML = "PLt Qty: ";
    pltQtyText.style.fontSize = "24px";
    document.getElementsByClassName("pltQty_Div")[0].appendChild(pltQtyText);
    var pltQtyDiv = document.createElement("DIV");
    pltQtyDiv.style.border = "1px solid black";
    pltQtyDiv.style.width = "66%";
    pltQtyDiv.style.margin = "0 0 0 5px";
    document.getElementsByClassName("pltQty_Div")[0].appendChild(pltQtyDiv);



    ////////////////////|/////////////////////
    ////////////////////|///////*******///////
    ////////////////////|///////*******///////
    ////////////////////|///////*******///////
    ////////////////////|///////*******///////
    ////////////////////|/////////////////////
    var rightSide = document.createElement("div");
    document.getElementsByClassName("chiti")[0].appendChild(rightSide);
    rightSide.classList.add("rightSide");
    rightSide.style.width = "50%";
    rightSide.style.height = "300px";
    //rightSide.style.background = "blue";

    ///////////DATE///////////
    var date_Div = document.createElement("div");
    date_Div.classList.add("date_Div");
    date_Div.style.margin = "10px";
    date_Div.style.display = "flex";
    date_Div.style.justifyContent = "right";
    date_Div.style.height = "30px";
    date_Div.style.fontSize = "28px";
    date_Div.style.fontWeight = "bold";
    document.getElementsByClassName("rightSide")[0].appendChild(date_Div);
    var dateText = document.createElement("div");
    dateText.innerHTML = "Date: ";
    dateText.style.fontSize = "24px";
    document.getElementsByClassName("date_Div")[0].appendChild(dateText);
    var dateDiv = document.createElement("DIV");
    dateDiv.style.border = "1px solid black";
    dateDiv.style.width = "66%";
    dateDiv.style.margin = "0 0 0 5px";
    document.getElementsByClassName("date_Div")[0].appendChild(dateDiv);

    ///////////DRIVER PHONE NUMBER///////////
    var driverPhoneNumber_Div = document.createElement("div");
    driverPhoneNumber_Div.classList.add("driverPhoneNumber_Div");
    driverPhoneNumber_Div.style.margin = "10px";
    driverPhoneNumber_Div.style.marginRight = "10px";
    driverPhoneNumber_Div.style.display = "flex";
    driverPhoneNumber_Div.style.justifyContent = "right";
    driverPhoneNumber_Div.style.height = "30px";
    driverPhoneNumber_Div.style.fontSize = "28px";
    driverPhoneNumber_Div.style.fontWeight = "bold";
 document.getElementsByClassName("rightSide")[0].appendChild(driverPhoneNumber_Div);
    var driverPhoneNumberText = document.createElement("div");
    driverPhoneNumberText.innerHTML = "Driver Number: ";
    driverPhoneNumberText.style.fontSize = "24px";
    document.getElementsByClassName("driverPhoneNumber_Div")[0].appendChild(driverPhoneNumberText);
    var driverPhoneNumberDiv = document.createElement("DIV");
    driverPhoneNumberDiv.style.border = "1px solid black";
    driverPhoneNumberDiv.style.width = "66%";
    driverPhoneNumberDiv.style.margin = "0 0 0 5px";
    document.getElementsByClassName("driverPhoneNumber_Div")[0].appendChild(driverPhoneNumberDiv);

    ///////////BOOKED BY///////////
    var bookedBy_Div = document.createElement("div");
    bookedBy_Div.classList.add("bookedBy_Div");
    bookedBy_Div.style.margin = "10px";
    bookedBy_Div.style.display = "flex";
    bookedBy_Div.style.justifyContent = "right";
    bookedBy_Div.style.height = "30px";
    bookedBy_Div.style.fontSize = "28px";
    bookedBy_Div.style.fontWeight = "bold";
    document.getElementsByClassName("rightSide")[0].appendChild(bookedBy_Div);
    var bookedByText = document.createElement("div");
    bookedByText.innerHTML = "Booked in By: ";
    bookedByText.style.fontSize = "24px";
    document.getElementsByClassName("bookedBy_Div")[0].appendChild(bookedByText);
    var bookedByDiv = document.createElement("DIV");
    bookedByDiv.style.border = "1px solid black";
    bookedByDiv.style.width = "66%";
    bookedByDiv.style.margin = "0 0 0 5px";
    bookedByDiv.innerHTML = your_name;
    document.getElementsByClassName("bookedBy_Div")[0].appendChild(bookedByDiv);



    ///////APPOITMENTS TABLE///////
    var appoitments_div_table = document.createElement("div");
    appoitments_div_table.setAttribute('id', "app_div_tbl");
    appoitments_div_table.classList.add("appoitments_div_table");
    appoitments_div_table.style.height = "750px";
    //appoitments_div_table.style.backgroundColor = "red";
    document.getElementsByClassName("printVisible")[0].appendChild(appoitments_div_table);




    ///////INFOOO TABLE///////
    var info_div_table = document.createElement("div");
    info_div_table.classList.add("info_div_table");
    info_div_table.style.height = "750px";
    //appoitments_div_table.style.backgroundColor = "red";
    document.getElementsByClassName("printVisible")[0].appendChild(info_div_table);

    /////HANDSCAAAN/////
    var ddo = document.createElement("div");
    ddo.classList.add("ddo");
    ddo.style.display = "inline-flex";
    document.getElementsByClassName("info_div_table")[0].appendChild(ddo);

    var text_ddo = document.createElement("p");
    text_ddo.classList.add("text_ddo");
    text_ddo.style.paddingTop = "10px";
    document.getElementsByClassName("ddo")[0].appendChild(text_ddo);
    document.getElementsByClassName("text_ddo")[0].textContent = "DDO(Dock Door Operative) Hand Scan Number";

    document.getElementsByClassName("info_div_table")[0].appendChild(ddo);
    var input_ddo = document.createElement("div");
    input_ddo.classList.add("input_ddo");
    input_ddo.style.height = "40px";
    input_ddo.style.width = "150px";
    input_ddo.style.border = "1px solid black";
    document.getElementsByClassName("ddo")[0].appendChild(input_ddo);


    /////Condition of trailer/////

    var condi = document.createElement("div");
    condi.classList.add("condi");
    condi.style.display = "inline-flex";
    condi.style.marginTop = "20px";
    document.getElementsByClassName("info_div_table")[0].appendChild(condi);

    var br5 = document.createElement("br");
    info_div_table.appendChild(br5);

    var text_condi = document.createElement("p");
    text_condi.classList.add("text_condi");
    text_condi.style.paddingTop = "10px";
    document.getElementsByClassName("condi")[0].appendChild(text_condi);
    document.getElementsByClassName("text_condi")[0].textContent = "Condition of Trailer: ";

    document.getElementsByClassName("info_div_table")[0].appendChild(condi);
    var input_condi = document.createElement("div");
    input_condi.classList.add("input_ddo");
    input_condi.style.height = "40px";
    input_condi.style.width = "150px";
    input_condi.style.textAlign = "center";
    input_condi.style.paddingTop = "7px";
    input_condi.style.border = "1px solid black";
    input_condi.textContent = "Unacceptable";
    document.getElementsByClassName("condi")[0].appendChild(input_condi);

    document.getElementsByClassName("info_div_table")[0].appendChild(condi);
    var input_condi1 = document.createElement("div");
    input_condi1.classList.add("input_ddo");
    input_condi1.style.height = "40px";
    input_condi1.style.width = "450px";
    input_condi1.style.paddingTop = "7px";
    input_condi1.style.textAlign = "center";
    input_condi1.style.border = "1px solid black";
    input_condi1.textContent = "Acceptable";
    document.getElementsByClassName("condi")[0].appendChild(input_condi1);



    //////Big text box/////
    var big_div = document.createElement("div");
    big_div.classList.add("bid_div");
    big_div.style.margin = "auto";
    big_div.style.marginTop = "20px";
    big_div.style.height = "140px";
    big_div.style.width = "90%";
    big_div.style.fontSize = "18px";
    big_div.style.paddingTop = "25px";
    big_div.style.border = "1px solid black";
    document.getElementsByClassName("info_div_table")[0].appendChild(big_div);
    big_div.innerHTML = "Ocado's temperature control is based on a system of best practice. We expect our suppliers to provide chilled food to Ocado between 0°C and 5°C, unprepared fruit and vegetables between 8°C and 12°C and frozen food at  -18°C or colder. </br> Any temperatures which fall outside these parameters are subject to Concession/Rejection Procedure.";

        /////Condition of trailer/////

    var condi1 = document.createElement("div");
    condi1.classList.add("condi1");
    condi1.style.display = "inline-flex";
    condi1.style.marginTop = "20px";
    condi1.style.width = "75%";
    document.getElementsByClassName("info_div_table")[0].appendChild(condi1);


    var text_condi1 = document.createElement("p");
    text_condi1.classList.add("text_condi1");
    text_condi1.style.paddingTop = "10px";
    document.getElementsByClassName("condi1")[0].appendChild(text_condi1);
    document.getElementsByClassName("text_condi1")[0].textContent = "TM Print Name (If temp issue):";

    document.getElementsByClassName("info_div_table")[0].appendChild(condi1);
    var input_condi11 = document.createElement("div");
    input_condi11.classList.add("input_ddo");
    input_condi11.style.height = "40px";
    input_condi11.style.width = "150px";
    input_condi11.style.textAlign = "center";
    input_condi11.style.paddingTop = "7px";
    input_condi11.style.border = "1px solid black";
    //input_condi11.textContent = "Unacceptable";
    document.getElementsByClassName("condi1")[0].appendChild(input_condi11);

    var text_condi12 = document.createElement("p");
    text_condi12.classList.add("text_condi12");
    text_condi12.style.paddingTop = "10px";
    text_condi12.style.marginLeft = "20%";
    document.getElementsByClassName("condi1")[0].appendChild(text_condi12);
    document.getElementsByClassName("text_condi12")[0].textContent = "TM Sign (If temp issue): ";

    document.getElementsByClassName("info_div_table")[0].appendChild(condi1);
    var input_condi12 = document.createElement("div");
    input_condi12.classList.add("input_ddo");
    input_condi12.style.height = "40px";
    input_condi12.style.width = "450px";
    input_condi12.style.paddingTop = "7px";
    input_condi12.style.textAlign = "center";
    input_condi12.style.border = "1px solid black";
    //input_condi12.textContent = "Acceptable";
    document.getElementsByClassName("condi1")[0].appendChild(input_condi12);


})();




