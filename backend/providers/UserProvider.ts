import { IocContract } from '@adonisjs/fold'
import User from 'App/Models/User'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready, when this file is loaded by the framework.
| Hence, the level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = (await import('@ioc:Adonis/Lucid/Database')).default
|   const Event = (await import('@ioc:Adonis/Core/Event')).default
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class UserProvider {
  // constructor (protected container: IocContract) {
  // }

  /**
   *
   * @param {number} id
   *
   * @return {object} Users
   */
  public async get (id?: number) {
    return await id ? User.findOrFail({ id }) : User.all()
  }

  public async create (data: User) {
    return await User.create(data)
  }

  public async update (data: User) {
    return await User.updateOrCreate({ id: data.id }, data)
  }

  public async delete (id: number) {
    return await User.findOrFail({ id })
      .then(res => {
        res?.delete()
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
