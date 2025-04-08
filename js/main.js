/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_loaded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loaded */ "./src/js/components/loaded.js");
/* harmony import */ var _components_loaded__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_loaded__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/components/loaded.js":
/*!*************************************!*\
  !*** ./src/js/components/loaded.js ***!
  \*************************************/
/***/ (() => {

const animItems = document.querySelectorAll('.animate');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;

      // Условие: элемент должен быть полностью в зоне видимости
      const animItemPoint = window.innerHeight - animItemHeight;
      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('loaded');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('loaded');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");

window.addEventListener("load", function () {
  if (document.querySelector('.wrapper')) {
    setTimeout(function () {
      document.querySelector('.wrapper').classList.add('_loaded');
    }, 0);
  }
});
let iconMenus = document.querySelectorAll(".icon-menu");
let menuBodies = document.querySelectorAll(".menu__body");
let menuLinks = document.querySelectorAll(".menu__link");
let unlock = true;
let delay = 500;
if (iconMenus.length > 0) {
  iconMenus.forEach((iconMenu, index) => {
    iconMenu.addEventListener("click", function (e) {
      if (unlock) {
        body_lock(delay);
        iconMenu.classList.toggle("_active");
        menuBodies[index].classList.toggle("_active");
      }
    });
  });
}
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function (e) {
      e.preventDefault();
      let targetId = menuLink.getAttribute("href").substring(1);
      let targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
      menu_close();
      body_lock_remove(delay);
    });
  });
}
function menu_close() {
  iconMenus.forEach((iconMenu, index) => {
    iconMenu.classList.remove("_active");
    menuBodies[index].classList.remove("_active");
  });
}

//=================
//BodyLock
function body_lock(delay) {
  let body = document.querySelector("body");
  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}
function body_lock_remove(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    setTimeout(() => {
      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, delay);
  }
}
function body_lock_add(delay) {
  let body = document.querySelector("body");
  if (unlock) {
    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add("_lock");
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, delay);
  }
}
function fitTextToContainer() {
  const container = document.querySelector('.hero__main');
  const text = container.querySelector('.hero__title');
  if (!container || !text) {
    console.warn("Элемент контейнера или текста не найден!");
    return;
  }
  let fontSize = 100; // Начальный размер шрифта
  text.style.fontSize = `${fontSize}px`;

  // Уменьшаем шрифт, пока текст не впишется в ширину контейнера
  while (text.scrollWidth > container.clientWidth && fontSize > 8) {
    fontSize -= 1;
    text.style.fontSize = `${fontSize}px`;
  }
}

// Запускаем функцию при загрузке и изменении размера окна
window.addEventListener('resize', fitTextToContainer);
fitTextToContainer();
function loadLanguage(lang) {
  fetch(`lang/${lang}.json`).then(res => res.json()).then(data => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(data, key);
      if (value) {
        el.innerHTML = value;
      }
    });
    localStorage.setItem('lang', lang);
    fitTextToContainer();
  });
}
function initDropdowns() {
  const dropdown = document.querySelector(".language-select");
  if (!dropdown) return;
  const dropdownButton = dropdown.querySelector(".language-select__btn");
  const dropdownItems = dropdown.querySelectorAll(".language-select__option");
  const dropdownTitle = dropdown.querySelector(".language-select__title");
  function toggleDropdown() {
    dropdown.classList.toggle("show");
  }
  function selectItem(event) {
    const selectedLang = event.target.getAttribute('data-btn');
    dropdownTitle.textContent = event.target.textContent;
    dropdown.classList.remove("show");
    loadLanguage(selectedLang);
  }
  function closeDropdown(event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  }
  dropdownButton.addEventListener("click", toggleDropdown);
  dropdownItems.forEach(item => item.addEventListener("click", selectItem));
  document.addEventListener("click", closeDropdown);

  // загрузка языка при старте
  const savedLang = localStorage.getItem('lang') || 'en';
  const activeItem = [...dropdownItems].find(item => item.getAttribute('data-btn') === savedLang);
  if (activeItem) {
    dropdownTitle.textContent = activeItem.textContent;
  }
  loadLanguage(savedLang);
}
function getNestedValue(obj, path) {
  return path.split('.').reduce((o, key) => o ? o[key] : null, obj);
}
initDropdowns();
})();

/******/ })()
;