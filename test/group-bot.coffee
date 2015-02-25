GroupBot  = require("../lib/group-bot")
group_bot = null

describe 'GroupBot', ->
  describe '#constructor', ->
    before ->
      group_bot = new GroupBot

    it 'should return an instance of GroupBot', ->
      group_bot.should.be.an.instanceof(GroupBot)