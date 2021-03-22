/*======================================
ページ内リンクのスムーススクロール
======================================*/
$(function(){
  $('a[href^="#"]').click(function(){

    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".ly_header").innerHeight(); 

    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");

    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);

  // ページのトップを基準にターゲットの位置を取得
    // let position = jQuery(target).offset().top;

  // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;

  // ターゲットの位置までspeedの速度で移動
  $( 'html,body' ).animate( {scrollTop:position} , 'slow' ) ;
  });
  return false;
});

/*======================================
ドロワーメニュー
======================================*/
$(function() {
  /*　toggleをクリックした時に */
 $('.js_drawer_toggle').on('click', function () {
  /* 下記のように記述することでopenクラスを付与 */
  $(this).toggleClass('open');
  $('.bl_gnav_list').toggleClass('open');
  $('.js_drawer_layer').toggleClass('open');
 });
});