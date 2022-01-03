import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class LeaderboardRoute extends Route {
  @service store;
  async model() {
    let [team, contestant] = await Promise.all([
      this.store.findAll('team'),
      this.store.findAll('contestant'),
    ]);

    return { team, contestant };
  }
}
