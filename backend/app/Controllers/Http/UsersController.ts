// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'app/Models/User'
import UserProvider from 'providers/UserProvider'

export default class UsersController {
  private provider = new UserProvider()

  public async get (id?: number) {
    return await this.provider.get(id)
  }

  public async create (data: User) {
    return await this.provider.create(data)
  }

  public async update (data: User) {
    return await this.provider.update(data)
  }

  public async delete (id: number) {
    return await this.provider.delete(id)
  }
}
