import EmberRouter from '@ember/routing/router';
import config from 'fitness-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('rules');
  this.route('leaderboard');
  this.route('profile', { path: '/profile/:user_id' });
  this.route('totals');
  this.route('point-entry');
});
