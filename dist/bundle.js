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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Barlow Semi Condensed';\r\n  src: url(./assets/fonts/BarlowSemiCondensed-Regular.ttf);\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Barlow Semi Condensed';\r\n  src: url(./assets/fonts/BarlowSemiCondensed-SemiBold.ttf);\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Barlow Semi Condensed';\r\n  src: url(./assets/fonts/BarlowSemiCondensed-Bold.ttf);\r\n  font-weight: bold;\r\n  font-style: normal;\r\n}\r\n\r\n:root {\r\n  scroll-behavior: smooth;\r\n  --cosmic-latte: #FFFBEB;\r\n  --giants-orange: #FF5A13;\r\n  --sky-blue: #13B8FF;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0; \r\n  font-size: inherit;\r\n  font-family:'Barlow Semi Condensed', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  font-weight: 600;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--cosmic-latte);\r\n  overflow-x: hidden;\r\n}\r\n\r\n#about-page, #projects-page, #contact-page {\r\n  max-width: 1600px;\r\n  background-color: var(--cosmic-latte);\r\n  color: var(--giants-orange);\r\n}\r\n\r\n.header {\r\n  font-size: 6rem;\r\n  letter-spacing: -0.125rem;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  user-select: none;\r\n}\r\n\r\n.subheader {\r\n  font-size: 2.5rem;\r\n  user-select: none;\r\n}\r\n\r\n.hero {\r\n  font-size: 2rem;\r\n}\r\n\r\n.title-container {\r\n  position: relative;\r\n  max-width: max-content;\r\n  padding: 2rem 4rem;\r\n  background-color: var(--giants-orange);\r\n  color: var(--cosmic-latte);\r\n}\r\n\r\n.extend-background {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100vw;\r\n  background-color: #FF5A13;\r\n}\r\n\r\n/*\r\n * Navbar Style\r\n */\r\nnav {\r\n  width: 100%;\r\n  height: 56px;\r\n  padding: 0.5rem 1rem;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.nav-container {\r\n  height: 100%;\r\n  width: 100%;\r\n  display: flex;\r\n  color: var(--cosmic-latte);\r\n}\r\n\r\n.icon {\r\n  margin-right: auto;\r\n}\r\n\r\n.menu-links {\r\n  display: none;\r\n  height: 100%;\r\n  gap: 0.25rem;\r\n  transform-origin: right;\r\n}\r\n\r\n.menu-links.collapse, .menu-links.expand {\r\n  display: flex;\r\n}\r\n\r\n.menu-links.collapse {\r\n  animation: collapse 500ms cubic-bezier(0.36, 0, 0.66, -0.56) both;\r\n}\r\n\r\n.menu-links.expand {\r\n  animation: expand 500ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\r\n}\r\n\r\n.menu-links > a {\r\n  width: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--sky-blue);\r\n}\r\n\r\n.menu-links > a:first-child {\r\n  border-radius: 1000px 0 0 1000px;\r\n}\r\n\r\n.menu-links > a:last-child {\r\n  border-radius: 0 1000px 1000px 0;\r\n}\r\n\r\n.menu-toggle-button {\r\n  width: 40px;\r\n  margin-left: 1rem;\r\n  border-radius: 1000px;\r\n  border: none;\r\n  background-color: var(--sky-blue);\r\n  background-image: url('assets/images/cross.svg');\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: 20px;\r\n  will-change: transform;\r\n  transition: transform 500ms ease-in-out;\r\n}\r\n\r\n.menu-toggle-button.expand {\r\n  transform: rotate(315deg);\r\n}\r\n\r\n/*\r\n * About Page Styles\r\n */\r\n #about-page {\r\n  height: 100vh;\r\n  padding: 2rem 4rem;\r\n  padding-top: calc(56px + 0.25rem);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  color: var(--giants-orange);\r\n}\r\n\r\n#about-page > .header {\r\n  text-align: center;\r\n  animation: 1000ms fade ease-out both;\r\n}\r\n\r\n.header-image-container {\r\n  flex: 1;\r\n  max-height: 750px;\r\n  width: 100%;\r\n  border-radius: 4rem;\r\n  overflow: hidden;\r\n  animation: 1000ms fade ease-out both 1250ms;\r\n  background-color: blue;\r\n}\r\n\r\n.header-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  object-position: center;\r\n}\r\n\r\n#about-page > .hero {\r\n  text-align: center;\r\n  animation: 1000ms fade ease-out 2500ms both;\r\n}\r\n\r\n/*\r\n * Projects Page Styles\r\n */\r\n#projects-page {\r\n  padding: 2rem 0rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n#projects-page > .title-container {\r\n  border-top-right-radius: 4rem;\r\n  border-bottom-right-radius: 4rem;\r\n  transform-origin: left;\r\n  transform: scaleX(0);\r\n}\r\n\r\n#projects-page > .title-container.in-view {\r\n  animation: expand 750ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\r\n}\r\n\r\n#projects-page > .title-container > .extend-background {\r\n  top: 0;\r\n  left: 0;\r\n  transform: translate(-100%, 0%);\r\n}\r\n\r\n.projects-container {\r\n  padding: 1rem 4rem;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));\r\n  grid-auto-rows: 300px;\r\n  column-gap: 2rem;\r\n  row-gap: 2.5rem;\r\n  /* Shadows provided by Josh Comeau at: \r\n  https://www.joshwcomeau.com/shadow-palette/ */\r\n  --shadow-color: 153, 151, 141, 0.25;\r\n  --shadow:\r\n    0.3px 0.5px 0.7px rgba(var(--shadow-color)),\r\n    1.1px 1.6px 2.2px -0.8px rgba(var(--shadow-color)),\r\n    2.7px 4px 5.4px -1.7px rgba(var(--shadow-color)),\r\n    6.6px 9.8px 13.3px -2.5px rgba(var(--shadow-color));\r\n}\r\n\r\n.project {\r\n  position: relative;\r\n  border-radius: 1rem;\r\n  box-shadow: var(--shadow);\r\n  background-color: white;\r\n  overflow: hidden;\r\n  will-change: transform;\r\n  transition: 500ms transform;\r\n  animation: fade linear both;\r\n  animation-timeline: view();\r\n  animation-range: 0vh 50vh;\r\n}\r\n\r\n.project:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.project-image {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0px;\r\n  top: 0px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n  overflow: hidden;\r\n  opacity: 50%;\r\n}\r\n\r\n.project > a {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.project-details {\r\n  position: absolute;\r\n  left: 0rem;\r\n  bottom: 0rem;\r\n  width: 100%;\r\n  padding: 1rem;\r\n  color: black;\r\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.15));\r\n}\r\n\r\n.project-name {\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.project-description {\r\n  font-weight: normal;\r\n}\r\n\r\n/*\r\n * Contact Page Styles\r\n */\r\n#contact-page {\r\n  padding: 2rem 0rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n#contact-page > .title-container {\r\n  align-self: flex-end;\r\n  border-top-left-radius: 4rem;\r\n  border-bottom-left-radius: 4rem;\r\n  text-align: right;\r\n  transform-origin: right;\r\n  transform: scaleX(0);\r\n}\r\n\r\n#contact-page  > .title-container.in-view {\r\n  animation: expand 750ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\r\n}\r\n\r\n#contact-page > .title-container > .extend-background {\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  border-top-left-radius: 4rem;\r\n  border-bottom-left-radius: 4rem;\r\n}\r\n\r\n#contact-page .hero {\r\n  padding: 0.5rem 4rem;\r\n}\r\n\r\n.contact {\r\n  position: relative;\r\n  padding: 1rem 4rem;\r\n  border-top: 3px solid var(--giants-orange);\r\n  transition: 100ms color, 100ms background-color;\r\n}\r\n\r\n.contact:last-child {\r\n  border-bottom: 3px solid var(--giants-orange);\r\n}\r\n\r\n.contact-hovered {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 1rem 4rem;\r\n  color: var(--cosmic-latte);\r\n  background-color: var(--giants-orange);\r\n  transform: scale(100%, 0);\r\n  will-change: transform;\r\n  transition: 150ms transform ease-out;\r\n}\r\n\r\n.contact:hover .contact-hovered {\r\n  transform: scale(100%, 100%);\r\n}\r\n\r\n/*\r\n * Footer page styling\r\n */\r\nfooter {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 2rem;\r\n  background-color: var(--giants-orange);\r\n  color: var(--cosmic-latte);\r\n  padding: 4rem;\r\n}\r\n\r\n.footer-list-title {\r\n  margin-bottom: 1rem;\r\n  font-size: 1.125rem;\r\n}\r\n\r\n.footer-list a {\r\n  text-decoration: underline;\r\n}\r\n\r\n@keyframes expand {\r\n  from {\r\n    transform: scaleX(0);\r\n  }\r\n  \r\n  to {\r\n    transform: scaleX(1);\r\n  }\r\n}\r\n\r\n@keyframes collapse {\r\n  from {\r\n    transform: scaleX(1);\r\n  }\r\n\r\n  to {\r\n    transform: scaleX(0)\r\n  }\r\n}\r\n\r\n@keyframes fade {\r\n  from { \r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media (max-width: 1000px) {\r\n  .header {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .subheader{\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .hero {\r\n    font-size: 1.125rem;\r\n  }\r\n\r\n  .title-container {\r\n    padding: 1.5rem 3rem;\r\n  }\r\n\r\n  #about-page {\r\n    padding: 2rem 2rem;\r\n  }\r\n\r\n  .projects-container {\r\n    padding: rem 3rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .header {\r\n    font-size: 2rem;\r\n    letter-spacing: -0.05rem;\r\n  }\r\n\r\n  .subheader {\r\n    font-size: 1.125rem;\r\n  }\r\n\r\n  .hero {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .title-container {\r\n    padding: 0.5rem 1rem;\r\n  }\r\n\r\n  nav {\r\n    height: 50px;\r\n  }\r\n\r\n  .menu-toggle-button {\r\n    width: 34px;\r\n    margin-left: 0.5rem;\r\n  }\r\n\r\n  .menu-links > a {\r\n    width: 70px;\r\n  }\r\n\r\n  #about-page {\r\n    padding-top: calc(50px + 0.125rem);\r\n  }\r\n\r\n  .projects-container {\r\n    padding: 0.5rem 2rem;\r\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n    grid-auto-rows: 200px;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .contact, #contact-page .hero, .contact-hovered {\r\n    padding: 0.5rem 2rem;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUtBQWlFO0FBQzdHLDRDQUE0QywyS0FBa0U7QUFDOUcsNENBQTRDLG1LQUE4RDtBQUMxRyw0Q0FBNEMsNkhBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE9BQU8sYUFBYSxTQUFTLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0s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QUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNzQjtBQUNzQjtBQUNqRTtBQUNBO0FBQ0EsRUFBRSwyREFBTztBQUNULEVBQUUsc0VBQWtCO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9EaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9JbnRlcmFjdGlvbkhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2ltYWdlcy9jcm9zcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cgU2VtaSBDb25kZW5zZWQnO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCc7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgLS1jb3NtaWMtbGF0dGU6ICNGRkZCRUI7XHJcbiAgLS1naWFudHMtb3JhbmdlOiAjRkY1QTEzO1xyXG4gIC0tc2t5LWJsdWU6ICMxM0I4RkY7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7IFxyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTonQmFybG93IFNlbWkgQ29uZGVuc2VkJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiNhYm91dC1wYWdlLCAjcHJvamVjdHMtcGFnZSwgI2NvbnRhY3QtcGFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcclxuICBjb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogNnJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uc3ViaGVhZGVyIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmhlcm8ge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xyXG59XHJcblxyXG4uZXh0ZW5kLWJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjVBMTM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIE5hdmJhciBTdHlsZVxyXG4gKi9cclxubmF2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBnYXA6IDAuMjVyZW07XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzLmNvbGxhcHNlLCAubWVudS1saW5rcy5leHBhbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tZW51LWxpbmtzLmNvbGxhcHNlIHtcclxuICBhbmltYXRpb246IGNvbGxhcHNlIDUwMG1zIGN1YmljLWJlemllcigwLjM2LCAwLCAwLjY2LCAtMC41NikgYm90aDtcclxufVxyXG5cclxuLm1lbnUtbGlua3MuZXhwYW5kIHtcclxuICBhbmltYXRpb246IGV4cGFuZCA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aDtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgPiBhIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgPiBhOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAwcHggMCAwIDEwMDBweDtcclxufVxyXG5cclxuLm1lbnUtbGlua3MgPiBhOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMTAwMHB4IDEwMDBweCAwO1xyXG59XHJcblxyXG4ubWVudS10b2dnbGUtYnV0dG9uIHtcclxuICB3aWR0aDogNDBweDtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubWVudS10b2dnbGUtYnV0dG9uLmV4cGFuZCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcclxufVxyXG5cclxuLypcclxuICogQWJvdXQgUGFnZSBTdHlsZXNcclxuICovXHJcbiAjYWJvdXQtcGFnZSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAycmVtIDRyZW07XHJcbiAgcGFkZGluZy10b3A6IGNhbGMoNTZweCArIDAuMjVyZW0pO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBjb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XHJcbn1cclxuXHJcbiNhYm91dC1wYWdlID4gLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgYm90aDtcclxufVxyXG5cclxuLmhlYWRlci1pbWFnZS1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWF4LWhlaWdodDogNzUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgYm90aCAxMjUwbXM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmhlYWRlci1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4jYWJvdXQtcGFnZSA+IC5oZXJvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYW5pbWF0aW9uOiAxMDAwbXMgZmFkZSBlYXNlLW91dCAyNTAwbXMgYm90aDtcclxufVxyXG5cclxuLypcclxuICogUHJvamVjdHMgUGFnZSBTdHlsZXNcclxuICovXHJcbiNwcm9qZWN0cy1wYWdlIHtcclxuICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuI3Byb2plY3RzLXBhZ2UgPiAudGl0bGUtY29udGFpbmVyIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHJlbTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHJlbTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG59XHJcblxyXG4jcHJvamVjdHMtcGFnZSA+IC50aXRsZS1jb250YWluZXIuaW4tdmlldyB7XHJcbiAgYW5pbWF0aW9uOiBleHBhbmQgNzUwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGg7XHJcbn1cclxuXHJcbiNwcm9qZWN0cy1wYWdlID4gLnRpdGxlLWNvbnRhaW5lciA+IC5leHRlbmQtYmFja2dyb3VuZCB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDAlKTtcclxufVxyXG5cclxuLnByb2plY3RzLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzc1cHgsIDFmcikpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiAzMDBweDtcclxuICBjb2x1bW4tZ2FwOiAycmVtO1xyXG4gIHJvdy1nYXA6IDIuNXJlbTtcclxuICAvKiBTaGFkb3dzIHByb3ZpZGVkIGJ5IEpvc2ggQ29tZWF1IGF0OiBcclxuICBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vc2hhZG93LXBhbGV0dGUvICovXHJcbiAgLS1zaGFkb3ctY29sb3I6IDE1MywgMTUxLCAxNDEsIDAuMjU7XHJcbiAgLS1zaGFkb3c6XHJcbiAgICAwLjNweCAwLjVweCAwLjdweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxyXG4gICAgMS4xcHggMS42cHggMi4ycHggLTAuOHB4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSksXHJcbiAgICAyLjdweCA0cHggNS40cHggLTEuN3B4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSksXHJcbiAgICA2LjZweCA5LjhweCAxMy4zcHggLTIuNXB4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uOiA1MDBtcyB0cmFuc2Zvcm07XHJcbiAgYW5pbWF0aW9uOiBmYWRlIGxpbmVhciBib3RoO1xyXG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xyXG4gIGFuaW1hdGlvbi1yYW5nZTogMHZoIDUwdmg7XHJcbn1cclxuXHJcbi5wcm9qZWN0OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgdG9wOiAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0ID4gYSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnByb2plY3QtZGV0YWlscyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDByZW07XHJcbiAgYm90dG9tOiAwcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuMTUpKTtcclxufVxyXG5cclxuLnByb2plY3QtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLypcclxuICogQ29udGFjdCBQYWdlIFN0eWxlc1xyXG4gKi9cclxuI2NvbnRhY3QtcGFnZSB7XHJcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbiNjb250YWN0LXBhZ2UgPiAudGl0bGUtY29udGFpbmVyIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRyZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbn1cclxuXHJcbiNjb250YWN0LXBhZ2UgID4gLnRpdGxlLWNvbnRhaW5lci5pbi12aWV3IHtcclxuICBhbmltYXRpb246IGV4cGFuZCA3NTBtcyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aDtcclxufVxyXG5cclxuI2NvbnRhY3QtcGFnZSA+IC50aXRsZS1jb250YWluZXIgPiAuZXh0ZW5kLWJhY2tncm91bmQge1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRyZW07XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHJlbTtcclxufVxyXG5cclxuI2NvbnRhY3QtcGFnZSAuaGVybyB7XHJcbiAgcGFkZGluZzogMC41cmVtIDRyZW07XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1naWFudHMtb3JhbmdlKTtcclxuICB0cmFuc2l0aW9uOiAxMDBtcyBjb2xvciwgMTAwbXMgYmFja2dyb3VuZC1jb2xvcjtcclxufVxyXG5cclxuLmNvbnRhY3Q6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWdpYW50cy1vcmFuZ2UpO1xyXG59XHJcblxyXG4uY29udGFjdC1ob3ZlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcclxuICBjb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEwMCUsIDApO1xyXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbjogMTUwbXMgdHJhbnNmb3JtIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY29udGFjdDpob3ZlciAuY29udGFjdC1ob3ZlcmVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEwMCUsIDEwMCUpO1xyXG59XHJcblxyXG4vKlxyXG4gKiBGb290ZXIgcGFnZSBzdHlsaW5nXHJcbiAqL1xyXG5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XHJcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XHJcbiAgcGFkZGluZzogNHJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1saXN0LXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbn1cclxuXHJcbi5mb290ZXItbGlzdCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBleHBhbmQge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjb2xsYXBzZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApXHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gIGZyb20geyBcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLnN1YmhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5oZXJvIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgfVxyXG5cclxuICAudGl0bGUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xyXG4gIH1cclxuXHJcbiAgI2Fib3V0LXBhZ2Uge1xyXG4gICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiByZW0gM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnN1YmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmhlcm8ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB9XHJcblxyXG4gIG5hdiB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAubWVudS10b2dnbGUtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5tZW51LWxpbmtzID4gYSB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICB9XHJcblxyXG4gICNhYm91dC1wYWdlIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDUwcHggKyAwLjEyNXJlbSk7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdHMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QsICNjb250YWN0LXBhZ2UgLmhlcm8sIC5jb250YWN0LWhvdmVyZWQge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUF5RDtFQUN6RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUFxRDtFQUNyRCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHdGQUF3RjtFQUN4RixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7QUFDRjtFQUNF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QTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsNERBQTREO0lBQzVELHFCQUFxQjtJQUNyQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJztcXHJcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtUmVndWxhci50dGYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCc7XFxyXFxuICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVNlbWlCb2xkLnR0Zik7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJztcXHJcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtQm9sZC50dGYpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgLS1jb3NtaWMtbGF0dGU6ICNGRkZCRUI7XFxyXFxuICAtLWdpYW50cy1vcmFuZ2U6ICNGRjVBMTM7XFxyXFxuICAtLXNreS1ibHVlOiAjMTNCOEZGO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwOyBcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtZmFtaWx5OidCYXJsb3cgU2VtaSBDb25kZW5zZWQnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtcGFnZSwgI3Byb2plY3RzLXBhZ2UsICNjb250YWN0LXBhZ2Uge1xcclxcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcclxcbiAgY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMjVyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdWJoZWFkZXIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZXh0ZW5kLWJhY2tncm91bmQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNUExMztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBOYXZiYXIgU3R5bGVcXHJcXG4gKi9cXHJcXG5uYXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU2cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaWNvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBnYXA6IDAuMjVyZW07XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MuY29sbGFwc2UsIC5tZW51LWxpbmtzLmV4cGFuZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcy5jb2xsYXBzZSB7XFxyXFxuICBhbmltYXRpb246IGNvbGxhcHNlIDUwMG1zIGN1YmljLWJlemllcigwLjM2LCAwLCAwLjY2LCAtMC41NikgYm90aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MuZXhwYW5kIHtcXHJcXG4gIGFuaW1hdGlvbjogZXhwYW5kIDUwMG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyA+IGEge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgPiBhOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweCAwIDAgMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyA+IGE6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDEwMDBweCAxMDAwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdG9nZ2xlLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaW1hZ2VzL2Nyb3NzLnN2ZycpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXHJcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXRvZ2dsZS1idXR0b24uZXhwYW5kIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogQWJvdXQgUGFnZSBTdHlsZXNcXHJcXG4gKi9cXHJcXG4gI2Fib3V0LXBhZ2Uge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDU2cHggKyAwLjI1cmVtKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtcGFnZSA+IC5oZWFkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYW5pbWF0aW9uOiAxMDAwbXMgZmFkZSBlYXNlLW91dCBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWF4LWhlaWdodDogNzUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYW5pbWF0aW9uOiAxMDAwbXMgZmFkZSBlYXNlLW91dCBib3RoIDEyNTBtcztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtcGFnZSA+IC5oZXJvIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgMjUwMG1zIGJvdGg7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogUHJvamVjdHMgUGFnZSBTdHlsZXNcXHJcXG4gKi9cXHJcXG4jcHJvamVjdHMtcGFnZSB7XFxyXFxuICBwYWRkaW5nOiAycmVtIDByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLXBhZ2UgPiAudGl0bGUtY29udGFpbmVyIHtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRyZW07XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cy1wYWdlID4gLnRpdGxlLWNvbnRhaW5lci5pbi12aWV3IHtcXHJcXG4gIGFuaW1hdGlvbjogZXhwYW5kIDc1MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdHMtcGFnZSA+IC50aXRsZS1jb250YWluZXIgPiAuZXh0ZW5kLWJhY2tncm91bmQge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM3NXB4LCAxZnIpKTtcXHJcXG4gIGdyaWQtYXV0by1yb3dzOiAzMDBweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICByb3ctZ2FwOiAyLjVyZW07XFxyXFxuICAvKiBTaGFkb3dzIHByb3ZpZGVkIGJ5IEpvc2ggQ29tZWF1IGF0OiBcXHJcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9zaGFkb3ctcGFsZXR0ZS8gKi9cXHJcXG4gIC0tc2hhZG93LWNvbG9yOiAxNTMsIDE1MSwgMTQxLCAwLjI1O1xcclxcbiAgLS1zaGFkb3c6XFxyXFxuICAgIDAuM3B4IDAuNXB4IDAuN3B4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSksXFxyXFxuICAgIDEuMXB4IDEuNnB4IDIuMnB4IC0wLjhweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxcclxcbiAgICAyLjdweCA0cHggNS40cHggLTEuN3B4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSksXFxyXFxuICAgIDYuNnB4IDkuOHB4IDEzLjNweCAtMi41cHggcmdiYSh2YXIoLS1zaGFkb3ctY29sb3IpKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcbiAgdHJhbnNpdGlvbjogNTAwbXMgdHJhbnNmb3JtO1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlIGxpbmVhciBib3RoO1xcclxcbiAgYW5pbWF0aW9uLXRpbWVsaW5lOiB2aWV3KCk7XFxyXFxuICBhbmltYXRpb24tcmFuZ2U6IDB2aCA1MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pbWFnZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0ID4gYSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGV0YWlscyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAwcmVtO1xcclxcbiAgYm90dG9tOiAwcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC4xNSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBDb250YWN0IFBhZ2UgU3R5bGVzXFxyXFxuICovXFxyXFxuI2NvbnRhY3QtcGFnZSB7XFxyXFxuICBwYWRkaW5nOiAycmVtIDByZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtcGFnZSA+IC50aXRsZS1jb250YWluZXIge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cmVtO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHJlbTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3QtcGFnZSAgPiAudGl0bGUtY29udGFpbmVyLmluLXZpZXcge1xcclxcbiAgYW5pbWF0aW9uOiBleHBhbmQgNzUwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXBhZ2UgPiAudGl0bGUtY29udGFpbmVyID4gLmV4dGVuZC1iYWNrZ3JvdW5kIHtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRyZW07XFxyXFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1wYWdlIC5oZXJvIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxyXFxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XFxyXFxuICB0cmFuc2l0aW9uOiAxMDBtcyBjb2xvciwgMTAwbXMgYmFja2dyb3VuZC1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Q6bGFzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWhvdmVyZWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTAwJSwgMCk7XFxyXFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcbiAgdHJhbnNpdGlvbjogMTUwbXMgdHJhbnNmb3JtIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdDpob3ZlciAuY29udGFjdC1ob3ZlcmVkIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTAwJSwgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogRm9vdGVyIHBhZ2Ugc3R5bGluZ1xcclxcbiAqL1xcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcXHJcXG4gIHBhZGRpbmc6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbGlzdC10aXRsZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1saXN0IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZXhwYW5kIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjb2xsYXBzZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApXFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZSB7XFxyXFxuICBmcm9tIHsgXFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3ViaGVhZGVye1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVybyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudGl0bGUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWJvdXQtcGFnZSB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiByZW0gM3JlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3ViaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZXJvIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgbmF2IHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtdG9nZ2xlLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzNHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtbGlua3MgPiBhIHtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjYWJvdXQtcGFnZSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDUwcHggKyAwLjEyNXJlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdCwgI2NvbnRhY3QtcGFnZSAuaGVybywgLmNvbnRhY3QtaG92ZXJlZCB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmF0dGxlc2hpcHMucG5nJztcclxuaW1wb3J0IFNvdW5kU2NyaWJlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc291bmRzY3JpYmUucG5nJztcclxuaW1wb3J0IFRpY1RhY1RvZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3RpY3RhY3RvZS5wbmcnO1xyXG5pbXBvcnQgV2VhdGhlck1hbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXJtYW4ucG5nJztcclxuaW1wb3J0IFl1bSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3l1bS5wbmcnO1xyXG5cclxuY29uc3QgY3JlYXRlSW1hZ2VFbGVtZW50ID0gKHNyYykgPT4ge1xyXG4gIGNvbnN0IGltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gIGltYWdlRWxlbWVudC5zcmMgPSBzcmM7XHJcbiAgcmV0dXJuIGltYWdlRWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgJ25hbWUnOiAnWXVtJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICdBIHNvY2lhbCBjdWxpbmFyeSBwbGF0Zm9ybSBmb3IgaG9tZSBjb29rcyBhbmQgcHJvZmVzc2lvbmFsIGNoZWZzJyxcclxuICAgICdsaW5rJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qYWNrZmFsZXMveXVtJyxcclxuICAgICdpbWcnOiBjcmVhdGVJbWFnZUVsZW1lbnQoWXVtKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ25hbWUnOiAnQmF0dGxlc2hpcHMnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0Egc2luZ2xlIHBsYXllciByZWNyZWF0aW9uIG9mIHRoZSBjbGFzc2ljIEJhdHRsZXNoaXAgZ2FtZScsXHJcbiAgICAnbGluayc6ICdodHRwczovL2dpdGh1Yi5jb20vZGF0ZGVyZWsvYmF0dGxlc2hpcC5naXQnLFxyXG4gICAgJ2ltZyc6IGNyZWF0ZUltYWdlRWxlbWVudChCYXR0bGVzaGlwKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ25hbWUnOiAnU291bmRTY3JpYmUnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0EgRGlzY29yZCBib3QgdGhhdCB0cmFuc2NyaWJlcyBhdWRpbyBpbiByZWFsLXRpbWUnLFxyXG4gICAgJ2xpbmsnOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhdGRlcmVrL1NvdW5kU2NyaWJlLmdpdCcsXHJcbiAgICAnaW1nJzogY3JlYXRlSW1hZ2VFbGVtZW50KFNvdW5kU2NyaWJlKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgJ25hbWUnOiAnV2VhdGhlck1hbicsXHJcbiAgICAnZGVzY3JpcHRpb24nOiAnQW5vdGhlciBvbmUgb2YgdGhvc2UgV2VhdGhlciBhcHBzLi4uIGJ1dCBtYWRlIGJ5IG1lJyxcclxuICAgICdsaW5rJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYXRkZXJlay93ZWF0aGVybWFuLmdpdCcsXHJcbiAgICAnaW1nJzogY3JlYXRlSW1hZ2VFbGVtZW50KFdlYXRoZXJNYW4pXHJcbiAgfSxcclxuICB7XHJcbiAgICAnbmFtZSc6ICdUaWMgVGFjIFRvZScsXHJcbiAgICAnZGVzY3JpcHRpb24nOiAnR2V0IHRocmVlIGluIGEgcm93IScsXHJcbiAgICAnbGluayc6ICdodHRwczovL2dpdGh1Yi5jb20vZGF0ZGVyZWsvb2RpbnByb2plY3QvdHJlZS9tYWluL3RpY3RhY3RvZScsXHJcbiAgICAnaW1nJzogY3JlYXRlSW1hZ2VFbGVtZW50KFRpY1RhY1RvZSlcclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcclxuICBzdGF0aWMgc3RhcnQoKSB7XHJcbiAgICB0aGlzLiNsb2FkUHJvamVjdHMoKTtcclxuICAgIHRoaXMuI2luaXRpYWxpemVPYnNlcnZlcigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljICNsb2FkUHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHByb2plY3RMaW5rV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgcHJvamVjdExpbmtXcmFwcGVyLmhyZWYgPSBwcm9qZWN0Lmxpbms7XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0SW1hZ2UgPSBwcm9qZWN0LmltZztcclxuICAgICAgcHJvamVjdEltYWdlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW1hZ2UnKTtcclxuICAgICBcclxuICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcHJvamVjdERldGFpbHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZXRhaWxzJyk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xyXG4gICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICAgIFxyXG4gICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcbiAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XHJcbiAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEltYWdlKTtcclxuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlua1dyYXBwZXIpO1xyXG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REZXRhaWxzKTtcclxuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljICNpbml0aWFsaXplT2JzZXJ2ZXIoKSB7XHJcbiAgICBjb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7XHJcbiAgICAgIHJvb3Q6IG51bGwsXHJcbiAgICAgIHRocmVzaG9sZDogMCxcclxuICAgICAgcm9vdE1hcmdpbjogJzBweCAyNSUgLTMzJSAyNSUnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2luLXZpZXcnKTtcclxuICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LCBvYnNlcnZlck9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aXRsZS1jb250YWluZXInKTtcclxuXHJcbiAgICB0aXRsZUNvbnRhaW5lcnMuZm9yRWFjaCgodGl0bGVDb250YWluZXIpID0+IHtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aXRsZUNvbnRhaW5lcik7XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGlvbkhhbmRsZXIge1xyXG4gIHN0YXRpYyBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlLWJ1dHRvbicpO1xyXG4gIHN0YXRpYyBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1saW5rcycpO1xyXG4gIFxyXG4gIHN0YXRpYyAjYXR0YWNoTGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLm1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kJyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5tZW51TGlua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmQnKSkge1xyXG4gICAgICAgIHRoaXMubWVudUxpbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZCcpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5tZW51TGlua3MuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5tZW51TGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcclxuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tZW51TGlua3MuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubWVudUxpbmtzLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdGFydCgpIHtcclxuICAgIEludGVyYWN0aW9uSGFuZGxlci4jYXR0YWNoTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgRGlzcGxheSBmcm9tICcuL21vZHVsZXMvRGlzcGxheS5qcyc7XHJcbmltcG9ydCBJbnRlcmFjdGlvbkhhbmRsZXIgZnJvbSAnLi9tb2R1bGVzL0ludGVyYWN0aW9uSGFuZGxlci5qcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBEaXNwbGF5LnN0YXJ0KCk7XHJcbiAgSW50ZXJhY3Rpb25IYW5kbGVyLnN0YXJ0KCk7XHJcbn0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==