const menuButton = () => {
  const button = document.querySelector('.js-menuButton');
  const menu = document.querySelector('.js-menu');
  const headerLogo = document.querySelector('.js-headerLogo');
  const coverBgHeight = document.querySelector('.js-coverBg').offsetHeight; // 要素の高さを含む、上下のパディングやボーダーを含んだ高さを取得（offsetHeight）
  const coverImgHeight = document.querySelector('.js-coverImg').offsetHeight;

  let isMenuOpened = true; // メニュー開閉状態のフラグ

  // スクロール操作のイベント定義、preventDefault() メソッドはイベントの既定の動作をキャンセルするために使用される
  const handle = (event) => {
    event.preventDefault();
  };

  button.addEventListener('click', () => {
    button.classList.toggle('is-open');
    menu.classList.toggle('is-open');
    // カバー黒背景以外だとボタン色をもとに戻す
    if (window.pageYOffset > coverBgHeight - 40) { // 垂直方向スクロール量がカバー背景高さ以上にだった場合
      button.classList.toggle('is-black');
    }

    // スクロール操作の記述
    if (isMenuOpened) { // フラグの状態を見て実行動作を判断
      document.addEventListener('touchmove', handle, { passive: false }); // タッチ操作でのスクロール無効化
      document.addEventListener('mousewheel', handle, { passive: false }); // マウスホイール操作でのスクロール無効化
    } else {
      document.removeEventListener('touchmove', handle); // タッチ操作でのスクロール有効化
      document.removeEventListener('mousewheel', handle); // マウスホイール操作でのスクロール有効化
    }

    isMenuOpened = !isMenuOpened; // isMenuOpenedの値を反転させる
  });

  window.addEventListener('resize', () => {
    button.classList.remove('is-open');
    menu.classList.remove('is-open');
    if (window.pageYOffset > coverBgHeight - 40) { // 垂直方向スクロール量がカバー背景高さ以上にだった場合
      button.classList.add('is-black');
    }
    // スクロール操作を有効化
    document.removeEventListener('touchmove', handle);
    document.removeEventListener('mousewheel', handle);
    isMenuOpened = true; // スクロール操作有効中のフラグにする
  });

  window.addEventListener('load', () => { // 読み込みが完了して要素の高さが判明してから高さを取得するようにしている
    // 更新ボタン押した時に白くならないようにするための記述
    if (window.pageYOffset > coverBgHeight - 40) { // 垂直方向スクロール量がカバー背景高さ以上になったとき
      button.classList.add('is-black'); // メニューボタンにクラス付与
    }
    if (window.pageYOffset > coverImgHeight - 40) { // 垂直方向スクロール量がカバー背景高さ以上になったとき
      headerLogo.classList.add('is-black'); // ヘッダーロゴにクラス付与
    }
    // スクロール操作したときの記述
    window.addEventListener('scroll', () => { // スクロールしたときに実行

      // メニュー開閉関係なく実行
      if (window.pageYOffset > coverImgHeight - 40) { // 垂直方向スクロール量がカバー背景高さ以上になったとき
        headerLogo.classList.add('is-black'); // ヘッダーロゴにクラス付与
      } else {
        headerLogo.classList.remove('is-black'); // ヘッダーロゴにクラス削除
      }

      if (isMenuOpened) { // メニューが開いていなければ実行
        if (window.pageYOffset > coverBgHeight - 40) { // 垂直方向スクロール量がカバー背景高さ以上になったとき
          button.classList.add('is-black'); // メニューボタンにクラス付与
        } else {
          button.classList.remove('is-black'); // メニューボタンにクラス削除
        }

      }
    });
  });
};

export default menuButton;
