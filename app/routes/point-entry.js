import Route from '@ember/routing/route';

export default class PointEntryRoute extends Route {
  model() {
    return [
      { name: 'Monday' },
      { name: 'Tuesday' },
      { name: 'Wedensday' },
      { name: 'Thursday' },
      { name: 'Friday' },
      { name: 'Saturday' },
      { name: 'Sunday' },
    ];
  }
}
