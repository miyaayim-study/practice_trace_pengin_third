// Swiper読み込み
import Swiper, { EffectFade, Pagination, Autoplay } from 'swiper'; // Swiper本体と最低限必要なモジュールの読み込み（データ量削減の為）
// import Swiper from 'swiper/bundle'; // Swiper本体と全機能

// SwiperのCSS読み込み
// import 'swiper/css/swiper.min.css'; // Swiperの最小限のCSSファイル
// import 'swiper/css'; // Swiperの全体のCSSファイル（全機能含まない）
import 'swiper/swiper-bundle.css'; // Swiperの全体のCSSファイル（全機能を含む）
// import 'swiper/css/pagination'; // ページネーション機能部分のみ

const options = {
  modules: [EffectFade, Pagination, Autoplay],
  loop: true, // スライドの繰り返し
  spaceBetween: 8, // スライド間の距離(px)
  speed: 1000, // スライド切り替え時の推移時間(ms)
  effect: 'fade', // スライド切り替え時のエフェクト
  // ページネーション
  pagination: {
    el: '.swiper-pagination', // ページネーションのセレクタを使用（必須）
    clickable: true, // クリックでのスライド切り替え
    type: 'bullets', // 表示タイプ → bullets:スライド枚数と同じ数のドット表示
  },
  // 自動再生
  autoplay: {
    delay: 5000, // スライド切り替え間隔(ms)
    disableOnInteraction: true, // ユーザーがスライド操作時に自動再生オフ
  },
};

const swiper = new Swiper('.swiper', options);

export default swiper;
