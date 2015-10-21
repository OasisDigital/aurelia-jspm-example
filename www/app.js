import 'bootstrap';

export class App {	
  configureRouter(config, router){
    this.rr = router;
    config.title = 'My JSPM Example';
    config.map([
      { route: ['','intro'], name: 'intro',  moduleId: 'intro',      nav: true, title:'Introduction' },
      { route: 'posts',      name: 'posts',  moduleId: 'posts',      nav: true, title:'Blog Posts' }
    ]);
  }
}
