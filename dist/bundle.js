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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Barlow Semi Condensed';\n  src: url(./assets/fonts/BarlowSemiCondensed-Regular.ttf);\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Barlow Semi Condensed';\n  src: url(./assets/fonts/BarlowSemiCondensed-SemiBold.ttf);\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Barlow Semi Condensed';\n  src: url(./assets/fonts/BarlowSemiCondensed-Bold.ttf);\n  font-weight: bold;\n  font-style: normal;\n}\n\n:root {\n  scroll-behavior: smooth;\n  --cosmic-latte: #FFFBEB;\n  --giants-orange: #FF5A13;\n  --sky-blue: #13B8FF;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0; \n  font-size: inherit;\n  font-family:'Barlow Semi Condensed', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-weight: 600;\n  list-style-type: none;\n  text-decoration: none;\n  color: inherit;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--cosmic-latte);\n  overflow-x: hidden;\n}\n\n#about-page, #projects-page, #contact-page {\n  max-width: 1600px;\n  background-color: var(--cosmic-latte);\n  color: var(--giants-orange);\n}\n\n.header {\n  font-size: 6rem;\n  letter-spacing: -0.125rem;\n  font-weight: bold;\n  line-height: 1;\n  user-select: none;\n}\n\n.subheader {\n  font-size: 2.5rem;\n  user-select: none;\n}\n\n.hero {\n  font-size: 2rem;\n}\n\n.title-container {\n  position: relative;\n  max-width: max-content;\n  padding: 2rem 4rem;\n  background-color: var(--giants-orange);\n  color: var(--cosmic-latte);\n}\n\n.extend-background {\n  position: absolute;\n  height: 100%;\n  width: 100vw;\n  background-color: #FF5A13;\n}\n\n/*\n * Navbar Style\n */\nnav {\n  width: 100%;\n  height: 56px;\n  padding: 0.5rem 1rem;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n}\n\n.nav-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  color: var(--cosmic-latte);\n}\n\n.icon {\n  margin-right: auto;\n}\n\n.menu-links {\n  display: none;\n  height: 100%;\n  gap: 0.25rem;\n  transform-origin: right;\n}\n\n.menu-links.collapse, .menu-links.expand {\n  display: flex;\n}\n\n.menu-links.collapse {\n  animation: collapse 500ms cubic-bezier(0.36, 0, 0.66, -0.56) both;\n}\n\n.menu-links.expand {\n  animation: expand 500ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n\n.menu-links > a {\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--sky-blue);\n}\n\n.menu-links > a:first-child {\n  border-radius: 1000px 0 0 1000px;\n}\n\n.menu-links > a:last-child {\n  border-radius: 0 1000px 1000px 0;\n}\n\n.menu-toggle-button {\n  width: 40px;\n  margin-left: 1rem;\n  border-radius: 1000px;\n  border: none;\n  background-color: var(--sky-blue);\n  background-image: url('assets/images/cross.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 20px;\n  will-change: transform;\n  transition: transform 500ms ease-in-out;\n}\n\n.menu-toggle-button.expand {\n  transform: rotate(315deg);\n}\n\n/*\n * About Page Styles\n */\n #about-page {\n  height: 100vh;\n  padding: 2rem 4rem;\n  padding-top: calc(56px + 0.25rem);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  color: var(--giants-orange);\n}\n\n#about-page > .header {\n  text-align: center;\n  animation: 1000ms fade ease-out both;\n}\n\n.header-image-container {\n  flex: 1;\n  max-height: 750px;\n  width: 100%;\n  border-radius: 4rem;\n  overflow: hidden;\n  animation: 1000ms fade ease-out both 1250ms;\n  background-color: blue;\n}\n\n.header-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n#about-page > .hero {\n  text-align: center;\n  animation: 1000ms fade ease-out 2500ms both;\n}\n\n/*\n * Projects Page Styles\n */\n#projects-page {\n  padding: 2rem 0rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#projects-page > .title-container {\n  border-top-right-radius: 4rem;\n  border-bottom-right-radius: 4rem;\n  transform-origin: left;\n  transform: scaleX(0);\n}\n\n#projects-page > .title-container.in-view {\n  animation: expand 750ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n\n#projects-page > .title-container > .extend-background {\n  top: 0;\n  left: 0;\n  transform: translate(-100%, 0%);\n}\n\n.projects-container {\n  padding: 1rem 4rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));\n  grid-auto-rows: 300px;\n  column-gap: 2rem;\n  row-gap: 2.5rem;\n  /* Shadows provided by Josh Comeau at: \n  https://www.joshwcomeau.com/shadow-palette/ */\n  --shadow-color: 153, 151, 141, 0.25;\n  --shadow:\n    0.3px 0.5px 0.7px rgba(var(--shadow-color)),\n    1.1px 1.6px 2.2px -0.8px rgba(var(--shadow-color)),\n    2.7px 4px 5.4px -1.7px rgba(var(--shadow-color)),\n    6.6px 9.8px 13.3px -2.5px rgba(var(--shadow-color));\n}\n\n.project {\n  position: relative;\n  border-radius: 1rem;\n  box-shadow: var(--shadow);\n  background-color: white;\n  overflow: hidden;\n  will-change: transform;\n  transition: 500ms transform;\n  animation: fade linear both;\n  animation-timeline: view();\n  animation-range: 0vh 50vh;\n}\n\n.project:hover {\n  transform: scale(1.02);\n}\n\n.project-image {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0px;\n  top: 0px;\n  object-fit: cover;\n  object-position: center;\n  overflow: hidden;\n  opacity: 50%;\n}\n\n.project > a {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.project-details {\n  position: absolute;\n  left: 0rem;\n  bottom: 0rem;\n  width: 100%;\n  padding: 1rem;\n  color: black;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.15));\n}\n\n.project-name {\n  font-size: 1.25rem;\n}\n\n.project-description {\n  font-weight: normal;\n}\n\n/*\n * Contact Page Styles\n */\n#contact-page {\n  padding: 2rem 0rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n#contact-page > .title-container {\n  align-self: flex-end;\n  border-top-left-radius: 4rem;\n  border-bottom-left-radius: 4rem;\n  text-align: right;\n  transform-origin: right;\n  transform: scaleX(0);\n}\n\n#contact-page  > .title-container.in-view {\n  animation: expand 750ms cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n\n#contact-page > .title-container > .extend-background {\n  z-index: -1;\n  top: 0;\n  left: 0;\n  border-top-left-radius: 4rem;\n  border-bottom-left-radius: 4rem;\n}\n\n#contact-page .hero {\n  padding: 0.5rem 4rem;\n}\n\n.contact {\n  position: relative;\n  padding: 1rem 4rem;\n  border-top: 3px solid var(--giants-orange);\n  transition: 100ms color, 100ms background-color;\n}\n\n.contact:last-child {\n  border-bottom: 3px solid var(--giants-orange);\n}\n\n.contact-hovered {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 4rem;\n  color: var(--cosmic-latte);\n  background-color: var(--giants-orange);\n  transform: scale(100%, 0);\n  will-change: transform;\n  transition: 150ms transform ease-out;\n}\n\n.contact:hover .contact-hovered {\n  transform: scale(100%, 100%);\n}\n\n/*\n * Footer page styling\n */\nfooter {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  gap: 2rem;\n  background-color: var(--giants-orange);\n  color: var(--cosmic-latte);\n  padding: 4rem;\n}\n\n.footer-list-title {\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n}\n\n.footer-list a {\n  text-decoration: underline;\n}\n\n@keyframes expand {\n  from {\n    transform: scaleX(0);\n  }\n  \n  to {\n    transform: scaleX(1);\n  }\n}\n\n@keyframes collapse {\n  from {\n    transform: scaleX(1);\n  }\n\n  to {\n    transform: scaleX(0)\n  }\n}\n\n@keyframes fade {\n  from { \n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n@media (max-width: 1000px) {\n  .header {\n    font-size: 3rem;\n  }\n\n  .subheader{\n    font-size: 1.25rem;\n  }\n\n  .hero {\n    font-size: 1.125rem;\n  }\n\n  .title-container {\n    padding: 1.5rem 3rem;\n  }\n\n  #about-page {\n    padding: 2rem 2rem;\n  }\n\n  .projects-container {\n    padding: rem 3rem;\n  }\n}\n\n@media (max-width: 600px) {\n  .header {\n    font-size: 2rem;\n    letter-spacing: -0.05rem;\n  }\n\n  .subheader {\n    font-size: 1.125rem;\n  }\n\n  .hero {\n    font-size: 1rem;\n  }\n\n  .title-container {\n    padding: 0.5rem 1rem;\n  }\n\n  nav {\n    height: 50px;\n  }\n\n  .menu-toggle-button {\n    width: 34px;\n    margin-left: 0.5rem;\n  }\n\n  .menu-links > a {\n    width: 70px;\n  }\n\n  #about-page {\n    padding-top: calc(50px + 0.125rem);\n  }\n\n  .projects-container {\n    padding: 0.5rem 2rem;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    grid-auto-rows: 200px;\n    gap: 1rem;\n  }\n\n  .contact, #contact-page .hero, .contact-hovered {\n    padding: 0.5rem 2rem;\n  }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_images_cuppajoe_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/cuppajoe.png */ "./src/assets/images/cuppajoe.png");







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
    'name': 'Faux E-commerce App',
    'description': 'An e-commerce app to familiarize myself with the React framework',
    'link': 'https://github.com/datderek/ecommerce-app',
    'img': createImageElement(_assets_images_cuppajoe_png__WEBPACK_IMPORTED_MODULE_5__)
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
    'link': 'https://github.com/datderek/tictactoe',
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

