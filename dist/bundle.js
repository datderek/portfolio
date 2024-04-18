/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/BarlowSemiCondensed-Regular.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/BarlowSemiCondensed-SemiBold.ttf */ "./src/assets/fonts/BarlowSemiCondensed-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/BarlowSemiCondensed-Bold.ttf */ "./src/assets/fonts/BarlowSemiCondensed-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! assets/images/cross.svg */ "./src/assets/images/cross.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Barlow Semi Condensed';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow Semi Condensed';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Barlow Semi Condensed';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  font-weight: bold;
  font-style: normal;
}

:root {
  scroll-behavior: smooth;
  scroll-snap-type: y;
  --cosmic-latte: #FFFBEB;
  --giants-orange: #FF5A13;
  --sky-blue: #13B8FF;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0; 
  font-size: inherit;
  font-family:'Barlow Semi Condensed', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
  list-style-type: none;
  text-decoration: none;
  color: inherit;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--cosmic-latte);
  overflow-x: hidden;
}

#about-page, #projects-page, #contact-page {
  max-width: 1600px;
  background-color: var(--cosmic-latte);
  color: var(--giants-orange);
  scroll-snap-align: start;
}

.header {
  font-size: 6rem;
  letter-spacing: -0.125rem;
  font-weight: bold;
  line-height: 1;
  user-select: none;
}

.subheader {
  font-size: 2.5rem;
  user-select: none;
}

.hero {
  font-size: 2rem;
}

.title-container {
  position: relative;
  max-width: max-content;
  padding: 2rem 4rem;
  background-color: var(--giants-orange);
  color: var(--cosmic-latte);
}

.extend-background {
  position: absolute;
  height: 100%;
  width: 100vw;
  background-color: #FF5A13;
}

/*
 * Navbar Style
 */
nav {
  width: 100%;
  height: 56px;
  padding: 0.5rem 1rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
}

.nav-container {
  height: 100%;
  width: 100%;
  display: flex;
  color: var(--cosmic-latte);
}

.icon {
  margin-right: auto;
}

.menu-links {
  display: none;
  height: 100%;
  gap: 0.25rem;
  transform-origin: right;
}

.menu-links.collapse, .menu-links.expand {
  display: flex;
}

.menu-links.collapse {
  animation: collapse 500ms cubic-bezier(0.36, 0, 0.66, -0.56) both;
}

.menu-links.expand {
  animation: expand 500ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.menu-links > a {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--sky-blue);
}

.menu-links > a:first-child {
  border-radius: 1000px 0 0 1000px;
}

.menu-links > a:last-child {
  border-radius: 0 1000px 1000px 0;
}

.menu-toggle-button {
  width: 40px;
  margin-left: 1rem;
  border-radius: 1000px;
  border: none;
  background-color: var(--sky-blue);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  will-change: transform;
  transition: transform 500ms ease-in-out;
}

.menu-toggle-button.expand {
  transform: rotate(315deg);
}

/*
 * About Page Styles
 */
 #about-page {
  height: 100vh;
  padding: 2rem 4rem;
  padding-top: calc(56px + 0.25rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--giants-orange);
}

#about-page > .header {
  text-align: center;
  animation: 1000ms fade ease-out both;
}

.header-image-container {
  flex: 1;
  max-height: 750px;
  width: 100%;
  border-radius: 4rem;
  overflow: hidden;
  animation: 1000ms fade ease-out both 1250ms;
  background-color: blue;
}

.header-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

#about-page > .hero {
  text-align: center;
  animation: 1000ms fade ease-out 2500ms both;
}

/*
 * Projects Page Styles
 */
#projects-page {
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#projects-page > .title-container {
  border-top-right-radius: 4rem;
  border-bottom-right-radius: 4rem;
  transform-origin: left;
  transform: scaleX(0);
}

#projects-page > .title-container.in-view {
  animation: expand 750ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

#projects-page > .title-container > .extend-background {
  top: 0;
  left: 0;
  transform: translate(-100%, 0%);
}

.projects-container {
  padding: 1rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
  grid-auto-rows: 300px;
  column-gap: 2rem;
  row-gap: 2.5rem;
  /* Shadows provided by Josh Comeau at: 
  https://www.joshwcomeau.com/shadow-palette/ */
  --shadow-color: 153, 151, 141, 0.25;
  --shadow:
    0.3px 0.5px 0.7px rgba(var(--shadow-color)),
    1.1px 1.6px 2.2px -0.8px rgba(var(--shadow-color)),
    2.7px 4px 5.4px -1.7px rgba(var(--shadow-color)),
    6.6px 9.8px 13.3px -2.5px rgba(var(--shadow-color));
}

.project {
  position: relative;
  border-radius: 1rem;
  box-shadow: var(--shadow);
  background-color: white;
  overflow: hidden;
  will-change: transform;
  transition: 500ms transform;
  animation: fade linear both;
  animation-timeline: view();
  animation-range: 0vh 50vh;
}

.project:hover {
  transform: scale(1.02);
}

.project-image {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  opacity: 50%;
}

.project > a {
  position: absolute;
  width: 100%;
  height: 100%;
}

.project-details {
  position: absolute;
  left: 0rem;
  bottom: 0rem;
  width: 100%;
  padding: 1rem;
  color: black;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.15));
}

.project-name {
  font-size: 1.25rem;
}

.project-description {
  font-weight: normal;
}

/*
 * Contact Page Styles
 */
#contact-page {
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

#contact-page > .title-container {
  align-self: flex-end;
  border-top-left-radius: 4rem;
  border-bottom-left-radius: 4rem;
  text-align: right;
  transform-origin: right;
  transform: scaleX(0);
}

#contact-page  > .title-container.in-view {
  animation: expand 750ms cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

#contact-page > .title-container > .extend-background {
  z-index: -1;
  top: 0;
  left: 0;
  border-top-left-radius: 4rem;
  border-bottom-left-radius: 4rem;
}

#contact-page .hero {
  padding: 0.5rem 4rem;
}

.contact {
  position: relative;
  padding: 1rem 4rem;
  border-top: 3px solid var(--giants-orange);
  transition: 100ms color, 100ms background-color;
}

.contact:last-child {
  border-bottom: 3px solid var(--giants-orange);
}

.contact-hovered {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 1rem 4rem;
  color: var(--cosmic-latte);
  background-color: var(--giants-orange);
  transform: scale(100%, 0);
  will-change: transform;
  transition: 150ms transform ease-out;
}

.contact:hover .contact-hovered {
  transform: scale(100%, 100%);
}

/*
 * Footer page styling
 */
footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  background-color: var(--giants-orange);
  color: var(--cosmic-latte);
  padding: 4rem;
}

.footer-list-title {
  margin-bottom: 1rem;
  font-size: 1.125rem;
}

.footer-list a {
  text-decoration: underline;
}

@keyframes expand {
  from {
    transform: scaleX(0);
  }
  
  to {
    transform: scaleX(1);
  }
}

