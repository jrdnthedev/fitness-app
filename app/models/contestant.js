import Model, { attr } from '@ember-data/model';

export default class ContestantModel extends Model {
  @attr name;
  @attr teamates;
}
