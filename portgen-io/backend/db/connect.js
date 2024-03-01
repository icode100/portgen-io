const mongoose = require('mongoose')

const connect_portgen = (url) => {
  return mongoose.connect(url)
}
module.exports = connect_portgen
