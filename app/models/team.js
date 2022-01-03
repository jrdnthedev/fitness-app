import Model, { attr } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr name;
  @attr members;
  @attr scores;
}
