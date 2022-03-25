import Model, { attr, hasMany } from '@ember-data/model';

export default class TeamModel extends Model {
  @attr name;
  @attr scores;
  @hasMany('user') user;
}
