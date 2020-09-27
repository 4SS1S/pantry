import { IocContract } from '@adonisjs/fold'
import Pantry from 'App/Models/Pantry'

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
export default class PantryProvider {
  // constructor (protected container: IocContract) {
  // }

  public async get (id: number) {
    return await Pantry.findOrFail({ id })
  }

  public async store (data: Pantry) {
    return await Pantry.create(data)
  }

  public async update (data: Pantry) {
    let pantry = await Pantry.findOrFail({ id: data.id })
    pantry = data

    return await pantry
  }

  public async delete (id: number) {
    let pantry = await Pantry.findOrFail({ id })

    return await pantry.delete()
  }
}