@keyframes collapse {
  from {
    transform: scaleX(1);
  }

  to {
    transform: scaleX(0)
  }
}

@keyframes fade {
  from { 
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media (max-width: 1000px) {
  .header {
    font-size: 3rem;
  }

  .subheader{
    font-size: 1.25rem;
  }

  .hero {
    font-size: 1.125rem;
  }

  .title-container {
    padding: 1.5rem 3rem;
  }

  #about-page {
    padding: 2rem 2rem;
  }

  .projects-container {
    padding: rem 3rem;
  }
}

@media (max-width: 600px) {
  .header {
    font-size: 2rem;
    letter-spacing: -0.05rem;
  }

  .subheader {
    font-size: 1.125rem;
  }

  .hero {
    font-size: 1rem;
  }

  .title-container {
    padding: 0.5rem 1rem;
  }

  nav {
    height: 50px;
  }

  .menu-toggle-button {
    width: 34px;
    margin-left: 0.5rem;
  }

  .menu-links > a {
    width: 70px;
  }

  #about-page {
    padding-top: calc(50px + 0.125rem);
  }

  .projects-container {
    padding: 0.5rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 200px;
    gap: 1rem;
  }

  .contact, #contact-page .hero, .contact-hovered {
    padding: 0.5rem 2rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Barlow Semi Condensed';\r\n  src: url(./assets/fonts/BarlowSemiCondensed-Regular.ttf);\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Barlow Semi Condensed';\r\n  src: url(./assets/fonts/BarlowSemiCondensed-SemiBold.ttf);\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Barlow Semi Condensed';\r\n  src: url(./assets/fonts/BarlowSemiCondensed-Bold.ttf);\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n:root {\r\n  scroll-behavior: smooth;\r\n  scroll-snap-type: y;\r\n  --cosmic-latte: #FFFBEB;\r\n  --giants-orange: #FF5A13;\r\n  --sky-blue: #13B8FF;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0; \r\n  font-size: inherit;\r\n  font-family:'Barlow Semi Condensed', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-weight: 600;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--cosmic-latte);\r\n  overflow-x: hidden;\r\n}\r\n\r\n#about-page, #projects-page, #contact-page {\r\n  max-width: 1600px;\r\n  background-color: var(--cosmic-latte);\r\n  color: var(--giants-orange);\r\n  scroll-snap-align: start;\r\n}\r\n\r\n.header {\r\n  font-size: 6rem;\r\n  letter-spacing: -0.125rem;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  user-select: none;\r\n}\r\n\r\n.subheader {\r\n  font-size: 2.5rem;\r\n  user-select: none;\r\n}\r\n\r\n.hero {\r\n  font-size: 2rem;\r\n}\r\n\r\n.title-container {\r\n  position: relative;\r\n  max-width: max-content;\r\n  padding: 2rem 4rem;\r\n  background-color: var(--giants-orange);\r\n  color: var(--cosmic-latte);\r\n}\r\n\r\n.extend-background {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100vw;\r\n  background-color: #FF5A13;\r\n}\r\n\r\n/*\r\n * Navbar Style\r\n */\r\nnav {\r\n  width: 100%;\r\n  height: 56px;\r\n  padding: 0.5rem 1rem;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.nav-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  color: var(--cosmic-latte);\r\n}\r\n\r\n.icon {\r\n  margin-right: auto;\r\n}\r\n\r\n.menu-links {\r\n  display: none;\r\n  height: 100%;\r\n  gap: 0.25rem;\r\n  transform-origin: right;\r\n}\r\n\r\n.menu-links.collapse, .menu-links.expand {\r\n  display: flex;\r\n}\r\n\r\n.menu-links.collapse {\r\n  animation: collapse 500ms cubic-bezier(0.36, 0, 0.66, -0.56) both;\r\n}\r\n\r\n.menu-links.expand {\r\n  animation: expand 500ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\r\n}\r\n\r\n.menu-links > a {\r\n  width: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--sky-blue);\r\n}\r\n\r\n.menu-links > a:first-child {\r\n  border-radius: 1000px 0 0 1000px;\r\n}\r\n\r\n.menu-links > a:last-child {\r\n  border-radius: 0 1000px 1000px 0;\r\n}\r\n\r\n.menu-toggle-button {\r\n  width: 40px;\r\n  margin-left: 1rem;\r\n  border-radius: 1000px;\r\n  border: none;\r\n  background-color: var(--sky-blue);\r\n  background-image: url('assets/images/cross.svg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 20px;\r\n  will-change: transform;\r\n  transition: transform 500ms ease-in-out;\r\n}\r\n\r\n.menu-toggle-button.expand {\r\n  transform: rotate(315deg);\r\n}\r\n\r\n/*\r\n * About Page Styles\r\n */\r\n #about-page {\r\n  height: 100vh;\r\n  padding: 2rem 4rem;\r\n  padding-top: calc(56px + 0.25rem);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  color: var(--giants-orange);\r\n}\r\n\r\n#about-page > .header {\r\n  text-align: center;\r\n  animation: 1000ms fade ease-out both;\r\n}\r\n\r\n.header-image-container {\r\n  flex: 1;\r\n  max-height: 750px;\r\n  width: 100%;\r\n  border-radius: 4rem;\r\n  overflow: hidden;\r\n  animation: 1000ms fade ease-out both 1250ms;\r\n  background-color: blue;\r\n}\r\n\r\n.header-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\r\n}\r\n\r\n#about-page > .hero {\r\n  text-align: center;\r\n  animation: 1000ms fade ease-out 2500ms both;\r\n}\r\n\r\n/*\r\n * Projects Page Styles\r\n */\r\n#projects-page {\r\n  padding: 2rem 0rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n#projects-page > .title-container {\r\n  border-top-right-radius: 4rem;\r\n  border-bottom-right-radius: 4rem;\r\n  transform-origin: left;\r\n  transform: scaleX(0);\r\n}\r\n\r\n#projects-page > .title-container.in-view {\r\n  animation: expand 750ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\r\n}\r\n\r\n#projects-page > .title-container > .extend-background {\r\n  top: 0;\r\n  left: 0;\r\n  transform: translate(-100%, 0%);\r\n}\r\n\r\n.projects-container {\r\n  padding: 1rem 4rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));\r\n  grid-auto-rows: 300px;\r\n  column-gap: 2rem;\r\n  row-gap: 2.5rem;\r\n  /* Shadows provided by Josh Comeau at: \r\n  https://www.joshwcomeau.com/shadow-palette/ */\r\n  --shadow-color: 153, 151, 141, 0.25;\r\n  --shadow:\r\n    0.3px 0.5px 0.7px rgba(var(--shadow-color)),\r\n    1.1px 1.6px 2.2px -0.8px rgba(var(--shadow-color)),\r\n    2.7px 4px 5.4px -1.7px rgba(var(--shadow-color)),\r\n    6.6px 9.8px 13.3px -2.5px rgba(var(--shadow-color));\r\n}\r\n\r\n.project {\r\n  position: relative;\r\n  border-radius: 1rem;\r\n  box-shadow: var(--shadow);\r\n  background-color: white;\r\n  overflow: hidden;\r\n  will-change: transform;\r\n  transition: 500ms transform;\r\n  animation: fade linear both;\r\n  animation-timeline: view();\r\n  animation-range: 0vh 50vh;\r\n}\r\n\r\n.project:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.project-image {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0px;\r\n  top: 0px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  overflow: hidden;\r\n  opacity: 50%;\r\n}\r\n\r\n.project > a {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.project-details {\r\n  position: absolute;\r\n  left: 0rem;\r\n  bottom: 0rem;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  color: black;\r\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.15));\r\n}\r\n\r\n.project-name {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.project-description {\r\n  font-weight: normal;\r\n}\r\n\r\n/*\r\n * Contact Page Styles\r\n */\r\n#contact-page {\r\n  padding: 2rem 0rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n#contact-page > .title-container {\r\n  align-self: flex-end;\r\n  border-top-left-radius: 4rem;\r\n  border-bottom-left-radius: 4rem;\r\n  text-align: right;\r\n  transform-origin: right;\r\n  transform: scaleX(0);\r\n}\r\n\r\n#contact-page  > .title-container.in-view {\r\n  animation: expand 750ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\r\n}\r\n\r\n#contact-page > .title-container > .extend-background {\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  border-top-left-radius: 4rem;\r\n  border-bottom-left-radius: 4rem;\r\n}\r\n\r\n#contact-page .hero {\r\n  padding: 0.5rem 4rem;\r\n}\r\n\r\n.contact {\r\n  position: relative;\r\n  padding: 1rem 4rem;\r\n  border-top: 3px solid var(--giants-orange);\r\n  transition: 100ms color, 100ms background-color;\r\n}\r\n\r\n.contact:last-child {\r\n  border-bottom: 3px solid var(--giants-orange);\r\n}\r\n\r\n.contact-hovered {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 1rem 4rem;\r\n  color: var(--cosmic-latte);\r\n  background-color: var(--giants-orange);\r\n  transform: scale(100%, 0);\r\n  will-change: transform;\r\n  transition: 150ms transform ease-out;\r\n}\r\n\r\n.contact:hover .contact-hovered {\r\n  transform: scale(100%, 100%);\r\n}\r\n\r\n/*\r\n * Footer page styling\r\n */\r\nfooter {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 2rem;\r\n  background-color: var(--giants-orange);\r\n  color: var(--cosmic-latte);\r\n  padding: 4rem;\r\n}\r\n\r\n.footer-list-title {\r\n  margin-bottom: 1rem;\r\n  font-size: 1.125rem;\r\n}\r\n\r\n.footer-list a {\r\n  text-decoration: underline;\r\n}\r\n\r\n@keyframes expand {\r\n  from {\r\n    transform: scaleX(0);\r\n  }\r\n  \r\n  to {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n@keyframes collapse {\r\n  from {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  to {\r\n    transform: scaleX(0)\r\n  }\r\n}\r\n\r\n@keyframes fade {\r\n  from { \r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .header {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .subheader{\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .hero {\r\n    font-size: 1.125rem;\r\n  }\r\n\r\n  .title-container {\r\n    padding: 1.5rem 3rem;\r\n  }\r\n\r\n  #about-page {\r\n    padding: 2rem 2rem;\r\n  }\r\n\r\n  .projects-container {\r\n    padding: rem 3rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .header {\r\n    font-size: 2rem;\r\n    letter-spacing: -0.05rem;\r\n  }\r\n\r\n  .subheader {\r\n    font-size: 1.125rem;\r\n  }\r\n\r\n  .hero {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .title-container {\r\n    padding: 0.5rem 1rem;\r\n  }\r\n\r\n  nav {\r\n    height: 50px;\r\n  }\r\n\r\n  .menu-toggle-button {\r\n    width: 34px;\r\n    margin-left: 0.5rem;\r\n  }\r\n\r\n  .menu-links > a {\r\n    width: 70px;\r\n  }\r\n\r\n  #about-page {\r\n    padding-top: calc(50px + 0.125rem);\r\n  }\r\n\r\n  .projects-container {\r\n    padding: 0.5rem 2rem;\r\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n    grid-auto-rows: 200px;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .contact, #contact-page .hero, .contact-hovered {\r\n    padding: 0.5rem 2rem;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Display.js":
