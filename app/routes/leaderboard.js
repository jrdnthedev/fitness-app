import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class LeaderboardRoute extends Route {
  @service store;
  async model() {
    return hash({
      team: this.store.findAll('team'),
      contestant: this.store.findAll('contestant'),
    });
  }
}
