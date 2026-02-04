// 서브메뉴 구현시 화살표 방향과 check 유무를 변경하는 JS 함수

// // 사이드바 서브메뉴 기본 닫힘
// function spread(count){
//     document.getElementById('folder-checkbox-' + count).checked = 
//     !document.getElementById('folder-checkbox-' + count).checked
//     document.getElementById('spread-icon-' + count).innerHTML = 
//     document.getElementById('spread-icon-' + count).innerHTML == 'arrow_right' ?
//     'arrow_drop_down' : 'arrow_right'
//   }

// 사이드바 서브메뉴 기본 열림
function spread(count){
    document.getElementById('folder-checkbox-' + count).checked =
    !document.getElementById('folder-checkbox-' + count).checked;
    document.getElementById('spread-icon-' + count).innerHTML =
    document.getElementById('spread-icon-' + count).innerHTML == 'arrow_drop_down' ?
    'arrow_right' : 'arrow_drop_down';
}