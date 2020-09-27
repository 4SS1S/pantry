import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Pantry extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => User, {
    localKey: 'id',
    foreignKey: 'userID',
  })
  public fk_user: HasOne<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