/*!********************************!*\
  !*** ./src/modules/Display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Display)
/* harmony export */ });
/* harmony import */ var _assets_images_battleships_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/battleships.png */ "./src/assets/images/battleships.png");
/* harmony import */ var _assets_images_soundscribe_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/soundscribe.png */ "./src/assets/images/soundscribe.png");
/* harmony import */ var _assets_images_tictactoe_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/tictactoe.png */ "./src/assets/images/tictactoe.png");
/* harmony import */ var _assets_images_weatherman_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/weatherman.png */ "./src/assets/images/weatherman.png");
/* harmony import */ var _assets_images_yum_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/yum.png */ "./src/assets/images/yum.png");






const createImageElement = (src) => {
  const imageElement = new Image();
  imageElement.src = src;
  return imageElement;
}

const projects = [
  {
    'name': 'Yum',
    'description': 'A social culinary platform for home cooks and professional chefs',
    'link': 'https://github.com/jackfales/yum',
    'img': createImageElement(_assets_images_yum_png__WEBPACK_IMPORTED_MODULE_4__)
  },
  {
    'name': 'Battleships',
    'description': 'A single player recreation of the classic Battleship game',
    'link': 'https://github.com/datderek/battleship.git',
    'img': createImageElement(_assets_images_battleships_png__WEBPACK_IMPORTED_MODULE_0__)
  },
  {
    'name': 'SoundScribe',
    'description': 'A Discord bot that transcribes audio in real-time',
    'link': 'https://github.com/datderek/SoundScribe.git',
    'img': createImageElement(_assets_images_soundscribe_png__WEBPACK_IMPORTED_MODULE_1__)
  },
  {
    'name': 'WeatherMan',
    'description': 'Another one of those Weather apps... but made by me',
    'link': 'https://github.com/datderek/weatherman.git',
    'img': createImageElement(_assets_images_weatherman_png__WEBPACK_IMPORTED_MODULE_3__)
  },
  {
    'name': 'Tic Tac Toe',
    'description': 'Get three in a row!',
    'link': 'https://github.com/datderek/odinproject/tree/main/tictactoe',
    'img': createImageElement(_assets_images_tictactoe_png__WEBPACK_IMPORTED_MODULE_2__)
  },
]

class Display {
  static start() {
    this.#loadProjects();
    this.#initializeObserver();
  }

  static #loadProjects() {
    const projectList = document.querySelector('.projects-container');

