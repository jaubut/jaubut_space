const contentful = require('contentful')

const config = {
  space: "ppm5d7dyvmbe",
  accessToken: "19ba0e2acc0db06bad68a59b6e71ddd93a2a79dc8d752d6c0070ccc46c9a01fe"
}

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
