// ーーーーーーーーーーーーーーーCH１ 導入ーーーーーーーーーーーーーーー
// テキストバインディング
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

// リスト作成
var item = new Vue({
  el: '#ol',
  data: {
    list: ['リンゴ', 'ばなな', 'いちご']
  }
})

// アラーム出現
var btn = new Vue({
  el: '#btn',
  methods: {
    handleClick: function(event){
      alert(event.target)
    }
  }
})

// フォーム入力との同期
var msg = new Vue({
  el: '#msg',
  data: {
    message: '初期メッセージ'
  }
})

// 条件分岐 表示非表示
var chg = new Vue({
  el: '#chg',
  data: {
    show: true
  }
})

// トランジション＆アニメーション表示非表示
// cssでtracsition,opacity作成
var anichg = new Vue({
  el: '#anichg',
  data: {
    show: true
  }
})

// ーーーーーーーーーーーーーーーCH2 データの登録と更新ーーーーーーーーーーーーーーー
// オブジェクトや配列要素の表示
new Vue({
  el: '#obj',
  data: {
    message: {
      value:  "Hello Object Message!!"
    },
    list: ['リンゴ','ばなな','いちご'],
    num: 1
  }
})

// クリックでカウンターを増やす
new Vue({
  el: '#click',
  data: {
    count: 0
  },
  methods: {
    increment: function(){
      this.count += 1
    }
  }
})

var state = { count: 0 }
var sta = new Vue({
  el: '#sta',
  data: {
    state: state
  }
})
state.count++

// クラスとスタイルのデータバインディング
new Vue({
  el: '#bind',
  data: {
    isChild: true,
    isActive: true,
    textColor: 'red',
    bgColor: 'lightgray'
  }
})

// クラスとスタイルのデータバインディング2
new Vue({
  el: '#bind2',
  data: {
    classObject: {
      child: true,
      'is-active': false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    }
  }
})

// SVGのデータバインディング
new Vue({
  el: '#svg',
  data: {
    radius: 50
  }
})

// v-else-if およびv-elseによるグループ化
new Vue({
  el: '#elsif',
  data: {
    type: 'B'
  }
})

// 要素を繰り返し描画する
new Vue({
  el: '#repeat',
  data: {
    name: 'キマイラ',
    list: [],
    text: 'Vue'
  },
  created: function(){
    // 外部からデータを取得する
    axios.get('list.json').then(function(response) {
      this.list = response.data
    }.bind(this)).catch(function(e) {
      console.error(e)
    }),
    this.list.forEach(function(item) {
      this.$set(item, 'active', false)
    }, this)
  },
  methods: {
    // 追加ボタンをクリックしたときのハンドラ
    doAdd: function(){
      // リスト内で1番大きいIDを取得
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id
      }, 0)
      // 新しいモンスターをリストに追加
      this.list.push({
        id: max + 1, // 現在の最大のIDに+1してユニークなIDを作成
        name: this.name, // 現在のフォームの入力値
        hp: 500
      })
    },
    doRemove: function(index){
      this.list.splice(index, 1)
    },
    doAttack: function(index){
      this.list[index].hp -= 10
    }
  }
})
// ーーーーーーーーーーーーーーーCH3 イベントとフォーム入力の受け取りーーーーーーーーーーーーーーー
// メソッドイベントハンドラ
new Vue({
  el: '#button',
  methods: {
    handleClick: function () {
      alert('クリックしたよ')
    }
  }
})
// フォーム入力の取得
new Vue({
  el: '#form',
  data: {
    message: 'Helllo Vue.js',
  },
  methods: {
    handleInput: function (event) {
      // 代入前に何か処理を行う…
      this.message = event.target.value
    }
  }
})

// イベント修飾子
new Vue({
  el: '#event',
  methods: {
    handler: function(comment) {
      console.log(comment)
    }
  }
})