    projects.forEach((project) => {
      const projectContainer = document.createElement('li');
      projectContainer.classList.add('project');
      
      const projectLinkWrapper = document.createElement('a');
      projectLinkWrapper.href = project.link;

      const projectImage = project.img;
      projectImage.classList.add('project-image');
     
      const projectDetails = document.createElement('div');
      projectDetails.classList.add('project-details');
      
      const projectName = document.createElement('h3');
      projectName.classList.add('project-name');
      projectName.textContent = project.name;
      
      const projectDescription = document.createElement('h4');
      projectDescription.classList.add('project-description');
      projectDescription.textContent = project.description;
      
      projectDetails.appendChild(projectName);
      projectDetails.appendChild(projectDescription);
      projectContainer.appendChild(projectImage);
      projectContainer.appendChild(projectLinkWrapper);
      projectContainer.appendChild(projectDetails);
      projectList.appendChild(projectContainer);
    })
  }

  static #initializeObserver() {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '0px 25% -33% 25%'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
          }
      });
    }, observerOptions);

    const titleContainers = document.querySelectorAll('.title-container');

    titleContainers.forEach((titleContainer) => {
      observer.observe(titleContainer);
    })
  }
}


/***/ }),

/***/ "./src/modules/InteractionHandler.js":
/*!*******************************************!*\
  !*** ./src/modules/InteractionHandler.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InteractionHandler)
/* harmony export */ });
class InteractionHandler {
  static menuButton = document.querySelector('.menu-toggle-button');
  static menuLinks = document.querySelector('.menu-links');
  
  static #attachListeners() {
    this.menuButton.addEventListener('click', () => {
      this.menuButton.classList.toggle('expand');

      if (this.menuLinks.classList.contains('expand')) {
        this.menuLinks.classList.remove('expand');
    
        this.menuLinks.addEventListener('animationend', () => {
          this.menuLinks.classList.remove('collapse');
        }, { once: true });
        
        this.menuLinks.classList.add('collapse')
      } else {
        this.menuLinks.classList.add('expand');
      }
    });
  }

  static start() {
    InteractionHandler.#attachListeners();
  }
}

/***/ }),

/***/ "./src/assets/fonts/BarlowSemiCondensed-Bold.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/BarlowSemiCondensed-Bold.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6454195504604ebe42c3.ttf";

/***/ }),

/***/ "./src/assets/fonts/BarlowSemiCondensed-Regular.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/fonts/BarlowSemiCondensed-Regular.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05cbb3ba9db7b5e1da6e.ttf";

/***/ }),

/***/ "./src/assets/fonts/BarlowSemiCondensed-SemiBold.ttf":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/BarlowSemiCondensed-SemiBold.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0e9a01d31a5aecb006f.ttf";

/***/ }),

/***/ "./src/assets/images/battleships.png":
/*!*******************************************!*\
  !*** ./src/assets/images/battleships.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7f3d78124bb760c3a9d3.png";

/***/ }),

/***/ "./src/assets/images/cross.svg":
/*!*************************************!*\
  !*** ./src/assets/images/cross.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cbe6ed6961ad5a30b4b.svg";

/***/ }),

/***/ "./src/assets/images/soundscribe.png":
/*!*******************************************!*\
  !*** ./src/assets/images/soundscribe.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d64083fb8035008ab982.png";

/***/ }),

/***/ "./src/assets/images/tictactoe.png":
/*!*****************************************!*\
  !*** ./src/assets/images/tictactoe.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdfd7b7c7fdb7d52ca45.png";

/***/ }),

/***/ "./src/assets/images/weatherman.png":
/*!******************************************!*\
  !*** ./src/assets/images/weatherman.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86657c95bf90f057b803.png";

/***/ }),

/***/ "./src/assets/images/yum.png":
/*!***********************************!*\
  !*** ./src/assets/images/yum.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acacf526476fd2af2edb.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_Display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Display.js */ "./src/modules/Display.js");
/* harmony import */ var _modules_InteractionHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/InteractionHandler.js */ "./src/modules/InteractionHandler.js");




