import css from 'styled-jsx/css'

export default css`
  /* CSS Document */
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;

    margin: 0px;
    padding: 0px;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    margin: 0 auto;
    width: 904px;
  }
  .clear {
    clear: both;
    margin: 0px;
    padding: 0px;
  }

  .menuzone {
    height: 35px;
  }
  #logo {
    width: 190px;
    height: 75px;

    margin-left: 20px;
    float: left;
  }
  .topMenu {
    margin: 0px;
    padding: 10px 20px 0px 0px;
    float: right;
  }
  .topMenu ul {
    margin: 0px;
    padding: 0px;
  }
  .topMenu li {
    display: inline;
    color: #ffffff;
    border-left: 1px solid #fff;
    padding: 0 5px 0 10px;
  }
  .topMenu li.first {
    border: none;
  }

  .topMenu li a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    padding: 0px 5px 0px 3px;
  }
  .topMenu li a:hover {
    text-decoration: underline;
  }
  .topMenu li a.current {
    text-decoration: underline;
  }
  #header {
    width: 904px;
    height: 76px;
  }
  #menu2 {
    height: 45px;
    float: right;
    margin: 0px;
    padding: 30px 0px 0px 0px;
  }
  #menu2 ul {
    margin: 0px;
    padding: 0px;
  }
  #menu2 li {
    display: inline;
    color: #ffffff;
    list-style: none;
  }
  #menu2 li a {
    padding: 10px;
    color: #47608d;
    margin: 0px 20px 0px 0px;
    display: inline;
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
  }
  #menu2 li a.active {
    color: #fff;
    margin: 0px 20px 0px 0px;
    display: inline;
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
    background: #4564a7;
  }
  #banner {
    width: 904px;
    height: 250px;
    background: url(../images/mainbanner.jpg);
  }
  h1 {
    margin: 0px;
    padding: 26px 0px 0px 47px;
    font-size: 21px;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
  }
  h2 {
    margin: 0px;
    padding: 10px 0px 0px 47px;
    color: #ffffff;
    font-weight: 200;
    font: 25px Gill Sans Condensed, Myriad Pro, Arial, Helvetica, sans-serif;
  }
  .features {
    width: 408px;
    padding: 10px 0px 0px 0px;
  }
  .features ul {
    margin: 0px;
    padding: 0px;
  }
  .features li {
    list-style-type: none;
    padding: 10px 30px 12px 86px;
    font-size: 12px;
    color: #7dc6f1;
    font-weight: bold;
  }

  .bannertxt {
    color: #ffffff;
    font-size: 11px;
    font-weight: 100;
  }
  .readMore {
    padding: 0px 0px 0px 86px;
    margin: 0px;
  }
  .readMore a {
    color: #7dc6f1;
    font-size: 12px;
    margin: 0px;
    font-weight: bold;
    text-decoration: none;
  }
  .compatibility {
    width: 904px;

    text-align: center;
    padding: 0px 0px 0px 0px;
    margin: 0px;

    background-repeat: no-repeat;
    font-weight: bold;
  }

  .compatibilitybox {
    width: 250px;
    float: right;
  }

  .compatibilitytxt {
    float: left;
    padding: 20px 0px 0px 0px;
    margin-right: 10px;
  }

  .compatibilityicon {
    float: left;
    margin-right: 10px;
  }
  #columZone {
    width: 700px;
    background: #eeeff3 left bottom no-repeat;
    padding: 0px 0px 20px 0px;
  }
  #container2 {
    width: 700px;
    padding: 40px 0px 40px 0px;
    float: left;
  }
  .column1 {
    width: 226px;
    float: left;

    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 5px;
    text-align: center;
  }
  .ordercolumn1 {
    width: 230px;
    float: left;

    padding: 0px 10px 0px 0px;
    margin: 0px 0px 0px 5px;
  }
  .columnText {
    text-align: left;

    padding: 10px 0px 0px 30px;
  }
  .columnText1 {
    text-align: left;

    padding: 10px 0px 0px 20px;
  }
  .columnLink {
    text-align: center;
    width: 226px;
    padding: 10px 0px 0px 0px;
    font-weight: bold;
    font-size: 12px;
    color: #e93b0c;
  }
  .order {
    font-weight: bold;
    font-size: 12px;
    color: #000;
    padding: 0px 0px 0px 10px;
    width: 250px;
  }
  .order a {
    color: #000000;
  }
  .column2 {
    width: 226px;
    float: left;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    text-align: center;
  }
  h3 {
    text-align: center;
    color: #000000;
    font-size: 12px;
    font-weight: bold;
    margin: 0px;
    padding: 25px 0px 22px 0px;
  }
  .blueDot {
    width: 904px;
    height: 33px;
  }
  .welCome {
    width: 700px;
    float: left;
    background: #4564a7;
  }
  .welComeleft {
    width: 19px;
    height: 44px;

    float: left;
  }
  .welComeright {
    width: 19px;
    height: 44px;

    float: right;
  }
  .welCometextBox1 {
    width: 650px;
    background-color: #ffffff;
    float: left;
  }

  .bottom_container {
    float: left;
    width: 970px;
  }
  .welCometextBox2 {
    float: left;
    width: 250px;
    padding: 40px 0px 40px 2px;
  }
  .welCometextBox2 ul {
    // margin: 10px 0px 0px 20px;
    // padding-top: 10px;
    // position: absolute;
    padding: 10px 0px 0px 25px;
  }
  .welCometextBox2 li {
    margin-top: 5px;
    line-height: 2em;
  }
  .welCometextBox2 .news {
    float: left;
    width: 192px;
    background: url(../images/news_bg.gif) repeat-y 0 0;
  }
  .welCometextBox2 .news p {
    float: left;
    width: 154px;
    font: 11px/13px Arial, Helvetica, sans-serif;
    color: #58595e;
    padding: 5px 0 8px 20px;
  }
  .welCometextBox2 .news p span {
    color: #c45221;
    font: 11px/13px Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  .welCometextBox2 .more {
    float: left;
    width: 192px;
    height: 58px;
    background: url(../images/more_bg.gif) no-repeat 0 0;
  }
  .welCometextBox2 .more a {
    float: left;
    font-weight: bold;
    color: #4564a7;
    font: 11px/13px Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 13px 0 0 21px;
  }
  .welCometextBox2 .more a:hover {
    text-decoration: underline;
  }
  .orderList {
    width: 250px;
    float: left;
    background: #4564a7;
  }
  .orderList h2 {
    margin: 0px;
    padding: 10px 0px 0px 47px;
    color: #ffffff;
    font-weight: 200;
    font: 25px Gill Sans Condensed, Myriad Pro, Arial, Helvetica, sans-serif;
  }
  .orderZone {
    width: 250px;
    background: #eeeff3 left bottom no-repeat;
    padding: 0px 0px 30px 0px;
  }
  .welCometext {
    float: left;
    text-align: justify;
    margin: 0px 0px 0px 0px;
    color: #6c6b70;
    border-bottom: solid #d6d7da 1px;
    padding: 25px 35px 36px 35px;
  }
  .welCometextBold {
    color: #1e3c73;
    font-weight: bold;
  }

  #footer {
    width: 904px;
    float: left;
    border-top: 2px solid #bfbfbf;
  }
  #footer ul {
    width: 904px;
    float: left;
    text-align: center;
    list-style: none;
    padding: 20px 0 50px 0;
  }
  #footer li {
    width: auto;
    font: bold 11px/13px Arial, Helvetica, sans-serif;
    color: #4564a7;
    padding: 0 10px 0 10px;
    border-left: 1px solid #4564a7;
    display: inline;
  }
  #footer li.first {
    border: none;
  }
  #footer li a {
    color: #4564a7;
    text-decoration: none;
  }
  #footer li a:hover {
    color: #4564a7;
    text-decoration: underline;
  }
  #footer li a.current {
    text-decoration: underline;
  }

  /* inner pages css start */
  h1.inner {
    font: 24px tahoma, Arial;
    color: #4564a7;
    width: auto;
    font-weight: bold;
    margin: 0px;
    padding: 8px 0px 10px 0px;
    text-decoration: none;
  }
  h1.inner span {
    font: 24px tahoma, Arial;
    color: #4564a7;
    font-weight: bold;
    margin: 0px;
    padding: 25px 0px 10px 0px;
    background: none;
  }
  .aboutus-img {
    float: right;
    border: 4px solid #dcdcda;
    margin: 0px 0px 10px 20px;
  }
  h5 {
    font: 15px Myriad Pro, Arial, Helvetica, sans-serif;
    color: #555555;
    font-weight: 100;
    padding: 0px 0px 5px 0px;
    border-bottom: 1px dotted #000;
    margin: 0px 0px 10px 0px;
    background: none;
  }
  h6.inner {
    font: 17px Myriad Pro, Arial, Helvetica, sans-serif;
    color: #555555;
    font-weight: 100;
    padding: 0px 0px 5px 0px;
    margin: 0px 0px 0px 0px;
    background: none;
  }
  .aboutcolumnzone {
    padding: 20px 0px 16px 0px;
  }
  .aboutcolumn1 {
    width: 48%;
    float: left;
    margin: 10px 0px 10px 10px;
  }
  .aboutcolumn1 img {
    max-width: 320px;
  }
  .aboutcolumn2 {
    width: 45%;
    float: right;
    margin: 10px 0px 10px 0px;
    padding-right: 15px;
  }
  .abouticon {
    float: left;
    margin: 0px 20px 0px 0px;
  }
  .insidereadmore {
    padding: 10px 0px 10px 0px;
  }
  .insidereadmore a {
    color: #5d2d23;
    font-size: 14px;
    text-decoration: none;
  }
  .insidereadmore a:hover {
    text-decoration: underline;
  }

  a.projects {
    color: #5d2d23;
    font-size: 14px;
    text-decoration: underline;
  }
  a:hover.projects {
    text-decoration: none;
  }

  input.button {
    color: #ffffff;
    background: #414141;
    font: bold 11px Arial, Helvetica, sans-serif;
    text-decoration: none;
    padding: 10px 10px;
    margin: 0px 5px 5px 0;
    border: 1px solid #000;
  }
  input.button:hover {
    cursor: pointer;
    color: #cccccc;
  }
  .project-img {
    float: right;
    margin-left: 20px;
    border: 6px solid #dcdcda;
  }
  .whiteheading {
    font: 30px Myriad Pro, Arial;
    color: #000;
    font-weight: 100;
    padding: 0px;
    margin: 25px 0px 20px 0px;
  }
  .ourprojectrow {
    margin-bottom: 20px;
    border-bottom: 1px dotted #000;
    padding-bottom: 10px;
  }
  .servicecolumnzone {
    padding: 20px 0px 16px 0px;
  }
  .servicecolumn1 {
    width: 100%;
    float: left;
    margin: 0px 0px 10px 0px;
    border-bottom: 1px dotted #000;
  }
  .servicecolumn2 {
    width: 48%;
    float: right;
    margin: 0px 0px 10px 0px;
  }
  .blog-posted-row {
    padding: 3px;
    background: #dcdcda;
  }

  .blog-posted-row a {
    color: #5d2d23;
    font-size: 14px;
    text-decoration: underline;
    padding: 0 0 0 8px;
  }
  .blog-posted-row a:hover {
    text-decoration: none;
  }
  .imgItem {
    width: 95%;
    min-height: 214px;
  }
  .star-icon {
    color: #ddd;
    font-size: 2em;
    position: relative;
  }
  .star-icon.full:before {
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
    color: #fde16d;
    content: '\\2605';
    position: absolute;
    left: 0;
  }
  .star-icon.half:before {
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.7);
    color: #fde16d;
    content: '\\2605';
    position: absolute;
    left: 0;
    width: 50%;
    overflow: hidden;
  }
  .Commentslist {
    margin-top: 20px;
  }
  .Pricedetail {
    width: 226px;
    padding: 10px 0px 0px 0px;
    font-weight: bold;
    font-size: 12px;
  }
  .Pricedetail span {
    color: #e93b0c;
  }
  .underlineMenu {
    text-decoration: underline;
  }
  .itemHead {
    cursor: pointer;
  }
  .ordericon {
    max-width: 50px;
    margin: 10px;
  }
  .orderText {
    float: right;
    margin: 10px;
    width: 60%;
  }
  .dotdot {
    border-bottom: 1px dotted #000;
    margin-top: 26px;
  }
  .orderNumber {
    width: 25%;
    margin-top: 10px;
  }
  .sumprice {
    padding-top: 10px;
  }
  .sumprice span {
    float: left;
    margin: 3px 0px 0px 10px;
  }
  .order-btn {
    float: right;
    margin-right: 30px;
  }
  .order-btn button {
    width: 40px;
    height: 20px;
  }
  .sumordercolumn1 {
    width: 100%;
  }
  .sumordercolumn1 img {
    max-width: 70px;
    float: left;
  }
  .sumorderText {
    float: left;
    margin: 25px 0px 0px 25px;
    font-size: 16px;
    width: 70%;
  }
  .sumorderqulity {
    margin-left: 150px;
    float: left;
    min-width: 25px;
  }
  .sumorderprice {
    margin-left: 160px;
    float: left;
  }
  .headprice {
    margin-left: 140px;
  }
  .headqa {
    margin-left: 330px;
  }
  .spname {
    float: left;
    min-width: 240px;
  }
  .sumorderTextsum {
    float: left;
    margin: 25px 0px 0px 105px;
    font-size: 16px;
    width: 70%;
  }
  .sum-btn {
    margin-left: 50px;
    width: 50px;
    height: 30px;
  }
  .sumorderpricevat {
    margin-left: 120px;
    float: left;
  }
  .cat-img {
    max-width: 30px;
    max-height: 20px;
    background: white;
  }
  .imgCatItem {
    max-width: 30px;
    position: absolute;
    left: 180px;
    top: 180px;
  }
  .imgAreaItem {
    position: relative;
  }
  .inputcomment {
    margin: 40px 0px 0px 10px;
  }
  .sumPageMain {
    background: #eeeff3;
    padding-bottom: 20px;
  }
  .orderZone form {
    margin-left: 10px;
  }
  .rateing-btn {
    float: left;
    margin-top: 10px;
  }
  .rateing-btn button {
    width: 40px;
    height: 20px;
    margin-left: 5px;
  }
  @-moz-document url-prefix() {
    /* Firefox Hack :( */
    .star-icon {
      font-size: 50px;
      line-height: 34px;
    }
  }
  /* inner pages css ends */
`