// フォーム入力バインディング
// 複数行テキスト,checkbox
new Vue({
  el: '#tex',
  data: {
    message: 'Hello!',
    val: true,
    vals: [],
    vales: '',
    select: '',
    selects: [],
    preview: '',
    num: 50
  },
  methods: {
    handleChange: function(event) {
      var file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    }
  }
})
// マウント要素外のイベントと操作
// スクロールイベントの取得
new Vue({
  el: '#scroll',
  data: {
    scrollY: 0,
    timer: null
  },
  created: function () {
    // ハンドラを登録
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy: function () {
    // ハンドラを解除（コンポーネントやSPAの場合忘れずに！）
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 違和感のない程度に200ms間隔でscrollデータを更新する例
    handleScroll: function () {
      if (this.timer === null) {
        this.timer = setTimeout(function () {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }.bind(this), 200)
      }
    }
  }
})
// スムーススクロールの実装
var scroll = new SmoothScroll()
new Vue({
  el: '#smooth',
  methods: {
    scrollTop: function () {
      scroll.animateScroll(0)
    }
  }
})
// ーーーーーーーーーーーーーーーCH4 データの監視と加工ーーーーーーーーーーーーーーー
// 算出プロパティの使い方
new Vue({
  el: '#math',
  data: {
    width: 800,
    height: 600
  },
  computed: {
    halfWidth: function () {
      return this.width / 2
    },
    halfHeight: function () {
      return this.height / 2
    },
    halfPoint: function () {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      }
    }
  }
})
// ゲッターとセッター
new Vue({
  el: '#math2',
  data: {
    width: 800
  },
  computed: {
    halfWidth: {
      get: function () {
        return this.width / 2
      },
      // halfWidth の2倍の数値を width に代入する
      set: function (val) {
        this.width = val * 2
      }
    }
  }
})
// 算出プロパティのキャッシュ機能
new Vue({
  el: '#math3',
  computed: {
    computedData: function() {
      return Math.random()
    }
  },
  methods: {
    methodsData: function() {
      return Math.random()
    }
  }
})
// リストの絞り込みに利用しよう
new Vue({
  el: '#search',
  data: {
    order: false,
    budget: 300,
    limit: 2,
    list: [
      { id: 1, name: 'りんご', price: 100 },
      { id: 2, name: 'ばなな', price: 200 },
      { id: 3, name: 'いちご', price: 400 },
      { id: 4, name: 'おれんじ', price: 300 },
      { id: 5, name: 'めろん', price: 500 }
    ]
  },
  computed: {
    // budget以下のリストを返す算出プロパティ
    matched: function() {
      return this.list.filter(function(el){
        return el.price <= this.budget
      }, this)
    },
    // sortedを新しく追加
    sorted: function() {
      return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
    },
    // limitedで使用するリストをsortedに変更
    limited: function() {
      return this.sorted.slice(0, this.limit)
    }
  }
})

// ウォッチャでデータを監視して処理を自動化
// フォームを監視してAPIからデータを取得しよう
new Vue({
  el: '#api',
  data: {
    list: [],
    current: '',
    topics: [
      { value: 'vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' }
    ]
  },
  watch: {
    current: function (val) {
      // GitHubのAPIからトピックのリポジトリを検索
      axios.get('https://api.github.com/search/repositories', {
        params: {
          q: 'topic:' + val
        }
      }).then(function (response) {
        this.list = response.data.items
      }.bind(this))
    }
  },
})

// フィルタでテキストの変換処理を行う
// フィルタの使い方
new Vue({
  el: '#fillter',
  data: {
    price: 19800
  },
  filters: {
    localeNum: function(val) {
      return val.toLocaleString()
    },
    round: function(val) {
      return Math.round(val * 100) / 100
    },
    radian: function(val) {
      return val * Math.PI / 180
    }
  }
})

// CH5 コンポーネントで UI 部品を作る
// コンポーネントの登録
var myComponent = {
  template: '<p>MyComponent</p>'
}
new Vue({
  el: '#component',
  components: {
    'my-component': myComponent
  }
})