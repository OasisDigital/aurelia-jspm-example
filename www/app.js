import 'bootstrap';

export class App {
  configureRouter(config, router){
    this.router = router;
    config.title = 'Aurelia JSPM Example';
    config.map([
      { route: ['','intro'],    name: 'intro',      moduleId: 'intro',      nav: true, title:'Introduction' },
      { route: 'posts',         name: 'posts',      moduleId: 'posts',      nav: true, title:'Blog Posts' }
    ]);
  }
}
