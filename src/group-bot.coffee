for key, value of require('./group-bot/common')
  eval("var #{key} = value;")

module.exports = class GroupBot
  constructor: ->