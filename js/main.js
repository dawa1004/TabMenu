'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a'); //メニュー項目の取得
  const contents = document.querySelectorAll('.content'); //content取得

  //取得した要素一つ一つに対してイベントを設定する
  menuItems.forEach(clickedItem => { //要素の一つ一つはclickedItemという名前で受け取る
    clickedItem.addEventListener('click', e => { //クリックしたら次の処理
      e.preventDefault(); //a要素のページ遷移をキャンセル

      //activeクラスをつける処理の前に全てのmenuItemsからactiveクラスを外す
      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active'); //クリックしたitemに対してactiveクラスをつけてあげる
      contents.forEach(content => { //全ての要素をcontentという名前で受け取る
        content.classList.remove('active'); //activeクラスを外す
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
}