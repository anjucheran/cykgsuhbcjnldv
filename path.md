## Teller Home ##
  ** Identify the page **
    // Try this.....

  ** Login using credentials
    ## "Sign in" button id --> sign-in
    
  ** Click on Branch Input Menu
    <body>
      <ul class="menuMargin">     // One and only class
        <li class="clsHasKids">   // First li
          <span>                  // Click this
          <ul>                    // Opening menu

  ** Click on Branch Input Menu
    <ul>                          // Opening menu in above step
      <li class="clsHasKids">     // 2nd li
        <span>                    // Click this
        <ul>                      // Opening Menu

  ** Click on Teller Home Page
    <ul>                          // Opening menu in above step
      <li>                        // 3rd li
        <a>                       // Click this

## ** INSIDE TELLER HOME ** ##

## Cash Ddeposit Local ##
  ** Click on Cash Deposit Local
    <frame id="FRAMEE060065654604">
      #document
      <head></head>
      <body>
        <ul>                      // 1st ul
          <li>
            <a>                   // Click this

## Cash Deposit Local Form ##
  ** Identify the form **
    <td class="dealtitle">Cash Deposit Local</td>   // One and only class

  ** Enter Credit Account (account number)
    <input id="fieldName:ACCOUNT.2">
    
  ** Enter Deposit Amount
    <input id="fieldName:AMOUNT.LOCAL.1:1">

  ** Enter Narrative.1 (narration)
    <input id="fieldName:NARRATIVE.2:1">

  ** Select Source of Funds
    <select id="fieldName:SOURCE.OF.FUNDS">
      Display                       Value
      null                          null
      Personal Savings              1
      Funds Recived From Parents    2
      Funds Recieved From Friends   3
      Sale of Vehicle               4
      Sale of Property              5
      Gift                          6
      Other                         7

  ** Enter Description
    <input id="fieldName:SRC.DESCRIPTION">