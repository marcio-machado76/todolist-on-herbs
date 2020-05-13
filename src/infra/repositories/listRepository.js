const DB = require('./inMemDB')
const { Ok, Err, usecase, step, ifElse } = require('buchu')
const { TodoList } = require('../../domain/entities/todoList')

module.exports = class ListRepository {
  constructor() {
    this.table = 'list'
  }

  async save(list) {
    const ret = await DB.set(this.table, list.id, list)

    if(!ret)
    return Err('Not Found')

    return Ok(TodoList.fromJSON(ret))
  }

  async getByIDs(ids) {
    const ret = await DB.getMany(this.table, ids)

    if(!ret)
      return Err('Not Found')

    const listArray = []
    for (var i = 0, len = ret.length; i < len; i++) {
      if (ret[i] === undefined) continue
      listArray.push(TodoList.fromJSON(ret[i]))
    }
    return Ok(listArray)
  }
}
