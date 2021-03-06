import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default class ProfileRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('user', params.user_id);
  }
}
