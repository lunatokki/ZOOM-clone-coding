document.addEventListener("DOMContentLoaded", function () {
  var languageSelector = document.querySelector(".language");
  var menu = document.querySelector(".menu");

  // Hide menu when clicking outside
  document.addEventListener("click", function (event) {
      if (!languageSelector.contains(event.target)) {
          menu.style.display = "none"; // 클릭한 요소가 languageSelector가 아니면 메뉴를 숨김
      }
  });

  // Show menu when languageSelector is clicked
  languageSelector.addEventListener("click", function (event) {
      menu.style.display = (menu.style.display === "none") ? "block" : "none"; // 메뉴의 표시 여부를 토글
      event.stopPropagation(); // 이벤트 버블링 방지
  });
});