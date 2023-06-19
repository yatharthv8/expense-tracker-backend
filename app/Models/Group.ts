import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Group extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public groupType: string; //Apartment, Buisness, House, Trip, Others.

  @column()
  public isSimplified: boolean; //isSimplifiesTransactions feature on or off

  @column()
  public userId: string //members[]

  @column()
  public imageUrl: string;

  @column()
  public defaultCurrency: string;

  @column()
  public totalGroupSpending: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static fromJson(json: { [key: string]: any }): Group {
      const model = new Group();
      model.merge(json);
      return model;
  }

  public toJsonForEntity(): { [key: string]: any } {
    return {
        id: this.id,
        name: this.name,
        groupType: this.groupType,
        isSimplified: this.isSimplified,
        userId: this.userId,
        imageUrl: this.imageUrl,
        defaultCurrency: this.defaultCurrency,
        totalGroupSpending: this.totalGroupSpending,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
  }
}
