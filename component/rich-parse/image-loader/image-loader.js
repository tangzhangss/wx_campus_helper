Component({
  properties: {
    src: {
      type: String,
      value: '',
      observer() {
        this.setData({ displayImg: false })
      }
    }
  },

  data: {
    displayImg: false,
  },

  methods: {
    onImgLoad() {
      this.setData({ displayImg: true })
    }
  }
})
