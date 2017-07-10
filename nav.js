var cartCount = 0

Vue.component('nav-item', {
  props: ['nav'],
  template: '<div>{{ nav.text }}</div>'
})
var nav = new Vue({
  el: 'nav',
  data: {
    cartCount:8,
    styleObject: {
      backgroundColor: 'rgba(30,30,30,1)',
      fontSize: '16px',
      margin:'0',
    },
    navPages: [
      { id: 0, text: 'Book' },
      { id: 1, text: 'Posters' },
      { id: 2, text: 'Cart(' + cartCount + ')' }
    ],
    classNames: "nav-item"
  }
})
