import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr firstname;
  @attr lastname;
  @attr teamname;
  @attr city;
  @attr image;
  @attr bio;
  @attr scores;
}
