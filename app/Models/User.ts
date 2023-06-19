import { DateTime } from 'luxon'
import Hash from "@ioc:Adonis/Core/Hash";
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public firstName: string;

  @column()
  public lastName: string;

  @column()
  public email: string;

  @column()
  public emailVerificationStatus: boolean

  @column()
  public imageUrl: string;

  @column()
  public defaultCurrency: string;

  @column()
  public password: string;

  @column()
  public groupId: string;

  @column()
  public expenseId: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
    public static async hashPassword(user: User) {
        if (user.$dirty.password && user.password !== null) {
            user.password = await Hash.make(user.password);
        }
    }
  
  public static fromJson(json: { [key: string]: any }): User {
      const model = new User();
      model.merge(json);
      return model;
  }

  public toJsonForEntity(): { [key: string]: any } {
    return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        emailVerificationStatus: this.emailVerificationStatus,
        imageUrl: this.imageUrl,
        defaultCurrency: this.defaultCurrency,
        password: this.password,
        groupId: this.groupId,
        expenseId: this.expenseId,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
  }
}
