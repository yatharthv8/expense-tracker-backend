import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Expense extends BaseModel {
  @column({ isPrimary: true })
  public id: string;
  
  @column()
  public groupId: string;

  @column()
  public amount: number;

  @column()
  public description: string; //Apartment, Buisness, House, Trip, Others.

  @column()
  public details: string | null; //isSimplifiesTransactions feature on or off

  @column.dateTime()
  public date: DateTime | null;

  @column()
  public currencyCode: string;

  @column()
  public fromSplitwise: string;

  @column()
  public receiptImgUrl: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static fromJson(json: { [key: string]: any }): Expense {
      const model = new Expense();
      model.merge(json);
      return model;
  }

  public toJsonForEntity(): { [key: string]: any } {
    return {
        id: this.id,
        amount: this.amount,
        description: this.description,
        details: this.details,
        date: this.date,
        currencyCode: this.currencyCode,
        groupId: this.groupId,
        fromSplitwise: this.fromSplitwise,
        receiptImgUrl: this.receiptImgUrl,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
  }
}