window.addEventListener('DOMContentLoaded', () => {
  _modules_Display_js__WEBPACK_IMPORTED_MODULE_1__["default"].start();
  _modules_InteractionHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"].start();
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUtBQWlFO0FBQzdHLDRDQUE0QywyS0FBa0U7QUFDOUcsNENBQTRDLG1LQUE4RDtBQUMxRyw0Q0FBNEMsNkhBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssT0FBTyxhQUFhLFNBQVMsT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLHFDQUFxQywyQ0FBMkMsK0RBQStELDBCQUEwQix5QkFBeUIsS0FBSyxvQkFBb0IsMkNBQTJDLGdFQUFnRSx1QkFBdUIseUJBQXlCLEtBQUssb0JBQW9CLDJDQUEyQyw0REFBNEQsd0JBQXdCLHlCQUF5QixLQUFLLGVBQWUsOEJBQThCLDBCQUEwQiw4QkFBOEIsK0JBQStCLDBCQUEwQixLQUFLLFdBQVcsNkJBQTZCLGlCQUFpQixpQkFBaUIseUJBQXlCLCtGQUErRix1QkFBdUIsNEJBQTRCLDRCQUE0QixxQkFBcUIsS0FBSyxjQUFjLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQiw0Q0FBNEMseUJBQXlCLEtBQUssb0RBQW9ELHdCQUF3Qiw0Q0FBNEMsa0NBQWtDLCtCQUErQixLQUFLLGlCQUFpQixzQkFBc0IsZ0NBQWdDLHdCQUF3QixxQkFBcUIsd0JBQXdCLEtBQUssb0JBQW9CLHdCQUF3Qix3QkFBd0IsS0FBSyxlQUFlLHNCQUFzQixLQUFLLDBCQUEwQix5QkFBeUIsNkJBQTZCLHlCQUF5Qiw2Q0FBNkMsaUNBQWlDLEtBQUssNEJBQTRCLHlCQUF5QixtQkFBbUIsbUJBQW1CLGdDQUFnQyxLQUFLLDZDQUE2QyxrQkFBa0IsbUJBQW1CLDJCQUEyQixzQkFBc0IsY0FBYyxhQUFhLGlCQUFpQixvQkFBb0IsMEJBQTBCLEtBQUssd0JBQXdCLG1CQUFtQixrQkFBa0Isb0JBQW9CLGlDQUFpQyxLQUFLLGVBQWUseUJBQXlCLEtBQUsscUJBQXFCLG9CQUFvQixtQkFBbUIsbUJBQW1CLDhCQUE4QixLQUFLLGtEQUFrRCxvQkFBb0IsS0FBSyw4QkFBOEIsd0VBQXdFLEtBQUssNEJBQTRCLHFFQUFxRSxLQUFLLHlCQUF5QixtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0NBQXdDLEtBQUsscUNBQXFDLHVDQUF1QyxLQUFLLG9DQUFvQyx1Q0FBdUMsS0FBSyw2QkFBNkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsbUJBQW1CLHdDQUF3Qyx1REFBdUQsbUNBQW1DLGtDQUFrQyw0QkFBNEIsNkJBQTZCLDhDQUE4QyxLQUFLLG9DQUFvQyxnQ0FBZ0MsS0FBSywyREFBMkQsb0JBQW9CLHlCQUF5Qix3Q0FBd0Msb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGdCQUFnQixrQ0FBa0MsS0FBSywrQkFBK0IseUJBQXlCLDJDQUEyQyxLQUFLLGlDQUFpQyxjQUFjLHdCQUF3QixrQkFBa0IsMEJBQTBCLHVCQUF1QixrREFBa0QsNkJBQTZCLEtBQUssdUJBQXVCLGtCQUFrQixtQkFBbUIsd0JBQXdCLDhCQUE4QixLQUFLLDZCQUE2Qix5QkFBeUIsa0RBQWtELEtBQUssZ0VBQWdFLHlCQUF5QixvQkFBb0IsNkJBQTZCLGdCQUFnQixLQUFLLDJDQUEyQyxvQ0FBb0MsdUNBQXVDLDZCQUE2QiwyQkFBMkIsS0FBSyxtREFBbUQscUVBQXFFLEtBQUssZ0VBQWdFLGFBQWEsY0FBYyxzQ0FBc0MsS0FBSyw2QkFBNkIseUJBQXlCLG9CQUFvQixtRUFBbUUsNEJBQTRCLHVCQUF1QixzQkFBc0IsMklBQTJJLG1QQUFtUCxLQUFLLGtCQUFrQix5QkFBeUIsMEJBQTBCLGdDQUFnQyw4QkFBOEIsdUJBQXVCLDZCQUE2QixrQ0FBa0Msa0NBQWtDLGlDQUFpQyxnQ0FBZ0MsS0FBSyx3QkFBd0IsNkJBQTZCLEtBQUssd0JBQXdCLHlCQUF5QixrQkFBa0IsbUJBQW1CLGdCQUFnQixlQUFlLHdCQUF3Qiw4QkFBOEIsdUJBQXVCLG1CQUFtQixLQUFLLHNCQUFzQix5QkFBeUIsa0JBQWtCLG1CQUFtQixLQUFLLDBCQUEwQix5QkFBeUIsaUJBQWlCLG1CQUFtQixrQkFBa0Isb0JBQW9CLG1CQUFtQixtRUFBbUUsS0FBSyx1QkFBdUIseUJBQXlCLEtBQUssOEJBQThCLDBCQUEwQixLQUFLLDhEQUE4RCx5QkFBeUIsb0JBQW9CLDZCQUE2QixnQkFBZ0IsS0FBSywwQ0FBMEMsMkJBQTJCLG1DQUFtQyxzQ0FBc0Msd0JBQXdCLDhCQUE4QiwyQkFBMkIsS0FBSyxtREFBbUQscUVBQXFFLEtBQUssK0RBQStELGtCQUFrQixhQUFhLGNBQWMsbUNBQW1DLHNDQUFzQyxLQUFLLDZCQUE2QiwyQkFBMkIsS0FBSyxrQkFBa0IseUJBQXlCLHlCQUF5QixpREFBaUQsc0RBQXNELEtBQUssNkJBQTZCLG9EQUFvRCxLQUFLLDBCQUEwQix5QkFBeUIsY0FBYyxhQUFhLG1CQUFtQixrQkFBa0IseUJBQXlCLGlDQUFpQyw2Q0FBNkMsZ0NBQWdDLDZCQUE2QiwyQ0FBMkMsS0FBSyx5Q0FBeUMsbUNBQW1DLEtBQUssdURBQXVELGtCQUFrQixvQkFBb0IsZ0NBQWdDLGdCQUFnQiw2Q0FBNkMsaUNBQWlDLG9CQUFvQixLQUFLLDRCQUE0QiwwQkFBMEIsMEJBQTBCLEtBQUssd0JBQXdCLGlDQUFpQyxLQUFLLDJCQUEyQixZQUFZLDZCQUE2QixPQUFPLGdCQUFnQiw2QkFBNkIsT0FBTyxLQUFLLDZCQUE2QixZQUFZLDZCQUE2QixPQUFPLGNBQWMsbUNBQW1DLEtBQUsseUJBQXlCLGFBQWEsbUJBQW1CLE9BQU8sY0FBYyxtQkFBbUIsT0FBTyxLQUFLLG9DQUFvQyxlQUFlLHdCQUF3QixPQUFPLHFCQUFxQiwyQkFBMkIsT0FBTyxpQkFBaUIsNEJBQTRCLE9BQU8sNEJBQTRCLDZCQUE2QixPQUFPLHVCQUF1QiwyQkFBMkIsT0FBTywrQkFBK0IsMEJBQTBCLE9BQU8sS0FBSyxtQ0FBbUMsZUFBZSx3QkFBd0IsaUNBQWlDLE9BQU8sc0JBQXNCLDRCQUE0QixPQUFPLGlCQUFpQix3QkFBd0IsT0FBTyw0QkFBNEIsNkJBQTZCLE9BQU8sZUFBZSxxQkFBcUIsT0FBTywrQkFBK0Isb0JBQW9CLDRCQUE0QixPQUFPLDJCQUEyQixvQkFBb0IsT0FBTyx1QkFBdUIsMkNBQTJDLE9BQU8sK0JBQStCLDZCQUE2QixxRUFBcUUsOEJBQThCLGtCQUFrQixPQUFPLDJEQUEyRCw2QkFBNkIsT0FBTyxLQUFLLG1CQUFtQjtBQUNsb2I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM5ZjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMEQ7QUFDQztBQUNKO0FBQ0U7QUFDZDtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbURBQUc7QUFDakMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFVO0FBQ3hDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwyREFBVztBQUN6QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMERBQVU7QUFDeEMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlEQUFTO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxR2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksWUFBWTtBQUN6QjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDc0I7QUFDc0I7QUFDakU7QUFDQTtBQUNBLEVBQUUsMkRBQU87QUFDVCxFQUFFLHNFQUFrQjtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvRGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvSW50ZXJhY3Rpb25IYW5kbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImFzc2V0cy9pbWFnZXMvY3Jvc3Muc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaSBDb25kZW5zZWQnO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHk7XHJcbiAgLS1jb3NtaWMtbGF0dGU6ICNGRkZCRUI7XHJcbiAgLS1naWFudHMtb3JhbmdlOiAjRkY1QTEzO1xyXG4gIC0tc2t5LWJsdWU6ICMxM0I4RkY7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7IFxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTonQmFybG93IFNlbWkgQ29uZGVuc2VkJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiNhYm91dC1wYWdlLCAjcHJvamVjdHMtcGFnZSwgI2NvbnRhY3QtcGFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcclxuICBjb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBmb250LXNpemU6IDZyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLnN1YmhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5oZXJvIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi50aXRsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcclxuICBjb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcclxufVxyXG5cclxuLmV4dGVuZC1iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1QTEzO1xyXG59XHJcblxyXG4vKlxyXG4gKiBOYXZiYXIgU3R5bGVcclxuICovXHJcbm5hdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWVudS1saW5rcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZ2FwOiAwLjI1cmVtO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG59XHJcblxyXG4ubWVudS1saW5rcy5jb2xsYXBzZSwgLm1lbnUtbGlua3MuZXhwYW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubWVudS1saW5rcy5jb2xsYXBzZSB7XHJcbiAgYW5pbWF0aW9uOiBjb2xsYXBzZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNiwgMCwgMC42NiwgLTAuNTYpIGJvdGg7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzLmV4cGFuZCB7XHJcbiAgYW5pbWF0aW9uOiBleHBhbmQgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGg7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzID4gYSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzID4gYTpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4IDAgMCAxMDAwcHg7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzID4gYTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDEwMDBweCAxMDAwcHggMDtcclxufVxyXG5cclxuLm1lbnUtdG9nZ2xlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1lbnUtdG9nZ2xlLWJ1dHRvbi5leHBhbmQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEFib3V0IFBhZ2UgU3R5bGVzXHJcbiAqL1xyXG4gI2Fib3V0LXBhZ2Uge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xyXG4gIHBhZGRpbmctdG9wOiBjYWxjKDU2cHggKyAwLjI1cmVtKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xyXG59XHJcblxyXG4jYWJvdXQtcGFnZSA+IC5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbmltYXRpb246IDEwMDBtcyBmYWRlIGVhc2Utb3V0IGJvdGg7XHJcbn1cclxuXHJcbi5oZWFkZXItaW1hZ2UtY29udGFpbmVyIHtcclxuICBmbGV4OiAxO1xyXG4gIG1heC1oZWlnaHQ6IDc1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBhbmltYXRpb246IDEwMDBtcyBmYWRlIGVhc2Utb3V0IGJvdGggMTI1MG1zO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5oZWFkZXItaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuI2Fib3V0LXBhZ2UgPiAuaGVybyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgMjUwMG1zIGJvdGg7XHJcbn1cclxuXHJcbi8qXHJcbiAqIFByb2plY3RzIFBhZ2UgU3R5bGVzXHJcbiAqL1xyXG4jcHJvamVjdHMtcGFnZSB7XHJcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1wYWdlID4gLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRyZW07XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxufVxyXG5cclxuI3Byb2plY3RzLXBhZ2UgPiAudGl0bGUtY29udGFpbmVyLmluLXZpZXcge1xyXG4gIGFuaW1hdGlvbjogZXhwYW5kIDc1MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoO1xyXG59XHJcblxyXG4jcHJvamVjdHMtcGFnZSA+IC50aXRsZS1jb250YWluZXIgPiAuZXh0ZW5kLWJhY2tncm91bmQge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0cy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM3NXB4LCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogMzAwcHg7XHJcbiAgY29sdW1uLWdhcDogMnJlbTtcclxuICByb3ctZ2FwOiAyLjVyZW07XHJcbiAgLyogU2hhZG93cyBwcm92aWRlZCBieSBKb3NoIENvbWVhdSBhdDogXHJcbiAgaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL3NoYWRvdy1wYWxldHRlLyAqL1xyXG4gIC0tc2hhZG93LWNvbG9yOiAxNTMsIDE1MSwgMTQxLCAwLjI1O1xyXG4gIC0tc2hhZG93OlxyXG4gICAgMC4zcHggMC41cHggMC43cHggcmdiYSh2YXIoLS1zaGFkb3ctY29sb3IpKSxcclxuICAgIDEuMXB4IDEuNnB4IDIuMnB4IC0wLjhweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxyXG4gICAgMi43cHggNHB4IDUuNHB4IC0xLjdweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxyXG4gICAgNi42cHggOS44cHggMTMuM3B4IC0yLjVweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpO1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbjogNTAwbXMgdHJhbnNmb3JtO1xyXG4gIGFuaW1hdGlvbjogZmFkZSBsaW5lYXIgYm90aDtcclxuICBhbmltYXRpb24tdGltZWxpbmU6IHZpZXcoKTtcclxuICBhbmltYXRpb24tcmFuZ2U6IDB2aCA1MHZoO1xyXG59XHJcblxyXG4ucHJvamVjdDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxufVxyXG5cclxuLnByb2plY3QtaW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogNTAlO1xyXG59XHJcblxyXG4ucHJvamVjdCA+IGEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWRldGFpbHMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcmVtO1xyXG4gIGJvdHRvbTogMHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgcmdiYSgwLDAsMCwwLjE1KSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi8qXHJcbiAqIENvbnRhY3QgUGFnZSBTdHlsZXNcclxuICovXHJcbiNjb250YWN0LXBhZ2Uge1xyXG4gIHBhZGRpbmc6IDJyZW0gMHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4jY29udGFjdC1wYWdlID4gLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cmVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG59XHJcblxyXG4jY29udGFjdC1wYWdlICA+IC50aXRsZS1jb250YWluZXIuaW4tdmlldyB7XHJcbiAgYW5pbWF0aW9uOiBleHBhbmQgNzUwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGg7XHJcbn1cclxuXHJcbiNjb250YWN0LXBhZ2UgPiAudGl0bGUtY29udGFpbmVyID4gLmV4dGVuZC1iYWNrZ3JvdW5kIHtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LXBhZ2UgLmhlcm8ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbSA0cmVtO1xyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XHJcbiAgdHJhbnNpdGlvbjogMTAwbXMgY29sb3IsIDEwMG1zIGJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbi5jb250YWN0Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1naWFudHMtb3JhbmdlKTtcclxufVxyXG5cclxuLmNvbnRhY3QtaG92ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtIDRyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMDAlLCAwKTtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb246IDE1MG1zIHRyYW5zZm9ybSBlYXNlLW91dDtcclxufVxyXG5cclxuLmNvbnRhY3Q6aG92ZXIgLmNvbnRhY3QtaG92ZXJlZCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMDAlLCAxMDAlKTtcclxufVxyXG5cclxuLypcclxuICogRm9vdGVyIHBhZ2Ugc3R5bGluZ1xyXG4gKi9cclxuZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xyXG4gIHBhZGRpbmc6IDRyZW07XHJcbn1cclxuXHJcbi5mb290ZXItbGlzdC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpc3QgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXhwYW5kIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIH1cclxuICBcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY29sbGFwc2Uge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKVxyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlIHtcclxuICBmcm9tIHsgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5zdWJoZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuaGVybyB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gM3JlbTtcclxuICB9XHJcblxyXG4gICNhYm91dC1wYWdlIHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogcmVtIDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNXJlbTtcclxuICB9XHJcblxyXG4gIC5zdWJoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtdG9nZ2xlLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAubWVudS1saW5rcyA+IGEge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG5cclxuICAjYWJvdXQtcGFnZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyg1MHB4ICsgMC4xMjVyZW0pO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICAgIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcclxuICAgIGdhcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LCAjY29udGFjdC1wYWdlIC5oZXJvLCAuY29udGFjdC1ob3ZlcmVkIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyw0Q0FBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw0Q0FBeUQ7RUFDekQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw0Q0FBcUQ7RUFDckQsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsd0ZBQXdGO0VBQ3hGLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIs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O0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsNERBQTREO0lBQzVELHFCQUFxQjtJQUNyQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJztcXHJcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtUmVndWxhci50dGYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCc7XFxyXFxuICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVNlbWlCb2xkLnR0Zik7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJztcXHJcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtQm9sZC50dGYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeTtcXHJcXG4gIC0tY29zbWljLWxhdHRlOiAjRkZGQkVCO1xcclxcbiAgLS1naWFudHMtb3JhbmdlOiAjRkY1QTEzO1xcclxcbiAgLS1za3ktYmx1ZTogIzEzQjhGRjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDsgXFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBmb250LWZhbWlseTonQmFybG93IFNlbWkgQ29uZGVuc2VkJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LXBhZ2UsICNwcm9qZWN0cy1wYWdlLCAjY29udGFjdC1wYWdlIHtcXHJcXG4gIG1heC13aWR0aDogMTYwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcXHJcXG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDZyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuMTI1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmV4dGVuZC1iYWNrZ3JvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjVBMTM7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogTmF2YmFyIFN0eWxlXFxyXFxuICovXFxyXFxubmF2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1NnB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZ2FwOiAwLjI1cmVtO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzLmNvbGxhcHNlLCAubWVudS1saW5rcy5leHBhbmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MuY29sbGFwc2Uge1xcclxcbiAgYW5pbWF0aW9uOiBjb2xsYXBzZSA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNiwgMCwgMC42NiwgLTAuNTYpIGJvdGg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzLmV4cGFuZCB7XFxyXFxuICBhbmltYXRpb246IGV4cGFuZCA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgPiBhIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzID4gYTpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAwcHggMCAwIDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgPiBhOmxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAxMDAwcHggMTAwMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRvZ2dsZS1idXR0b24ge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ltYWdlcy9jcm9zcy5zdmcnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XFxyXFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS10b2dnbGUtYnV0dG9uLmV4cGFuZCB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEFib3V0IFBhZ2UgU3R5bGVzXFxyXFxuICovXFxyXFxuICNhYm91dC1wYWdlIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxyXFxuICBwYWRkaW5nLXRvcDogY2FsYyg1NnB4ICsgMC4yNXJlbSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LXBhZ2UgPiAuaGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1pbWFnZS1jb250YWluZXIge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1heC1oZWlnaHQ6IDc1MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgYm90aCAxMjUwbXM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LXBhZ2UgPiAuaGVybyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbmltYXRpb246IDEwMDBtcyBmYWRlIGVhc2Utb3V0IDI1MDBtcyBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFByb2plY3RzIFBhZ2UgU3R5bGVzXFxyXFxuICovXFxyXFxuI3Byb2plY3RzLXBhZ2Uge1xcclxcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1wYWdlID4gLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cmVtO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtcGFnZSA+IC50aXRsZS1jb250YWluZXIuaW4tdmlldyB7XFxyXFxuICBhbmltYXRpb246IGV4cGFuZCA3NTBtcyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLXBhZ2UgPiAudGl0bGUtY29udGFpbmVyID4gLmV4dGVuZC1iYWNrZ3JvdW5kIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNzVweCwgMWZyKSk7XFxyXFxuICBncmlkLWF1dG8tcm93czogMzAwcHg7XFxyXFxuICBjb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgcm93LWdhcDogMi41cmVtO1xcclxcbiAgLyogU2hhZG93cyBwcm92aWRlZCBieSBKb3NoIENvbWVhdSBhdDogXFxyXFxuICBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vc2hhZG93LXBhbGV0dGUvICovXFxyXFxuICAtLXNoYWRvdy1jb2xvcjogMTUzLCAxNTEsIDE0MSwgMC4yNTtcXHJcXG4gIC0tc2hhZG93OlxcclxcbiAgICAwLjNweCAwLjVweCAwLjdweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxcclxcbiAgICAxLjFweCAxLjZweCAyLjJweCAtMC44cHggcmdiYSh2YXIoLS1zaGFkb3ctY29sb3IpKSxcXHJcXG4gICAgMi43cHggNHB4IDUuNHB4IC0xLjdweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxcclxcbiAgICA2LjZweCA5LjhweCAxMy4zcHggLTIuNXB4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG4gIHRyYW5zaXRpb246IDUwMG1zIHRyYW5zZm9ybTtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZSBsaW5lYXIgYm90aDtcXHJcXG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xcclxcbiAgYW5pbWF0aW9uLXJhbmdlOiAwdmggNTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1hZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCA+IGEge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRldGFpbHMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHJlbTtcXHJcXG4gIGJvdHRvbTogMHJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuMTUpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQ29udGFjdCBQYWdlIFN0eWxlc1xcclxcbiAqL1xcclxcbiNjb250YWN0LXBhZ2Uge1xcclxcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXBhZ2UgPiAudGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRyZW07XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXBhZ2UgID4gLnRpdGxlLWNvbnRhaW5lci5pbi12aWV3IHtcXHJcXG4gIGFuaW1hdGlvbjogZXhwYW5kIDc1MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1wYWdlID4gLnRpdGxlLWNvbnRhaW5lciA+IC5leHRlbmQtYmFja2dyb3VuZCB7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtcGFnZSAuaGVybyB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcclxcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWdpYW50cy1vcmFuZ2UpO1xcclxcbiAgdHJhbnNpdGlvbjogMTAwbXMgY29sb3IsIDEwMG1zIGJhY2tncm91bmQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0Omxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWdpYW50cy1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1ob3ZlcmVkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEwMCUsIDApO1xcclxcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG4gIHRyYW5zaXRpb246IDE1MG1zIHRyYW5zZm9ybSBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Q6aG92ZXIgLmNvbnRhY3QtaG92ZXJlZCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEwMCUsIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEZvb3RlciBwYWdlIHN0eWxpbmdcXHJcXG4gKi9cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XFxyXFxuICBwYWRkaW5nOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWxpc3QtdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGlzdCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGV4cGFuZCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY29sbGFwc2Uge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGUge1xcclxcbiAgZnJvbSB7IFxcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN1YmhlYWRlcntcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlcm8ge1xcclxcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Fib3V0LXBhZ2Uge1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogcmVtIDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN1YmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVybyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50aXRsZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LXRvZ2dsZS1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMzRweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWxpbmtzID4gYSB7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2Fib3V0LXBhZ2Uge1xcclxcbiAgICBwYWRkaW5nLXRvcDogY2FsYyg1MHB4ICsgMC4xMjVyZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QsICNjb250YWN0LXBhZ2UgLmhlcm8sIC5jb250YWN0LWhvdmVyZWQge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2JhdHRsZXNoaXBzLnBuZyc7XHJcbmltcG9ydCBTb3VuZFNjcmliZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3NvdW5kc2NyaWJlLnBuZyc7XHJcbmltcG9ydCBUaWNUYWNUb2UgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy90aWN0YWN0b2UucG5nJztcclxuaW1wb3J0IFdlYXRoZXJNYW4gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy93ZWF0aGVybWFuLnBuZyc7XHJcbmltcG9ydCBZdW0gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy95dW0ucG5nJztcclxuXHJcbmNvbnN0IGNyZWF0ZUltYWdlRWxlbWVudCA9IChzcmMpID0+IHtcclxuICBjb25zdCBpbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICBpbWFnZUVsZW1lbnQuc3JjID0gc3JjO1xyXG4gIHJldHVybiBpbWFnZUVsZW1lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzID0gW1xyXG4gIHtcclxuICAgICduYW1lJzogJ1l1bScsXHJcbiAgICAnZGVzY3JpcHRpb24nOiAnQSBzb2NpYWwgY3VsaW5hcnkgcGxhdGZvcm0gZm9yIGhvbWUgY29va3MgYW5kIHByb2Zlc3Npb25hbCBjaGVmcycsXHJcbiAgICAnbGluayc6ICdodHRwczovL2dpdGh1Yi5jb20vamFja2ZhbGVzL3l1bScsXHJcbiAgICAnaW1nJzogY3JlYXRlSW1hZ2VFbGVtZW50KFl1bSlcclxuICB9LFxyXG4gIHtcclxuICAgICduYW1lJzogJ0JhdHRsZXNoaXBzJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICdBIHNpbmdsZSBwbGF5ZXIgcmVjcmVhdGlvbiBvZiB0aGUgY2xhc3NpYyBCYXR0bGVzaGlwIGdhbWUnLFxyXG4gICAgJ2xpbmsnOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhdGRlcmVrL2JhdHRsZXNoaXAuZ2l0JyxcclxuICAgICdpbWcnOiBjcmVhdGVJbWFnZUVsZW1lbnQoQmF0dGxlc2hpcClcclxuICB9LFxyXG4gIHtcclxuICAgICduYW1lJzogJ1NvdW5kU2NyaWJlJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICdBIERpc2NvcmQgYm90IHRoYXQgdHJhbnNjcmliZXMgYXVkaW8gaW4gcmVhbC10aW1lJyxcclxuICAgICdsaW5rJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYXRkZXJlay9Tb3VuZFNjcmliZS5naXQnLFxyXG4gICAgJ2ltZyc6IGNyZWF0ZUltYWdlRWxlbWVudChTb3VuZFNjcmliZSlcclxuICB9LFxyXG4gIHtcclxuICAgICduYW1lJzogJ1dlYXRoZXJNYW4nLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0Fub3RoZXIgb25lIG9mIHRob3NlIFdlYXRoZXIgYXBwcy4uLiBidXQgbWFkZSBieSBtZScsXHJcbiAgICAnbGluayc6ICdodHRwczovL2dpdGh1Yi5jb20vZGF0ZGVyZWsvd2VhdGhlcm1hbi5naXQnLFxyXG4gICAgJ2ltZyc6IGNyZWF0ZUltYWdlRWxlbWVudChXZWF0aGVyTWFuKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ25hbWUnOiAnVGljIFRhYyBUb2UnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0dldCB0aHJlZSBpbiBhIHJvdyEnLFxyXG4gICAgJ2xpbmsnOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhdGRlcmVrL29kaW5wcm9qZWN0L3RyZWUvbWFpbi90aWN0YWN0b2UnLFxyXG4gICAgJ2ltZyc6IGNyZWF0ZUltYWdlRWxlbWVudChUaWNUYWNUb2UpXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheSB7XHJcbiAgc3RhdGljIHN0YXJ0KCkge1xyXG4gICAgdGhpcy4jbG9hZFByb2plY3RzKCk7XHJcbiAgICB0aGlzLiNpbml0aWFsaXplT2JzZXJ2ZXIoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyAjbG9hZFByb2plY3RzKCkge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwcm9qZWN0TGlua1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgIHByb2plY3RMaW5rV3JhcHBlci5ocmVmID0gcHJvamVjdC5saW5rO1xyXG5cclxuICAgICAgY29uc3QgcHJvamVjdEltYWdlID0gcHJvamVjdC5pbWc7XHJcbiAgICAgIHByb2plY3RJbWFnZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWltYWdlJyk7XHJcbiAgICAgXHJcbiAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHByb2plY3REZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGV0YWlscycpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcclxuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZXNjcmlwdGlvbicpO1xyXG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgICBcclxuICAgICAgcHJvamVjdERldGFpbHMuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG4gICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJbWFnZSk7XHJcbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtXcmFwcGVyKTtcclxuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGV0YWlscyk7XHJcbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyAjaW5pdGlhbGl6ZU9ic2VydmVyKCkge1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0ge1xyXG4gICAgICByb290OiBudWxsLFxyXG4gICAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICAgIHJvb3RNYXJnaW46ICcwcHggMjUlIC0zMyUgMjUlJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcclxuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XHJcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgb2JzZXJ2ZXJPcHRpb25zKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUtY29udGFpbmVyJyk7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXJzLmZvckVhY2goKHRpdGxlQ29udGFpbmVyKSA9PiB7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGl0bGVDb250YWluZXIpO1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3Rpb25IYW5kbGVyIHtcclxuICBzdGF0aWMgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZS1idXR0b24nKTtcclxuICBzdGF0aWMgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbGlua3MnKTtcclxuICBcclxuICBzdGF0aWMgI2F0dGFjaExpc3RlbmVycygpIHtcclxuICAgIHRoaXMubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5tZW51QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZCcpO1xyXG5cclxuICAgICAgaWYgKHRoaXMubWVudUxpbmtzLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcclxuICAgICAgICB0aGlzLm1lbnVMaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQnKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMubWVudUxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMubWVudUxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlJyk7XHJcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubWVudUxpbmtzLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1lbnVMaW5rcy5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RhcnQoKSB7XHJcbiAgICBJbnRlcmFjdGlvbkhhbmRsZXIuI2F0dGFjaExpc3RlbmVycygpO1xyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9tb2R1bGVzL0Rpc3BsYXkuanMnO1xyXG5pbXBvcnQgSW50ZXJhY3Rpb25IYW5kbGVyIGZyb20gJy4vbW9kdWxlcy9JbnRlcmFjdGlvbkhhbmRsZXIuanMnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgRGlzcGxheS5zdGFydCgpO1xyXG4gIEludGVyYWN0aW9uSGFuZGxlci5zdGFydCgpO1xyXG59KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=