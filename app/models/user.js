import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserModel extends Model {
  @attr firstname;
  @attr lastname;
  @attr teamname;
  @attr city;
  @attr image;
  @attr bio;
  @attr scores;
  @belongsTo('team') team;
}
