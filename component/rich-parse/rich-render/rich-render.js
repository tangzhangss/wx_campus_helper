Component({
  options: {
    addGlobalClass: true,
  },

  properties: {
    item: {
      type: Object,
      value: {},
    },
    images: {
      type: Array,
      value: [],
    },
    parse_id: {
      type: String,
      value: '',
    }
  },

  data: {
    imageWidths: {}
  },

  methods: {
    onImgTap(e) {
      global.richParses[this.data.parse_id].onImgTap(e)
    },

    onLinkTap(e) {
      global.richParses[this.data.parse_id].onLinkTap(e)
    },

    onImgLoad(e) {
      this.data.imageWidths[e.target.dataset.src] = e.detail.width + 'px'
      this.setData({ imageWidths: this.data.imageWidths })
    }
  }
})
