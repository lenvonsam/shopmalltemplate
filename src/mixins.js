function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatDate (date) {
  let d = new Date(date)
  let year = d.getFullYear()
  let month = d.getMonth() + 1
  let day = d.getDate()
  return [year, month, day].map(formatNumber).join('-')
}

export default {
  methods: {
    jump (to) {
      if (this.$router) {
        console.log('xxx')
        this.$router.push(to)
      }
    },
    back () {
      if (this.$router) {
        this.$router.go(-1)
      }
    },
    date2Str: formatDate
  }
}