module.exports = __webpack_require__.p + "c64afab406f3b652c7be.svg";

/***/ }),

/***/ "./src/assets/images/cuppajoe.png":
/*!****************************************!*\
  !*** ./src/assets/images/cuppajoe.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cfa121d1ec758cde192.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUtBQWlFO0FBQzdHLDRDQUE0QywyS0FBa0U7QUFDOUcsNENBQTRDLG1LQUE4RDtBQUMxRyw0Q0FBNEMsNkhBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssT0FBTyxhQUFhLFNBQVMsT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtB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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDc0I7QUFDc0I7O0FBRWpFO0FBQ0EsRUFBRSwyREFBTztBQUNULEVBQUUsc0VBQWtCO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9EaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9JbnRlcmFjdGlvbkhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvQmFybG93U2VtaUNvbmRlbnNlZC1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2ltYWdlcy9jcm9zcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46cm9vdCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAtLWNvc21pYy1sYXR0ZTogI0ZGRkJFQjtcbiAgLS1naWFudHMtb3JhbmdlOiAjRkY1QTEzO1xuICAtLXNreS1ibHVlOiAjMTNCOEZGO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwOyBcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LWZhbWlseTonQmFybG93IFNlbWkgQ29uZGVuc2VkJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4jYWJvdXQtcGFnZSwgI3Byb2plY3RzLXBhZ2UsICNjb250YWN0LXBhZ2Uge1xuICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcbiAgY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTI1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc3ViaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaGVybyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XG59XG5cbi5leHRlbmQtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjVBMTM7XG59XG5cbi8qXG4gKiBOYXZiYXIgU3R5bGVcbiAqL1xubmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm1lbnUtbGlua3Mge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdhcDogMC4yNXJlbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG59XG5cbi5tZW51LWxpbmtzLmNvbGxhcHNlLCAubWVudS1saW5rcy5leHBhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWVudS1saW5rcy5jb2xsYXBzZSB7XG4gIGFuaW1hdGlvbjogY29sbGFwc2UgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMzYsIDAsIDAuNjYsIC0wLjU2KSBib3RoO1xufVxuXG4ubWVudS1saW5rcy5leHBhbmQge1xuICBhbmltYXRpb246IGV4cGFuZCA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSkgYm90aDtcbn1cblxuLm1lbnUtbGlua3MgPiBhIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xufVxuXG4ubWVudS1saW5rcyA+IGE6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAxMDAwcHggMCAwIDEwMDBweDtcbn1cblxuLm1lbnUtbGlua3MgPiBhOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAwIDEwMDBweCAxMDAwcHggMDtcbn1cblxuLm1lbnUtdG9nZ2xlLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4ubWVudS10b2dnbGUtYnV0dG9uLmV4cGFuZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XG59XG5cbi8qXG4gKiBBYm91dCBQYWdlIFN0eWxlc1xuICovXG4gI2Fib3V0LXBhZ2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAycmVtIDRyZW07XG4gIHBhZGRpbmctdG9wOiBjYWxjKDU2cHggKyAwLjI1cmVtKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xufVxuXG4jYWJvdXQtcGFnZSA+IC5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgYm90aDtcbn1cblxuLmhlYWRlci1pbWFnZS1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBtYXgtaGVpZ2h0OiA3NTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgYm90aCAxMjUwbXM7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5oZWFkZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbiNhYm91dC1wYWdlID4gLmhlcm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgMjUwMG1zIGJvdGg7XG59XG5cbi8qXG4gKiBQcm9qZWN0cyBQYWdlIFN0eWxlc1xuICovXG4jcHJvamVjdHMtcGFnZSB7XG4gIHBhZGRpbmc6IDJyZW0gMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4jcHJvamVjdHMtcGFnZSA+IC50aXRsZS1jb250YWluZXIge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRyZW07XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xufVxuXG4jcHJvamVjdHMtcGFnZSA+IC50aXRsZS1jb250YWluZXIuaW4tdmlldyB7XG4gIGFuaW1hdGlvbjogZXhwYW5kIDc1MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoO1xufVxuXG4jcHJvamVjdHMtcGFnZSA+IC50aXRsZS1jb250YWluZXIgPiAuZXh0ZW5kLWJhY2tncm91bmQge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XG59XG5cbi5wcm9qZWN0cy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtIDRyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM3NXB4LCAxZnIpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDMwMHB4O1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICByb3ctZ2FwOiAyLjVyZW07XG4gIC8qIFNoYWRvd3MgcHJvdmlkZWQgYnkgSm9zaCBDb21lYXUgYXQ6IFxuICBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vc2hhZG93LXBhbGV0dGUvICovXG4gIC0tc2hhZG93LWNvbG9yOiAxNTMsIDE1MSwgMTQxLCAwLjI1O1xuICAtLXNoYWRvdzpcbiAgICAwLjNweCAwLjVweCAwLjdweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxuICAgIDEuMXB4IDEuNnB4IDIuMnB4IC0wLjhweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxuICAgIDIuN3B4IDRweCA1LjRweCAtMS43cHggcmdiYSh2YXIoLS1zaGFkb3ctY29sb3IpKSxcbiAgICA2LjZweCA5LjhweCAxMy4zcHggLTIuNXB4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSk7XG59XG5cbi5wcm9qZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbjogNTAwbXMgdHJhbnNmb3JtO1xuICBhbmltYXRpb246IGZhZGUgbGluZWFyIGJvdGg7XG4gIGFuaW1hdGlvbi10aW1lbGluZTogdmlldygpO1xuICBhbmltYXRpb24tcmFuZ2U6IDB2aCA1MHZoO1xufVxuXG4ucHJvamVjdDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG59XG5cbi5wcm9qZWN0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDUwJTtcbn1cblxuLnByb2plY3QgPiBhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcmVtO1xuICBib3R0b206IDByZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDAuMTUpKTtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vKlxuICogQ29udGFjdCBQYWdlIFN0eWxlc1xuICovXG4jY29udGFjdC1wYWdlIHtcbiAgcGFkZGluZzogMnJlbSAwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG59XG5cbiNjb250YWN0LXBhZ2UgPiAudGl0bGUtY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG59XG5cbiNjb250YWN0LXBhZ2UgID4gLnRpdGxlLWNvbnRhaW5lci5pbi12aWV3IHtcbiAgYW5pbWF0aW9uOiBleHBhbmQgNzUwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGg7XG59XG5cbiNjb250YWN0LXBhZ2UgPiAudGl0bGUtY29udGFpbmVyID4gLmV4dGVuZC1iYWNrZ3JvdW5kIHtcbiAgei1pbmRleDogLTE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHJlbTtcbn1cblxuI2NvbnRhY3QtcGFnZSAuaGVybyB7XG4gIHBhZGRpbmc6IDAuNXJlbSA0cmVtO1xufVxuXG4uY29udGFjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XG4gIHRyYW5zaXRpb246IDEwMG1zIGNvbG9yLCAxMDBtcyBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uY29udGFjdDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWdpYW50cy1vcmFuZ2UpO1xufVxuXG4uY29udGFjdC1ob3ZlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gNHJlbTtcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEwMCUsIDApO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uOiAxNTBtcyB0cmFuc2Zvcm0gZWFzZS1vdXQ7XG59XG5cbi5jb250YWN0OmhvdmVyIC5jb250YWN0LWhvdmVyZWQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEwMCUsIDEwMCUpO1xufVxuXG4vKlxuICogRm9vdGVyIHBhZ2Ugc3R5bGluZ1xuICovXG5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XG4gIHBhZGRpbmc6IDRyZW07XG59XG5cbi5mb290ZXItbGlzdC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG5cbi5mb290ZXItbGlzdCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbkBrZXlmcmFtZXMgZXhwYW5kIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNvbGxhcHNlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMClcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHsgXG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5cbiAgLnN1YmhlYWRlcntcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAuaGVybyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxuXG4gIC50aXRsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xuICB9XG5cbiAgI2Fib3V0LXBhZ2Uge1xuICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcbiAgfVxuXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IHJlbSAzcmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xuICB9XG5cbiAgLnN1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxuXG4gIC5oZXJvIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAudGl0bGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgfVxuXG4gIG5hdiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLm1lbnUtdG9nZ2xlLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgfVxuXG4gIC5tZW51LWxpbmtzID4gYSB7XG4gICAgd2lkdGg6IDcwcHg7XG4gIH1cblxuICAjYWJvdXQtcGFnZSB7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoNTBweCArIDAuMTI1cmVtKTtcbiAgfVxuXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBncmlkLWF1dG8tcm93czogMjAwcHg7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5cbiAgLmNvbnRhY3QsICNjb250YWN0LXBhZ2UgLmhlcm8sIC5jb250YWN0LWhvdmVyZWQge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUF5RDtFQUN6RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUFxRDtFQUNyRCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFD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QjtFQUN6QixzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsc0NBQXNDO0VBQ3RDLDBCQUEwQjtFQUMxQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsNERBQTREO0lBQzVELHFCQUFxQjtJQUNyQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJztcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtUmVndWxhci50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0JhcmxvdyBTZW1pIENvbmRlbnNlZCc7XFxuICBzcmM6IHVybCguL2Fzc2V0cy9mb250cy9CYXJsb3dTZW1pQ29uZGVuc2VkLVNlbWlCb2xkLnR0Zik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQmFybG93IFNlbWkgQ29uZGVuc2VkJztcXG4gIHNyYzogdXJsKC4vYXNzZXRzL2ZvbnRzL0Jhcmxvd1NlbWlDb25kZW5zZWQtQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgLS1jb3NtaWMtbGF0dGU6ICNGRkZCRUI7XFxuICAtLWdpYW50cy1vcmFuZ2U6ICNGRjVBMTM7XFxuICAtLXNreS1ibHVlOiAjMTNCOEZGO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyBcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OidCYXJsb3cgU2VtaSBDb25kZW5zZWQnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jYWJvdXQtcGFnZSwgI3Byb2plY3RzLXBhZ2UsICNjb250YWN0LXBhZ2Uge1xcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcbiAgY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xMjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zdWJoZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcXG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcbn1cXG5cXG4uZXh0ZW5kLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNUExMztcXG59XFxuXFxuLypcXG4gKiBOYXZiYXIgU3R5bGVcXG4gKi9cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB2YXIoLS1jb3NtaWMtbGF0dGUpO1xcbn1cXG5cXG4uaWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5tZW51LWxpbmtzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBnYXA6IDAuMjVyZW07XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG59XFxuXFxuLm1lbnUtbGlua3MuY29sbGFwc2UsIC5tZW51LWxpbmtzLmV4cGFuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWVudS1saW5rcy5jb2xsYXBzZSB7XFxuICBhbmltYXRpb246IGNvbGxhcHNlIDUwMG1zIGN1YmljLWJlemllcigwLjM2LCAwLCAwLjY2LCAtMC41NikgYm90aDtcXG59XFxuXFxuLm1lbnUtbGlua3MuZXhwYW5kIHtcXG4gIGFuaW1hdGlvbjogZXhwYW5kIDUwMG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoO1xcbn1cXG5cXG4ubWVudS1saW5rcyA+IGEge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuLm1lbnUtbGlua3MgPiBhOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweCAwIDAgMTAwMHB4O1xcbn1cXG5cXG4ubWVudS1saW5rcyA+IGE6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiAwIDEwMDBweCAxMDAwcHggMDtcXG59XFxuXFxuLm1lbnUtdG9nZ2xlLWJ1dHRvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaW1hZ2VzL2Nyb3NzLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjBweDtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LXRvZ2dsZS1idXR0b24uZXhwYW5kIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XFxufVxcblxcbi8qXFxuICogQWJvdXQgUGFnZSBTdHlsZXNcXG4gKi9cXG4gI2Fib3V0LXBhZ2Uge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gIHBhZGRpbmctdG9wOiBjYWxjKDU2cHggKyAwLjI1cmVtKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgY29sb3I6IHZhcigtLWdpYW50cy1vcmFuZ2UpO1xcbn1cXG5cXG4jYWJvdXQtcGFnZSA+IC5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYW5pbWF0aW9uOiAxMDAwbXMgZmFkZSBlYXNlLW91dCBib3RoO1xcbn1cXG5cXG4uaGVhZGVyLWltYWdlLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgbWF4LWhlaWdodDogNzUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYW5pbWF0aW9uOiAxMDAwbXMgZmFkZSBlYXNlLW91dCBib3RoIDEyNTBtcztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5oZWFkZXItaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4jYWJvdXQtcGFnZSA+IC5oZXJvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFuaW1hdGlvbjogMTAwMG1zIGZhZGUgZWFzZS1vdXQgMjUwMG1zIGJvdGg7XFxufVxcblxcbi8qXFxuICogUHJvamVjdHMgUGFnZSBTdHlsZXNcXG4gKi9cXG4jcHJvamVjdHMtcGFnZSB7XFxuICBwYWRkaW5nOiAycmVtIDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3RzLXBhZ2UgPiAudGl0bGUtY29udGFpbmVyIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRyZW07XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxufVxcblxcbiNwcm9qZWN0cy1wYWdlID4gLnRpdGxlLWNvbnRhaW5lci5pbi12aWV3IHtcXG4gIGFuaW1hdGlvbjogZXhwYW5kIDc1MG1zIGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKSBib3RoO1xcbn1cXG5cXG4jcHJvamVjdHMtcGFnZSA+IC50aXRsZS1jb250YWluZXIgPiAuZXh0ZW5kLWJhY2tncm91bmQge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAwJSk7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM3NXB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiAzMDBweDtcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxuICByb3ctZ2FwOiAyLjVyZW07XFxuICAvKiBTaGFkb3dzIHByb3ZpZGVkIGJ5IEpvc2ggQ29tZWF1IGF0OiBcXG4gIGh0dHBzOi8vd3d3Lmpvc2h3Y29tZWF1LmNvbS9zaGFkb3ctcGFsZXR0ZS8gKi9cXG4gIC0tc2hhZG93LWNvbG9yOiAxNTMsIDE1MSwgMTQxLCAwLjI1O1xcbiAgLS1zaGFkb3c6XFxuICAgIDAuM3B4IDAuNXB4IDAuN3B4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSksXFxuICAgIDEuMXB4IDEuNnB4IDIuMnB4IC0wLjhweCByZ2JhKHZhcigtLXNoYWRvdy1jb2xvcikpLFxcbiAgICAyLjdweCA0cHggNS40cHggLTEuN3B4IHJnYmEodmFyKC0tc2hhZG93LWNvbG9yKSksXFxuICAgIDYuNnB4IDkuOHB4IDEzLjNweCAtMi41cHggcmdiYSh2YXIoLS1zaGFkb3ctY29sb3IpKTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogNTAwbXMgdHJhbnNmb3JtO1xcbiAgYW5pbWF0aW9uOiBmYWRlIGxpbmVhciBib3RoO1xcbiAgYW5pbWF0aW9uLXRpbWVsaW5lOiB2aWV3KCk7XFxuICBhbmltYXRpb24tcmFuZ2U6IDB2aCA1MHZoO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbn1cXG5cXG4ucHJvamVjdC1pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5wcm9qZWN0ID4gYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwcmVtO1xcbiAgYm90dG9tOiAwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHJnYmEoMCwwLDAsMC4xNSkpO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLypcXG4gKiBDb250YWN0IFBhZ2UgU3R5bGVzXFxuICovXFxuI2NvbnRhY3QtcGFnZSB7XFxuICBwYWRkaW5nOiAycmVtIDByZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI2NvbnRhY3QtcGFnZSA+IC50aXRsZS1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG59XFxuXFxuI2NvbnRhY3QtcGFnZSAgPiAudGl0bGUtY29udGFpbmVyLmluLXZpZXcge1xcbiAgYW5pbWF0aW9uOiBleHBhbmQgNzUwbXMgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpIGJvdGg7XFxufVxcblxcbiNjb250YWN0LXBhZ2UgPiAudGl0bGUtY29udGFpbmVyID4gLmV4dGVuZC1iYWNrZ3JvdW5kIHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRyZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cmVtO1xcbn1cXG5cXG4jY29udGFjdC1wYWdlIC5oZXJvIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSA0cmVtO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxcmVtIDRyZW07XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XFxuICB0cmFuc2l0aW9uOiAxMDBtcyBjb2xvciwgMTAwbXMgYmFja2dyb3VuZC1jb2xvcjtcXG59XFxuXFxuLmNvbnRhY3Q6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XFxufVxcblxcbi5jb250YWN0LWhvdmVyZWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSA0cmVtO1xcbiAgY29sb3I6IHZhcigtLWNvc21pYy1sYXR0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1naWFudHMtb3JhbmdlKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTAwJSwgMCk7XFxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbjogMTUwbXMgdHJhbnNmb3JtIGVhc2Utb3V0O1xcbn1cXG5cXG4uY29udGFjdDpob3ZlciAuY29udGFjdC1ob3ZlcmVkIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTAwJSwgMTAwJSk7XFxufVxcblxcbi8qXFxuICogRm9vdGVyIHBhZ2Ugc3R5bGluZ1xcbiAqL1xcbmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ2lhbnRzLW9yYW5nZSk7XFxuICBjb2xvcjogdmFyKC0tY29zbWljLWxhdHRlKTtcXG4gIHBhZGRpbmc6IDRyZW07XFxufVxcblxcbi5mb290ZXItbGlzdC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLmZvb3Rlci1saXN0IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbkBrZXlmcmFtZXMgZXhwYW5kIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIH1cXG4gIFxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjb2xsYXBzZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApXFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZSB7XFxuICBmcm9tIHsgXFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuXFxuICAuc3ViaGVhZGVye1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICB9XFxuXFxuICAuaGVybyB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICB9XFxuXFxuICAudGl0bGUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtIDNyZW07XFxuICB9XFxuXFxuICAjYWJvdXQtcGFnZSB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMnJlbTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiByZW0gM3JlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XFxuICB9XFxuXFxuICAuc3ViaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIH1cXG5cXG4gIC5oZXJvIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLnRpdGxlLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgfVxcblxcbiAgLm1lbnUtdG9nZ2xlLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAzNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLm1lbnUtbGlua3MgPiBhIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICB9XFxuXFxuICAjYWJvdXQtcGFnZSB7XFxuICAgIHBhZGRpbmctdG9wOiBjYWxjKDUwcHggKyAwLjEyNXJlbSk7XFxuICB9XFxuXFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDIwMHB4O1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxuXFxuICAuY29udGFjdCwgI2NvbnRhY3QtcGFnZSAuaGVybywgLmNvbnRhY3QtaG92ZXJlZCB7XFxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYmF0dGxlc2hpcHMucG5nJztcbmltcG9ydCBTb3VuZFNjcmliZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3NvdW5kc2NyaWJlLnBuZyc7XG5pbXBvcnQgVGljVGFjVG9lIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvdGljdGFjdG9lLnBuZyc7XG5pbXBvcnQgV2VhdGhlck1hbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXJtYW4ucG5nJztcbmltcG9ydCBZdW0gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy95dW0ucG5nJztcbmltcG9ydCBDdXBwYUpvZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2N1cHBham9lLnBuZyc7XG5cbmNvbnN0IGNyZWF0ZUltYWdlRWxlbWVudCA9IChzcmMpID0+IHtcbiAgY29uc3QgaW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XG4gIGltYWdlRWxlbWVudC5zcmMgPSBzcmM7XG4gIHJldHVybiBpbWFnZUVsZW1lbnQ7XG59XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgJ25hbWUnOiAnWXVtJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnQSBzb2NpYWwgY3VsaW5hcnkgcGxhdGZvcm0gZm9yIGhvbWUgY29va3MgYW5kIHByb2Zlc3Npb25hbCBjaGVmcycsXG4gICAgJ2xpbmsnOiAnaHR0cHM6Ly9naXRodWIuY29tL2phY2tmYWxlcy95dW0nLFxuICAgICdpbWcnOiBjcmVhdGVJbWFnZUVsZW1lbnQoWXVtKVxuICB9LFxuICB7XG4gICAgJ25hbWUnOiAnRmF1eCBFLWNvbW1lcmNlIEFwcCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0FuIGUtY29tbWVyY2UgYXBwIHRvIGZhbWlsaWFyaXplIG15c2VsZiB3aXRoIHRoZSBSZWFjdCBmcmFtZXdvcmsnLFxuICAgICdsaW5rJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYXRkZXJlay9lY29tbWVyY2UtYXBwJyxcbiAgICAnaW1nJzogY3JlYXRlSW1hZ2VFbGVtZW50KEN1cHBhSm9lKVxuICB9LFxuICB7XG4gICAgJ25hbWUnOiAnQmF0dGxlc2hpcHMnLFxuICAgICdkZXNjcmlwdGlvbic6ICdBIHNpbmdsZSBwbGF5ZXIgcmVjcmVhdGlvbiBvZiB0aGUgY2xhc3NpYyBCYXR0bGVzaGlwIGdhbWUnLFxuICAgICdsaW5rJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYXRkZXJlay9iYXR0bGVzaGlwLmdpdCcsXG4gICAgJ2ltZyc6IGNyZWF0ZUltYWdlRWxlbWVudChCYXR0bGVzaGlwKVxuICB9LFxuICB7XG4gICAgJ25hbWUnOiAnU291bmRTY3JpYmUnLFxuICAgICdkZXNjcmlwdGlvbic6ICdBIERpc2NvcmQgYm90IHRoYXQgdHJhbnNjcmliZXMgYXVkaW8gaW4gcmVhbC10aW1lJyxcbiAgICAnbGluayc6ICdodHRwczovL2dpdGh1Yi5jb20vZGF0ZGVyZWsvU291bmRTY3JpYmUuZ2l0JyxcbiAgICAnaW1nJzogY3JlYXRlSW1hZ2VFbGVtZW50KFNvdW5kU2NyaWJlKVxuICB9LFxuICB7XG4gICAgJ25hbWUnOiAnV2VhdGhlck1hbicsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0Fub3RoZXIgb25lIG9mIHRob3NlIFdlYXRoZXIgYXBwcy4uLiBidXQgbWFkZSBieSBtZScsXG4gICAgJ2xpbmsnOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhdGRlcmVrL3dlYXRoZXJtYW4uZ2l0JyxcbiAgICAnaW1nJzogY3JlYXRlSW1hZ2VFbGVtZW50KFdlYXRoZXJNYW4pXG4gIH0sXG4gIHtcbiAgICAnbmFtZSc6ICdUaWMgVGFjIFRvZScsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ0dldCB0aHJlZSBpbiBhIHJvdyEnLFxuICAgICdsaW5rJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYXRkZXJlay90aWN0YWN0b2UnLFxuICAgICdpbWcnOiBjcmVhdGVJbWFnZUVsZW1lbnQoVGljVGFjVG9lKVxuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5IHtcbiAgc3RhdGljIHN0YXJ0KCkge1xuICAgIHRoaXMuI2xvYWRQcm9qZWN0cygpO1xuICAgIHRoaXMuI2luaXRpYWxpemVPYnNlcnZlcigpO1xuICB9XG5cbiAgc3RhdGljICNsb2FkUHJvamVjdHMoKSB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgXG4gICAgICBjb25zdCBwcm9qZWN0TGlua1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBwcm9qZWN0TGlua1dyYXBwZXIuaHJlZiA9IHByb2plY3QubGluaztcblxuICAgICAgY29uc3QgcHJvamVjdEltYWdlID0gcHJvamVjdC5pbWc7XG4gICAgICBwcm9qZWN0SW1hZ2UuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pbWFnZScpO1xuICAgICBcbiAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwcm9qZWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRldGFpbHMnKTtcbiAgICAgIFxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIFxuICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgIHByb2plY3REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICBwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgICAgXG4gICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SW1hZ2UpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlua1dyYXBwZXIpO1xuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGV0YWlscyk7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljICNpbml0aWFsaXplT2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXJPcHRpb25zID0ge1xuICAgICAgcm9vdDogbnVsbCxcbiAgICAgIHRocmVzaG9sZDogMCxcbiAgICAgIHJvb3RNYXJnaW46ICcwcHggMjUlIC0zMyUgMjUlJ1xuICAgIH07XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbi12aWV3Jyk7XG4gICAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIG9ic2VydmVyT3B0aW9ucyk7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGl0bGUtY29udGFpbmVyJyk7XG5cbiAgICB0aXRsZUNvbnRhaW5lcnMuZm9yRWFjaCgodGl0bGVDb250YWluZXIpID0+IHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUodGl0bGVDb250YWluZXIpO1xuICAgIH0pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aW9uSGFuZGxlciB7XG4gIHN0YXRpYyBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdG9nZ2xlLWJ1dHRvbicpO1xuICBzdGF0aWMgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtbGlua3MnKTtcbiAgXG4gIHN0YXRpYyAjYXR0YWNoTGlzdGVuZXJzKCkge1xuICAgIHRoaXMubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMubWVudUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmQnKTtcblxuICAgICAgaWYgKHRoaXMubWVudUxpbmtzLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kJykpIHtcbiAgICAgICAgdGhpcy5tZW51TGlua3MuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kJyk7XG4gICAgXG4gICAgICAgIHRoaXMubWVudUxpbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1lbnVMaW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm1lbnVMaW5rcy5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1lbnVMaW5rcy5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBzdGFydCgpIHtcbiAgICBJbnRlcmFjdGlvbkhhbmRsZXIuI2F0dGFjaExpc3RlbmVycygpO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IERpc3BsYXkgZnJvbSAnLi9tb2R1bGVzL0Rpc3BsYXkuanMnO1xuaW1wb3J0IEludGVyYWN0aW9uSGFuZGxlciBmcm9tICcuL21vZHVsZXMvSW50ZXJhY3Rpb25IYW5kbGVyLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIERpc3BsYXkuc3RhcnQoKTtcbiAgSW50ZXJhY3Rpb25IYW5kbGVyLnN0YXJ0KCk7XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9