import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Trasaction extends BaseModel {
  @column({ isPrimary: true })
  public id: string;
  
  @column()
  public groupId: string;

  @column()
  public expenseId: string;

  @column()
  public isPayer: boolean;

  @column()
  public amountPaid: number;

  @column()
  public amountReceives: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static fromJson(json: { [key: string]: any }): Trasaction {
    const model = new Trasaction();
    model.merge(json);
    return model;
  }

  public toJsonForEntity(): { [key: string]: any } {
    return {
        id: this.id,
        groupId: this.groupId,
        expenseId: this.expenseId,
        isPayer: this.isPayer,
        amountPaid: this.amountPaid,
        amountReceives: this.amountReceives,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
  }
}
