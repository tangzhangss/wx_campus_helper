import showdown from './helper/showdown.js'
import { html2json } from './helper/html2json.js'

global.richParses = {}

Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
    content: {
      type: String,
      value: '',
      observer(newVal) {
        this.parse(newVal)
      }
    },
    type: {
      type: String,
      value: 'html',
    }
  },

  data: {
    rich: null,
    parse_id: null,
  },

  attached() {
    // 把组件实例放到全局上，让 rich-render 里面可以访问
    global.richParses[this.__wxExparserNodeId__] = this
    this.setData({ parse_id: this.__wxExparserNodeId__ })
  },

  ready() {
    this.parse(this.data.content)
  },

  detached() {
    delete global.richParses[this.__wxExparserNodeId__]
  },

  methods: {
    parse(content) {
      const { type } = this.data
      if (type === 'md' || type === 'markdown') {
        const converter = new showdown.Converter()
        content = converter.makeHtml(content)
      }
      const transData = html2json(content, 'rich')
      this.setData({ rich: transData })
    },

    onImgTap(e) {
      wx.previewImage({
        current: e.target.dataset.src, // 当前显示图片的http链接
        urls: this.data.rich.imageUrls, // 需要预览的图片http链接列表
      })
    },

    onLinkTap(e) {
      const { href } = e.currentTarget.dataset
      this.triggerEvent('linkTo', { href })
    }
  }
})
